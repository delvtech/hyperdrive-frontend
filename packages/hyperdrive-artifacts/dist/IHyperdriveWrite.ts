export const IHyperdriveWrite = 
{
  "abi": [
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
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minApr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxApr",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
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
          "internalType": "uint256",
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "initialize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_baseAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "openLong",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bondProceeds",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minSharePrice",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "openShort",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "traderDeposit",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "proceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sharesRedeemed",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_destination",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_asUnderlying",
          "type": "bool"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "baseProceeds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "withdrawalShares",
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
    "addLiquidity(uint256,uint256,uint256,address,bool)": "c326a903",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,address,bool)": "fa3fcea7",
    "closeShort(uint256,uint256,uint256,address,bool)": "6f8c3a5b",
    "collectGovernanceFee(bool)": "2787d595",
    "initialize(uint256,uint256,address,bool)": "2002b333",
    "openLong(uint256,uint256,uint256,address,bool)": "06dae82a",
    "openShort(uint256,uint256,uint256,address,bool)": "a179403b",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
    "redeemWithdrawalShares(uint256,uint256,address,bool)": "4536ee2f",
    "removeLiquidity(uint256,uint256,address,bool)": "c23632a7",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"asUnderlying\",\"type\":\"bool\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_baseAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"traderDeposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"sharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_asUnderlying\",\"type\":\"bool\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveWrite.sol\":\"IHyperdriveWrite\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
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
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minApr",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxApr",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
              "type": "uint256"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
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
              "internalType": "uint256",
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "initialize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_baseAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "openLong",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondProceeds",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxDeposit",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "openShort",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "traderDeposit",
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
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "proceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "sharesRedeemed",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_asUnderlying",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "baseProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShares",
              "type": "uint256"
            }
          ]
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
        "contracts/src/interfaces/IHyperdriveWrite.sol": "IHyperdriveWrite"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdriveWrite.sol",
    "id": 7346,
    "exportedSymbols": {
      "IHyperdriveWrite": [
        7345
      ],
      "IMultiTokenWrite": [
        7657
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2193:23",
    "nodes": [
      {
        "id": 7189,
        "nodeType": "PragmaDirective",
        "src": "39:23:23",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 7191,
        "nodeType": "ImportDirective",
        "src": "64:58:23",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiTokenWrite.sol",
        "file": "./IMultiTokenWrite.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7346,
        "sourceUnit": 7658,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7190,
              "name": "IMultiTokenWrite",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7657,
              "src": "73:16:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7345,
        "nodeType": "ContractDefinition",
        "src": "124:2107:23",
        "nodes": [
          {
            "id": 7198,
            "nodeType": "FunctionDefinition",
            "src": "177:54:23",
            "nodes": [],
            "functionSelector": "ed64bab2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "checkpoint",
            "nameLocation": "186:10:23",
            "parameters": {
              "id": 7196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7195,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "205:15:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7198,
                  "src": "197:23:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7194,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "196:25:23"
            },
            "returnParameters": {
              "id": 7197,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "230:0:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7205,
            "nodeType": "FunctionDefinition",
            "src": "237:54:23",
            "nodes": [],
            "functionSelector": "7180c8ca",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setPauser",
            "nameLocation": "246:9:23",
            "parameters": {
              "id": 7203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7200,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "264:3:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7205,
                  "src": "256:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7199,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:23",
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
                  "id": 7202,
                  "mutability": "mutable",
                  "name": "status",
                  "nameLocation": "274:6:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7205,
                  "src": "269:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7201,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "269:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "255:26:23"
            },
            "returnParameters": {
              "id": 7204,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "290:0:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7210,
            "nodeType": "FunctionDefinition",
            "src": "297:37:23",
            "nodes": [],
            "functionSelector": "02329a29",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nameLocation": "306:5:23",
            "parameters": {
              "id": 7208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7207,
                  "mutability": "mutable",
                  "name": "status",
                  "nameLocation": "317:6:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7210,
                  "src": "312:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7206,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "311:13:23"
            },
            "returnParameters": {
              "id": 7209,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "333:0:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7223,
            "nodeType": "FunctionDefinition",
            "src": "340:181:23",
            "nodes": [],
            "functionSelector": "2002b333",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "initialize",
            "nameLocation": "349:10:23",
            "parameters": {
              "id": 7219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7212,
                  "mutability": "mutable",
                  "name": "_contribution",
                  "nameLocation": "377:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7223,
                  "src": "369:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7211,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "369:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7214,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "408:4:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7223,
                  "src": "400:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7213,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7216,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "430:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7223,
                  "src": "422:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7215,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:7:23",
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
                  "id": 7218,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "457:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7223,
                  "src": "452:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7217,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "359:117:23"
            },
            "returnParameters": {
              "id": 7222,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7221,
                  "mutability": "mutable",
                  "name": "lpShares",
                  "nameLocation": "511:8:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7223,
                  "src": "503:16:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7220,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:18:23"
            },
            "scope": 7345,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7238,
            "nodeType": "FunctionDefinition",
            "src": "527:211:23",
            "nodes": [],
            "functionSelector": "c326a903",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addLiquidity",
            "nameLocation": "536:12:23",
            "parameters": {
              "id": 7234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7225,
                  "mutability": "mutable",
                  "name": "_contribution",
                  "nameLocation": "566:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7238,
                  "src": "558:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7224,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7227,
                  "mutability": "mutable",
                  "name": "_minApr",
                  "nameLocation": "597:7:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7238,
                  "src": "589:15:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7226,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "589:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7229,
                  "mutability": "mutable",
                  "name": "_maxApr",
                  "nameLocation": "622:7:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7238,
                  "src": "614:15:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7228,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "614:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7231,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "647:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7238,
                  "src": "639:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7230,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "639:7:23",
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
                  "id": 7233,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "674:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7238,
                  "src": "669:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7232,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "669:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "548:145:23"
            },
            "returnParameters": {
              "id": 7237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7236,
                  "mutability": "mutable",
                  "name": "lpShares",
                  "nameLocation": "728:8:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7238,
                  "src": "720:16:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7235,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "719:18:23"
            },
            "scope": 7345,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7253,
            "nodeType": "FunctionDefinition",
            "src": "744:208:23",
            "nodes": [],
            "functionSelector": "c23632a7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeLiquidity",
            "nameLocation": "753:15:23",
            "parameters": {
              "id": 7247,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7240,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "786:7:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7253,
                  "src": "778:15:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7239,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "778:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7242,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "811:10:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7253,
                  "src": "803:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7241,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "803:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7244,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "839:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7253,
                  "src": "831:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7243,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "831:7:23",
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
                  "id": 7246,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "866:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7253,
                  "src": "861:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7245,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "861:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "768:117:23"
            },
            "returnParameters": {
              "id": 7252,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7249,
                  "mutability": "mutable",
                  "name": "baseProceeds",
                  "nameLocation": "912:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7253,
                  "src": "904:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7251,
                  "mutability": "mutable",
                  "name": "withdrawalShares",
                  "nameLocation": "934:16:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7253,
                  "src": "926:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7250,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "903:48:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7268,
            "nodeType": "FunctionDefinition",
            "src": "958:209:23",
            "nodes": [],
            "functionSelector": "4536ee2f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeemWithdrawalShares",
            "nameLocation": "967:22:23",
            "parameters": {
              "id": 7262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7255,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "1007:7:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7268,
                  "src": "999:15:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7254,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7257,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "1032:10:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7268,
                  "src": "1024:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7256,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1024:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7259,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "1060:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7268,
                  "src": "1052:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7258,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:7:23",
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
                  "id": 7261,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "1087:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7268,
                  "src": "1082:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7260,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1082:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "989:117:23"
            },
            "returnParameters": {
              "id": 7267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7264,
                  "mutability": "mutable",
                  "name": "proceeds",
                  "nameLocation": "1133:8:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7268,
                  "src": "1125:16:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7263,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1125:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7266,
                  "mutability": "mutable",
                  "name": "sharesRedeemed",
                  "nameLocation": "1151:14:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7268,
                  "src": "1143:22:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7265,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1143:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1124:42:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7285,
            "nodeType": "FunctionDefinition",
            "src": "1173:241:23",
            "nodes": [],
            "functionSelector": "06dae82a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "openLong",
            "nameLocation": "1182:8:23",
            "parameters": {
              "id": 7279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7270,
                  "mutability": "mutable",
                  "name": "_baseAmount",
                  "nameLocation": "1208:11:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7285,
                  "src": "1200:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7269,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1200:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7272,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "1237:10:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7285,
                  "src": "1229:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7271,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1229:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7274,
                  "mutability": "mutable",
                  "name": "_minSharePrice",
                  "nameLocation": "1265:14:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7285,
                  "src": "1257:22:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7273,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1257:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7276,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "1297:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7285,
                  "src": "1289:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7275,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1289:7:23",
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
                  "id": 7278,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "1324:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7285,
                  "src": "1319:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7277,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1319:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1190:153:23"
            },
            "returnParameters": {
              "id": 7284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7281,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1378:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7285,
                  "src": "1370:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7280,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1370:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7283,
                  "mutability": "mutable",
                  "name": "bondProceeds",
                  "nameLocation": "1400:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7285,
                  "src": "1392:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7282,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1392:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1369:44:23"
            },
            "scope": 7345,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7300,
            "nodeType": "FunctionDefinition",
            "src": "1420:198:23",
            "nodes": [],
            "functionSelector": "fa3fcea7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "closeLong",
            "nameLocation": "1429:9:23",
            "parameters": {
              "id": 7296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7287,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1456:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7300,
                  "src": "1448:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7286,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1448:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7289,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "1487:11:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7300,
                  "src": "1479:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7288,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1479:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7291,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "1516:10:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7300,
                  "src": "1508:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7290,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1508:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7293,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "1544:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7300,
                  "src": "1536:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7292,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:23",
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
                  "id": 7295,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "1571:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7300,
                  "src": "1566:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7294,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1438:152:23"
            },
            "returnParameters": {
              "id": 7299,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7298,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7300,
                  "src": "1609:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7297,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1609:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1608:9:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7317,
            "nodeType": "FunctionDefinition",
            "src": "1624:244:23",
            "nodes": [],
            "functionSelector": "a179403b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "openShort",
            "nameLocation": "1633:9:23",
            "parameters": {
              "id": 7311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7302,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "1660:11:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7317,
                  "src": "1652:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7301,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1652:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7304,
                  "mutability": "mutable",
                  "name": "_maxDeposit",
                  "nameLocation": "1689:11:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7317,
                  "src": "1681:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1681:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7306,
                  "mutability": "mutable",
                  "name": "_minSharePrice",
                  "nameLocation": "1718:14:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7317,
                  "src": "1710:22:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7305,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1710:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7308,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "1750:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7317,
                  "src": "1742:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7307,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1742:7:23",
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
                  "id": 7310,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "1777:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7317,
                  "src": "1772:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7309,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1642:154:23"
            },
            "returnParameters": {
              "id": 7316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7313,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1831:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7317,
                  "src": "1823:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7312,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1823:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7315,
                  "mutability": "mutable",
                  "name": "traderDeposit",
                  "nameLocation": "1853:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7317,
                  "src": "1845:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7314,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1845:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1822:45:23"
            },
            "scope": 7345,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7332,
            "nodeType": "FunctionDefinition",
            "src": "1874:199:23",
            "nodes": [],
            "functionSelector": "6f8c3a5b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "closeShort",
            "nameLocation": "1883:10:23",
            "parameters": {
              "id": 7328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7319,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1911:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7332,
                  "src": "1903:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7318,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7321,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "1942:11:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7332,
                  "src": "1934:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1934:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7323,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "1971:10:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7332,
                  "src": "1963:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7322,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1963:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7325,
                  "mutability": "mutable",
                  "name": "_destination",
                  "nameLocation": "1999:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7332,
                  "src": "1991:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1991:7:23",
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
                  "id": 7327,
                  "mutability": "mutable",
                  "name": "_asUnderlying",
                  "nameLocation": "2026:13:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7332,
                  "src": "2021:18:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7326,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2021:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1893:152:23"
            },
            "returnParameters": {
              "id": 7331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7330,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7332,
                  "src": "2064:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7329,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2064:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2063:9:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7337,
            "nodeType": "FunctionDefinition",
            "src": "2079:45:23",
            "nodes": [],
            "functionSelector": "ab033ea9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setGovernance",
            "nameLocation": "2088:13:23",
            "parameters": {
              "id": 7335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7334,
                  "mutability": "mutable",
                  "name": "who",
                  "nameLocation": "2110:3:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7337,
                  "src": "2102:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2102:7:23",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2101:13:23"
            },
            "returnParameters": {
              "id": 7336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2123:0:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7344,
            "nodeType": "FunctionDefinition",
            "src": "2130:99:23",
            "nodes": [],
            "functionSelector": "2787d595",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "collectGovernanceFee",
            "nameLocation": "2139:20:23",
            "parameters": {
              "id": 7340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7339,
                  "mutability": "mutable",
                  "name": "asUnderlying",
                  "nameLocation": "2174:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7344,
                  "src": "2169:17:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7338,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2169:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2159:33:23"
            },
            "returnParameters": {
              "id": 7343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7342,
                  "mutability": "mutable",
                  "name": "proceeds",
                  "nameLocation": "2219:8:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 7344,
                  "src": "2211:16:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7341,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2211:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2210:18:23"
            },
            "scope": 7345,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7192,
              "name": "IMultiTokenWrite",
              "nameLocations": [
                "154:16:23"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7657,
              "src": "154:16:23"
            },
            "id": 7193,
            "nodeType": "InheritanceSpecifier",
            "src": "154:16:23"
          }
        ],
        "canonicalName": "IHyperdriveWrite",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          7345,
          7657
        ],
        "name": "IHyperdriveWrite",
        "nameLocation": "134:16:23",
        "scope": 7346,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 23
} as const;
