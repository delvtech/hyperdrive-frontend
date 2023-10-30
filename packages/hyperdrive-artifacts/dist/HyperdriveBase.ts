export const HyperdriveBase = 
{
  "abi": [
    {
      "inputs": [],
      "name": "BatchInputLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpiredDeadline",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidERC20Bridge",
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
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RestrictedZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnexpectedSuccess",
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
          "name": "withdrawalShareAmount",
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
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
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
      "inputs": [],
      "name": "PERMIT_TYPEHASH",
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
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "batchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "checkpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "asUnderlying",
          "type": "bool"
        }
      ],
      "name": "collectGovernanceFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
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
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "permitForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "setApprovalBridge",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        }
      ],
      "name": "setGovernance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "who",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "setPauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "transferFromBridge",
      "outputs": [],
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
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "collectGovernanceFee(bool)": "2787d595",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BatchInputLengthMismatch\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidERC20Bridge\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnexpectedSuccess\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"asUnderlying\",\"type\":\"bool\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"the source account\",\"ids\":\"The array of token ids of the asset to transfer\",\"to\":\"the destination account\",\"values\":\"The amount of each token to transfer\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"collectGovernanceFee(bool)\":{\"params\":{\"asUnderlying\":\"Indicates if the fees should be paid in underlying or yielding token\"},\"returns\":{\"proceeds\":\"The amount of base collected.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\",\"_dataProvider\":\"The address of the data provider.\",\"_linkerCodeHash\":\"The hash of the ERC20 linker contract's        constructor code.\",\"_linkerFactory\":\"The address of the factory which is used to deploy        the ERC20 linker contracts.\"}},\"pause(bool)\":{\"params\":{\"status\":\"True to pause all deposits and false to unpause them\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.\",\"params\":{\"_approved\":\"a boolean of the approval status to set to\",\"deadline\":\"the timestamp which the signature must be submitted by to be valid\",\"owner\":\"the owner of the account which is having the new approval set\",\"r\":\"The r component of the ECDSA signature\",\"s\":\"The s component of the ECDSA signature\",\"spender\":\"the address which will be allowed to spend owner's tokens\",\"v\":\"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]\",\"caller\":\"The eth address which called the linking contract\",\"operator\":\"The address who will be able to use the tokens\",\"tokenID\":\"The asset to approve the use of\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval\",\"operator\":\"The eth address which can access the caller's assets\"}},\"setGovernance(address)\":{\"params\":{\"who\":\"The new governance address\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status\",\"who\":\"The address to change\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move\",\"caller\":\"The msg.sender from the bridge\",\"from\":\"The address who's balance will be reduced\",\"to\":\"The address who's balance will be increased\",\"tokenID\":\"The token identifier\"}}},\"title\":\"HyperdriveBase\",\"version\":1},\"userdoc\":{\"errors\":{\"BatchInputLengthMismatch()\":[{\"notice\":\"###################### ### ERC20Forwarder ### ######################\"}],\"Unauthorized()\":[{\"notice\":\"############### ### Factory ### ###############\"}]},\"events\":{\"PauserUpdated(address)\":{\"notice\":\"Pause ///\"}},\"kind\":\"user\",\"methods\":{\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"collectGovernanceFee(bool)\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"constructor\":{\"notice\":\"Initializes a Hyperdrive pool.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to set asset approvals\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to change governance\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to set the ability of an address to pause deposits\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge\"}},\"notice\":\"The base contract of the Hyperdrive inheritance hierarchy.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/HyperdriveBase.sol\":\"HyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/DataProvider.sol\":{\"keccak256\":\"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212\",\"dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7\"]},\"contracts/src/HyperdriveBase.sol\":{\"keccak256\":\"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e\",\"dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn\"]},\"contracts/src/HyperdriveStorage.sol\":{\"keccak256\":\"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a\",\"dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806\",\"dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75\",\"dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef\",\"dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr\"]},\"contracts/src/token/MultiToken.sol\":{\"keccak256\":\"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98\",\"dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy\"]},\"contracts/src/token/MultiTokenStorage.sol\":{\"keccak256\":\"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6\",\"dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
          "name": "BatchInputLengthMismatch"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ExpiredDeadline"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidERC20Bridge"
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
          "name": "InvalidSignature"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RestrictedZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnexpectedSuccess"
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
              "name": "withdrawalShareAmount",
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
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "fallback"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "PERMIT_TYPEHASH",
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
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "batchTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_checkpointTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "checkpoint"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "collectGovernanceFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pause"
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
            },
            {
              "internalType": "bool",
              "name": "_approved",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permitForAll"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApproval"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalBridge"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "who",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setGovernance"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "who",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPauser"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "caller",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFromBridge"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "params": {
              "from": "the source account",
              "ids": "The array of token ids of the asset to transfer",
              "to": "the destination account",
              "values": "The amount of each token to transfer"
            }
          },
          "checkpoint(uint256)": {
            "params": {
              "_checkpointTime": "The time of the checkpoint to create."
            }
          },
          "collectGovernanceFee(bool)": {
            "params": {
              "asUnderlying": "Indicates if the fees should be paid in underlying or yielding token"
            },
            "returns": {
              "proceeds": "The amount of base collected."
            }
          },
          "constructor": {
            "params": {
              "_config": "The configuration of the Hyperdrive pool.",
              "_dataProvider": "The address of the data provider.",
              "_linkerCodeHash": "The hash of the ERC20 linker contract's        constructor code.",
              "_linkerFactory": "The address of the factory which is used to deploy        the ERC20 linker contracts."
            }
          },
          "pause(bool)": {
            "params": {
              "status": "True to pause all deposits and false to unpause them"
            }
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "details": "The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.",
            "params": {
              "_approved": "a boolean of the approval status to set to",
              "deadline": "the timestamp which the signature must be submitted by to be valid",
              "owner": "the owner of the account which is having the new approval set",
              "r": "The r component of the ECDSA signature",
              "s": "The s component of the ECDSA signature",
              "spender": "the address which will be allowed to spend owner's tokens",
              "v": "Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28"
            }
          },
          "setApproval(uint256,address,uint256)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              "operator": "The address who will be able to use the tokens",
              "tokenID": "The asset to approve the use of"
            }
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "params": {
              "amount": "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              "caller": "The eth address which called the linking contract",
              "operator": "The address who will be able to use the tokens",
              "tokenID": "The asset to approve the use of"
            }
          },
          "setApprovalForAll(address,bool)": {
            "params": {
              "approved": "True to approve, false to remove approval",
              "operator": "The eth address which can access the caller's assets"
            }
          },
          "setGovernance(address)": {
            "params": {
              "who": "The new governance address"
            }
          },
          "setPauser(address,bool)": {
            "params": {
              "status": "The new pauser status",
              "who": "The address to change"
            }
          },
          "transferFrom(uint256,address,address,uint256)": {
            "params": {
              "amount": "The amount of token to move",
              "from": "The address who's balance will be reduced",
              "to": "The address who's balance will be increased",
              "tokenID": "The token identifier"
            }
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "params": {
              "amount": "The amount of token to move",
              "caller": "The msg.sender from the bridge",
              "from": "The address who's balance will be reduced",
              "to": "The address who's balance will be increased",
              "tokenID": "The token identifier"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            "notice": "Transfers several assets from one account to another"
          },
          "checkpoint(uint256)": {
            "notice": "Allows anyone to mint a new checkpoint."
          },
          "collectGovernanceFee(bool)": {
            "notice": "This function collects the governance fees accrued by the pool."
          },
          "constructor": {
            "notice": "Initializes a Hyperdrive pool."
          },
          "pause(bool)": {
            "notice": "Allows an authorized address to pause this contract"
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            "notice": "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature."
          },
          "setApproval(uint256,address,uint256)": {
            "notice": "Allows a user to set an approval for an individual asset with specific amount."
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            "notice": "Allows the compatibility linking contract to forward calls to set asset approvals"
          },
          "setApprovalForAll(address,bool)": {
            "notice": "Allows a user to approve an operator to use all of their assets"
          },
          "setGovernance(address)": {
            "notice": "Allows governance to change governance"
          },
          "setPauser(address,bool)": {
            "notice": "Allows governance to set the ability of an address to pause deposits"
          },
          "transferFrom(uint256,address,address,uint256)": {
            "notice": "Transfers an amount of assets from the source to the destination"
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            "notice": "Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge"
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
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/HyperdriveBase.sol": "HyperdriveBase"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/DataProvider.sol": {
        "keccak256": "0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30",
        "urls": [
          "bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212",
          "dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/HyperdriveBase.sol": {
        "keccak256": "0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95",
        "urls": [
          "bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e",
          "dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"
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
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
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
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
        "keccak256": "0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384",
        "urls": [
          "bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806",
          "dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"
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
        "keccak256": "0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2",
        "urls": [
          "bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75",
          "dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"
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
        "keccak256": "0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04",
        "urls": [
          "bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef",
          "dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/token/MultiToken.sol": {
        "keccak256": "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        "urls": [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"
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
    "absolutePath": "contracts/src/HyperdriveBase.sol",
    "id": 1321,
    "exportedSymbols": {
      "AssetId": [
        7731
      ],
      "FixedPointMath": [
        8486
      ],
      "HyperdriveBase": [
        1320
      ],
      "HyperdriveMath": [
        10772
      ],
      "HyperdriveStorage": [
        4904
      ],
      "IERC20": [
        6461
      ],
      "IHyperdrive": [
        7103
      ],
      "MultiToken": [
        12918
      ],
      "SafeCast": [
        10848
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:20616:2",
    "nodes": [
      {
        "id": 480,
        "nodeType": "PragmaDirective",
        "src": "39:23:2",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 482,
        "nodeType": "ImportDirective",
        "src": "64:60:2",
        "nodes": [],
        "absolutePath": "contracts/src/HyperdriveStorage.sol",
        "file": "./HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 4905,
        "symbolAliases": [
          {
            "foreign": {
              "id": 481,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4904,
              "src": "73:17:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 484,
        "nodeType": "ImportDirective",
        "src": "125:49:2",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 6462,
        "symbolAliases": [
          {
            "foreign": {
              "id": 483,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6461,
              "src": "134:6:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 486,
        "nodeType": "ImportDirective",
        "src": "175:59:2",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 485,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "184:11:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 488,
        "nodeType": "ImportDirective",
        "src": "235:50:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "./libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 7732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 487,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7731,
              "src": "244:7:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 490,
        "nodeType": "ImportDirective",
        "src": "286:64:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 8487,
        "symbolAliases": [
          {
            "foreign": {
              "id": 489,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8486,
              "src": "295:14:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 492,
        "nodeType": "ImportDirective",
        "src": "351:64:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "./libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 10773,
        "symbolAliases": [
          {
            "foreign": {
              "id": 491,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10772,
              "src": "360:14:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 494,
        "nodeType": "ImportDirective",
        "src": "416:52:2",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 10849,
        "symbolAliases": [
          {
            "foreign": {
              "id": 493,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10848,
              "src": "425:8:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 496,
        "nodeType": "ImportDirective",
        "src": "469:52:2",
        "nodes": [],
        "absolutePath": "contracts/src/token/MultiToken.sol",
        "file": "./token/MultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1321,
        "sourceUnit": 12919,
        "symbolAliases": [
          {
            "foreign": {
              "id": 495,
              "name": "MultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12918,
              "src": "478:10:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1320,
        "nodeType": "ContractDefinition",
        "src": "861:19793:2",
        "nodes": [
          {
            "id": 504,
            "nodeType": "UsingForDirective",
            "src": "933:33:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 502,
              "name": "FixedPointMath",
              "nameLocations": [
                "939:14:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "939:14:2"
            },
            "typeName": {
              "id": 503,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "958:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 507,
            "nodeType": "UsingForDirective",
            "src": "971:32:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 505,
              "name": "FixedPointMath",
              "nameLocations": [
                "977:14:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "977:14:2"
            },
            "typeName": {
              "id": 506,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "996:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 510,
            "nodeType": "UsingForDirective",
            "src": "1008:27:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 508,
              "name": "SafeCast",
              "nameLocations": [
                "1014:8:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10848,
              "src": "1014:8:2"
            },
            "typeName": {
              "id": 509,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1027:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 513,
            "nodeType": "UsingForDirective",
            "src": "1040:26:2",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 511,
              "name": "SafeCast",
              "nameLocations": [
                "1046:8:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10848,
              "src": "1046:8:2"
            },
            "typeName": {
              "id": 512,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1059:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 523,
            "nodeType": "EventDefinition",
            "src": "1072:132:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e",
            "name": "Initialize",
            "nameLocation": "1078:10:2",
            "parameters": {
              "id": 522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 515,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1114:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 523,
                  "src": "1098:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1098:7:2",
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
                  "id": 517,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1140:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 523,
                  "src": "1132:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 516,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1132:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 519,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1166:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 523,
                  "src": "1158:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 518,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1158:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 521,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "1194:3:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 523,
                  "src": "1186:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 520,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1186:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1088:115:2"
            }
          },
          {
            "id": 531,
            "nodeType": "EventDefinition",
            "src": "1210:113:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca",
            "name": "AddLiquidity",
            "nameLocation": "1216:12:2",
            "parameters": {
              "id": 530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 525,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1254:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1238:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1238:7:2",
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
                  "id": 527,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1280:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1272:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1272:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 529,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1306:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1298:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 528,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1298:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1228:94:2"
            }
          },
          {
            "id": 541,
            "nodeType": "EventDefinition",
            "src": "1329:155:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa",
            "name": "RemoveLiquidity",
            "nameLocation": "1335:15:2",
            "parameters": {
              "id": 540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 533,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1376:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 541,
                  "src": "1360:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1360:7:2",
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
                  "id": 535,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1402:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 541,
                  "src": "1394:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1394:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 537,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1428:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 541,
                  "src": "1420:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 536,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1420:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 539,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1456:21:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 541,
                  "src": "1448:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 538,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1448:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1350:133:2"
            }
          },
          {
            "id": 549,
            "nodeType": "EventDefinition",
            "src": "1490:136:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac",
            "name": "RedeemWithdrawalShares",
            "nameLocation": "1496:22:2",
            "parameters": {
              "id": 548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 543,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1544:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 549,
                  "src": "1528:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 542,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1528:7:2",
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
                  "id": 545,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1570:21:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 549,
                  "src": "1562:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 544,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1562:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 547,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1609:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 549,
                  "src": "1601:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 546,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1601:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1518:107:2"
            }
          },
          {
            "id": 561,
            "nodeType": "EventDefinition",
            "src": "1632:172:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b3",
            "name": "OpenLong",
            "nameLocation": "1638:8:2",
            "parameters": {
              "id": 560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 551,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1672:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "1656:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 550,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1656:7:2",
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
                  "id": 553,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1704:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "1688:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 552,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1688:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 555,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1729:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "1721:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1721:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 557,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1759:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "1751:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 556,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1751:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 559,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1787:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 561,
                  "src": "1779:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 558,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1779:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1646:157:2"
            }
          },
          {
            "id": 573,
            "nodeType": "EventDefinition",
            "src": "1810:173:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b",
            "name": "OpenShort",
            "nameLocation": "1816:9:2",
            "parameters": {
              "id": 572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 563,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1851:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 573,
                  "src": "1835:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 562,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1835:7:2",
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
                  "id": 565,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1883:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 573,
                  "src": "1867:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1867:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 567,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1908:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 573,
                  "src": "1900:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 566,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1900:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 569,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1938:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 573,
                  "src": "1930:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 568,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1930:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 571,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1966:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 573,
                  "src": "1958:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 570,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1958:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1825:157:2"
            }
          },
          {
            "id": 585,
            "nodeType": "EventDefinition",
            "src": "1989:173:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "e8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c",
            "name": "CloseLong",
            "nameLocation": "1995:9:2",
            "parameters": {
              "id": 584,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 575,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2030:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 585,
                  "src": "2014:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 574,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2014:7:2",
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
                  "id": 577,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2062:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 585,
                  "src": "2046:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 576,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2046:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 579,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2087:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 585,
                  "src": "2079:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2079:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 581,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2117:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 585,
                  "src": "2109:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2109:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 583,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2145:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 585,
                  "src": "2137:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2137:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2004:157:2"
            }
          },
          {
            "id": 597,
            "nodeType": "EventDefinition",
            "src": "2168:174:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f",
            "name": "CloseShort",
            "nameLocation": "2174:10:2",
            "parameters": {
              "id": 596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 587,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2210:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "2194:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 586,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2194:7:2",
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
                  "id": 589,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2242:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "2226:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 588,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2226:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 591,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2267:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "2259:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 590,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2259:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 593,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2297:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "2289:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2289:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 595,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2325:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 597,
                  "src": "2317:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2317:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2184:157:2"
            }
          },
          {
            "id": 646,
            "nodeType": "FunctionDefinition",
            "src": "2751:499:2",
            "nodes": [],
            "body": {
              "id": 645,
              "nodeType": "Block",
              "src": "3018:232:2",
              "nodes": [],
              "statements": [
                {
                  "body": {
                    "id": 643,
                    "nodeType": "Block",
                    "src": "3108:136:2",
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
                                        "id": 632,
                                        "name": "block",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -4,
                                        "src": "3153:5:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_block",
                                          "typeString": "block"
                                        }
                                      },
                                      "id": 633,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "3159:9:2",
                                      "memberName": "timestamp",
                                      "nodeType": "MemberAccess",
                                      "src": "3153:15:2",
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
                                    "id": 631,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3146:6:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint32_$",
                                      "typeString": "type(uint32)"
                                    },
                                    "typeName": {
                                      "id": 630,
                                      "name": "uint32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3146:6:2",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 634,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3146:23:2",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint32",
                                    "typeString": "uint32"
                                  }
                                },
                                {
                                  "hexValue": "30",
                                  "id": 635,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3171:1:2",
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
                                    "typeIdentifier": "t_uint32",
                                    "typeString": "uint32"
                                  },
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 629,
                                "name": "OracleData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4609,
                                "src": "3135:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_struct$_OracleData_$4609_storage_ptr_$",
                                  "typeString": "type(struct HyperdriveStorage.OracleData storage pointer)"
                                }
                              },
                              "id": 636,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "structConstructorCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3135:38:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OracleData_$4609_memory_ptr",
                                "typeString": "struct HyperdriveStorage.OracleData memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_OracleData_$4609_memory_ptr",
                                "typeString": "struct HyperdriveStorage.OracleData memory"
                              }
                            ],
                            "expression": {
                              "id": 626,
                              "name": "_buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4614,
                              "src": "3122:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage",
                                "typeString": "struct HyperdriveStorage.OracleData storage ref[] storage ref"
                              }
                            },
                            "id": 628,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3130:4:2",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "3122:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage_ptr_$_t_struct$_OracleData_$4609_storage_$returns$__$attached_to$_t_array$_t_struct$_OracleData_$4609_storage_$dyn_storage_ptr_$",
                              "typeString": "function (struct HyperdriveStorage.OracleData storage ref[] storage pointer,struct HyperdriveStorage.OracleData storage ref)"
                            }
                          },
                          "id": 637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3122:52:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 638,
                        "nodeType": "ExpressionStatement",
                        "src": "3122:52:2"
                      },
                      {
                        "id": 642,
                        "nodeType": "UncheckedBlock",
                        "src": "3188:46:2",
                        "statements": [
                          {
                            "expression": {
                              "id": 640,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": true,
                              "src": "3216:3:2",
                              "subExpression": {
                                "id": 639,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 619,
                                "src": "3218:1:2",
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
                            "id": 641,
                            "nodeType": "ExpressionStatement",
                            "src": "3216:3:2"
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
                    "id": 625,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 622,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 619,
                      "src": "3082:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 623,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 601,
                        "src": "3086:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 624,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3094:10:2",
                      "memberName": "oracleSize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6920,
                      "src": "3086:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3082:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 644,
                  "initializationExpression": {
                    "assignments": [
                      619
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 619,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3075:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 644,
                        "src": "3067:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 618,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3067:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 621,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3079:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3067:13:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "3062:182:2"
                }
              ]
            },
            "documentation": {
              "id": 598,
              "nodeType": "StructuredDocumentation",
              "src": "2348:398:2",
              "text": "@notice Initializes a Hyperdrive pool.\n @param _config The configuration of the Hyperdrive pool.\n @param _dataProvider The address of the data provider.\n @param _linkerCodeHash The hash of the ERC20 linker contract's\n        constructor code.\n @param _linkerFactory The address of the factory which is used to deploy\n        the ERC20 linker contracts."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 610,
                    "name": "_dataProvider",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 603,
                    "src": "2931:13:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 611,
                    "name": "_linkerCodeHash",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 605,
                    "src": "2946:15:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  {
                    "id": 612,
                    "name": "_linkerFactory",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 607,
                    "src": "2963:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 613,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 609,
                  "name": "MultiToken",
                  "nameLocations": [
                    "2920:10:2"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 12918,
                  "src": "2920:10:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "2920:58:2"
              },
              {
                "arguments": [
                  {
                    "id": 615,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 601,
                    "src": "3005:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 616,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 614,
                  "name": "HyperdriveStorage",
                  "nameLocations": [
                    "2987:17:2"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4904,
                  "src": "2987:17:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "2987:26:2"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 601,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "2802:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 646,
                  "src": "2772:37:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$6924_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 600,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 599,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "2772:11:2",
                        "2784:10:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6924,
                      "src": "2772:22:2"
                    },
                    "referencedDeclaration": 6924,
                    "src": "2772:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$6924_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 603,
                  "mutability": "mutable",
                  "name": "_dataProvider",
                  "nameLocation": "2827:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 646,
                  "src": "2819:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2819:7:2",
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
                  "id": 605,
                  "mutability": "mutable",
                  "name": "_linkerCodeHash",
                  "nameLocation": "2858:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 646,
                  "src": "2850:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 604,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2850:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 607,
                  "mutability": "mutable",
                  "name": "_linkerFactory",
                  "nameLocation": "2891:14:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 646,
                  "src": "2883:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 606,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2883:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2762:149:2"
            },
            "returnParameters": {
              "id": 617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3018:0:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 662,
            "nodeType": "FunctionDefinition",
            "src": "3436:144:2",
            "nodes": [],
            "body": {
              "id": 661,
              "nodeType": "Block",
              "src": "3488:92:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 650,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "3502:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3506:5:2",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "3502:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 652,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3515:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3502:14:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 660,
                  "nodeType": "IfStatement",
                  "src": "3498:76:2",
                  "trueBody": {
                    "id": 659,
                    "nodeType": "Block",
                    "src": "3518:56:2",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 654,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "3539:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3551:10:2",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7008,
                            "src": "3539:22:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3539:24:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 658,
                        "nodeType": "RevertStatement",
                        "src": "3532:31:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 647,
              "nodeType": "StructuredDocumentation",
              "src": "3282:149:2",
              "text": "@notice A YieldSource dependent check that prevents ether from being\n         transferred to Hyperdrive instances that don't accept ether."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "3445:18:2",
            "parameters": {
              "id": 648,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3463:2:2"
            },
            "returnParameters": {
              "id": 649,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3488:0:2"
            },
            "scope": 1320,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 674,
            "nodeType": "FunctionDefinition",
            "src": "4012:143:2",
            "nodes": [],
            "documentation": {
              "id": 663,
              "nodeType": "StructuredDocumentation",
              "src": "3586:421:2",
              "text": "@notice Transfers base from the user and commits it to the yield source.\n @param amount The amount of base to deposit.\n @param asUnderlying If true the yield source will transfer underlying tokens\n                     if false it will transfer the yielding asset directly\n @return sharesMinted The shares this deposit creates.\n @return sharePrice The share price at time of deposit."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "4021:8:2",
            "parameters": {
              "id": 668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 665,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4047:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 674,
                  "src": "4039:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 664,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4039:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 667,
                  "mutability": "mutable",
                  "name": "asUnderlying",
                  "nameLocation": "4068:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 674,
                  "src": "4063:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 666,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4063:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4029:57:2"
            },
            "returnParameters": {
              "id": 673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 670,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "4121:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 674,
                  "src": "4113:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4113:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 672,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4143:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 674,
                  "src": "4135:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 671,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4135:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4112:42:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 686,
            "nodeType": "FunctionDefinition",
            "src": "4654:156:2",
            "nodes": [],
            "documentation": {
              "id": 675,
              "nodeType": "StructuredDocumentation",
              "src": "4161:488:2",
              "text": "@notice Withdraws shares from the yield source and sends the base\n         released to the destination.\n @param shares The shares to withdraw from the yield source.\n @param destination The recipient of the withdrawal.\n @param asUnderlying If true the yield source will transfer underlying tokens\n                     if false it will transfer the yielding asset directly\n @return amountWithdrawn The amount of base released by the withdrawal."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "4663:9:2",
            "parameters": {
              "id": 682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 677,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4690:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 686,
                  "src": "4682:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4682:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 679,
                  "mutability": "mutable",
                  "name": "destination",
                  "nameLocation": "4714:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 686,
                  "src": "4706:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 678,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4706:7:2",
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
                  "id": 681,
                  "mutability": "mutable",
                  "name": "asUnderlying",
                  "nameLocation": "4740:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 686,
                  "src": "4735:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 680,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4735:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4672:86:2"
            },
            "returnParameters": {
              "id": 685,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 684,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "4793:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 686,
                  "src": "4785:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 683,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4785:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4784:25:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 692,
            "nodeType": "FunctionDefinition",
            "src": "4926:109:2",
            "nodes": [],
            "documentation": {
              "id": 687,
              "nodeType": "StructuredDocumentation",
              "src": "4816:105:2",
              "text": "@notice Loads the share price from the yield source\n@return sharePrice The current share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "4935:14:2",
            "parameters": {
              "id": 688,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4949:2:2"
            },
            "returnParameters": {
              "id": 691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 690,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "5023:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 692,
                  "src": "5015:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 689,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5015:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5014:20:2"
            },
            "scope": 1320,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 697,
            "nodeType": "EventDefinition",
            "src": "5060:47:2",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 693,
              "nodeType": "StructuredDocumentation",
              "src": "5041:14:2",
              "text": "Pause ///"
            },
            "eventSelector": "a4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab",
            "name": "PauserUpdated",
            "nameLocation": "5066:13:2",
            "parameters": {
              "id": 696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 695,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newPauser",
                  "nameLocation": "5096:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 697,
                  "src": "5080:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 694,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5080:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5079:27:2"
            }
          },
          {
            "id": 726,
            "nodeType": "FunctionDefinition",
            "src": "5280:200:2",
            "nodes": [],
            "body": {
              "id": 725,
              "nodeType": "Block",
              "src": "5334:146:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 705,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "5348:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5352:6:2",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "5348:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 707,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4598,
                      "src": "5362:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5348:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 714,
                  "nodeType": "IfStatement",
                  "src": "5344:64:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 709,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "5382:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 711,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5394:12:2",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7047,
                        "src": "5382:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 712,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5382:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 713,
                    "nodeType": "RevertStatement",
                    "src": "5375:33:2"
                  }
                },
                {
                  "expression": {
                    "id": 719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 715,
                        "name": "_pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4594,
                        "src": "5418:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 717,
                      "indexExpression": {
                        "id": 716,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 700,
                        "src": "5427:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5418:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 718,
                      "name": "status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 702,
                      "src": "5434:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "5418:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 720,
                  "nodeType": "ExpressionStatement",
                  "src": "5418:22:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 722,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 700,
                        "src": "5469:3:2",
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
                      "id": 721,
                      "name": "PauserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 697,
                      "src": "5455:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 723,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5455:18:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 724,
                  "nodeType": "EmitStatement",
                  "src": "5450:23:2"
                }
              ]
            },
            "documentation": {
              "id": 698,
              "nodeType": "StructuredDocumentation",
              "src": "5113:162:2",
              "text": "@notice Allows governance to set the ability of an address to pause deposits\n@param who The address to change\n@param status The new pauser status"
            },
            "functionSelector": "7180c8ca",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setPauser",
            "nameLocation": "5289:9:2",
            "parameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 700,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "5307:3:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 726,
                  "src": "5299:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5299:7:2",
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
                  "id": 702,
                  "mutability": "mutable",
                  "name": "status",
                  "nameLocation": "5317:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 726,
                  "src": "5312:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5312:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5298:26:2"
            },
            "returnParameters": {
              "id": 704,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5334:0:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 730,
            "nodeType": "EventDefinition",
            "src": "5486:55:2",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "5492:17:2",
            "parameters": {
              "id": 729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 728,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newGovernance",
                  "nameLocation": "5526:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 730,
                  "src": "5510:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 727,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5510:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5509:31:2"
            }
          },
          {
            "id": 755,
            "nodeType": "FunctionDefinition",
            "src": "5646:191:2",
            "nodes": [],
            "body": {
              "id": 754,
              "nodeType": "Block",
              "src": "5691:146:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 736,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "5705:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 737,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5709:6:2",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "5705:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 738,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4598,
                      "src": "5719:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5705:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 745,
                  "nodeType": "IfStatement",
                  "src": "5701:64:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 740,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "5739:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 742,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5751:12:2",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7047,
                        "src": "5739:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 743,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5739:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 744,
                    "nodeType": "RevertStatement",
                    "src": "5732:33:2"
                  }
                },
                {
                  "expression": {
                    "id": 748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 746,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4598,
                      "src": "5775:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 747,
                      "name": "who",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 733,
                      "src": "5789:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5775:17:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "5775:17:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 751,
                        "name": "who",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 733,
                        "src": "5826:3:2",
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
                      "id": 750,
                      "name": "GovernanceUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 730,
                      "src": "5808:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 752,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5808:22:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 753,
                  "nodeType": "EmitStatement",
                  "src": "5803:27:2"
                }
              ]
            },
            "documentation": {
              "id": 731,
              "nodeType": "StructuredDocumentation",
              "src": "5547:94:2",
              "text": "@notice Allows governance to change governance\n@param who The new governance address"
            },
            "functionSelector": "ab033ea9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setGovernance",
            "nameLocation": "5655:13:2",
            "parameters": {
              "id": 734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 733,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "5677:3:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 755,
                  "src": "5669:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 732,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5669:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5668:13:2"
            },
            "returnParameters": {
              "id": 735,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5691:0:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 779,
            "nodeType": "FunctionDefinition",
            "src": "5984:154:2",
            "nodes": [],
            "body": {
              "id": 778,
              "nodeType": "Block",
              "src": "6021:117:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 765,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "6035:21:2",
                    "subExpression": {
                      "baseExpression": {
                        "id": 761,
                        "name": "_pausers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4594,
                        "src": "6036:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 764,
                      "indexExpression": {
                        "expression": {
                          "id": 762,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "6045:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 763,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6049:6:2",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6045:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "6036:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 771,
                  "nodeType": "IfStatement",
                  "src": "6031:60:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 766,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "6065:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 768,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6077:12:2",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7047,
                        "src": "6065:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6065:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 770,
                    "nodeType": "RevertStatement",
                    "src": "6058:33:2"
                  }
                },
                {
                  "expression": {
                    "id": 776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 772,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4570,
                        "src": "6101:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 774,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6114:8:2",
                      "memberName": "isPaused",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6860,
                      "src": "6101:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 775,
                      "name": "status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 758,
                      "src": "6125:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6101:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 777,
                  "nodeType": "ExpressionStatement",
                  "src": "6101:30:2"
                }
              ]
            },
            "documentation": {
              "id": 756,
              "nodeType": "StructuredDocumentation",
              "src": "5843:136:2",
              "text": "@notice Allows an authorized address to pause this contract\n@param status True to pause all deposits and false to unpause them"
            },
            "functionSelector": "02329a29",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nameLocation": "5993:5:2",
            "parameters": {
              "id": 759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 758,
                  "mutability": "mutable",
                  "name": "status",
                  "nameLocation": "6004:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 779,
                  "src": "5999:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 757,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5999:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5998:13:2"
            },
            "returnParameters": {
              "id": 760,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6021:0:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 792,
            "nodeType": "ModifierDefinition",
            "src": "6213:105:2",
            "nodes": [],
            "body": {
              "id": 791,
              "nodeType": "Block",
              "src": "6236:82:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 782,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4570,
                      "src": "6250:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "id": 783,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6263:8:2",
                    "memberName": "isPaused",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 6860,
                    "src": "6250:21:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 789,
                  "nodeType": "IfStatement",
                  "src": "6246:54:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 784,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "6280:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 786,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6292:6:2",
                        "memberName": "Paused",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7012,
                        "src": "6280:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 787,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6280:20:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 788,
                    "nodeType": "RevertStatement",
                    "src": "6273:27:2"
                  }
                },
                {
                  "id": 790,
                  "nodeType": "PlaceholderStatement",
                  "src": "6310:1:2"
                }
              ]
            },
            "documentation": {
              "id": 780,
              "nodeType": "StructuredDocumentation",
              "src": "6144:64:2",
              "text": "@notice Blocks a function execution if the contract is paused"
            },
            "name": "isNotPaused",
            "nameLocation": "6222:11:2",
            "parameters": {
              "id": 781,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6233:2:2"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 798,
            "nodeType": "FunctionDefinition",
            "src": "6473:60:2",
            "nodes": [],
            "documentation": {
              "id": 793,
              "nodeType": "StructuredDocumentation",
              "src": "6348:120:2",
              "text": "@notice Allows anyone to mint a new checkpoint.\n @param _checkpointTime The time of the checkpoint to create."
            },
            "functionSelector": "ed64bab2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "checkpoint",
            "nameLocation": "6482:10:2",
            "parameters": {
              "id": 796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 795,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "6501:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 798,
                  "src": "6493:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 794,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6493:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6492:25:2"
            },
            "returnParameters": {
              "id": 797,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6532:0:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 808,
            "nodeType": "FunctionDefinition",
            "src": "6790:144:2",
            "nodes": [],
            "documentation": {
              "id": 799,
              "nodeType": "StructuredDocumentation",
              "src": "6539:246:2",
              "text": "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _sharePrice The current share price.\n @return openSharePrice The open share price of the latest checkpoint."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_applyCheckpoint",
            "nameLocation": "6799:16:2",
            "parameters": {
              "id": 804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 801,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "6833:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "6825:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 800,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6825:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 803,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "6866:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "6858:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 802,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6858:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6815:68:2"
            },
            "returnParameters": {
              "id": 807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 806,
                  "mutability": "mutable",
                  "name": "openSharePrice",
                  "nameLocation": "6918:14:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 808,
                  "src": "6910:22:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6910:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6909:24:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 855,
            "nodeType": "FunctionDefinition",
            "src": "7172:567:2",
            "nodes": [],
            "body": {
              "id": 854,
              "nodeType": "Block",
              "src": "7284:455:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 822,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "7352:21:2",
                        "subExpression": {
                          "baseExpression": {
                            "id": 818,
                            "name": "_pausers",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4594,
                            "src": "7353:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 821,
                          "indexExpression": {
                            "expression": {
                              "id": 819,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "7362:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 820,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7366:6:2",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "7362:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "7353:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 823,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "7389:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 824,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7393:6:2",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "7389:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 825,
                          "name": "_feeCollector",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4601,
                          "src": "7403:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "7389:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "7352:64:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 831,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 828,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "7432:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7436:6:2",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "7432:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 830,
                        "name": "_governance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4598,
                        "src": "7446:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "7432:25:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "7352:105:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 838,
                  "nodeType": "IfStatement",
                  "src": "7335:166:2",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 833,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "7475:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 835,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7487:12:2",
                        "memberName": "Unauthorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7047,
                        "src": "7475:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7475:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 837,
                    "nodeType": "RevertStatement",
                    "src": "7468:33:2"
                  }
                },
                {
                  "assignments": [
                    840
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 840,
                      "mutability": "mutable",
                      "name": "governanceFeesAccrued",
                      "nameLocation": "7519:21:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 854,
                      "src": "7511:29:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 839,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7511:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 842,
                  "initialValue": {
                    "id": 841,
                    "name": "_governanceFeesAccrued",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4596,
                    "src": "7543:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7511:54:2"
                },
                {
                  "expression": {
                    "id": 844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "7575:29:2",
                    "subExpression": {
                      "id": 843,
                      "name": "_governanceFeesAccrued",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4596,
                      "src": "7582:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 845,
                  "nodeType": "ExpressionStatement",
                  "src": "7575:29:2"
                },
                {
                  "expression": {
                    "id": 852,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 846,
                      "name": "proceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 816,
                      "src": "7614:8:2",
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
                          "id": 848,
                          "name": "governanceFeesAccrued",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 840,
                          "src": "7648:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 849,
                          "name": "_feeCollector",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4601,
                          "src": "7683:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 850,
                          "name": "asUnderlying",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 811,
                          "src": "7710:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
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
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 847,
                        "name": "_withdraw",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 686,
                        "src": "7625:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_bool_$returns$_t_uint256_$",
                          "typeString": "function (uint256,address,bool) returns (uint256)"
                        }
                      },
                      "id": 851,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7625:107:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7614:118:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 853,
                  "nodeType": "ExpressionStatement",
                  "src": "7614:118:2"
                }
              ]
            },
            "documentation": {
              "id": 809,
              "nodeType": "StructuredDocumentation",
              "src": "6940:227:2",
              "text": "@notice This function collects the governance fees accrued by the pool.\n @param asUnderlying Indicates if the fees should be paid in underlying or yielding token\n @return proceeds The amount of base collected."
            },
            "functionSelector": "2787d595",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 814,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 813,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "7244:12:2"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 63473,
                  "src": "7244:12:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "7244:12:2"
              }
            ],
            "name": "collectGovernanceFee",
            "nameLocation": "7181:20:2",
            "parameters": {
              "id": 812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 811,
                  "mutability": "mutable",
                  "name": "asUnderlying",
                  "nameLocation": "7216:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 855,
                  "src": "7211:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 810,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7211:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7201:33:2"
            },
            "returnParameters": {
              "id": 817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 816,
                  "mutability": "mutable",
                  "name": "proceeds",
                  "nameLocation": "7274:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 855,
                  "src": "7266:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 815,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7266:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7265:18:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 963,
            "nodeType": "FunctionDefinition",
            "src": "8388:1713:2",
            "nodes": [],
            "body": {
              "id": 962,
              "nodeType": "Block",
              "src": "8666:1435:2",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    874
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 874,
                      "mutability": "mutable",
                      "name": "checkpointTime",
                      "nameLocation": "8684:14:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 962,
                      "src": "8676:22:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 873,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8676:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 878,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 875,
                      "name": "_maturityTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 866,
                      "src": "8701:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 876,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4554,
                      "src": "8717:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8701:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8676:58:2"
                },
                {
                  "assignments": [
                    880
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 880,
                      "mutability": "mutable",
                      "name": "checkpointLongs",
                      "nameLocation": "8752:15:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 962,
                      "src": "8744:23:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 879,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8744:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 890,
                  "initialValue": {
                    "baseExpression": {
                      "id": 881,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13152,
                      "src": "8770:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 889,
                    "indexExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "expression": {
                              "id": 884,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7731,
                              "src": "8818:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 885,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8826:13:2",
                            "memberName": "AssetIdPrefix",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7694,
                            "src": "8818:21:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$7694_$",
                              "typeString": "type(enum AssetId.AssetIdPrefix)"
                            }
                          },
                          "id": 886,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8840:4:2",
                          "memberName": "Long",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7691,
                          "src": "8818:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          }
                        },
                        {
                          "id": 887,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 866,
                          "src": "8846:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 882,
                          "name": "AssetId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7731,
                          "src": "8796:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                            "typeString": "type(library AssetId)"
                          }
                        },
                        "id": 883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8804:13:2",
                        "memberName": "encodeAssetId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7717,
                        "src": "8796:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$7694_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 888,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8796:64:2",
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
                    "src": "8770:100:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8744:126:2"
                },
                {
                  "assignments": [
                    892
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 892,
                      "mutability": "mutable",
                      "name": "checkpointShorts",
                      "nameLocation": "8888:16:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 962,
                      "src": "8880:24:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 891,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8880:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 902,
                  "initialValue": {
                    "baseExpression": {
                      "id": 893,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13152,
                      "src": "8907:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 901,
                    "indexExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "expression": {
                              "id": 896,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7731,
                              "src": "8955:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 897,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8963:13:2",
                            "memberName": "AssetIdPrefix",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7694,
                            "src": "8955:21:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$7694_$",
                              "typeString": "type(enum AssetId.AssetIdPrefix)"
                            }
                          },
                          "id": 898,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "8977:5:2",
                          "memberName": "Short",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7692,
                          "src": "8955:27:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          }
                        },
                        {
                          "id": 899,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 866,
                          "src": "8984:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_enum$_AssetIdPrefix_$7694",
                            "typeString": "enum AssetId.AssetIdPrefix"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 894,
                          "name": "AssetId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7731,
                          "src": "8933:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_AssetId_$7731_$",
                            "typeString": "type(library AssetId)"
                          }
                        },
                        "id": 895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8941:13:2",
                        "memberName": "encodeAssetId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7717,
                        "src": "8933:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$7694_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8933:65:2",
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
                    "src": "8907:101:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8880:128:2"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 909,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 905,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 903,
                        "name": "checkpointLongs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 880,
                        "src": "9102:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9121:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "9102:20:2",
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
                      "id": 908,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 906,
                        "name": "checkpointShorts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 892,
                        "src": "9126:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9146:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "9126:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "9102:45:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 960,
                    "nodeType": "Block",
                    "src": "9225:870:2",
                    "statements": [
                      {
                        "assignments": [
                          919
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 919,
                            "mutability": "mutable",
                            "name": "delta",
                            "nameLocation": "9450:5:2",
                            "nodeType": "VariableDeclaration",
                            "scope": 960,
                            "src": "9443:12:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            },
                            "typeName": {
                              "id": 918,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "9443:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 941,
                        "initialValue": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 936,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 934,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 927,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "arguments": [
                                              {
                                                "id": 924,
                                                "name": "_sharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 868,
                                                "src": "9507:11:2",
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
                                                "id": 922,
                                                "name": "_shareUserDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 864,
                                                "src": "9483:15:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "id": 923,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "9499:7:2",
                                              "memberName": "mulDown",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 7784,
                                              "src": "9483:23:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                              }
                                            },
                                            "id": 925,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "9483:36:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "+",
                                          "rightExpression": {
                                            "id": 926,
                                            "name": "_bondReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 862,
                                            "src": "9542:18:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "9483:77:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 933,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "hexValue": "32",
                                            "id": 928,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "9583:1:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            },
                                            "value": "2"
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "arguments": [
                                              {
                                                "id": 931,
                                                "name": "_sharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 868,
                                                "src": "9635:11:2",
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
                                                "id": 929,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 860,
                                                "src": "9607:19:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              },
                                              "id": 930,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "9627:7:2",
                                              "memberName": "mulDown",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 7784,
                                              "src": "9607:27:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                              }
                                            },
                                            "id": 932,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "9607:40:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "9583:64:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "9483:164:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "id": 935,
                                        "name": "_bondAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 858,
                                        "src": "9670:11:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "9483:198:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 937,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "9482:200:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 938,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "9683:9:2",
                                "memberName": "toUint128",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10807,
                                "src": "9482:210:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint128)"
                                }
                              },
                              "id": 939,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9482:212:2",
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
                            "id": 921,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9458:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int128_$",
                              "typeString": "type(int128)"
                            },
                            "typeName": {
                              "id": 920,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "9458:6:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9458:250:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9443:265:2"
                      },
                      {
                        "condition": {
                          "id": 942,
                          "name": "_isLong",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 870,
                          "src": "9904:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 958,
                          "nodeType": "Block",
                          "src": "10002:83:2",
                          "statements": [
                            {
                              "expression": {
                                "id": 956,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "expression": {
                                    "baseExpression": {
                                      "id": 951,
                                      "name": "_checkpoints",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4589,
                                      "src": "10020:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$6868_storage_$",
                                        "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                      }
                                    },
                                    "id": 953,
                                    "indexExpression": {
                                      "id": 952,
                                      "name": "checkpointTime",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 874,
                                      "src": "10033:14:2",
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
                                    "src": "10020:28:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Checkpoint_$6868_storage",
                                      "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                    }
                                  },
                                  "id": 954,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberLocation": "10049:12:2",
                                  "memberName": "longExposure",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 6867,
                                  "src": "10020:41:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "id": 955,
                                  "name": "delta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 919,
                                  "src": "10065:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "src": "10020:50:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              },
                              "id": 957,
                              "nodeType": "ExpressionStatement",
                              "src": "10020:50:2"
                            }
                          ]
                        },
                        "id": 959,
                        "nodeType": "IfStatement",
                        "src": "9900:185:2",
                        "trueBody": {
                          "id": 950,
                          "nodeType": "Block",
                          "src": "9913:83:2",
                          "statements": [
                            {
                              "expression": {
                                "id": 948,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "expression": {
                                    "baseExpression": {
                                      "id": 943,
                                      "name": "_checkpoints",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4589,
                                      "src": "9931:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$6868_storage_$",
                                        "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                      }
                                    },
                                    "id": 945,
                                    "indexExpression": {
                                      "id": 944,
                                      "name": "checkpointTime",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 874,
                                      "src": "9944:14:2",
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
                                    "src": "9931:28:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_Checkpoint_$6868_storage",
                                      "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                    }
                                  },
                                  "id": 946,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberLocation": "9960:12:2",
                                  "memberName": "longExposure",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 6867,
                                  "src": "9931:41:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "id": 947,
                                  "name": "delta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 919,
                                  "src": "9976:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                },
                                "src": "9931:50:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              },
                              "id": 949,
                              "nodeType": "ExpressionStatement",
                              "src": "9931:50:2"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 961,
                  "nodeType": "IfStatement",
                  "src": "9098:997:2",
                  "trueBody": {
                    "id": 917,
                    "nodeType": "Block",
                    "src": "9149:70:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 915,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "id": 910,
                                "name": "_checkpoints",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4589,
                                "src": "9163:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$6868_storage_$",
                                  "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                }
                              },
                              "id": 912,
                              "indexExpression": {
                                "id": 911,
                                "name": "checkpointTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 874,
                                "src": "9176:14:2",
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
                              "src": "9163:28:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Checkpoint_$6868_storage",
                                "typeString": "struct IHyperdrive.Checkpoint storage ref"
                              }
                            },
                            "id": 913,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "9192:12:2",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6867,
                            "src": "9163:41:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 914,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9207:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "9163:45:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "id": 916,
                        "nodeType": "ExpressionStatement",
                        "src": "9163:45:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 856,
              "nodeType": "StructuredDocumentation",
              "src": "7766:617:2",
              "text": "@dev Calculates the checkpoint exposure when a position is closed\n @param _bondAmount The amount of bonds that the user is closing.\n @param _shareReservesDelta The amount of shares that the reserves will change by.\n @param _bondReservesDelta The amount of bonds that the reserves will change by.\n @param _shareUserDelta The amount of shares that the user will receive (long) or pay (short).\n @param _maturityTime The maturity time of the position being closed.\n @param _sharePrice The current share price.\n @param _isLong True if the position being closed is long."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateCheckpointLongExposureOnClose",
            "nameLocation": "8397:36:2",
            "parameters": {
              "id": 871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 858,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "8451:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 963,
                  "src": "8443:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8443:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 860,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "8480:19:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 963,
                  "src": "8472:27:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 859,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8472:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 862,
                  "mutability": "mutable",
                  "name": "_bondReservesDelta",
                  "nameLocation": "8517:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 963,
                  "src": "8509:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 861,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8509:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 864,
                  "mutability": "mutable",
                  "name": "_shareUserDelta",
                  "nameLocation": "8553:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 963,
                  "src": "8545:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 863,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8545:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 866,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "8586:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 963,
                  "src": "8578:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 865,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8578:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 868,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "8617:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 963,
                  "src": "8609:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8609:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 870,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "8643:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 963,
                  "src": "8638:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 869,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8638:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8433:223:2"
            },
            "returnParameters": {
              "id": 872,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8666:0:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1051,
            "nodeType": "FunctionDefinition",
            "src": "10272:874:2",
            "nodes": [],
            "body": {
              "id": 1050,
              "nodeType": "Block",
              "src": "10341:805:2",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 971,
                        "name": "_before",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 966,
                        "src": "10415:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 972,
                        "name": "_after",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 968,
                        "src": "10425:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "10415:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 976,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 974,
                        "name": "_before",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 966,
                        "src": "10435:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 975,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10446:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "10435:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "10415:32:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 1011,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1009,
                        "name": "_after",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 968,
                        "src": "10832:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 1010,
                        "name": "_before",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 966,
                        "src": "10841:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "10832:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 1048,
                    "nodeType": "IfStatement",
                    "src": "10828:312:2",
                    "trueBody": {
                      "id": 1047,
                      "nodeType": "Block",
                      "src": "10850:290:2",
                      "statements": [
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 1014,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 1012,
                              "name": "_before",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 966,
                              "src": "10868:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 1013,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10879:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "10868:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "id": 1045,
                            "nodeType": "Block",
                            "src": "11035:95:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 1043,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "expression": {
                                      "id": 1031,
                                      "name": "_marketState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4570,
                                      "src": "11053:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                      }
                                    },
                                    "id": 1033,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberLocation": "11066:12:2",
                                    "memberName": "longExposure",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 6842,
                                    "src": "11053:25:2",
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
                                        "arguments": [],
                                        "expression": {
                                          "argumentTypes": [],
                                          "expression": {
                                            "arguments": [
                                              {
                                                "hexValue": "30",
                                                "id": 1038,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "11101:1:2",
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
                                                "id": 1036,
                                                "name": "_after",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 968,
                                                "src": "11090:6:2",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_int256",
                                                  "typeString": "int256"
                                                }
                                              },
                                              "id": 1037,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "11097:3:2",
                                              "memberName": "max",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 8485,
                                              "src": "11090:10:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                                "typeString": "function (int256,int256) pure returns (int256)"
                                              }
                                            },
                                            "id": 1039,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11090:13:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          },
                                          "id": 1040,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "11104:8:2",
                                          "memberName": "toInt128",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 10847,
                                          "src": "11090:22:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                            "typeString": "function (int256) pure returns (int128)"
                                          }
                                        },
                                        "id": 1041,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11090:24:2",
                                        "tryCall": false,
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
                                      "id": 1035,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "11082:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint128_$",
                                        "typeString": "type(uint128)"
                                      },
                                      "typeName": {
                                        "id": 1034,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11082:7:2",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 1042,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "11082:33:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint128",
                                      "typeString": "uint128"
                                    }
                                  },
                                  "src": "11053:62:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                },
                                "id": 1044,
                                "nodeType": "ExpressionStatement",
                                "src": "11053:62:2"
                              }
                            ]
                          },
                          "id": 1046,
                          "nodeType": "IfStatement",
                          "src": "10864:266:2",
                          "trueBody": {
                            "id": 1030,
                            "nodeType": "Block",
                            "src": "10882:147:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 1028,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "expression": {
                                      "id": 1015,
                                      "name": "_marketState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4570,
                                      "src": "10900:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                      }
                                    },
                                    "id": 1017,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberLocation": "10913:12:2",
                                    "memberName": "longExposure",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 6842,
                                    "src": "10900:25:2",
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
                                        "commonType": {
                                          "typeIdentifier": "t_int128",
                                          "typeString": "int128"
                                        },
                                        "id": 1026,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "arguments": [],
                                          "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                              "id": 1020,
                                              "name": "_after",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 968,
                                              "src": "10958:6:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                              }
                                            },
                                            "id": 1021,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "10965:8:2",
                                            "memberName": "toInt128",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10847,
                                            "src": "10958:15:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                              "typeString": "function (int256) pure returns (int128)"
                                            }
                                          },
                                          "id": 1022,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "10958:17:2",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "arguments": [],
                                          "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                              "id": 1023,
                                              "name": "_before",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 966,
                                              "src": "10978:7:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                              }
                                            },
                                            "id": 1024,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "10986:8:2",
                                            "memberName": "toInt128",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10847,
                                            "src": "10978:16:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                              "typeString": "function (int256) pure returns (int128)"
                                            }
                                          },
                                          "id": 1025,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "10978:18:2",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                          }
                                        },
                                        "src": "10958:38:2",
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
                                      "id": 1019,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "10929:7:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint128_$",
                                        "typeString": "type(uint128)"
                                      },
                                      "typeName": {
                                        "id": 1018,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10929:7:2",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 1027,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "10929:85:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint128",
                                      "typeString": "uint128"
                                    }
                                  },
                                  "src": "10900:114:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint128",
                                    "typeString": "uint128"
                                  }
                                },
                                "id": 1029,
                                "nodeType": "ExpressionStatement",
                                "src": "10900:114:2"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "id": 1049,
                  "nodeType": "IfStatement",
                  "src": "10411:729:2",
                  "trueBody": {
                    "id": 1008,
                    "nodeType": "Block",
                    "src": "10449:305:2",
                    "statements": [
                      {
                        "assignments": [
                          979
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 979,
                            "mutability": "mutable",
                            "name": "delta",
                            "nameLocation": "10470:5:2",
                            "nodeType": "VariableDeclaration",
                            "scope": 1008,
                            "src": "10463:12:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "typeName": {
                              "id": 978,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10463:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 989,
                        "initialValue": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 987,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 982,
                                "name": "_before",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 966,
                                "src": "10485:7:2",
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
                                    "hexValue": "30",
                                    "id": 985,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "10506:1:2",
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
                                    "id": 983,
                                    "name": "_after",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 968,
                                    "src": "10495:6:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "id": 984,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "10502:3:2",
                                  "memberName": "max",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 8485,
                                  "src": "10495:10:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                    "typeString": "function (int256,int256) pure returns (int256)"
                                  }
                                },
                                "id": 986,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10495:13:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "10485:23:2",
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
                            "id": 981,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10478:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 980,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10478:6:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10478:31:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "10463:46:2"
                      },
                      {
                        "expression": {
                          "id": 1006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 990,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4570,
                              "src": "10620:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 992,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "10633:12:2",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6842,
                            "src": "10620:25:2",
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
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "expression": {
                                              "id": 999,
                                              "name": "_marketState",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 4570,
                                              "src": "10691:12:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                              }
                                            },
                                            "id": 1000,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "10704:12:2",
                                            "memberName": "longExposure",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6842,
                                            "src": "10691:25:2",
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
                                          "id": 998,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "10684:6:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_int128_$",
                                            "typeString": "type(int128)"
                                          },
                                          "typeName": {
                                            "id": 997,
                                            "name": "int128",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "10684:6:2",
                                            "typeDescriptions": {}
                                          }
                                        },
                                        "id": 1001,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10684:33:2",
                                        "tryCall": false,
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
                                      "expression": {
                                        "id": 995,
                                        "name": "delta",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 979,
                                        "src": "10674:5:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "id": 996,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "10680:3:2",
                                      "memberName": "min",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 8467,
                                      "src": "10674:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                        "typeString": "function (int256,int256) pure returns (int256)"
                                      }
                                    },
                                    "id": 1002,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "10674:44:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "id": 1003,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "10719:8:2",
                                  "memberName": "toInt128",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 10847,
                                  "src": "10674:53:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                    "typeString": "function (int256) pure returns (int128)"
                                  }
                                },
                                "id": 1004,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10674:55:2",
                                "tryCall": false,
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
                              "id": 994,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "10649:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint128_$",
                                "typeString": "type(uint128)"
                              },
                              "typeName": {
                                "id": 993,
                                "name": "uint128",
                                "nodeType": "ElementaryTypeName",
                                "src": "10649:7:2",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1005,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10649:94:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "10620:123:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 1007,
                        "nodeType": "ExpressionStatement",
                        "src": "10620:123:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 964,
              "nodeType": "StructuredDocumentation",
              "src": "10107:160:2",
              "text": "@dev Updates the global long exposure.\n @param _before The long exposure before the update.\n @param _after The long exposure after the update."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateLongExposure",
            "nameLocation": "10281:19:2",
            "parameters": {
              "id": 969,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 966,
                  "mutability": "mutable",
                  "name": "_before",
                  "nameLocation": "10308:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1051,
                  "src": "10301:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 965,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10301:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 968,
                  "mutability": "mutable",
                  "name": "_after",
                  "nameLocation": "10324:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1051,
                  "src": "10317:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 967,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10317:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10300:31:2"
            },
            "returnParameters": {
              "id": 970,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10341:0:2"
            },
            "scope": 1320,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1090,
            "nodeType": "FunctionDefinition",
            "src": "11297:490:2",
            "nodes": [],
            "body": {
              "id": 1089,
              "nodeType": "Block",
              "src": "11412:375:2",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1060
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1060,
                      "mutability": "mutable",
                      "name": "longExposure",
                      "nameLocation": "11430:12:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1089,
                      "src": "11422:20:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1059,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11422:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1069,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1067,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1054,
                        "src": "11501:11:2",
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
                              "id": 1063,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4570,
                              "src": "11453:12:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 1064,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11466:12:2",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6842,
                            "src": "11453:25:2",
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
                          "id": 1062,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11445:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 1061,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11445:7:2",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1065,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11445:34:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1066,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11480:7:2",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7802,
                      "src": "11445:42:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1068,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11445:77:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11422:100:2"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 1070,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4570,
                        "src": "11536:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 1071,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11549:13:2",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6833,
                      "src": "11536:26:2",
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
                      "id": 1074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 1072,
                        "name": "longExposure",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1060,
                        "src": "11565:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 1073,
                        "name": "_minimumShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4563,
                        "src": "11580:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "11565:36:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11536:65:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1086,
                  "nodeType": "IfStatement",
                  "src": "11532:222:2",
                  "trueBody": {
                    "id": 1085,
                    "nodeType": "Block",
                    "src": "11603:151:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 1083,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 1076,
                            "name": "idleShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1057,
                            "src": "11617:10:2",
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
                            "id": 1082,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1080,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 1077,
                                  "name": "_marketState",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4570,
                                  "src": "11646:12:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                  }
                                },
                                "id": 1078,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "11659:13:2",
                                "memberName": "shareReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6833,
                                "src": "11646:26:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 1079,
                                "name": "longExposure",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1060,
                                "src": "11691:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "11646:57:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 1081,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4563,
                              "src": "11722:21:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "11646:97:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "11617:126:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1084,
                        "nodeType": "ExpressionStatement",
                        "src": "11617:126:2"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 1087,
                    "name": "idleShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1057,
                    "src": "11770:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1058,
                  "id": 1088,
                  "nodeType": "Return",
                  "src": "11763:17:2"
                }
              ]
            },
            "documentation": {
              "id": 1052,
              "nodeType": "StructuredDocumentation",
              "src": "11152:140:2",
              "text": "@dev Calculates the number of share reserves that are not reserved by open positions\n @param _sharePrice The current share price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateIdleShareReserves",
            "nameLocation": "11306:27:2",
            "parameters": {
              "id": 1055,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1054,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "11351:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1090,
                  "src": "11343:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1053,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11343:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11333:35:2"
            },
            "returnParameters": {
              "id": 1058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1057,
                  "mutability": "mutable",
                  "name": "idleShares",
                  "nameLocation": "11400:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1090,
                  "src": "11392:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1056,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11392:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11391:20:2"
            },
            "scope": 1320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1130,
            "nodeType": "FunctionDefinition",
            "src": "12079:313:2",
            "nodes": [],
            "body": {
              "id": 1129,
              "nodeType": "Block",
              "src": "12149:243:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 1127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 1118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12317:1:2",
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
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 1115,
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
                                            "id": 1106,
                                            "name": "_sharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1093,
                                            "src": "12248:11:2",
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
                                                  "id": 1102,
                                                  "name": "_marketState",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 4570,
                                                  "src": "12212:12:2",
                                                  "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                  }
                                                },
                                                "id": 1103,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12225:13:2",
                                                "memberName": "shareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 6833,
                                                "src": "12212:26:2",
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
                                              "id": 1101,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "nodeType": "ElementaryTypeNameExpression",
                                              "src": "12204:7:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                              },
                                              "typeName": {
                                                "id": 1100,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12204:7:2",
                                                "typeDescriptions": {}
                                              }
                                            },
                                            "id": 1104,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12204:35:2",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 1105,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "12240:7:2",
                                          "memberName": "mulDown",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 7784,
                                          "src": "12204:43:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 1107,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12204:56:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "id": 1108,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "12203:58:2",
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
                                  "id": 1099,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "12179:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_int256_$",
                                    "typeString": "type(int256)"
                                  },
                                  "typeName": {
                                    "id": 1098,
                                    "name": "int256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "12179:6:2",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 1109,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12179:96:2",
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
                                      "id": 1112,
                                      "name": "_marketState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4570,
                                      "src": "12285:12:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$6861_storage",
                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                      }
                                    },
                                    "id": 1113,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "12298:12:2",
                                    "memberName": "longExposure",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 6842,
                                    "src": "12285:25:2",
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
                                  "id": 1111,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "12278:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_int128_$",
                                    "typeString": "type(int128)"
                                  },
                                  "typeName": {
                                    "id": 1110,
                                    "name": "int128",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "12278:6:2",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 1114,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "12278:33:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              },
                              "src": "12179:132:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 1116,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "12178:134:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 1117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "12313:3:2",
                        "memberName": "max",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8485,
                        "src": "12178:138:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                          "typeString": "function (int256,int256) pure returns (int256)"
                        }
                      },
                      "id": 1119,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12178:141:2",
                      "tryCall": false,
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
                              "id": 1124,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1093,
                              "src": "12372:11:2",
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
                              "id": 1122,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4563,
                              "src": "12342:21:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12364:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7784,
                            "src": "12342:29:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1125,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12342:42:2",
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
                        "id": 1121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "12335:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 1120,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "12335:6:2",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1126,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "12335:50:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "12178:207:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1097,
                  "id": 1128,
                  "nodeType": "Return",
                  "src": "12159:226:2"
                }
              ]
            },
            "documentation": {
              "id": 1091,
              "nodeType": "StructuredDocumentation",
              "src": "11793:281:2",
              "text": "@dev Check solvency by verifying that the share reserves are greater than the exposure plus the minimum share reserves.\n @param _sharePrice The current share price.\n @return True if the share reserves are greater than the exposure plus the minimum share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isSolvent",
            "nameLocation": "12088:10:2",
            "parameters": {
              "id": 1094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1093,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "12107:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1130,
                  "src": "12099:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1092,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12099:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12098:21:2"
            },
            "returnParameters": {
              "id": 1097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1096,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1130,
                  "src": "12143:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1095,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12143:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12142:6:2"
            },
            "scope": 1320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1173,
            "nodeType": "FunctionDefinition",
            "src": "12874:1582:2",
            "nodes": [],
            "body": {
              "id": 1172,
              "nodeType": "Block",
              "src": "13106:1350:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1144,
                      "name": "totalCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1140,
                      "src": "14019:13:2",
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
                          "id": 1161,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1133,
                          "src": "14202:9:2",
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
                              "id": 1158,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1137,
                              "src": "14168:11:2",
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
                                  "id": 1155,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4577,
                                  "src": "14136:9:2",
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
                                      "id": 1152,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 1148,
                                            "name": "_spotPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1135,
                                            "src": "14066:10:2",
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
                                              "id": 1145,
                                              "name": "FixedPointMath",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 8486,
                                              "src": "14036:14:2",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                                                "typeString": "type(library FixedPointMath)"
                                              }
                                            },
                                            "id": 1146,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "14051:6:2",
                                            "memberName": "ONE_18",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7745,
                                            "src": "14036:21:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 1147,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "14058:7:2",
                                          "memberName": "divDown",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 7802,
                                          "src": "14036:29:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 1149,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14036:41:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "expression": {
                                          "id": 1150,
                                          "name": "FixedPointMath",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8486,
                                          "src": "14092:14:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                                            "typeString": "type(library FixedPointMath)"
                                          }
                                        },
                                        "id": 1151,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "memberLocation": "14107:6:2",
                                        "memberName": "ONE_18",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7745,
                                        "src": "14092:21:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "14036:77:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 1153,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "14035:79:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1154,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "14128:7:2",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7784,
                                "src": "14035:100:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14035:111:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1157,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14160:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7784,
                            "src": "14035:132:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14035:145:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14194:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "14035:166:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14035:177:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14019:193:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1164,
                  "nodeType": "ExpressionStatement",
                  "src": "14019:193:2"
                },
                {
                  "expression": {
                    "id": 1170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1165,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1142,
                      "src": "14391:18:2",
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
                          "id": 1168,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4583,
                          "src": "14434:14:2",
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
                          "id": 1166,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1140,
                          "src": "14412:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1167,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14426:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "14412:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14412:37:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14391:58:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1171,
                  "nodeType": "ExpressionStatement",
                  "src": "14391:58:2"
                }
              ]
            },
            "documentation": {
              "id": 1131,
              "nodeType": "StructuredDocumentation",
              "src": "12398:471:2",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _amountIn Amount in shares.\n @param _spotPrice The price without slippage of bonds in terms of base (base/bonds).\n @param _sharePrice The current price of shares in terms of base (base/shares).\n @return totalCurveFee The total curve fee. The fee is in terms of bonds.\n @return governanceCurveFee The curve fee that goes to governance. The fee is in terms of bonds."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesOutGivenSharesIn",
            "nameLocation": "12883:30:2",
            "parameters": {
              "id": 1138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1133,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "12931:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "12923:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12923:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1135,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "12958:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "12950:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12950:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1137,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "12986:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "12978:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1136,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12978:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12913:90:2"
            },
            "returnParameters": {
              "id": 1143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1140,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "13059:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "13051:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1139,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13051:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1142,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "13082:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1173,
                  "src": "13074:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1141,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13074:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13050:51:2"
            },
            "scope": 1320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1245,
            "nodeType": "FunctionDefinition",
            "src": "15102:2464:2",
            "nodes": [],
            "body": {
              "id": 1244,
              "nodeType": "Block",
              "src": "15443:2123:2",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    1192
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1192,
                      "mutability": "mutable",
                      "name": "_pricePart",
                      "nameLocation": "16105:10:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1244,
                      "src": "16097:18:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1191,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16097:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1197,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 1193,
                        "name": "FixedPointMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8486,
                        "src": "16118:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                          "typeString": "type(library FixedPointMath)"
                        }
                      },
                      "id": 1194,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "16133:6:2",
                      "memberName": "ONE_18",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7745,
                      "src": "16118:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 1195,
                      "name": "_spotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1180,
                      "src": "16142:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16118:34:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16097:55:2"
                },
                {
                  "expression": {
                    "id": 1210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1198,
                      "name": "totalCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1185,
                      "src": "16162:13:2",
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
                          "id": 1207,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "16277:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 1208,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1182,
                          "src": "16303:11:2",
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
                              "id": 1204,
                              "name": "_amountIn",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1176,
                              "src": "16242:9:2",
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
                                  "id": 1201,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4577,
                                  "src": "16210:9:2",
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
                                  "id": 1199,
                                  "name": "_pricePart",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1192,
                                  "src": "16178:10:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1200,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "16202:7:2",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7784,
                                "src": "16178:31:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1202,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "16178:42:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1203,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "16234:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7784,
                            "src": "16178:63:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16178:74:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1206,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16266:10:2",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7766,
                        "src": "16178:98:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16178:137:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16162:153:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1211,
                  "nodeType": "ExpressionStatement",
                  "src": "16162:153:2"
                },
                {
                  "expression": {
                    "id": 1217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1212,
                      "name": "totalGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1189,
                      "src": "16494:18:2",
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
                          "id": 1215,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4583,
                          "src": "16537:14:2",
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
                          "id": 1213,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1185,
                          "src": "16515:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1214,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "16529:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "16515:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1216,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16515:37:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16494:58:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1218,
                  "nodeType": "ExpressionStatement",
                  "src": "16494:58:2"
                },
                {
                  "assignments": [
                    1220
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1220,
                      "mutability": "mutable",
                      "name": "flat",
                      "nameLocation": "16990:4:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1244,
                      "src": "16982:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1219,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16982:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1229,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1223,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8486,
                            "src": "17031:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 1224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "17046:6:2",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7745,
                          "src": "17031:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 1225,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "17055:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "17031:48:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1227,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1182,
                        "src": "17093:11:2",
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
                        "id": 1221,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1176,
                        "src": "16997:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1222,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17007:10:2",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7766,
                      "src": "16997:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16997:117:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16982:132:2"
                },
                {
                  "expression": {
                    "id": 1235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1230,
                      "name": "totalFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1187,
                      "src": "17124:12:2",
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
                          "id": 1233,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4580,
                          "src": "17152:8:2",
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
                          "id": 1231,
                          "name": "flat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1220,
                          "src": "17139:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1232,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17144:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "17139:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1234,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17139:22:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17124:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1236,
                  "nodeType": "ExpressionStatement",
                  "src": "17124:37:2"
                },
                {
                  "expression": {
                    "id": 1242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1237,
                      "name": "totalGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1189,
                      "src": "17501:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 1240,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4583,
                          "src": "17544:14:2",
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
                          "id": 1238,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1187,
                          "src": "17523:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17536:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "17523:20:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1241,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17523:36:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17501:58:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1243,
                  "nodeType": "ExpressionStatement",
                  "src": "17501:58:2"
                }
              ]
            },
            "documentation": {
              "id": 1174,
              "nodeType": "StructuredDocumentation",
              "src": "14462:635:2",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _amountIn Amount in terms of bonds.\n @param _normalizedTimeRemaining The normalized amount of time until maturity.\n @param _spotPrice The price without slippage of bonds in terms of base (base/bonds).\n @param _sharePrice The current price of shares in terms of base (base/shares).\n @return totalCurveFee The curve fee. The fee is in terms of shares.\n @return totalFlatFee The flat fee. The fee is in terms of shares.\n @return totalGovernanceFee The total fee that goes to governance. The fee is in terms of shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesOutGivenBondsIn",
            "nameLocation": "15111:29:2",
            "parameters": {
              "id": 1183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1176,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "15158:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1245,
                  "src": "15150:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1175,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15150:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1178,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "15185:24:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1245,
                  "src": "15177:32:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15177:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1180,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "15227:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1245,
                  "src": "15219:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1179,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15219:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1182,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "15255:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1245,
                  "src": "15247:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1181,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15247:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15140:132:2"
            },
            "returnParameters": {
              "id": 1190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1185,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "15341:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1245,
                  "src": "15333:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1184,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15333:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1187,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "15376:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1245,
                  "src": "15368:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1186,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15368:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1189,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "15410:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1245,
                  "src": "15402:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15402:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15319:119:2"
            },
            "scope": 1320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1319,
            "nodeType": "FunctionDefinition",
            "src": "18315:2337:2",
            "nodes": [],
            "body": {
              "id": 1318,
              "nodeType": "Block",
              "src": "18696:1956:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 1270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1265,
                      "name": "totalCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1257,
                      "src": "19350:13:2",
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
                      "id": 1269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 1266,
                          "name": "FixedPointMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8486,
                          "src": "19366:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                            "typeString": "type(library FixedPointMath)"
                          }
                        },
                        "id": 1267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "19381:6:2",
                        "memberName": "ONE_18",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7745,
                        "src": "19366:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 1268,
                        "name": "_spotPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1252,
                        "src": "19390:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "19366:34:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19350:50:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1271,
                  "nodeType": "ExpressionStatement",
                  "src": "19350:50:2"
                },
                {
                  "expression": {
                    "id": 1284,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1272,
                      "name": "totalCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1257,
                      "src": "19410:13:2",
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
                          "id": 1281,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1250,
                          "src": "19529:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 1282,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1254,
                          "src": "19555:11:2",
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
                              "id": 1278,
                              "name": "_amountOut",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1248,
                              "src": "19493:10:2",
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
                                  "id": 1275,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4577,
                                  "src": "19461:9:2",
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
                                  "id": 1273,
                                  "name": "totalCurveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1257,
                                  "src": "19426:13:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 1274,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "19453:7:2",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7784,
                                "src": "19426:34:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 1276,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19426:45:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "19485:7:2",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7784,
                            "src": "19426:66:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "19426:78:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19518:10:2",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7766,
                        "src": "19426:102:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19426:141:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19410:157:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1285,
                  "nodeType": "ExpressionStatement",
                  "src": "19410:157:2"
                },
                {
                  "expression": {
                    "id": 1291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1286,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1261,
                      "src": "19746:18:2",
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
                          "id": 1289,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4583,
                          "src": "19789:14:2",
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
                          "id": 1287,
                          "name": "totalCurveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1257,
                          "src": "19767:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1288,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19781:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "19767:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19767:37:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19746:58:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1292,
                  "nodeType": "ExpressionStatement",
                  "src": "19746:58:2"
                },
                {
                  "assignments": [
                    1294
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1294,
                      "mutability": "mutable",
                      "name": "flat",
                      "nameLocation": "20242:4:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1318,
                      "src": "20234:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1293,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20234:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1303,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 1297,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8486,
                            "src": "20284:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FixedPointMath_$8486_$",
                              "typeString": "type(library FixedPointMath)"
                            }
                          },
                          "id": 1298,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "20299:6:2",
                          "memberName": "ONE_18",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7745,
                          "src": "20284:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 1299,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1250,
                          "src": "20308:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "20284:48:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1301,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1254,
                        "src": "20346:11:2",
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
                        "id": 1295,
                        "name": "_amountOut",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1248,
                        "src": "20249:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "20260:10:2",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7766,
                      "src": "20249:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 1302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "20249:118:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20234:133:2"
                },
                {
                  "expression": {
                    "id": 1309,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1304,
                      "name": "totalFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1259,
                      "src": "20377:12:2",
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
                          "id": 1307,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4580,
                          "src": "20405:8:2",
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
                          "id": 1305,
                          "name": "flat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1294,
                          "src": "20392:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20397:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "20392:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20392:22:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "20377:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1310,
                  "nodeType": "ExpressionStatement",
                  "src": "20377:37:2"
                },
                {
                  "expression": {
                    "id": 1316,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1311,
                      "name": "governanceFlatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1263,
                      "src": "20589:17:2",
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
                          "id": 1314,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4583,
                          "src": "20630:14:2",
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
                          "id": 1312,
                          "name": "totalFlatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1259,
                          "src": "20609:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 1313,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20622:7:2",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7784,
                        "src": "20609:20:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 1315,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20609:36:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "20589:56:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1317,
                  "nodeType": "ExpressionStatement",
                  "src": "20589:56:2"
                }
              ]
            },
            "documentation": {
              "id": 1246,
              "nodeType": "StructuredDocumentation",
              "src": "17572:738:2",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _amountOut Amount in terms of bonds.\n @param _normalizedTimeRemaining The normalized amount of time until maturity.\n @param _spotPrice The price without slippage of bonds in terms of base (base/bonds).\n @param _sharePrice The current price of shares in terms of base (base/shares).\n @return totalCurveFee The total curve fee. Fee is in terms of shares.\n @return totalFlatFee The total flat fee.  Fee is in terms of shares.\n @return governanceCurveFee The curve fee that goes to governance.  Fee is in terms of shares.\n @return governanceFlatFee The flat fee that goes to governance.  Fee is in terms of shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesInGivenBondsOut",
            "nameLocation": "18324:29:2",
            "parameters": {
              "id": 1255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1248,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "18371:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18363:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1247,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18363:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1250,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "18399:24:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18391:32:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1249,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18391:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1252,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "18441:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18433:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18433:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1254,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "18469:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18461:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18461:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18353:133:2"
            },
            "returnParameters": {
              "id": 1264,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1257,
                  "mutability": "mutable",
                  "name": "totalCurveFee",
                  "nameLocation": "18555:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18547:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1256,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18547:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1259,
                  "mutability": "mutable",
                  "name": "totalFlatFee",
                  "nameLocation": "18590:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18582:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1258,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18582:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1261,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "18624:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18616:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1260,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18616:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1263,
                  "mutability": "mutable",
                  "name": "governanceFlatFee",
                  "nameLocation": "18664:17:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1319,
                  "src": "18656:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1262,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18656:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18533:158:2"
            },
            "scope": 1320,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 498,
              "name": "MultiToken",
              "nameLocations": [
                "897:10:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 12918,
              "src": "897:10:2"
            },
            "id": 499,
            "nodeType": "InheritanceSpecifier",
            "src": "897:10:2"
          },
          {
            "baseName": {
              "id": 500,
              "name": "HyperdriveStorage",
              "nameLocations": [
                "909:17:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4904,
              "src": "909:17:2"
            },
            "id": 501,
            "nodeType": "InheritanceSpecifier",
            "src": "909:17:2"
          }
        ],
        "canonicalName": "HyperdriveBase",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 497,
          "nodeType": "StructuredDocumentation",
          "src": "523:338:2",
          "text": "@author DELV\n @title HyperdriveBase\n @notice The base contract of the Hyperdrive inheritance hierarchy.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          1320,
          4904,
          12918,
          7657,
          13196,
          63474,
          72
        ],
        "name": "HyperdriveBase",
        "nameLocation": "879:14:2",
        "scope": 1321,
        "usedErrors": [
          6988,
          6994,
          6996,
          7000,
          7044,
          7047,
          7060,
          7062,
          7064,
          7066,
          7068
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 2
} as const;
