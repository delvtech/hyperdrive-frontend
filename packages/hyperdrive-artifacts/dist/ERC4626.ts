export const ERC4626 = 
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
          "name": "amount",
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
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "asset",
      "outputs": [
        {
          "internalType": "contract ERC20",
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
          "internalType": "address",
          "name": "",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "convertToAssets",
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
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "convertToShares",
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
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "deposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "maxDeposit",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "maxMint",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "maxRedeem",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "maxWithdraw",
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
          "name": "shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
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
          "name": "",
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
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
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
      "name": "permit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "previewDeposit",
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
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "previewMint",
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
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "previewRedeem",
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
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "previewWithdraw",
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
          "name": "shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "redeem",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
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
      "inputs": [],
      "name": "totalAssets",
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
    },
    {
      "inputs": [
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
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
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
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "shares",
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
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "asset()": "38d52e0f",
    "balanceOf(address)": "70a08231",
    "convertToAssets(uint256)": "07a2d13a",
    "convertToShares(uint256)": "c6e6f592",
    "decimals()": "313ce567",
    "deposit(uint256,address)": "6e553f65",
    "maxDeposit(address)": "402d267d",
    "maxMint(address)": "c63d75b6",
    "maxRedeem(address)": "d905777e",
    "maxWithdraw(address)": "ce96cb77",
    "mint(uint256,address)": "94bf804d",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "previewDeposit(uint256)": "ef8b30f7",
    "previewMint(uint256)": "b3d7f6b9",
    "previewRedeem(uint256)": "4cdad506",
    "previewWithdraw(uint256)": "0a28a477",
    "redeem(uint256,address,address)": "ba087652",
    "symbol()": "95d89b41",
    "totalAssets()": "01e1d114",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
    "withdraw(uint256,address,address)": "b460af94"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/mixins/ERC4626.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Minimal ERC4626 tokenized Vault implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/mixins/ERC4626.sol\":\"ERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/solmate/src/mixins/ERC4626.sol\":{\"keccak256\":\"0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1\",\"dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
              "name": "amount",
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
              "name": "caller",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Deposit",
          "anonymous": false
        },
        {
          "inputs": [
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
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "caller",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Withdraw",
          "anonymous": false
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
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
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
              "internalType": "address",
              "name": "spender",
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
          "name": "approve",
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
          "name": "asset",
          "outputs": [
            {
              "internalType": "contract ERC20",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToAssets",
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
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToShares",
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
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxDeposit",
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
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxMint",
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
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxRedeem",
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
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxWithdraw",
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
              "name": "shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
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
              "name": "",
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
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
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
          "name": "permit"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewDeposit",
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
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewMint",
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
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewRedeem",
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
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewWithdraw",
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
              "name": "shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalAssets",
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
          "name": "totalSupply",
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
          "name": "transfer",
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
          "name": "transferFrom",
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
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "shares",
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
        "lib/solmate/src/mixins/ERC4626.sol": "ERC4626"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/mixins/ERC4626.sol": {
        "keccak256": "0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b",
        "urls": [
          "bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1",
          "dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/FixedPointMathLib.sol": {
        "keccak256": "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843",
        "urls": [
          "bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9",
          "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"
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
    "absolutePath": "lib/solmate/src/mixins/ERC4626.sol",
    "id": 59953,
    "exportedSymbols": {
      "ERC20": [
        60340
      ],
      "ERC4626": [
        59952
      ],
      "FixedPointMathLib": [
        60538
      ],
      "SafeTransferLib": [
        60649
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:6477:83",
    "nodes": [
      {
        "id": 59433,
        "nodeType": "PragmaDirective",
        "src": "42:24:83",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 59435,
        "nodeType": "ImportDirective",
        "src": "68:42:83",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "../tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 59953,
        "sourceUnit": 60341,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59434,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60340,
              "src": "76:5:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59437,
        "nodeType": "ImportDirective",
        "src": "111:61:83",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
        "file": "../utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 59953,
        "sourceUnit": 60650,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59436,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60649,
              "src": "119:15:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59439,
        "nodeType": "ImportDirective",
        "src": "173:65:83",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/FixedPointMathLib.sol",
        "file": "../utils/FixedPointMathLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 59953,
        "sourceUnit": 60539,
        "symbolAliases": [
          {
            "foreign": {
              "id": 59438,
              "name": "FixedPointMathLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60538,
              "src": "181:17:83",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 59952,
        "nodeType": "ContractDefinition",
        "src": "398:6120:83",
        "nodes": [
          {
            "id": 59446,
            "nodeType": "UsingForDirective",
            "src": "439:32:83",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 59443,
              "name": "SafeTransferLib",
              "nameLocations": [
                "445:15:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60649,
              "src": "445:15:83"
            },
            "typeName": {
              "id": 59445,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 59444,
                "name": "ERC20",
                "nameLocations": [
                  "465:5:83"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 60340,
                "src": "465:5:83"
              },
              "referencedDeclaration": 60340,
              "src": "465:5:83",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$60340",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 59449,
            "nodeType": "UsingForDirective",
            "src": "476:36:83",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 59447,
              "name": "FixedPointMathLib",
              "nameLocations": [
                "482:17:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60538,
              "src": "482:17:83"
            },
            "typeName": {
              "id": 59448,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "504:7:83",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 59459,
            "nodeType": "EventDefinition",
            "src": "697:93:83",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "703:7:83",
            "parameters": {
              "id": 59458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59451,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "727:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59459,
                  "src": "711:22:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:83",
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
                  "id": 59453,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "751:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59459,
                  "src": "735:21:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59452,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:7:83",
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
                  "id": 59455,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "766:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59459,
                  "src": "758:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59454,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "758:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59457,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "782:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59459,
                  "src": "774:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59456,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "774:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "710:79:83"
            }
          },
          {
            "id": 59471,
            "nodeType": "EventDefinition",
            "src": "796:166:83",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db",
            "name": "Withdraw",
            "nameLocation": "802:8:83",
            "parameters": {
              "id": 59470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59461,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "836:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59471,
                  "src": "820:22:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59460,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:7:83",
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
                  "id": 59463,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "868:8:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59471,
                  "src": "852:24:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59462,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "852:7:83",
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
                  "id": 59465,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "902:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59471,
                  "src": "886:21:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59464,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "886:7:83",
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
                  "id": 59467,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "925:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59471,
                  "src": "917:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59469,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "949:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59471,
                  "src": "941:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59468,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "941:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "810:151:83"
            }
          },
          {
            "id": 59474,
            "nodeType": "VariableDeclaration",
            "src": "1149:28:83",
            "nodes": [],
            "constant": false,
            "functionSelector": "38d52e0f",
            "mutability": "immutable",
            "name": "asset",
            "nameLocation": "1172:5:83",
            "scope": 59952,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20_$60340",
              "typeString": "contract ERC20"
            },
            "typeName": {
              "id": 59473,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 59472,
                "name": "ERC20",
                "nameLocations": [
                  "1149:5:83"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 60340,
                "src": "1149:5:83"
              },
              "referencedDeclaration": 60340,
              "src": "1149:5:83",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$60340",
                "typeString": "contract ERC20"
              }
            },
            "visibility": "public"
          },
          {
            "id": 59496,
            "nodeType": "FunctionDefinition",
            "src": "1184:172:83",
            "nodes": [],
            "body": {
              "id": 59495,
              "nodeType": "Block",
              "src": "1325:31:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 59493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59491,
                      "name": "asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59474,
                      "src": "1335:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$60340",
                        "typeString": "contract ERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 59492,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59477,
                      "src": "1343:6:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$60340",
                        "typeString": "contract ERC20"
                      }
                    },
                    "src": "1335:14:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$60340",
                      "typeString": "contract ERC20"
                    }
                  },
                  "id": 59494,
                  "nodeType": "ExpressionStatement",
                  "src": "1335:14:83"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 59484,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59479,
                    "src": "1290:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 59485,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59481,
                    "src": "1297:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 59486,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59477,
                        "src": "1306:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$60340",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 59487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1313:8:83",
                      "memberName": "decimals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 59977,
                      "src": "1306:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                        "typeString": "function () view external returns (uint8)"
                      }
                    },
                    "id": 59488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1306:17:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 59489,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 59483,
                  "name": "ERC20",
                  "nameLocations": [
                    "1284:5:83"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 60340,
                  "src": "1284:5:83"
                },
                "nodeType": "ModifierInvocation",
                "src": "1284:40:83"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 59482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59477,
                  "mutability": "mutable",
                  "name": "_asset",
                  "nameLocation": "1211:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59496,
                  "src": "1205:12:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$60340",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 59476,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59475,
                      "name": "ERC20",
                      "nameLocations": [
                        "1205:5:83"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 60340,
                      "src": "1205:5:83"
                    },
                    "referencedDeclaration": 60340,
                    "src": "1205:5:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$60340",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59479,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "1241:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59496,
                  "src": "1227:19:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59478,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1227:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59481,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "1270:7:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59496,
                  "src": "1256:21:83",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59480,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1256:6:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1195:88:83"
            },
            "returnParameters": {
              "id": 59490,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1325:0:83"
            },
            "scope": 59952,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59548,
            "nodeType": "FunctionDefinition",
            "src": "1550:516:83",
            "nodes": [],
            "body": {
              "id": 59547,
              "nodeType": "Block",
              "src": "1641:425:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 59513,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "id": 59510,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 59506,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59503,
                                "src": "1735:6:83",
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
                                    "id": 59508,
                                    "name": "assets",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59498,
                                    "src": "1759:6:83",
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
                                  "id": 59507,
                                  "name": "previewDeposit",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59821,
                                  "src": "1744:14:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (uint256) view returns (uint256)"
                                  }
                                },
                                "id": 59509,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1744:22:83",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1735:31:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 59511,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1734:33:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 59512,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1771:1:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1734:38:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5a45524f5f534841524553",
                        "id": 59514,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1774:13:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2119bd5d92259e418533f96b824fbd100e3dea453e6ac4c5f7315e6344368f2f",
                          "typeString": "literal_string \"ZERO_SHARES\""
                        },
                        "value": "ZERO_SHARES"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2119bd5d92259e418533f96b824fbd100e3dea453e6ac4c5f7315e6344368f2f",
                          "typeString": "literal_string \"ZERO_SHARES\""
                        }
                      ],
                      "id": 59505,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1726:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1726:62:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59516,
                  "nodeType": "ExpressionStatement",
                  "src": "1726:62:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59520,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1891:3:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59521,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1895:6:83",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1891:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 59524,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "1911:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626_$59952",
                              "typeString": "contract ERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626_$59952",
                              "typeString": "contract ERC4626"
                            }
                          ],
                          "id": 59523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1903:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 59522,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1903:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 59525,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1903:13:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59526,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59498,
                        "src": "1918:6:83",
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
                        "id": 59517,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59474,
                        "src": "1868:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$60340",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 59519,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1874:16:83",
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 60608,
                      "src": "1868:22:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                        "typeString": "function (contract ERC20,address,address,uint256)"
                      }
                    },
                    "id": 59527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1868:57:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59528,
                  "nodeType": "ExpressionStatement",
                  "src": "1868:57:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59530,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59500,
                        "src": "1942:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59531,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59503,
                        "src": "1952:6:83",
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
                      "id": 59529,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60311,
                      "src": "1936:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 59532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1936:23:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59533,
                  "nodeType": "ExpressionStatement",
                  "src": "1936:23:83"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59535,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1983:3:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1987:6:83",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1983:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59537,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59500,
                        "src": "1995:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59538,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59498,
                        "src": "2005:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59539,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59503,
                        "src": "2013:6:83",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 59534,
                      "name": "Deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59459,
                      "src": "1975:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 59540,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1975:45:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59541,
                  "nodeType": "EmitStatement",
                  "src": "1970:50:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59543,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59498,
                        "src": "2044:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59544,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59503,
                        "src": "2052:6:83",
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
                      "id": 59542,
                      "name": "afterDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59951,
                      "src": "2031:12:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 59545,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2031:28:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59546,
                  "nodeType": "ExpressionStatement",
                  "src": "2031:28:83"
                }
              ]
            },
            "functionSelector": "6e553f65",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1559:7:83",
            "parameters": {
              "id": 59501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59498,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "1575:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59548,
                  "src": "1567:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59497,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1567:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59500,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "1591:8:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59548,
                  "src": "1583:16:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59499,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1566:34:83"
            },
            "returnParameters": {
              "id": 59504,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59503,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "1633:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59548,
                  "src": "1625:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59502,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1625:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1624:16:83"
            },
            "scope": 59952,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59594,
            "nodeType": "FunctionDefinition",
            "src": "2072:467:83",
            "nodes": [],
            "body": {
              "id": 59593,
              "nodeType": "Block",
              "src": "2160:379:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 59561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59557,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59555,
                      "src": "2170:6:83",
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
                          "id": 59559,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59550,
                          "src": "2191:6:83",
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
                        "id": 59558,
                        "name": "previewMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59845,
                        "src": "2179:11:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 59560,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2179:19:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2170:28:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59562,
                  "nodeType": "ExpressionStatement",
                  "src": "2170:28:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59566,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2364:3:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59567,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2368:6:83",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2364:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 59570,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2384:4:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626_$59952",
                              "typeString": "contract ERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626_$59952",
                              "typeString": "contract ERC4626"
                            }
                          ],
                          "id": 59569,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2376:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 59568,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2376:7:83",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 59571,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2376:13:83",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59572,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59555,
                        "src": "2391:6:83",
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
                        "id": 59563,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59474,
                        "src": "2341:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$60340",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 59565,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2347:16:83",
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 60608,
                      "src": "2341:22:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                        "typeString": "function (contract ERC20,address,address,uint256)"
                      }
                    },
                    "id": 59573,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2341:57:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59574,
                  "nodeType": "ExpressionStatement",
                  "src": "2341:57:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59576,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59552,
                        "src": "2415:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59577,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59550,
                        "src": "2425:6:83",
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
                      "id": 59575,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60311,
                      "src": "2409:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 59578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2409:23:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59579,
                  "nodeType": "ExpressionStatement",
                  "src": "2409:23:83"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59581,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2456:3:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59582,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2460:6:83",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2456:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59583,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59552,
                        "src": "2468:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59584,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59555,
                        "src": "2478:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59585,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59550,
                        "src": "2486:6:83",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 59580,
                      "name": "Deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59459,
                      "src": "2448:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 59586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2448:45:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59587,
                  "nodeType": "EmitStatement",
                  "src": "2443:50:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59589,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59555,
                        "src": "2517:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59590,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59550,
                        "src": "2525:6:83",
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
                      "id": 59588,
                      "name": "afterDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59951,
                      "src": "2504:12:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 59591,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2504:28:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59592,
                  "nodeType": "ExpressionStatement",
                  "src": "2504:28:83"
                }
              ]
            },
            "functionSelector": "94bf804d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2081:4:83",
            "parameters": {
              "id": 59553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59550,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2094:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59594,
                  "src": "2086:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2086:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59552,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2110:8:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59594,
                  "src": "2102:16:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59551,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2102:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2085:34:83"
            },
            "returnParameters": {
              "id": 59556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59555,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2152:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59594,
                  "src": "2144:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2144:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2143:16:83"
            },
            "scope": 59952,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59672,
            "nodeType": "FunctionDefinition",
            "src": "2545:679:83",
            "nodes": [],
            "body": {
              "id": 59671,
              "nodeType": "Block",
              "src": "2682:542:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 59609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59605,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59603,
                      "src": "2692:6:83",
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
                          "id": 59607,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59596,
                          "src": "2717:6:83",
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
                        "id": 59606,
                        "name": "previewWithdraw",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59869,
                        "src": "2701:15:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 59608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2701:23:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2692:32:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59610,
                  "nodeType": "ExpressionStatement",
                  "src": "2692:32:83"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 59614,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 59611,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "2806:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 59612,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2810:6:83",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "2806:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 59613,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59600,
                      "src": "2820:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2806:19:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 59644,
                  "nodeType": "IfStatement",
                  "src": "2802:228:83",
                  "trueBody": {
                    "id": 59643,
                    "nodeType": "Block",
                    "src": "2827:203:83",
                    "statements": [
                      {
                        "assignments": [
                          59616
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 59616,
                            "mutability": "mutable",
                            "name": "allowed",
                            "nameLocation": "2849:7:83",
                            "nodeType": "VariableDeclaration",
                            "scope": 59643,
                            "src": "2841:15:83",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 59615,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2841:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 59623,
                        "initialValue": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 59617,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59989,
                              "src": "2859:9:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 59619,
                            "indexExpression": {
                              "id": 59618,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59600,
                              "src": "2869:5:83",
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
                            "src": "2859:16:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 59622,
                          "indexExpression": {
                            "expression": {
                              "id": 59620,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2876:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 59621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2880:6:83",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2876:10:83",
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
                          "src": "2859:28:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2841:46:83"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 59630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 59624,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59616,
                            "src": "2942:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 59627,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2958:7:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 59626,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2958:7:83",
                                    "typeDescriptions": {}
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  }
                                ],
                                "id": 59625,
                                "name": "type",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -27,
                                "src": "2953:4:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 59628,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2953:13:83",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                "typeString": "type(uint256)"
                              }
                            },
                            "id": 59629,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2967:3:83",
                            "memberName": "max",
                            "nodeType": "MemberAccess",
                            "src": "2953:17:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2942:28:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 59642,
                        "nodeType": "IfStatement",
                        "src": "2938:81:83",
                        "trueBody": {
                          "expression": {
                            "id": 59640,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 59631,
                                  "name": "allowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59989,
                                  "src": "2972:9:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 59635,
                                "indexExpression": {
                                  "id": 59632,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59600,
                                  "src": "2982:5:83",
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
                                "src": "2972:16:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 59636,
                              "indexExpression": {
                                "expression": {
                                  "id": 59633,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2989:3:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 59634,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2993:6:83",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "2989:10:83",
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
                              "src": "2972:28:83",
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
                              "id": 59639,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 59637,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59616,
                                "src": "3003:7:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 59638,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59603,
                                "src": "3013:6:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3003:16:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2972:47:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 59641,
                          "nodeType": "ExpressionStatement",
                          "src": "2972:47:83"
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59646,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59596,
                        "src": "3055:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59647,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59603,
                        "src": "3063:6:83",
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
                      "id": 59645,
                      "name": "beforeWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59943,
                      "src": "3040:14:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 59648,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3040:30:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59649,
                  "nodeType": "ExpressionStatement",
                  "src": "3040:30:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59651,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59600,
                        "src": "3087:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59652,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59603,
                        "src": "3094:6:83",
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
                      "id": 59650,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60339,
                      "src": "3081:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 59653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3081:20:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59654,
                  "nodeType": "ExpressionStatement",
                  "src": "3081:20:83"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59656,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3126:3:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59657,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3130:6:83",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3126:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59658,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59598,
                        "src": "3138:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59659,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59600,
                        "src": "3148:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59660,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59596,
                        "src": "3155:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59661,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59603,
                        "src": "3163:6:83",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                      "id": 59655,
                      "name": "Withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59471,
                      "src": "3117:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256)"
                      }
                    },
                    "id": 59662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3117:53:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59663,
                  "nodeType": "EmitStatement",
                  "src": "3112:58:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59667,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59598,
                        "src": "3200:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59668,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59596,
                        "src": "3210:6:83",
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
                        "id": 59664,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59474,
                        "src": "3181:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$60340",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 59666,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3187:12:83",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 60628,
                      "src": "3181:18:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                        "typeString": "function (contract ERC20,address,uint256)"
                      }
                    },
                    "id": 59669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3181:36:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59670,
                  "nodeType": "ExpressionStatement",
                  "src": "3181:36:83"
                }
              ]
            },
            "functionSelector": "b460af94",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2554:8:83",
            "parameters": {
              "id": 59601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59596,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2580:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59672,
                  "src": "2572:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2572:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59598,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2604:8:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59672,
                  "src": "2596:16:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2596:7:83",
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
                  "id": 59600,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2630:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59672,
                  "src": "2622:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59599,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2622:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2562:79:83"
            },
            "returnParameters": {
              "id": 59604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59603,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2674:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59672,
                  "src": "2666:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2666:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2665:16:83"
            },
            "scope": 59952,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59756,
            "nodeType": "FunctionDefinition",
            "src": "3230:713:83",
            "nodes": [],
            "body": {
              "id": 59755,
              "nodeType": "Block",
              "src": "3365:578:83",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 59686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 59683,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "3379:3:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 59684,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3383:6:83",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "3379:10:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 59685,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59678,
                      "src": "3393:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3379:19:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 59716,
                  "nodeType": "IfStatement",
                  "src": "3375:228:83",
                  "trueBody": {
                    "id": 59715,
                    "nodeType": "Block",
                    "src": "3400:203:83",
                    "statements": [
                      {
                        "assignments": [
                          59688
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 59688,
                            "mutability": "mutable",
                            "name": "allowed",
                            "nameLocation": "3422:7:83",
                            "nodeType": "VariableDeclaration",
                            "scope": 59715,
                            "src": "3414:15:83",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 59687,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3414:7:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 59695,
                        "initialValue": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 59689,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59989,
                              "src": "3432:9:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 59691,
                            "indexExpression": {
                              "id": 59690,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 59678,
                              "src": "3442:5:83",
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
                            "src": "3432:16:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 59694,
                          "indexExpression": {
                            "expression": {
                              "id": 59692,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3449:3:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 59693,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3453:6:83",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3449:10:83",
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
                          "src": "3432:28:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3414:46:83"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 59702,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 59696,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59688,
                            "src": "3515:7:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 59699,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3531:7:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 59698,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3531:7:83",
                                    "typeDescriptions": {}
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  }
                                ],
                                "id": 59697,
                                "name": "type",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -27,
                                "src": "3526:4:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 59700,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3526:13:83",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                "typeString": "type(uint256)"
                              }
                            },
                            "id": 59701,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3540:3:83",
                            "memberName": "max",
                            "nodeType": "MemberAccess",
                            "src": "3526:17:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3515:28:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 59714,
                        "nodeType": "IfStatement",
                        "src": "3511:81:83",
                        "trueBody": {
                          "expression": {
                            "id": 59712,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 59703,
                                  "name": "allowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59989,
                                  "src": "3545:9:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 59707,
                                "indexExpression": {
                                  "id": 59704,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59678,
                                  "src": "3555:5:83",
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
                                "src": "3545:16:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 59708,
                              "indexExpression": {
                                "expression": {
                                  "id": 59705,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "3562:3:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 59706,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3566:6:83",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "3562:10:83",
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
                              "src": "3545:28:83",
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
                              "id": 59711,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 59709,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59688,
                                "src": "3576:7:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 59710,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59674,
                                "src": "3586:6:83",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3576:16:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3545:47:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 59713,
                          "nodeType": "ExpressionStatement",
                          "src": "3545:47:83"
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 59725,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "id": 59722,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 59718,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59681,
                                "src": "3696:6:83",
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
                                    "id": 59720,
                                    "name": "shares",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59674,
                                    "src": "3719:6:83",
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
                                  "id": 59719,
                                  "name": "previewRedeem",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59881,
                                  "src": "3705:13:83",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (uint256) view returns (uint256)"
                                  }
                                },
                                "id": 59721,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3705:21:83",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3696:30:83",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 59723,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3695:32:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 59724,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3731:1:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3695:37:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5a45524f5f415353455453",
                        "id": 59726,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3734:13:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bf169ab2ef12d57708bb5afe72ea54ba3ad2eccb91dd95f37571afa377c52483",
                          "typeString": "literal_string \"ZERO_ASSETS\""
                        },
                        "value": "ZERO_ASSETS"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bf169ab2ef12d57708bb5afe72ea54ba3ad2eccb91dd95f37571afa377c52483",
                          "typeString": "literal_string \"ZERO_ASSETS\""
                        }
                      ],
                      "id": 59717,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3687:7:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3687:61:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59728,
                  "nodeType": "ExpressionStatement",
                  "src": "3687:61:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59730,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59681,
                        "src": "3774:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59731,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59674,
                        "src": "3782:6:83",
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
                      "id": 59729,
                      "name": "beforeWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59943,
                      "src": "3759:14:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 59732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3759:30:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59733,
                  "nodeType": "ExpressionStatement",
                  "src": "3759:30:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59735,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59678,
                        "src": "3806:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59736,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59674,
                        "src": "3813:6:83",
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
                      "id": 59734,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60339,
                      "src": "3800:5:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 59737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3800:20:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59738,
                  "nodeType": "ExpressionStatement",
                  "src": "3800:20:83"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59740,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3845:3:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59741,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3849:6:83",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3845:10:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59742,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59676,
                        "src": "3857:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59743,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59678,
                        "src": "3867:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59744,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59681,
                        "src": "3874:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 59745,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59674,
                        "src": "3882:6:83",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                      "id": 59739,
                      "name": "Withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59471,
                      "src": "3836:8:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256)"
                      }
                    },
                    "id": 59746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3836:53:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59747,
                  "nodeType": "EmitStatement",
                  "src": "3831:58:83"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59751,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59676,
                        "src": "3919:8:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59752,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59681,
                        "src": "3929:6:83",
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
                        "id": 59748,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59474,
                        "src": "3900:5:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$60340",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 59750,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3906:12:83",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 60628,
                      "src": "3900:18:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                        "typeString": "function (contract ERC20,address,uint256)"
                      }
                    },
                    "id": 59753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3900:36:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59754,
                  "nodeType": "ExpressionStatement",
                  "src": "3900:36:83"
                }
              ]
            },
            "functionSelector": "ba087652",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "3239:6:83",
            "parameters": {
              "id": 59679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59674,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3263:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59756,
                  "src": "3255:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59676,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "3287:8:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59756,
                  "src": "3279:16:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3279:7:83",
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
                  "id": 59678,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3313:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59756,
                  "src": "3305:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59677,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3305:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3245:79:83"
            },
            "returnParameters": {
              "id": 59682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59681,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3357:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59756,
                  "src": "3349:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3348:16:83"
            },
            "scope": 59952,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59761,
            "nodeType": "FunctionDefinition",
            "src": "4133:61:83",
            "nodes": [],
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "4142:11:83",
            "parameters": {
              "id": 59757,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4153:2:83"
            },
            "returnParameters": {
              "id": 59760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59759,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59761,
                  "src": "4185:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4185:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4184:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59785,
            "nodeType": "FunctionDefinition",
            "src": "4200:257:83",
            "nodes": [],
            "body": {
              "id": 59784,
              "nodeType": "Block",
              "src": "4279:178:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59769
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59769,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "4297:6:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59784,
                      "src": "4289:14:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 59768,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4289:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59771,
                  "initialValue": {
                    "id": 59770,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59979,
                    "src": "4306:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4289:28:83"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 59774,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 59772,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59769,
                        "src": "4387:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 59773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4397:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4387:11:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "id": 59778,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59769,
                          "src": "4428:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 59779,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59761,
                            "src": "4436:11:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 59780,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4436:13:83",
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
                        "expression": {
                          "id": 59776,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59763,
                          "src": "4410:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 59777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4417:10:83",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60469,
                        "src": "4410:17:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 59781,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4410:40:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 59782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "4387:63:83",
                    "trueExpression": {
                      "id": 59775,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59763,
                      "src": "4401:6:83",
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
                  "functionReturnParameters": 59767,
                  "id": 59783,
                  "nodeType": "Return",
                  "src": "4380:70:83"
                }
              ]
            },
            "functionSelector": "c6e6f592",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "4209:15:83",
            "parameters": {
              "id": 59764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59763,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4233:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59785,
                  "src": "4225:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4225:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4224:16:83"
            },
            "returnParameters": {
              "id": 59767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59766,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59785,
                  "src": "4270:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59765,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4270:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4269:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59809,
            "nodeType": "FunctionDefinition",
            "src": "4463:257:83",
            "nodes": [],
            "body": {
              "id": 59808,
              "nodeType": "Block",
              "src": "4542:178:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59793
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59793,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "4560:6:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59808,
                      "src": "4552:14:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 59792,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4552:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59795,
                  "initialValue": {
                    "id": 59794,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59979,
                    "src": "4569:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4552:28:83"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 59798,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 59796,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59793,
                        "src": "4650:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 59797,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4660:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4650:11:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 59802,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59761,
                            "src": "4691:11:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 59803,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4691:13:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 59804,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59793,
                          "src": "4706:6:83",
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
                          "id": 59800,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59787,
                          "src": "4673:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 59801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4680:10:83",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60469,
                        "src": "4673:17:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 59805,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4673:40:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 59806,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "4650:63:83",
                    "trueExpression": {
                      "id": 59799,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59787,
                      "src": "4664:6:83",
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
                  "functionReturnParameters": 59791,
                  "id": 59807,
                  "nodeType": "Return",
                  "src": "4643:70:83"
                }
              ]
            },
            "functionSelector": "07a2d13a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "4472:15:83",
            "parameters": {
              "id": 59788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59787,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4496:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59809,
                  "src": "4488:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59786,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4488:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4487:16:83"
            },
            "returnParameters": {
              "id": 59791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59790,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59809,
                  "src": "4533:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59789,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4533:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4532:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59821,
            "nodeType": "FunctionDefinition",
            "src": "4726:125:83",
            "nodes": [],
            "body": {
              "id": 59820,
              "nodeType": "Block",
              "src": "4804:47:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59817,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59811,
                        "src": "4837:6:83",
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
                      "id": 59816,
                      "name": "convertToShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59785,
                      "src": "4821:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 59818,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4821:23:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59815,
                  "id": 59819,
                  "nodeType": "Return",
                  "src": "4814:30:83"
                }
              ]
            },
            "functionSelector": "ef8b30f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "4735:14:83",
            "parameters": {
              "id": 59812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59811,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4758:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59821,
                  "src": "4750:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59810,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4750:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4749:16:83"
            },
            "returnParameters": {
              "id": 59815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59814,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59821,
                  "src": "4795:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59813,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4795:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4794:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59845,
            "nodeType": "FunctionDefinition",
            "src": "4857:251:83",
            "nodes": [],
            "body": {
              "id": 59844,
              "nodeType": "Block",
              "src": "4932:176:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59829
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59829,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "4950:6:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59844,
                      "src": "4942:14:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 59828,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4942:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59831,
                  "initialValue": {
                    "id": 59830,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59979,
                    "src": "4959:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4942:28:83"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 59834,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 59832,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59829,
                        "src": "5040:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 59833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5050:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5040:11:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 59838,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59761,
                            "src": "5079:11:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 59839,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5079:13:83",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 59840,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59829,
                          "src": "5094:6:83",
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
                          "id": 59836,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59823,
                          "src": "5063:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 59837,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5070:8:83",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60482,
                        "src": "5063:15:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 59841,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5063:38:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 59842,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "5040:61:83",
                    "trueExpression": {
                      "id": 59835,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59823,
                      "src": "5054:6:83",
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
                  "functionReturnParameters": 59827,
                  "id": 59843,
                  "nodeType": "Return",
                  "src": "5033:68:83"
                }
              ]
            },
            "functionSelector": "b3d7f6b9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "4866:11:83",
            "parameters": {
              "id": 59824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59823,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4886:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59845,
                  "src": "4878:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4878:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4877:16:83"
            },
            "returnParameters": {
              "id": 59827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59826,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59845,
                  "src": "4923:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4923:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4922:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59869,
            "nodeType": "FunctionDefinition",
            "src": "5114:255:83",
            "nodes": [],
            "body": {
              "id": 59868,
              "nodeType": "Block",
              "src": "5193:176:83",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59853
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59853,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "5211:6:83",
                      "nodeType": "VariableDeclaration",
                      "scope": 59868,
                      "src": "5203:14:83",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 59852,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5203:7:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59855,
                  "initialValue": {
                    "id": 59854,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 59979,
                    "src": "5220:11:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5203:28:83"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 59858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 59856,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59853,
                        "src": "5301:6:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 59857,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5311:1:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5301:11:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "id": 59862,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59853,
                          "src": "5340:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 59863,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 59761,
                            "src": "5348:11:83",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 59864,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5348:13:83",
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
                        "expression": {
                          "id": 59860,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59847,
                          "src": "5324:6:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 59861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5331:8:83",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 60482,
                        "src": "5324:15:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 59865,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5324:38:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 59866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "5301:61:83",
                    "trueExpression": {
                      "id": 59859,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59847,
                      "src": "5315:6:83",
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
                  "functionReturnParameters": 59851,
                  "id": 59867,
                  "nodeType": "Return",
                  "src": "5294:68:83"
                }
              ]
            },
            "functionSelector": "0a28a477",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "5123:15:83",
            "parameters": {
              "id": 59848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59847,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5147:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59869,
                  "src": "5139:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5139:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5138:16:83"
            },
            "returnParameters": {
              "id": 59851,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59850,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59869,
                  "src": "5184:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59849,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5184:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5183:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59881,
            "nodeType": "FunctionDefinition",
            "src": "5375:124:83",
            "nodes": [],
            "body": {
              "id": 59880,
              "nodeType": "Block",
              "src": "5452:47:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 59877,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59871,
                        "src": "5485:6:83",
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
                      "id": 59876,
                      "name": "convertToAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59809,
                      "src": "5469:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 59878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5469:23:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59875,
                  "id": 59879,
                  "nodeType": "Return",
                  "src": "5462:30:83"
                }
              ]
            },
            "functionSelector": "4cdad506",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "5384:13:83",
            "parameters": {
              "id": 59872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59871,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5406:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59881,
                  "src": "5398:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59870,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5398:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5397:16:83"
            },
            "returnParameters": {
              "id": 59875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59874,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59881,
                  "src": "5443:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59873,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5443:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5442:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59895,
            "nodeType": "FunctionDefinition",
            "src": "5696:108:83",
            "nodes": [],
            "body": {
              "id": 59894,
              "nodeType": "Block",
              "src": "5763:41:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 59890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5785:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 59889,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5785:7:83",
                            "typeDescriptions": {}
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          }
                        ],
                        "id": 59888,
                        "name": "type",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -27,
                        "src": "5780:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 59891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5780:13:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_meta_type_t_uint256",
                        "typeString": "type(uint256)"
                      }
                    },
                    "id": 59892,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "5794:3:83",
                    "memberName": "max",
                    "nodeType": "MemberAccess",
                    "src": "5780:17:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59887,
                  "id": 59893,
                  "nodeType": "Return",
                  "src": "5773:24:83"
                }
              ]
            },
            "functionSelector": "402d267d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "5705:10:83",
            "parameters": {
              "id": 59884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59883,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59895,
                  "src": "5716:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59882,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5716:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5715:9:83"
            },
            "returnParameters": {
              "id": 59887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59886,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59895,
                  "src": "5754:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5754:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5753:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59909,
            "nodeType": "FunctionDefinition",
            "src": "5810:105:83",
            "nodes": [],
            "body": {
              "id": 59908,
              "nodeType": "Block",
              "src": "5874:41:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 59904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5896:7:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 59903,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5896:7:83",
                            "typeDescriptions": {}
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          }
                        ],
                        "id": 59902,
                        "name": "type",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -27,
                        "src": "5891:4:83",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 59905,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5891:13:83",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_meta_type_t_uint256",
                        "typeString": "type(uint256)"
                      }
                    },
                    "id": 59906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "5905:3:83",
                    "memberName": "max",
                    "nodeType": "MemberAccess",
                    "src": "5891:17:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59901,
                  "id": 59907,
                  "nodeType": "Return",
                  "src": "5884:24:83"
                }
              ]
            },
            "functionSelector": "c63d75b6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "5819:7:83",
            "parameters": {
              "id": 59898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59897,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59909,
                  "src": "5827:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59896,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5827:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5826:9:83"
            },
            "returnParameters": {
              "id": 59901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59900,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59909,
                  "src": "5865:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59899,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5865:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5864:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59923,
            "nodeType": "FunctionDefinition",
            "src": "5921:131:83",
            "nodes": [],
            "body": {
              "id": 59922,
              "nodeType": "Block",
              "src": "5995:57:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 59917,
                          "name": "balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59983,
                          "src": "6028:9:83",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 59919,
                        "indexExpression": {
                          "id": 59918,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59911,
                          "src": "6038:5:83",
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
                        "src": "6028:16:83",
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
                      "id": 59916,
                      "name": "convertToAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59809,
                      "src": "6012:15:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 59920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6012:33:83",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59915,
                  "id": 59921,
                  "nodeType": "Return",
                  "src": "6005:40:83"
                }
              ]
            },
            "functionSelector": "ce96cb77",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "5930:11:83",
            "parameters": {
              "id": 59912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59911,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5950:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59923,
                  "src": "5942:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59910,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5942:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5941:15:83"
            },
            "returnParameters": {
              "id": 59915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59914,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59923,
                  "src": "5986:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5986:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5985:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59935,
            "nodeType": "FunctionDefinition",
            "src": "6058:112:83",
            "nodes": [],
            "body": {
              "id": 59934,
              "nodeType": "Block",
              "src": "6130:40:83",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 59930,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59983,
                      "src": "6147:9:83",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 59932,
                    "indexExpression": {
                      "id": 59931,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59925,
                      "src": "6157:5:83",
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
                    "src": "6147:16:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59929,
                  "id": 59933,
                  "nodeType": "Return",
                  "src": "6140:23:83"
                }
              ]
            },
            "functionSelector": "d905777e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "6067:9:83",
            "parameters": {
              "id": 59926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59925,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "6085:5:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59935,
                  "src": "6077:13:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59924,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6077:7:83",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6076:15:83"
            },
            "returnParameters": {
              "id": 59929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59928,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59935,
                  "src": "6121:7:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59927,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6121:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6120:9:83"
            },
            "scope": 59952,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59943,
            "nodeType": "FunctionDefinition",
            "src": "6362:75:83",
            "nodes": [],
            "body": {
              "id": 59942,
              "nodeType": "Block",
              "src": "6435:2:83",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "beforeWithdraw",
            "nameLocation": "6371:14:83",
            "parameters": {
              "id": 59940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59937,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "6394:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59943,
                  "src": "6386:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6386:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59939,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "6410:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59943,
                  "src": "6402:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59938,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6402:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6385:32:83"
            },
            "returnParameters": {
              "id": 59941,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6435:0:83"
            },
            "scope": 59952,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 59951,
            "nodeType": "FunctionDefinition",
            "src": "6443:73:83",
            "nodes": [],
            "body": {
              "id": 59950,
              "nodeType": "Block",
              "src": "6514:2:83",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "afterDeposit",
            "nameLocation": "6452:12:83",
            "parameters": {
              "id": 59948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59945,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "6473:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59951,
                  "src": "6465:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59944,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6465:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 59947,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "6489:6:83",
                  "nodeType": "VariableDeclaration",
                  "scope": 59951,
                  "src": "6481:14:83",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 59946,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6481:7:83",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6464:32:83"
            },
            "returnParameters": {
              "id": 59949,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6514:0:83"
            },
            "scope": 59952,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 59441,
              "name": "ERC20",
              "nameLocations": [
                "427:5:83"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60340,
              "src": "427:5:83"
            },
            "id": 59442,
            "nodeType": "InheritanceSpecifier",
            "src": "427:5:83"
          }
        ],
        "canonicalName": "ERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 59440,
          "nodeType": "StructuredDocumentation",
          "src": "240:158:83",
          "text": "@notice Minimal ERC4626 tokenized Vault implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/mixins/ERC4626.sol)"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          59952,
          60340
        ],
        "name": "ERC4626",
        "nameLocation": "416:7:83",
        "scope": 59953,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 83
} as const;
