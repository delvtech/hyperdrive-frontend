export const HyperdriveDataProvider = 
{
  "abi": [
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidInput",
      "type": "error"
    },
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
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "QueryOutOfRange",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "ReturnData",
      "type": "error"
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
          "name": "account",
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
      "inputs": [],
      "name": "factory",
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
          "name": "_checkpointId",
          "type": "uint256"
        }
      ],
      "name": "getCheckpoint",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "sharePrice",
              "type": "uint128"
            },
            {
              "internalType": "int128",
              "name": "longExposure",
              "type": "int128"
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
              "internalType": "int128",
              "name": "shareAdjustment",
              "type": "int128"
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
              "internalType": "uint256",
              "name": "initialSharePrice",
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
                  "name": "governance",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "oracleSize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updateGap",
              "type": "uint256"
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
              "name": "sharePrice",
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
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
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
      "inputs": [],
      "name": "linkerCodeHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
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
          "name": "tokenId",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
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
          "name": "account",
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
          "name": "period",
          "type": "uint256"
        }
      ],
      "name": "query",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
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
    "factory()": "c45a0155",
    "getCheckpoint(uint256)": "20fc4881",
    "getMarketState()": "d8165743",
    "getPoolConfig()": "b0d96580",
    "getPoolInfo()": "60246c88",
    "getUncollectedGovernanceFees()": "c69e16ad",
    "getWithdrawPool()": "fba56008",
    "isApprovedForAll(address,address)": "e985e9c5",
    "linkerCodeHash()": "c905a4b5",
    "load(uint256[])": "becee9c3",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "query(uint256)": "afdac68d",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"QueryOutOfRange\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"ReturnData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointId\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"sharePrice\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"longExposure\",\"type\":\"int128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governance\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"oracleSize\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"updateGap\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"linkerCodeHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"}],\"name\":\"query\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"account\":\"The account.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The balance.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"factory()\":{\"returns\":{\"_0\":\"The linking factory.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointId\":\"The checkpoint ID.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getPoolConfig()\":{\"details\":\"These parameters are immutable, so this should only need to be      called once.\",\"returns\":{\"_0\":\"The PoolConfig struct.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The PoolInfo struct.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"Governance fees denominated in shares yet to be collected\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"account\":\"The account.\",\"operator\":\"The operator.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"linkerCodeHash()\":{\"returns\":{\"_0\":\"The code hash.\"}},\"load(uint256[])\":{\"params\":{\"_slots\":\"The storage slots the caller wants the data from\"},\"returns\":{\"_0\":\"A raw array of loaded data\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The name.\"}},\"nonces(address)\":{\"params\":{\"account\":\"The account.\"},\"returns\":{\"_0\":\"The signature nonce.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"account\":\"The account.\",\"spender\":\"The spender.\",\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The approval status.\"}},\"query(uint256)\":{\"details\":\"Any integrations should assert the returned value is not equal to the QueryOutOfRange() selector\",\"params\":{\"period\":\"The gap in our time sample.\"},\"returns\":{\"_0\":\"The average price in that time\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The symbol.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token id.\"},\"returns\":{\"_0\":\"The total supply.\"}}},\"title\":\"HyperdriveDataProvider\",\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"QueryOutOfRange()\":[{\"notice\":\"############ ### TWAP ### ############\"}],\"ReturnData(bytes)\":[{\"notice\":\"#################### ### DataProvider ### ####################\"}]},\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets an account's balance of a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the base token.\"},\"constructor\":{\"notice\":\"Initializes Hyperdrive's data provider.\"},\"factory()\":{\"notice\":\"Gets the factory which is used to deploy the linking contracts.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets a specified checkpoint.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets info about the fees presently accrued by the pool\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"linkerCodeHash()\":{\"notice\":\"Gets the code hash of the erc20 linker contract.\"},\"load(uint256[])\":{\"notice\":\"Allows plugin data libs to provide getters or other complex         logic instead of the main.\"},\"name(uint256)\":{\"notice\":\"Gets the name of a sub-token.\"},\"nonces(address)\":{\"notice\":\"Gets the permitForAll signature nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the approval status of an operator for an account.\"},\"query(uint256)\":{\"notice\":\"Returns the average price between the last recorded timestamp looking a user determined         time into the past\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of a sub-token.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of a sub-token.\"}},\"notice\":\"The Hyperdrive data provider.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/HyperdriveDataProvider.sol\":\"HyperdriveDataProvider\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/HyperdriveDataProvider.sol\":{\"keccak256\":\"0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6\",\"dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"contracts/src/token/MultiTokenDataProvider.sol\":{\"keccak256\":\"0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0\",\"dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
          "name": "FixedPointMath_InvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidInput"
        },
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
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "QueryOutOfRange"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "type": "error",
          "name": "ReturnData"
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
              "name": "account",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "factory",
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
              "name": "_checkpointId",
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
                  "name": "sharePrice",
                  "type": "uint128"
                },
                {
                  "internalType": "int128",
                  "name": "longExposure",
                  "type": "int128"
                }
              ]
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
                  "internalType": "int128",
                  "name": "shareAdjustment",
                  "type": "int128"
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
                  "internalType": "uint256",
                  "name": "initialSharePrice",
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
                      "name": "governance",
                      "type": "uint256"
                    }
                  ]
                },
                {
                  "internalType": "uint256",
                  "name": "oracleSize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "updateGap",
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
                  "name": "sharePrice",
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
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "linkerCodeHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
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
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
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
              "name": "account",
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
              "name": "account",
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
              "name": "period",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "query",
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
            }
          ],
          "stateMutability": "pure",
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
              "name": "tokenId",
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
        "methods": {
          "balanceOf(uint256,address)": {
            "params": {
              "account": "The account.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The balance."
            }
          },
          "baseToken()": {
            "returns": {
              "_0": "The base token."
            }
          },
          "constructor": {
            "params": {
              "_config": "The configuration of the Hyperdrive pool."
            }
          },
          "factory()": {
            "returns": {
              "_0": "The linking factory."
            }
          },
          "getCheckpoint(uint256)": {
            "params": {
              "_checkpointId": "The checkpoint ID."
            },
            "returns": {
              "_0": "The checkpoint."
            }
          },
          "getPoolConfig()": {
            "details": "These parameters are immutable, so this should only need to be      called once.",
            "returns": {
              "_0": "The PoolConfig struct."
            }
          },
          "getPoolInfo()": {
            "returns": {
              "_0": "The PoolInfo struct."
            }
          },
          "getUncollectedGovernanceFees()": {
            "returns": {
              "_0": "Governance fees denominated in shares yet to be collected"
            }
          },
          "isApprovedForAll(address,address)": {
            "params": {
              "account": "The account.",
              "operator": "The operator."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "linkerCodeHash()": {
            "returns": {
              "_0": "The code hash."
            }
          },
          "load(uint256[])": {
            "params": {
              "_slots": "The storage slots the caller wants the data from"
            },
            "returns": {
              "_0": "A raw array of loaded data"
            }
          },
          "name(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The name."
            }
          },
          "nonces(address)": {
            "params": {
              "account": "The account."
            },
            "returns": {
              "_0": "The signature nonce."
            }
          },
          "perTokenApprovals(uint256,address,address)": {
            "params": {
              "account": "The account.",
              "spender": "The spender.",
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The approval status."
            }
          },
          "query(uint256)": {
            "details": "Any integrations should assert the returned value is not equal to the QueryOutOfRange() selector",
            "params": {
              "period": "The gap in our time sample."
            },
            "returns": {
              "_0": "The average price in that time"
            }
          },
          "symbol(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The symbol."
            }
          },
          "totalSupply(uint256)": {
            "params": {
              "tokenId": "The sub-token id."
            },
            "returns": {
              "_0": "The total supply."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "balanceOf(uint256,address)": {
            "notice": "Gets an account's balance of a sub-token."
          },
          "baseToken()": {
            "notice": "Gets the base token."
          },
          "constructor": {
            "notice": "Initializes Hyperdrive's data provider."
          },
          "factory()": {
            "notice": "Gets the factory which is used to deploy the linking contracts."
          },
          "getCheckpoint(uint256)": {
            "notice": "Gets a specified checkpoint."
          },
          "getPoolConfig()": {
            "notice": "Gets the pool's configuration parameters."
          },
          "getPoolInfo()": {
            "notice": "Gets info about the pool's reserves and other state that is         important to evaluate potential trades."
          },
          "getUncollectedGovernanceFees()": {
            "notice": "Gets info about the fees presently accrued by the pool"
          },
          "isApprovedForAll(address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "linkerCodeHash()": {
            "notice": "Gets the code hash of the erc20 linker contract."
          },
          "load(uint256[])": {
            "notice": "Allows plugin data libs to provide getters or other complex         logic instead of the main."
          },
          "name(uint256)": {
            "notice": "Gets the name of a sub-token."
          },
          "nonces(address)": {
            "notice": "Gets the permitForAll signature nonce for an account."
          },
          "perTokenApprovals(uint256,address,address)": {
            "notice": "Gets the approval status of an operator for an account."
          },
          "query(uint256)": {
            "notice": "Returns the average price between the last recorded timestamp looking a user determined         time into the past"
          },
          "symbol(uint256)": {
            "notice": "Gets the symbol of a sub-token."
          },
          "totalSupply(uint256)": {
            "notice": "Gets the total supply of a sub-token."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
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
        "contracts/src/HyperdriveDataProvider.sol": "HyperdriveDataProvider"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/HyperdriveDataProvider.sol": {
        "keccak256": "0xa3bc354d7e923ff1aad4191999ff6cd98e2ac4c034ac3188c87d5b974194820c",
        "urls": [
          "bzz-raw://fa2503a7ed51e469625aef59b0870b64c6fd0c9e774ed08f39decc5c8e4d74c6",
          "dweb:/ipfs/QmbUFAPgVb8uXmHUdQP9Ck3gZCHxRQBNGuWGJydkM8EGhG"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveStorage.sol": {
        "keccak256": "0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc",
        "urls": [
          "bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a",
          "dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
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
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
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
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed",
        "urls": [
          "bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6",
          "dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL"
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
        "keccak256": "0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f",
        "urls": [
          "bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe",
          "dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenDataProvider.sol": {
        "keccak256": "0xd1317d856f35950481598cedcb42722c7068e2483f6a220be615128baa607c57",
        "urls": [
          "bzz-raw://1c9641add84eb43fc5a4a68921ac492b416223523d269a41b50e1858a8dc86a0",
          "dweb:/ipfs/QmUdADg8AwChKPyGxm9TJuwb7gvgqewoXfNzT4qqdyHWcs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiTokenStorage.sol": {
        "keccak256": "0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8",
        "urls": [
          "bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6",
          "dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
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
    "absolutePath": "contracts/src/HyperdriveDataProvider.sol",
    "id": 1928,
    "exportedSymbols": {
      "AssetId": [
        8311
      ],
      "FixedPointMath": [
        9066
      ],
      "HyperdriveDataProvider": [
        1927
      ],
      "HyperdriveMath": [
        9918
      ],
      "HyperdriveStorage": [
        5167
      ],
      "IHyperdrive": [
        7431
      ],
      "IHyperdriveRead": [
        7515
      ],
      "MultiTokenDataProvider": [
        12483
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:8280:3",
    "nodes": [
      {
        "id": 1467,
        "nodeType": "PragmaDirective",
        "src": "39:23:3",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 1469,
        "nodeType": "ImportDirective",
        "src": "64:60:3",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveStorage.sol",
        "file": "./HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1928,
        "sourceUnit": 5168,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1468,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5167,
              "src": "73:17:3",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1471,
        "nodeType": "ImportDirective",
        "src": "125:59:3",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1928,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1470,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "134:11:3",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1473,
        "nodeType": "ImportDirective",
        "src": "185:67:3",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
        "file": "./interfaces/IHyperdriveRead.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1928,
        "sourceUnit": 7516,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1472,
              "name": "IHyperdriveRead",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7515,
              "src": "194:15:3",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1475,
        "nodeType": "ImportDirective",
        "src": "253:50:3",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "./libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1928,
        "sourceUnit": 8312,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1474,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8311,
              "src": "262:7:3",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1477,
        "nodeType": "ImportDirective",
        "src": "304:64:3",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1928,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1476,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "313:14:3",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1479,
        "nodeType": "ImportDirective",
        "src": "369:64:3",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "./libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1928,
        "sourceUnit": 9919,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1478,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9918,
              "src": "378:14:3",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1481,
        "nodeType": "ImportDirective",
        "src": "434:76:3",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiTokenDataProvider.sol",
        "file": "./token/MultiTokenDataProvider.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1928,
        "sourceUnit": 12484,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1480,
              "name": "MultiTokenDataProvider",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12483,
              "src": "443:22:3",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1927,
        "nodeType": "ContractDefinition",
        "src": "829:7489:3",
        "nodes": [
          {
            "id": 1491,
            "nodeType": "UsingForDirective",
            "src": "950:33:3",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 1489,
              "name": "FixedPointMath",
              "nameLocations": [
                "956:14:3"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "956:14:3"
            },
            "typeName": {
              "id": 1490,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "975:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 1502,
            "nodeType": "FunctionDefinition",
            "src": "1149:94:3",
            "nodes": [],
            "body": {
              "id": 1501,
              "nodeType": "Block",
              "src": "1241:2:3",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 1492,
              "nodeType": "StructuredDocumentation",
              "src": "1028:116:3",
              "text": "@notice Initializes Hyperdrive's data provider.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 1498,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1495,
                    "src": "1232:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 1499,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1497,
                  "name": "HyperdriveStorage",
                  "nameLocations": [
                    "1214:17:3"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 5167,
                  "src": "1214:17:3"
                },
                "nodeType": "ModifierInvocation",
                "src": "1214:26:3"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 1496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1495,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1200:7:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 1502,
                  "src": "1170:37:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 1494,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1493,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1170:11:3",
                        "1182:10:3"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "1170:22:3"
                    },
                    "referencedDeclaration": 7245,
                    "src": "1170:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1160:53:3"
            },
            "returnParameters": {
              "id": 1500,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:3"
            },
            "scope": 1927,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1508,
            "nodeType": "FunctionDefinition",
            "src": "1385:109:3",
            "nodes": [],
            "documentation": {
              "id": 1503,
              "nodeType": "StructuredDocumentation",
              "src": "1275:105:3",
              "text": "@notice Loads the share price from the yield source\n@return sharePrice The current share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "1394:14:3",
            "parameters": {
              "id": 1504,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1408:2:3"
            },
            "returnParameters": {
              "id": 1507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1506,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1482:10:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 1508,
                  "src": "1474:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1474:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1473:20:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 1522,
            "nodeType": "FunctionDefinition",
            "src": "1590:101:3",
            "nodes": [],
            "body": {
              "id": 1521,
              "nodeType": "Block",
              "src": "1643:48:3",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1517,
                            "name": "_baseToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4811,
                            "src": "1672:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$6731",
                              "typeString": "contract IERC20"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IERC20_$6731",
                              "typeString": "contract IERC20"
                            }
                          ],
                          "expression": {
                            "id": 1515,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1661:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1665:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1661:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1518,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1661:22:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1514,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "1653:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1653:31:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1520,
                  "nodeType": "ExpressionStatement",
                  "src": "1653:31:3"
                }
              ]
            },
            "baseFunctions": [
              7468
            ],
            "documentation": {
              "id": 1509,
              "nodeType": "StructuredDocumentation",
              "src": "1521:64:3",
              "text": "@notice Gets the base token.\n @return The base token."
            },
            "functionSelector": "c55dae63",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "baseToken",
            "nameLocation": "1599:9:3",
            "parameters": {
              "id": 1510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1608:2:3"
            },
            "returnParameters": {
              "id": 1513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1512,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1522,
                  "src": "1634:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:7:3",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1633:9:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1541,
            "nodeType": "FunctionDefinition",
            "src": "1822:179:3",
            "nodes": [],
            "body": {
              "id": 1540,
              "nodeType": "Block",
              "src": "1936:65:3",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "baseExpression": {
                              "id": 1534,
                              "name": "_checkpoints",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4852,
                              "src": "1965:12:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7182_storage_$",
                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                              }
                            },
                            "id": 1536,
                            "indexExpression": {
                              "id": 1535,
                              "name": "_checkpointId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1525,
                              "src": "1978:13:3",
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
                            "src": "1965:27:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                              "typeString": "struct IHyperdrive.Checkpoint storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Checkpoint_$7182_storage",
                              "typeString": "struct IHyperdrive.Checkpoint storage ref"
                            }
                          ],
                          "expression": {
                            "id": 1532,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "1954:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1533,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "1958:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "1954:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1537,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1954:39:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1531,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "1946:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1946:48:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1539,
                  "nodeType": "ExpressionStatement",
                  "src": "1946:48:3"
                }
              ]
            },
            "baseFunctions": [
              7476
            ],
            "documentation": {
              "id": 1523,
              "nodeType": "StructuredDocumentation",
              "src": "1697:120:3",
              "text": "@notice Gets a specified checkpoint.\n @param _checkpointId The checkpoint ID.\n @return The checkpoint."
            },
            "functionSelector": "20fc4881",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getCheckpoint",
            "nameLocation": "1831:13:3",
            "parameters": {
              "id": 1526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1525,
                  "mutability": "mutable",
                  "name": "_checkpointId",
                  "nameLocation": "1862:13:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 1541,
                  "src": "1854:21:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1524,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1854:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1844:37:3"
            },
            "returnParameters": {
              "id": 1530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1529,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1541,
                  "src": "1905:29:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Checkpoint_$7182_memory_ptr",
                    "typeString": "struct IHyperdrive.Checkpoint"
                  },
                  "typeName": {
                    "id": 1528,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1527,
                      "name": "IHyperdrive.Checkpoint",
                      "nameLocations": [
                        "1905:11:3",
                        "1917:10:3"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7182,
                      "src": "1905:22:3"
                    },
                    "referencedDeclaration": 7182,
                    "src": "1905:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Checkpoint_$7182_storage_ptr",
                      "typeString": "struct IHyperdrive.Checkpoint"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1904:31:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1576,
            "nodeType": "FunctionDefinition",
            "src": "2206:910:3",
            "nodes": [],
            "body": {
              "id": 1575,
              "nodeType": "Block",
              "src": "2313:803:3",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 1553,
                                "name": "_baseToken",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4811,
                                "src": "2428:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$6731",
                                  "typeString": "contract IERC20"
                                }
                              },
                              {
                                "id": 1554,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4823,
                                "src": "2479:18:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 1555,
                                "name": "_minimumShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4826,
                                "src": "2541:21:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 1556,
                                "name": "_minimumTransactionAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4829,
                                "src": "2610:25:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 1557,
                                "name": "_positionDuration",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4817,
                                "src": "2675:17:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 1558,
                                "name": "_checkpointDuration",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4814,
                                "src": "2734:19:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 1559,
                                "name": "_timeStretch",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4820,
                                "src": "2788:12:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 1560,
                                "name": "_governance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4861,
                                "src": "2834:11:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 1561,
                                "name": "_feeCollector",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4864,
                                "src": "2881:13:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 1564,
                                    "name": "_curveFee",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4840,
                                    "src": "2939:9:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 1565,
                                    "name": "_flatFee",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4843,
                                    "src": "2950:8:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 1566,
                                    "name": "_governanceFee",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4846,
                                    "src": "2960:14:3",
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
                                    }
                                  ],
                                  "expression": {
                                    "id": 1562,
                                    "name": "IHyperdrive",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 7431,
                                    "src": "2922:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                      "typeString": "type(contract IHyperdrive)"
                                    }
                                  },
                                  "id": 1563,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2934:4:3",
                                  "memberName": "Fees",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 7199,
                                  "src": "2922:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_struct$_Fees_$7199_storage_ptr_$",
                                    "typeString": "type(struct IHyperdrive.Fees storage pointer)"
                                  }
                                },
                                "id": 1567,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "structConstructorCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2922:53:3",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                                  "typeString": "struct IHyperdrive.Fees memory"
                                }
                              },
                              {
                                "id": 1568,
                                "name": "_updateGap",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4867,
                                "src": "3008:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 1569,
                                  "name": "_buffer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4877,
                                  "src": "3052:7:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                                    "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                                  }
                                },
                                "id": 1570,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3060:6:3",
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "src": "3052:14:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_IERC20_$6731",
                                  "typeString": "contract IERC20"
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
                                },
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
                                },
                                {
                                  "typeIdentifier": "t_struct$_Fees_$7199_memory_ptr",
                                  "typeString": "struct IHyperdrive.Fees memory"
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
                                "id": 1551,
                                "name": "IHyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7431,
                                "src": "2372:11:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                  "typeString": "type(contract IHyperdrive)"
                                }
                              },
                              "id": 1552,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2384:10:3",
                              "memberName": "PoolConfig",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7245,
                              "src": "2372:22:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_PoolConfig_$7245_storage_ptr_$",
                                "typeString": "type(struct IHyperdrive.PoolConfig storage pointer)"
                              }
                            },
                            "id": 1571,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "nameLocations": [
                              "2417:9:3",
                              "2460:17:3",
                              "2519:20:3",
                              "2584:24:3",
                              "2657:16:3",
                              "2714:18:3",
                              "2775:11:3",
                              "2822:10:3",
                              "2867:12:3",
                              "2916:4:3",
                              "2997:9:3",
                              "3040:10:3"
                            ],
                            "names": [
                              "baseToken",
                              "initialSharePrice",
                              "minimumShareReserves",
                              "minimumTransactionAmount",
                              "positionDuration",
                              "checkpointDuration",
                              "timeStretch",
                              "governance",
                              "feeCollector",
                              "fees",
                              "updateGap",
                              "oracleSize"
                            ],
                            "nodeType": "FunctionCall",
                            "src": "2372:713:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          ],
                          "expression": {
                            "id": 1549,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2344:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2348:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "2344:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2344:755:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1548,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "2323:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1573,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2323:786:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1574,
                  "nodeType": "ExpressionStatement",
                  "src": "2323:786:3"
                }
              ]
            },
            "baseFunctions": [
              7488
            ],
            "documentation": {
              "id": 1542,
              "nodeType": "StructuredDocumentation",
              "src": "2007:194:3",
              "text": "@notice Gets the pool's configuration parameters.\n @dev These parameters are immutable, so this should only need to be\n      called once.\n @return The PoolConfig struct."
            },
            "functionSelector": "b0d96580",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getPoolConfig",
            "nameLocation": "2215:13:3",
            "parameters": {
              "id": 1543,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2228:2:3"
            },
            "returnParameters": {
              "id": 1547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1546,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1576,
                  "src": "2278:29:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7245_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 1545,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1544,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "2278:11:3",
                        "2290:10:3"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7245,
                      "src": "2278:22:3"
                    },
                    "referencedDeclaration": 7245,
                    "src": "2278:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7245_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2277:31:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1668,
            "nodeType": "FunctionDefinition",
            "src": "3291:1460:3",
            "nodes": [],
            "body": {
              "id": 1667,
              "nodeType": "Block",
              "src": "3366:1385:3",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1584
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1584,
                      "mutability": "mutable",
                      "name": "sharePrice",
                      "nameLocation": "3384:10:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1667,
                      "src": "3376:18:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1583,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3376:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1587,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1585,
                      "name": "_pricePerShare",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1508,
                      "src": "3397:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 1586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3397:16:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3376:37:3"
                },
                {
                  "assignments": [
                    1589
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1589,
                      "mutability": "mutable",
                      "name": "lpTotalSupply",
                      "nameLocation": "3431:13:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1667,
                      "src": "3423:21:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1588,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3423:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1602,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1598,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "baseExpression": {
                          "id": 1590,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12500,
                          "src": "3447:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 1593,
                        "indexExpression": {
                          "expression": {
                            "id": 1591,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "3460:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 1592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3468:12:3",
                          "memberName": "_LP_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8003,
                          "src": "3460:20:3",
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
                        "src": "3447:34:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 1594,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12500,
                          "src": "3496:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 1597,
                        "indexExpression": {
                          "expression": {
                            "id": 1595,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8311,
                            "src": "3509:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$8311_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 1596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "3517:26:3",
                          "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8012,
                          "src": "3509:34:3",
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
                        "src": "3496:48:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3447:97:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "id": 1599,
                        "name": "_withdrawPool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4837,
                        "src": "3559:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawPool_$7189_storage",
                          "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                        }
                      },
                      "id": 1600,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3573:15:3",
                      "memberName": "readyToWithdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7185,
                      "src": "3559:29:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "3447:141:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3423:165:3"
                },
                {
                  "assignments": [
                    1604
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1604,
                      "mutability": "mutable",
                      "name": "presentValue",
                      "nameLocation": "3606:12:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1667,
                      "src": "3598:20:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1603,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3598:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1619,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1607,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1605,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1584,
                        "src": "3621:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 1606,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3634:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3621:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "30",
                      "id": 1617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3791:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "id": 1618,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "3621:171:3",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 1615,
                          "name": "sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1584,
                          "src": "3765:10:3",
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
                                  "id": 1611,
                                  "name": "sharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1584,
                                  "src": "3727:10:3",
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
                                "id": 1610,
                                "name": "_getPresentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5166,
                                "src": "3704:22:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$9560_memory_ptr_$",
                                  "typeString": "function (uint256) view returns (struct HyperdriveMath.PresentValueParams memory)"
                                }
                              },
                              "id": 1612,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3704:34:3",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                "typeString": "struct HyperdriveMath.PresentValueParams memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                "typeString": "struct HyperdriveMath.PresentValueParams memory"
                              }
                            ],
                            "expression": {
                              "id": 1608,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9918,
                              "src": "3650:14:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$9918_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 1609,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3682:21:3",
                            "memberName": "calculatePresentValue",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9802,
                            "src": "3650:53:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$9560_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct HyperdriveMath.PresentValueParams memory) pure returns (uint256)"
                            }
                          },
                          "id": 1613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3650:89:3",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1614,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3757:7:3",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "3650:114:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3650:126:3",
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
                  "src": "3598:194:3"
                },
                {
                  "assignments": [
                    1624
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1624,
                      "mutability": "mutable",
                      "name": "poolInfo",
                      "nameLocation": "3830:8:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1667,
                      "src": "3802:36:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PoolInfo_$7285_memory_ptr",
                        "typeString": "struct IHyperdrive.PoolInfo"
                      },
                      "typeName": {
                        "id": 1623,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 1622,
                          "name": "IHyperdrive.PoolInfo",
                          "nameLocations": [
                            "3802:11:3",
                            "3814:8:3"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7285,
                          "src": "3802:20:3"
                        },
                        "referencedDeclaration": 7285,
                        "src": "3802:20:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolInfo_$7285_storage_ptr",
                          "typeString": "struct IHyperdrive.PoolInfo"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1659,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1627,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "3891:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1628,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3904:13:3",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7147,
                        "src": "3891:26:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 1629,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "3948:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1630,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3961:15:3",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7153,
                        "src": "3948:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      {
                        "expression": {
                          "id": 1631,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "4004:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1632,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4017:12:3",
                        "memberName": "bondReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7150,
                        "src": "4004:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "id": 1633,
                        "name": "sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1584,
                        "src": "4055:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 1634,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "4097:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1635,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4110:16:3",
                        "memberName": "longsOutstanding",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7159,
                        "src": "4097:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 1636,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "4165:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1637,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4178:23:3",
                        "memberName": "longAverageMaturityTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7165,
                        "src": "4165:36:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 1638,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "4234:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1639,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4247:17:3",
                        "memberName": "shortsOutstanding",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7162,
                        "src": "4234:30:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 1640,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "4304:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1641,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4317:24:3",
                        "memberName": "shortAverageMaturityTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7168,
                        "src": "4304:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "id": 1642,
                        "name": "lpTotalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1589,
                        "src": "4370:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1645,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 1643,
                            "name": "lpTotalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1589,
                            "src": "4411:13:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 1644,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4428:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4411:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "arguments": [
                            {
                              "id": 1649,
                              "name": "lpTotalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1589,
                              "src": "4489:13:3",
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
                              "id": 1647,
                              "name": "presentValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1604,
                              "src": "4468:12:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1648,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4481:7:3",
                            "memberName": "divDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8382,
                            "src": "4468:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1650,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4468:35:3",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1651,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "4411:92:3",
                        "trueExpression": {
                          "hexValue": "30",
                          "id": 1646,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4448:1:3",
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
                      {
                        "expression": {
                          "id": 1652,
                          "name": "_withdrawPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4837,
                          "src": "4550:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$7189_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                          }
                        },
                        "id": 1653,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4564:15:3",
                        "memberName": "readyToWithdraw",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7185,
                        "src": "4550:29:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 1654,
                          "name": "_withdrawPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4837,
                          "src": "4619:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawPool_$7189_storage",
                            "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                          }
                        },
                        "id": 1655,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4633:8:3",
                        "memberName": "proceeds",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7188,
                        "src": "4619:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 1656,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4833,
                          "src": "4669:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 1657,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4682:12:3",
                        "memberName": "longExposure",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7156,
                        "src": "4669:25:3",
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
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
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
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      ],
                      "expression": {
                        "id": 1625,
                        "name": "IHyperdrive",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7431,
                        "src": "3841:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                          "typeString": "type(contract IHyperdrive)"
                        }
                      },
                      "id": 1626,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3853:8:3",
                      "memberName": "PoolInfo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7285,
                      "src": "3841:20:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_PoolInfo_$7285_storage_ptr_$",
                        "typeString": "type(struct IHyperdrive.PoolInfo storage pointer)"
                      }
                    },
                    "id": 1658,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "nameLocations": [
                      "3876:13:3",
                      "3931:15:3",
                      "3990:12:3",
                      "4043:10:3",
                      "4079:16:3",
                      "4140:23:3",
                      "4215:17:3",
                      "4278:24:3",
                      "4355:13:3",
                      "4397:12:3",
                      "4517:31:3",
                      "4593:24:3",
                      "4655:12:3"
                    ],
                    "names": [
                      "shareReserves",
                      "shareAdjustment",
                      "bondReserves",
                      "sharePrice",
                      "longsOutstanding",
                      "longAverageMaturityTime",
                      "shortsOutstanding",
                      "shortAverageMaturityTime",
                      "lpTotalSupply",
                      "lpSharePrice",
                      "withdrawalSharesReadyToWithdraw",
                      "withdrawalSharesProceeds",
                      "longExposure"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "3841:864:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$7285_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3802:903:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1663,
                            "name": "poolInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1624,
                            "src": "4734:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolInfo_$7285_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolInfo memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_PoolInfo_$7285_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolInfo memory"
                            }
                          ],
                          "expression": {
                            "id": 1661,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4723:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4727:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "4723:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1664,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4723:20:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1660,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "4715:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4715:29:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1666,
                  "nodeType": "ExpressionStatement",
                  "src": "4715:29:3"
                }
              ]
            },
            "baseFunctions": [
              7505
            ],
            "documentation": {
              "id": 1577,
              "nodeType": "StructuredDocumentation",
              "src": "3122:164:3",
              "text": "@notice Gets info about the pool's reserves and other state that is\n         important to evaluate potential trades.\n @return The PoolInfo struct."
            },
            "functionSelector": "60246c88",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getPoolInfo",
            "nameLocation": "3300:11:3",
            "parameters": {
              "id": 1578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3311:2:3"
            },
            "returnParameters": {
              "id": 1582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1581,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1668,
                  "src": "3337:27:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolInfo_$7285_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolInfo"
                  },
                  "typeName": {
                    "id": 1580,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1579,
                      "name": "IHyperdrive.PoolInfo",
                      "nameLocations": [
                        "3337:11:3",
                        "3349:8:3"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7285,
                      "src": "3337:20:3"
                    },
                    "referencedDeclaration": 7285,
                    "src": "3337:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$7285_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3336:29:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1688,
            "nodeType": "FunctionDefinition",
            "src": "4757:367:3",
            "nodes": [],
            "body": {
              "id": 1687,
              "nodeType": "Block",
              "src": "4868:256:3",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 1679,
                                  "name": "_withdrawPool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4837,
                                  "src": "4991:13:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawPool_$7189_storage",
                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                  }
                                },
                                "id": 1680,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5005:15:3",
                                "memberName": "readyToWithdraw",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7185,
                                "src": "4991:29:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              },
                              {
                                "expression": {
                                  "id": 1681,
                                  "name": "_withdrawPool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4837,
                                  "src": "5052:13:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_WithdrawPool_$7189_storage",
                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                  }
                                },
                                "id": 1682,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5066:8:3",
                                "memberName": "proceeds",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7188,
                                "src": "5052:22:3",
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
                                },
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              ],
                              "expression": {
                                "id": 1677,
                                "name": "IHyperdrive",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7431,
                                "src": "4927:11:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                  "typeString": "type(contract IHyperdrive)"
                                }
                              },
                              "id": 1678,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4939:12:3",
                              "memberName": "WithdrawPool",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7189,
                              "src": "4927:24:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_WithdrawPool_$7189_storage_ptr_$",
                                "typeString": "type(struct IHyperdrive.WithdrawPool storage pointer)"
                              }
                            },
                            "id": 1683,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "nameLocations": [
                              "4974:15:3",
                              "5042:8:3"
                            ],
                            "names": [
                              "readyToWithdraw",
                              "proceeds"
                            ],
                            "nodeType": "FunctionCall",
                            "src": "4927:166:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_WithdrawPool_$7189_memory_ptr",
                              "typeString": "struct IHyperdrive.WithdrawPool memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_WithdrawPool_$7189_memory_ptr",
                              "typeString": "struct IHyperdrive.WithdrawPool memory"
                            }
                          ],
                          "expression": {
                            "id": 1675,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4899:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1676,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4903:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "4899:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1684,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4899:208:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1674,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "4878:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4878:239:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1686,
                  "nodeType": "ExpressionStatement",
                  "src": "4878:239:3"
                }
              ]
            },
            "baseFunctions": [
              7482
            ],
            "functionSelector": "fba56008",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getWithdrawPool",
            "nameLocation": "4766:15:3",
            "parameters": {
              "id": 1669,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4781:2:3"
            },
            "returnParameters": {
              "id": 1673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1672,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1688,
                  "src": "4831:31:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_WithdrawPool_$7189_memory_ptr",
                    "typeString": "struct IHyperdrive.WithdrawPool"
                  },
                  "typeName": {
                    "id": 1671,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1670,
                      "name": "IHyperdrive.WithdrawPool",
                      "nameLocations": [
                        "4831:11:3",
                        "4843:12:3"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7189,
                      "src": "4831:24:3"
                    },
                    "referencedDeclaration": 7189,
                    "src": "4831:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_WithdrawPool_$7189_storage_ptr",
                      "typeString": "struct IHyperdrive.WithdrawPool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4830:33:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1702,
            "nodeType": "FunctionDefinition",
            "src": "5275:132:3",
            "nodes": [],
            "body": {
              "id": 1701,
              "nodeType": "Block",
              "src": "5347:60:3",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1697,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4859,
                            "src": "5376:22:3",
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
                            "id": 1695,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "5365:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1696,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5369:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "5365:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1698,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5365:34:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1694,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "5357:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1699,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5357:43:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1700,
                  "nodeType": "ExpressionStatement",
                  "src": "5357:43:3"
                }
              ]
            },
            "baseFunctions": [
              7499
            ],
            "documentation": {
              "id": 1689,
              "nodeType": "StructuredDocumentation",
              "src": "5130:140:3",
              "text": "@notice Gets info about the fees presently accrued by the pool\n @return Governance fees denominated in shares yet to be collected"
            },
            "functionSelector": "c69e16ad",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUncollectedGovernanceFees",
            "nameLocation": "5284:28:3",
            "parameters": {
              "id": 1690,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5312:2:3"
            },
            "returnParameters": {
              "id": 1693,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1692,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1702,
                  "src": "5338:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1691,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5338:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5337:9:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1716,
            "nodeType": "FunctionDefinition",
            "src": "5413:159:3",
            "nodes": [],
            "body": {
              "id": 1715,
              "nodeType": "Block",
              "src": "5522:50:3",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1711,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4833,
                            "src": "5551:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_MarketState_$7175_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          ],
                          "expression": {
                            "id": 1709,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "5540:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1710,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5544:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "5540:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5540:24:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1708,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "5532:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1713,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5532:33:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1714,
                  "nodeType": "ExpressionStatement",
                  "src": "5532:33:3"
                }
              ]
            },
            "baseFunctions": [
              7494
            ],
            "functionSelector": "d8165743",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getMarketState",
            "nameLocation": "5422:14:3",
            "parameters": {
              "id": 1703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5436:2:3"
            },
            "returnParameters": {
              "id": 1707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1706,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1716,
                  "src": "5486:30:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$7175_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 1705,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1704,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "5486:11:3",
                        "5498:11:3"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7175,
                      "src": "5486:23:3"
                    },
                    "referencedDeclaration": 7175,
                    "src": "5486:23:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$7175_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5485:32:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1776,
            "nodeType": "FunctionDefinition",
            "src": "5811:564:3",
            "nodes": [],
            "body": {
              "id": 1775,
              "nodeType": "Block",
              "src": "5907:468:3",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1730
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1730,
                      "mutability": "mutable",
                      "name": "loaded",
                      "nameLocation": "5934:6:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1775,
                      "src": "5917:23:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 1728,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "5917:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1729,
                        "nodeType": "ArrayTypeName",
                        "src": "5917:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1737,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1734,
                          "name": "_slots",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1720,
                          "src": "5957:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                            "typeString": "uint256[] calldata"
                          }
                        },
                        "id": 1735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5964:6:3",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "5957:13:3",
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
                      "id": 1733,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "5943:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes32[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 1731,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "5947:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1732,
                        "nodeType": "ArrayTypeName",
                        "src": "5947:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      }
                    },
                    "id": 1736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5943:28:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                      "typeString": "bytes32[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5917:54:3"
                },
                {
                  "body": {
                    "id": 1766,
                    "nodeType": "Block",
                    "src": "6078:253:3",
                    "statements": [
                      {
                        "assignments": [
                          1747
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 1747,
                            "mutability": "mutable",
                            "name": "slot",
                            "nameLocation": "6100:4:3",
                            "nodeType": "VariableDeclaration",
                            "scope": 1766,
                            "src": "6092:12:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 1746,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6092:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 1751,
                        "initialValue": {
                          "baseExpression": {
                            "id": 1748,
                            "name": "_slots",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1720,
                            "src": "6107:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                              "typeString": "uint256[] calldata"
                            }
                          },
                          "id": 1750,
                          "indexExpression": {
                            "id": 1749,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1739,
                            "src": "6114:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6107:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6092:24:3"
                      },
                      {
                        "assignments": [
                          1753
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 1753,
                            "mutability": "mutable",
                            "name": "data",
                            "nameLocation": "6138:4:3",
                            "nodeType": "VariableDeclaration",
                            "scope": 1766,
                            "src": "6130:12:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 1752,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "6130:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 1754,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6130:12:3"
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "6181:51:3",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6199:19:3",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "6213:4:3"
                                  }
                                ],
                                "functionName": {
                                  "name": "sload",
                                  "nodeType": "YulIdentifier",
                                  "src": "6207:5:3"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6207:11:3"
                              },
                              "variableNames": [
                                {
                                  "name": "data",
                                  "nodeType": "YulIdentifier",
                                  "src": "6199:4:3"
                                }
                              ]
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 1753,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6199:4:3",
                            "valueSize": 1
                          },
                          {
                            "declaration": 1747,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "6213:4:3",
                            "valueSize": 1
                          }
                        ],
                        "flags": [
                          "memory-safe"
                        ],
                        "id": 1755,
                        "nodeType": "InlineAssembly",
                        "src": "6156:76:3"
                      },
                      {
                        "expression": {
                          "id": 1760,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 1756,
                              "name": "loaded",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1730,
                              "src": "6245:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                "typeString": "bytes32[] memory"
                              }
                            },
                            "id": 1758,
                            "indexExpression": {
                              "id": 1757,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1739,
                              "src": "6252:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "6245:9:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 1759,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1753,
                            "src": "6257:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "6245:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 1761,
                        "nodeType": "ExpressionStatement",
                        "src": "6245:16:3"
                      },
                      {
                        "id": 1765,
                        "nodeType": "UncheckedBlock",
                        "src": "6275:46:3",
                        "statements": [
                          {
                            "expression": {
                              "id": 1763,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": true,
                              "src": "6303:3:3",
                              "subExpression": {
                                "id": 1762,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1739,
                                "src": "6305:1:3",
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
                            "id": 1764,
                            "nodeType": "ExpressionStatement",
                            "src": "6303:3:3"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1742,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1739,
                      "src": "6057:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 1743,
                        "name": "_slots",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1720,
                        "src": "6061:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                          "typeString": "uint256[] calldata"
                        }
                      },
                      "id": 1744,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6068:6:3",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "6061:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6057:17:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1767,
                  "initializationExpression": {
                    "assignments": [
                      1739
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1739,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6050:1:3",
                        "nodeType": "VariableDeclaration",
                        "scope": 1767,
                        "src": "6042:9:3",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1738,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6042:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 1741,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 1740,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6054:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6042:13:3"
                  },
                  "nodeType": "ForStatement",
                  "src": "6037:294:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1771,
                            "name": "loaded",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1730,
                            "src": "6360:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          ],
                          "expression": {
                            "id": 1769,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "6349:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1770,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "6353:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "6349:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1772,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6349:18:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1768,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "6341:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6341:27:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1774,
                  "nodeType": "ExpressionStatement",
                  "src": "6341:27:3"
                }
              ]
            },
            "baseFunctions": [
              7514
            ],
            "documentation": {
              "id": 1717,
              "nodeType": "StructuredDocumentation",
              "src": "5578:228:3",
              "text": "@notice Allows plugin data libs to provide getters or other complex\n         logic instead of the main.\n @param _slots The storage slots the caller wants the data from\n @return A raw array of loaded data"
            },
            "functionSelector": "becee9c3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "5820:4:3",
            "parameters": {
              "id": 1721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1720,
                  "mutability": "mutable",
                  "name": "_slots",
                  "nameLocation": "5853:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 1776,
                  "src": "5834:25:3",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 1718,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5834:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1719,
                    "nodeType": "ArrayTypeName",
                    "src": "5834:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5824:41:3"
            },
            "returnParameters": {
              "id": 1725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1724,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1776,
                  "src": "5889:16:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 1722,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5889:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 1723,
                    "nodeType": "ArrayTypeName",
                    "src": "5889:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5888:18:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1926,
            "nodeType": "FunctionDefinition",
            "src": "6727:1589:3",
            "nodes": [],
            "body": {
              "id": 1925,
              "nodeType": "Block",
              "src": "6790:1526:3",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1785
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1785,
                      "mutability": "mutable",
                      "name": "lastTimestamp",
                      "nameLocation": "6841:13:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "6833:21:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1784,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6833:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1791,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1788,
                          "name": "_oracle",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4881,
                          "src": "6865:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_OracleState_$7206_storage",
                            "typeString": "struct IHyperdrive.OracleState storage ref"
                          }
                        },
                        "id": 1789,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6873:13:3",
                        "memberName": "lastTimestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7205,
                        "src": "6865:21:3",
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
                      "id": 1787,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6857:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 1786,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6857:7:3",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 1790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6857:30:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6833:54:3"
                },
                {
                  "assignments": [
                    1793
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1793,
                      "mutability": "mutable",
                      "name": "head",
                      "nameLocation": "6905:4:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "6897:12:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1792,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6897:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1799,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 1796,
                          "name": "_oracle",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4881,
                          "src": "6920:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_OracleState_$7206_storage",
                            "typeString": "struct IHyperdrive.OracleState storage ref"
                          }
                        },
                        "id": 1797,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6928:4:3",
                        "memberName": "head",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7202,
                        "src": "6920:12:3",
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
                      "id": 1795,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6912:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 1794,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6912:7:3",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 1798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6912:21:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6897:36:3"
                },
                {
                  "assignments": [
                    1802
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1802,
                      "mutability": "mutable",
                      "name": "currentData",
                      "nameLocation": "6962:11:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "6944:29:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                        "typeString": "struct HyperdriveStorage.OracleData"
                      },
                      "typeName": {
                        "id": 1801,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 1800,
                          "name": "OracleData",
                          "nameLocations": [
                            "6944:10:3"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 4872,
                          "src": "6944:10:3"
                        },
                        "referencedDeclaration": 4872,
                        "src": "6944:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OracleData_$4872_storage_ptr",
                          "typeString": "struct HyperdriveStorage.OracleData"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1806,
                  "initialValue": {
                    "baseExpression": {
                      "id": 1803,
                      "name": "_buffer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4877,
                      "src": "6976:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                        "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                      }
                    },
                    "id": 1805,
                    "indexExpression": {
                      "id": 1804,
                      "name": "head",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1793,
                      "src": "6984:4:3",
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
                    "src": "6976:13:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OracleData_$4872_storage",
                      "typeString": "struct HyperdriveStorage.OracleData storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6944:45:3"
                },
                {
                  "assignments": [
                    1808
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1808,
                      "mutability": "mutable",
                      "name": "targetTime",
                      "nameLocation": "7007:10:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "6999:18:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1807,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6999:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1815,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 1811,
                          "name": "lastTimestamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1785,
                          "src": "7028:13:3",
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
                        "id": 1810,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7020:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 1809,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "7020:7:3",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1812,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7020:22:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 1813,
                      "name": "period",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1779,
                      "src": "7045:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7020:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6999:52:3"
                },
                {
                  "assignments": [
                    1817
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1817,
                      "mutability": "mutable",
                      "name": "currentIndex",
                      "nameLocation": "7220:12:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "7212:20:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1816,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7212:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1829,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1820,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1818,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1793,
                        "src": "7235:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 1819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7243:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "7235:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1825,
                        "name": "head",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1793,
                        "src": "7268:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 1826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7275:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "7268:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 1828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "7235:41:3",
                    "trueExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 1821,
                          "name": "_buffer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4877,
                          "src": "7247:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                            "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                          }
                        },
                        "id": 1822,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7255:6:3",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "7247:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 1823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7264:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "7247:18:3",
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
                  "src": "7212:64:3"
                },
                {
                  "assignments": [
                    1832
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1832,
                      "mutability": "mutable",
                      "name": "oldData",
                      "nameLocation": "7304:7:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "7286:25:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                        "typeString": "struct HyperdriveStorage.OracleData"
                      },
                      "typeName": {
                        "id": 1831,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 1830,
                          "name": "OracleData",
                          "nameLocations": [
                            "7286:10:3"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 4872,
                          "src": "7286:10:3"
                        },
                        "referencedDeclaration": 4872,
                        "src": "7286:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OracleData_$4872_storage_ptr",
                          "typeString": "struct HyperdriveStorage.OracleData"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1837,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 1834,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7325:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "hexValue": "30",
                        "id": 1835,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7328:1:3",
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
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 1833,
                      "name": "OracleData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4872,
                      "src": "7314:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_OracleData_$4872_storage_ptr_$",
                        "typeString": "type(struct HyperdriveStorage.OracleData storage pointer)"
                      }
                    },
                    "id": 1836,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7314:16:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                      "typeString": "struct HyperdriveStorage.OracleData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7286:44:3"
                },
                {
                  "body": {
                    "id": 1876,
                    "nodeType": "Block",
                    "src": "7369:518:3",
                    "statements": [
                      {
                        "assignments": [
                          1843
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 1843,
                            "mutability": "mutable",
                            "name": "currentDataCache",
                            "nameLocation": "7568:16:3",
                            "nodeType": "VariableDeclaration",
                            "scope": 1876,
                            "src": "7549:35:3",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OracleData_$4872_storage_ptr",
                              "typeString": "struct HyperdriveStorage.OracleData"
                            },
                            "typeName": {
                              "id": 1842,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 1841,
                                "name": "OracleData",
                                "nameLocations": [
                                  "7549:10:3"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 4872,
                                "src": "7549:10:3"
                              },
                              "referencedDeclaration": 4872,
                              "src": "7549:10:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleData_$4872_storage_ptr",
                                "typeString": "struct HyperdriveStorage.OracleData"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 1847,
                        "initialValue": {
                          "baseExpression": {
                            "id": 1844,
                            "name": "_buffer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4877,
                            "src": "7587:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                              "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                            }
                          },
                          "id": 1846,
                          "indexExpression": {
                            "id": 1845,
                            "name": "currentIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1817,
                            "src": "7595:12:3",
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
                          "src": "7587:21:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_OracleData_$4872_storage",
                            "typeString": "struct HyperdriveStorage.OracleData storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7549:59:3"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1854,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 1850,
                                  "name": "currentDataCache",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1843,
                                  "src": "7634:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_OracleData_$4872_storage_ptr",
                                    "typeString": "struct HyperdriveStorage.OracleData storage pointer"
                                  }
                                },
                                "id": 1851,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "7651:9:3",
                                "memberName": "timestamp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 4869,
                                "src": "7634:26:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              ],
                              "id": 1849,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "7626:7:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 1848,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "7626:7:3",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1852,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7626:35:3",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 1853,
                            "name": "targetTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1808,
                            "src": "7665:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7626:49:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 1861,
                        "nodeType": "IfStatement",
                        "src": "7622:137:3",
                        "trueBody": {
                          "id": 1860,
                          "nodeType": "Block",
                          "src": "7677:82:3",
                          "statements": [
                            {
                              "expression": {
                                "id": 1857,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 1855,
                                  "name": "oldData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1832,
                                  "src": "7695:7:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                                    "typeString": "struct HyperdriveStorage.OracleData memory"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "id": 1856,
                                  "name": "currentDataCache",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1843,
                                  "src": "7705:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_OracleData_$4872_storage_ptr",
                                    "typeString": "struct HyperdriveStorage.OracleData storage pointer"
                                  }
                                },
                                "src": "7695:26:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                                  "typeString": "struct HyperdriveStorage.OracleData memory"
                                }
                              },
                              "id": 1858,
                              "nodeType": "ExpressionStatement",
                              "src": "7695:26:3"
                            },
                            {
                              "id": 1859,
                              "nodeType": "Break",
                              "src": "7739:5:3"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 1874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 1862,
                            "name": "currentIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1817,
                            "src": "7772:12:3",
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
                              "id": 1865,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 1863,
                                "name": "currentIndex",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1817,
                                "src": "7787:12:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 1864,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7803:1:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "7787:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1872,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 1870,
                                "name": "currentIndex",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1817,
                                "src": "7860:12:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 1871,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7875:1:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "7860:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1873,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "Conditional",
                            "src": "7787:89:3",
                            "trueExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1869,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 1866,
                                  "name": "_buffer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4877,
                                  "src": "7823:7:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_OracleData_$4872_storage_$dyn_storage",
                                    "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                                  }
                                },
                                "id": 1867,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "7831:6:3",
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "src": "7823:14:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 1868,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7840:1:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "7823:18:3",
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
                          "src": "7772:104:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1875,
                        "nodeType": "ExpressionStatement",
                        "src": "7772:104:3"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1838,
                      "name": "currentIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1817,
                      "src": "7347:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 1839,
                      "name": "head",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1793,
                      "src": "7363:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7347:20:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1877,
                  "nodeType": "WhileStatement",
                  "src": "7340:547:3"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "id": 1881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 1878,
                        "name": "oldData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1832,
                        "src": "7901:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                          "typeString": "struct HyperdriveStorage.OracleData memory"
                        }
                      },
                      "id": 1879,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7909:9:3",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4869,
                      "src": "7901:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 1880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7922:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7901:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1887,
                  "nodeType": "IfStatement",
                  "src": "7897:64:3",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 1882,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "7932:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 1884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7944:15:3",
                        "memberName": "QueryOutOfRange",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7359,
                        "src": "7932:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 1885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7932:29:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 1886,
                    "nodeType": "RevertStatement",
                    "src": "7925:36:3"
                  }
                },
                {
                  "assignments": [
                    1889
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1889,
                      "mutability": "mutable",
                      "name": "deltaSum",
                      "nameLocation": "8097:8:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "8089:16:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1888,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8089:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1901,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1900,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 1892,
                            "name": "currentData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1802,
                            "src": "8116:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                              "typeString": "struct HyperdriveStorage.OracleData memory"
                            }
                          },
                          "id": 1893,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8128:4:3",
                          "memberName": "data",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4871,
                          "src": "8116:16:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint224",
                            "typeString": "uint224"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint224",
                            "typeString": "uint224"
                          }
                        ],
                        "id": 1891,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8108:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 1890,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8108:7:3",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1894,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8108:25:3",
                      "tryCall": false,
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
                          "expression": {
                            "id": 1897,
                            "name": "oldData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1832,
                            "src": "8144:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                              "typeString": "struct HyperdriveStorage.OracleData memory"
                            }
                          },
                          "id": 1898,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8152:4:3",
                          "memberName": "data",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4871,
                          "src": "8144:12:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint224",
                            "typeString": "uint224"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint224",
                            "typeString": "uint224"
                          }
                        ],
                        "id": 1896,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8136:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 1895,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8136:7:3",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8136:21:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8108:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8089:68:3"
                },
                {
                  "assignments": [
                    1903
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1903,
                      "mutability": "mutable",
                      "name": "deltaTime",
                      "nameLocation": "8175:9:3",
                      "nodeType": "VariableDeclaration",
                      "scope": 1925,
                      "src": "8167:17:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1902,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8167:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1915,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 1906,
                            "name": "currentData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1802,
                            "src": "8195:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                              "typeString": "struct HyperdriveStorage.OracleData memory"
                            }
                          },
                          "id": 1907,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8207:9:3",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4869,
                          "src": "8195:21:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        ],
                        "id": 1905,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8187:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 1904,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8187:7:3",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1908,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8187:30:3",
                      "tryCall": false,
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
                          "expression": {
                            "id": 1911,
                            "name": "oldData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1832,
                            "src": "8240:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OracleData_$4872_memory_ptr",
                              "typeString": "struct HyperdriveStorage.OracleData memory"
                            }
                          },
                          "id": 1912,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8248:9:3",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4869,
                          "src": "8240:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        ],
                        "id": 1910,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8232:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 1909,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8232:7:3",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1913,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8232:26:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8187:71:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8167:91:3"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 1921,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 1919,
                              "name": "deltaSum",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1889,
                              "src": "8287:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 1920,
                              "name": "deltaTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1903,
                              "src": "8298:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "8287:20:3",
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
                            "id": 1917,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "8276:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 1918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8280:6:3",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "8276:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 1922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8276:32:3",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 1916,
                      "name": "_revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12482,
                      "src": "8268:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (bytes memory) pure"
                      }
                    },
                    "id": 1923,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8268:41:3",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1924,
                  "nodeType": "ExpressionStatement",
                  "src": "8268:41:3"
                }
              ]
            },
            "documentation": {
              "id": 1777,
              "nodeType": "StructuredDocumentation",
              "src": "6381:341:3",
              "text": "@notice Returns the average price between the last recorded timestamp looking a user determined\n         time into the past\n @dev Any integrations should assert the returned value is not equal to the QueryOutOfRange() selector\n @param period The gap in our time sample.\n @return The average price in that time"
            },
            "functionSelector": "afdac68d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "query",
            "nameLocation": "6736:5:3",
            "parameters": {
              "id": 1780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1779,
                  "mutability": "mutable",
                  "name": "period",
                  "nameLocation": "6750:6:3",
                  "nodeType": "VariableDeclaration",
                  "scope": 1926,
                  "src": "6742:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1778,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6742:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6741:16:3"
            },
            "returnParameters": {
              "id": 1783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1782,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1926,
                  "src": "6781:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6781:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6780:9:3"
            },
            "scope": 1927,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 1483,
              "name": "IHyperdriveRead",
              "nameLocations": [
                "877:15:3"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7515,
              "src": "877:15:3"
            },
            "id": 1484,
            "nodeType": "InheritanceSpecifier",
            "src": "877:15:3"
          },
          {
            "baseName": {
              "id": 1485,
              "name": "HyperdriveStorage",
              "nameLocations": [
                "898:17:3"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5167,
              "src": "898:17:3"
            },
            "id": 1486,
            "nodeType": "InheritanceSpecifier",
            "src": "898:17:3"
          },
          {
            "baseName": {
              "id": 1487,
              "name": "MultiTokenDataProvider",
              "nameLocations": [
                "921:22:3"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 12483,
              "src": "921:22:3"
            },
            "id": 1488,
            "nodeType": "InheritanceSpecifier",
            "src": "921:22:3"
          }
        ],
        "canonicalName": "HyperdriveDataProvider",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 1482,
          "nodeType": "StructuredDocumentation",
          "src": "512:317:3",
          "text": "@author DELV\n @title HyperdriveDataProvider\n @notice The Hyperdrive data provider.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          1927,
          12483,
          5167,
          7515,
          7868,
          12544,
          64180
        ],
        "name": "HyperdriveDataProvider",
        "nameLocation": "847:22:3",
        "scope": 1928,
        "usedErrors": [
          7312,
          7318,
          7320,
          7324,
          7330,
          7359,
          7364,
          7416,
          7418,
          7425
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 3
} as const;
