export const HyperdriveTarget3 = 
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
      "name": "InvalidShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTimestamp",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumTransactionAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativeInterest",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OutputLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToInt128",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToUint128",
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
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "closeLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "closeShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"title\":\"HyperdriveTarget3\",\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"constructor\":{\"notice\":\"Instantiates target3.\"}},\"notice\":\"Hyperdrive's target 3 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/HyperdriveTarget3.sol\":\"HyperdriveTarget3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x279f635b4f2f54dac2ee0e586fe692dcb793be2d5c7c56c254736ab096ee1a0a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91c50d93c2557a6ed2522d59b9c038f1e13ce4657f73b814d1b4118b98d63a06\",\"dweb:/ipfs/QmR9QCi3i6GA2Jj9yrmBK91aU57mSaEJo1Vgy43JTU1MtG\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x21d3173693bcb6ba589a0cda73f57c3c06af39af22308e3b3142f9e639f526e4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://54aacd825c1fbc109428040e43dd45f531a769c016e8362311bf18e209a34a0e\",\"dweb:/ipfs/QmV1CwV1MUREgLn83CEykLybihbM1f1ogh8p2Y6owZv91e\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2\",\"dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xbdd9d63dcc57a2f23d2fd66a3f0440a220fb31664a1d99443a9e80b053393261\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6a16611ca56bf2c2360d39bfc9611d547b9ac76c80c9560e0a33a89958ee6eca\",\"dweb:/ipfs/QmQJUCU7HgydjvdKtJVte3wHitgwaK3BG6cN3FBm9FM5sy\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x863819651e0c159fc8aa27a357458c9ef3cd641287ff80382f566b6f839f795d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b4675409abd6f0361b568e0912a8c430e601dbbae68961ca5d5ac5d5dcc3b8a\",\"dweb:/ipfs/QmRgL5Nvsb425tUxqMkC8tqHwyDzW5qmkf7UB2pkwf87uU\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xbcf204d47761b8da37b0dd1ac6a7a3226d98ad95972acdf9300476a3010b95e2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://756faa29691a56068a330d2de06febe4b7c286ee8ddaee40b1670e723350fbb0\",\"dweb:/ipfs/QmTixXWCvS5uLH6dd3U2PWKya9YZuEm5duNRGdQBDzwo6V\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x61b9f8eb5795fda17a5c35264f53879a7ef022e02b865b015bdb9f5811db6ba5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9498f4bfd969d78634da2b0a89b10f88ac467f52d565d9b62561dcc569ad00cd\",\"dweb:/ipfs/QmZdGwc5ezJf2qv8yheoTVF3UTfWJnh6FtAAq7wufhPZ5R\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xd4ea004cc74fba458e72066541257426e95f1b00ba0b25d53c7c0fce1726d991\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://35c8c8b5bfe4f71c1a5175c1d6549aff9352feec558f3816c9e02d1cab1e1a88\",\"dweb:/ipfs/QmY7qydf5ofXdVJWPeb4bUTtHCn7oWymcTY2RCpZSuSWKM\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd\",\"dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
          "name": "InvalidShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTimestamp"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumTransactionAmount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativeInterest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "OutputLimit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToInt128"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToUint128"
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
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeLong",
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
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeShort",
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
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of longs to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum amount of base the trader will accept.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of underlying the user receives."
            }
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of shorts to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum output of this trade.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of base tokens produced by closing this short."
            }
          },
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
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a long position with a specified maturity time."
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a short position with a specified maturity time."
          },
          "constructor": {
            "notice": "Instantiates target3."
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
        "contracts/src/external/HyperdriveTarget3.sol": "HyperdriveTarget3"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/HyperdriveTarget3.sol": {
        "keccak256": "0x279f635b4f2f54dac2ee0e586fe692dcb793be2d5c7c56c254736ab096ee1a0a",
        "urls": [
          "bzz-raw://91c50d93c2557a6ed2522d59b9c038f1e13ce4657f73b814d1b4118b98d63a06",
          "dweb:/ipfs/QmR9QCi3i6GA2Jj9yrmBK91aU57mSaEJo1Vgy43JTU1MtG"
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
      "contracts/src/internal/HyperdriveAdmin.sol": {
        "keccak256": "0x21d3173693bcb6ba589a0cda73f57c3c06af39af22308e3b3142f9e639f526e4",
        "urls": [
          "bzz-raw://54aacd825c1fbc109428040e43dd45f531a769c016e8362311bf18e209a34a0e",
          "dweb:/ipfs/QmV1CwV1MUREgLn83CEykLybihbM1f1ogh8p2Y6owZv91e"
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
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0xbdd9d63dcc57a2f23d2fd66a3f0440a220fb31664a1d99443a9e80b053393261",
        "urls": [
          "bzz-raw://6a16611ca56bf2c2360d39bfc9611d547b9ac76c80c9560e0a33a89958ee6eca",
          "dweb:/ipfs/QmQJUCU7HgydjvdKtJVte3wHitgwaK3BG6cN3FBm9FM5sy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x863819651e0c159fc8aa27a357458c9ef3cd641287ff80382f566b6f839f795d",
        "urls": [
          "bzz-raw://5b4675409abd6f0361b568e0912a8c430e601dbbae68961ca5d5ac5d5dcc3b8a",
          "dweb:/ipfs/QmRgL5Nvsb425tUxqMkC8tqHwyDzW5qmkf7UB2pkwf87uU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0xbcf204d47761b8da37b0dd1ac6a7a3226d98ad95972acdf9300476a3010b95e2",
        "urls": [
          "bzz-raw://756faa29691a56068a330d2de06febe4b7c286ee8ddaee40b1670e723350fbb0",
          "dweb:/ipfs/QmTixXWCvS5uLH6dd3U2PWKya9YZuEm5duNRGdQBDzwo6V"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0x61b9f8eb5795fda17a5c35264f53879a7ef022e02b865b015bdb9f5811db6ba5",
        "urls": [
          "bzz-raw://9498f4bfd969d78634da2b0a89b10f88ac467f52d565d9b62561dcc569ad00cd",
          "dweb:/ipfs/QmZdGwc5ezJf2qv8yheoTVF3UTfWJnh6FtAAq7wufhPZ5R"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0xd4ea004cc74fba458e72066541257426e95f1b00ba0b25d53c7c0fce1726d991",
        "urls": [
          "bzz-raw://35c8c8b5bfe4f71c1a5175c1d6549aff9352feec558f3816c9e02d1cab1e1a88",
          "dweb:/ipfs/QmY7qydf5ofXdVJWPeb4bUTtHCn7oWymcTY2RCpZSuSWKM"
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
    "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
    "id": 1614,
    "exportedSymbols": {
      "HyperdriveAdmin": [
        5464
      ],
      "HyperdriveCheckpoint": [
        6845
      ],
      "HyperdriveLP": [
        7648
      ],
      "HyperdriveLong": [
        8477
      ],
      "HyperdriveMultiToken": [
        8937
      ],
      "HyperdriveShort": [
        9792
      ],
      "HyperdriveStorage": [
        10066
      ],
      "HyperdriveTarget3": [
        1613
      ],
      "IHyperdrive": [
        4675
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2668:4",
    "nodes": [
      {
        "id": 1526,
        "nodeType": "PragmaDirective",
        "src": "39:23:4",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 1528,
        "nodeType": "ImportDirective",
        "src": "64:60:4",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1527,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "73:11:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1530,
        "nodeType": "ImportDirective",
        "src": "125:66:4",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
        "file": "../internal/HyperdriveAdmin.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 5465,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1529,
              "name": "HyperdriveAdmin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5464,
              "src": "134:15:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1532,
        "nodeType": "ImportDirective",
        "src": "192:76:4",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
        "file": "../internal/HyperdriveCheckpoint.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 6846,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1531,
              "name": "HyperdriveCheckpoint",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6845,
              "src": "201:20:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1534,
        "nodeType": "ImportDirective",
        "src": "269:64:4",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
        "file": "../internal/HyperdriveLong.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 8478,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1533,
              "name": "HyperdriveLong",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8477,
              "src": "278:14:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1536,
        "nodeType": "ImportDirective",
        "src": "334:60:4",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
        "file": "../internal/HyperdriveLP.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 7649,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1535,
              "name": "HyperdriveLP",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7648,
              "src": "343:12:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1538,
        "nodeType": "ImportDirective",
        "src": "395:76:4",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
        "file": "../internal/HyperdriveMultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 8938,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1537,
              "name": "HyperdriveMultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8937,
              "src": "404:20:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1540,
        "nodeType": "ImportDirective",
        "src": "472:66:4",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
        "file": "../internal/HyperdriveShort.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 9793,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1539,
              "name": "HyperdriveShort",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9792,
              "src": "481:15:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1542,
        "nodeType": "ImportDirective",
        "src": "539:70:4",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
        "file": "../internal/HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1614,
        "sourceUnit": 10067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1541,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10066,
              "src": "548:17:4",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1613,
        "nodeType": "ContractDefinition",
        "src": "931:1775:4",
        "nodes": [
          {
            "id": 1566,
            "nodeType": "FunctionDefinition",
            "src": "1210:94:4",
            "nodes": [],
            "body": {
              "id": 1565,
              "nodeType": "Block",
              "src": "1302:2:4",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 1556,
              "nodeType": "StructuredDocumentation",
              "src": "1107:98:4",
              "text": "@notice Instantiates target3.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 1562,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1559,
                    "src": "1293:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 1563,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1561,
                  "name": "HyperdriveStorage",
                  "nameLocations": [
                    "1275:17:4"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 10066,
                  "src": "1275:17:4"
                },
                "nodeType": "ModifierInvocation",
                "src": "1275:26:4"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 1560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1559,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1261:7:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1566,
                  "src": "1231:37:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 1558,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1557,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1231:11:4",
                        "1243:10:4"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "1231:22:4"
                    },
                    "referencedDeclaration": 4459,
                    "src": "1231:22:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1221:53:4"
            },
            "returnParameters": {
              "id": 1564,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1302:0:4"
            },
            "scope": 1613,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1589,
            "nodeType": "FunctionDefinition",
            "src": "1732:271:4",
            "nodes": [],
            "body": {
              "id": 1588,
              "nodeType": "Block",
              "src": "1919:84:4",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1582,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1569,
                        "src": "1947:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1583,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1571,
                        "src": "1962:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1584,
                        "name": "_minOutput",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1573,
                        "src": "1975:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1585,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1576,
                        "src": "1987:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1581,
                      "name": "_closeLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8044,
                      "src": "1936:10:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$4512_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
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
                    "src": "1936:60:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1580,
                  "id": 1587,
                  "nodeType": "Return",
                  "src": "1929:67:4"
                }
              ]
            },
            "documentation": {
              "id": 1567,
              "nodeType": "StructuredDocumentation",
              "src": "1329:398:4",
              "text": "@notice Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum amount of base the trader will accept.\n @param _options The options that configure how the trade is settled.\n @return The amount of underlying the user receives."
            },
            "functionSelector": "ded06231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "closeLong",
            "nameLocation": "1741:9:4",
            "parameters": {
              "id": 1577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1569,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1768:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "1760:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1568,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1760:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1571,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "1799:11:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "1791:19:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1570,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1791:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1573,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "1828:10:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "1820:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1572,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1820:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1576,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "1877:8:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "1848:37:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1575,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1574,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1848:11:4",
                        "1860:7:4"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "1848:19:4"
                    },
                    "referencedDeclaration": 4512,
                    "src": "1848:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1750:141:4"
            },
            "returnParameters": {
              "id": 1580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1579,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1589,
                  "src": "1910:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1910:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1909:9:4"
            },
            "scope": 1613,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1612,
            "nodeType": "FunctionDefinition",
            "src": "2431:273:4",
            "nodes": [],
            "body": {
              "id": 1611,
              "nodeType": "Block",
              "src": "2619:85:4",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1605,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1592,
                        "src": "2648:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1606,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1594,
                        "src": "2663:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1607,
                        "name": "_minOutput",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1596,
                        "src": "2676:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1608,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1599,
                        "src": "2688:8:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1604,
                      "name": "_closeShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9323,
                      "src": "2636:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$4512_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 1609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2636:61:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1603,
                  "id": 1610,
                  "nodeType": "Return",
                  "src": "2629:68:4"
                }
              ]
            },
            "documentation": {
              "id": 1590,
              "nodeType": "StructuredDocumentation",
              "src": "2029:397:4",
              "text": "@notice Closes a short position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of shorts to close.\n @param _minOutput The minimum output of this trade.\n @param _options The options that configure how the trade is settled.\n @return The amount of base tokens produced by closing this short."
            },
            "functionSelector": "29b23fc1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "closeShort",
            "nameLocation": "2440:10:4",
            "parameters": {
              "id": 1600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1592,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "2468:13:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1612,
                  "src": "2460:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1591,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2460:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1594,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "2499:11:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1612,
                  "src": "2491:19:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2491:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1596,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "2528:10:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1612,
                  "src": "2520:18:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2520:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1599,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "2577:8:4",
                  "nodeType": "VariableDeclaration",
                  "scope": 1612,
                  "src": "2548:37:4",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1598,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1597,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2548:11:4",
                        "2560:7:4"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "2548:19:4"
                    },
                    "referencedDeclaration": 4512,
                    "src": "2548:19:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2450:141:4"
            },
            "returnParameters": {
              "id": 1603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1602,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1612,
                  "src": "2610:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1601,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2610:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2609:9:4"
            },
            "scope": 1613,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 1544,
              "name": "HyperdriveAdmin",
              "nameLocations": [
                "974:15:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5464,
              "src": "974:15:4"
            },
            "id": 1545,
            "nodeType": "InheritanceSpecifier",
            "src": "974:15:4"
          },
          {
            "baseName": {
              "id": 1546,
              "name": "HyperdriveMultiToken",
              "nameLocations": [
                "995:20:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8937,
              "src": "995:20:4"
            },
            "id": 1547,
            "nodeType": "InheritanceSpecifier",
            "src": "995:20:4"
          },
          {
            "baseName": {
              "id": 1548,
              "name": "HyperdriveLP",
              "nameLocations": [
                "1021:12:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7648,
              "src": "1021:12:4"
            },
            "id": 1549,
            "nodeType": "InheritanceSpecifier",
            "src": "1021:12:4"
          },
          {
            "baseName": {
              "id": 1550,
              "name": "HyperdriveLong",
              "nameLocations": [
                "1039:14:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8477,
              "src": "1039:14:4"
            },
            "id": 1551,
            "nodeType": "InheritanceSpecifier",
            "src": "1039:14:4"
          },
          {
            "baseName": {
              "id": 1552,
              "name": "HyperdriveShort",
              "nameLocations": [
                "1059:15:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9792,
              "src": "1059:15:4"
            },
            "id": 1553,
            "nodeType": "InheritanceSpecifier",
            "src": "1059:15:4"
          },
          {
            "baseName": {
              "id": 1554,
              "name": "HyperdriveCheckpoint",
              "nameLocations": [
                "1080:20:4"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6845,
              "src": "1080:20:4"
            },
            "id": 1555,
            "nodeType": "InheritanceSpecifier",
            "src": "1080:20:4"
          }
        ],
        "canonicalName": "HyperdriveTarget3",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 1543,
          "nodeType": "StructuredDocumentation",
          "src": "611:320:4",
          "text": "@author DELV\n @title HyperdriveTarget3\n @notice Hyperdrive's target 3 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          1613,
          6845,
          9792,
          8477,
          7648,
          8937,
          5464,
          6406,
          10066,
          63914
        ],
        "name": "HyperdriveTarget3",
        "nameLocation": "949:17:4",
        "scope": 1614,
        "usedErrors": [
          4527,
          4533,
          4535,
          4537,
          4539,
          4545,
          4547,
          4553,
          4571,
          4646,
          4649,
          4651,
          4658,
          4661,
          4663
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 4
} as const;
