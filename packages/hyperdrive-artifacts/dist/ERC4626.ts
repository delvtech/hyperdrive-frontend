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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/mixins/ERC4626.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Minimal ERC4626 tokenized Vault implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/mixins/ERC4626.sol\":\"ERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/mixins/ERC4626.sol\":{\"keccak256\":\"0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1\",\"dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
    "id": 63569,
    "exportedSymbols": {
      "ERC20": [
        63956
      ],
      "ERC4626": [
        63568
      ],
      "FixedPointMathLib": [
        64154
      ],
      "SafeTransferLib": [
        64265
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:6477:99",
    "nodes": [
      {
        "id": 63049,
        "nodeType": "PragmaDirective",
        "src": "42:24:99",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 63051,
        "nodeType": "ImportDirective",
        "src": "68:42:99",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "../tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63569,
        "sourceUnit": 63957,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63050,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63956,
              "src": "76:5:99",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63053,
        "nodeType": "ImportDirective",
        "src": "111:61:99",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
        "file": "../utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63569,
        "sourceUnit": 64266,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63052,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 64265,
              "src": "119:15:99",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63055,
        "nodeType": "ImportDirective",
        "src": "173:65:99",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/FixedPointMathLib.sol",
        "file": "../utils/FixedPointMathLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63569,
        "sourceUnit": 64155,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63054,
              "name": "FixedPointMathLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 64154,
              "src": "181:17:99",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63568,
        "nodeType": "ContractDefinition",
        "src": "398:6120:99",
        "nodes": [
          {
            "id": 63062,
            "nodeType": "UsingForDirective",
            "src": "439:32:99",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 63059,
              "name": "SafeTransferLib",
              "nameLocations": [
                "445:15:99"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 64265,
              "src": "445:15:99"
            },
            "typeName": {
              "id": 63061,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 63060,
                "name": "ERC20",
                "nameLocations": [
                  "465:5:99"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63956,
                "src": "465:5:99"
              },
              "referencedDeclaration": 63956,
              "src": "465:5:99",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$63956",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 63065,
            "nodeType": "UsingForDirective",
            "src": "476:36:99",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 63063,
              "name": "FixedPointMathLib",
              "nameLocations": [
                "482:17:99"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 64154,
              "src": "482:17:99"
            },
            "typeName": {
              "id": 63064,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "504:7:99",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 63075,
            "nodeType": "EventDefinition",
            "src": "697:93:99",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "703:7:99",
            "parameters": {
              "id": 63074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63067,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "727:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63075,
                  "src": "711:22:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63066,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:99",
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
                  "id": 63069,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "751:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63075,
                  "src": "735:21:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63068,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "735:7:99",
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
                  "id": 63071,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "766:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63075,
                  "src": "758:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63070,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "758:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63073,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "782:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63075,
                  "src": "774:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63072,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "774:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "710:79:99"
            }
          },
          {
            "id": 63087,
            "nodeType": "EventDefinition",
            "src": "796:166:99",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db",
            "name": "Withdraw",
            "nameLocation": "802:8:99",
            "parameters": {
              "id": 63086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63077,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "caller",
                  "nameLocation": "836:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63087,
                  "src": "820:22:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63076,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:7:99",
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
                  "id": 63079,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "868:8:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63087,
                  "src": "852:24:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63078,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "852:7:99",
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
                  "id": 63081,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "902:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63087,
                  "src": "886:21:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63080,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "886:7:99",
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
                  "id": 63083,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "925:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63087,
                  "src": "917:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63082,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63085,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "949:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63087,
                  "src": "941:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63084,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "941:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "810:151:99"
            }
          },
          {
            "id": 63090,
            "nodeType": "VariableDeclaration",
            "src": "1149:28:99",
            "nodes": [],
            "constant": false,
            "functionSelector": "38d52e0f",
            "mutability": "immutable",
            "name": "asset",
            "nameLocation": "1172:5:99",
            "scope": 63568,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20_$63956",
              "typeString": "contract ERC20"
            },
            "typeName": {
              "id": 63089,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 63088,
                "name": "ERC20",
                "nameLocations": [
                  "1149:5:99"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63956,
                "src": "1149:5:99"
              },
              "referencedDeclaration": 63956,
              "src": "1149:5:99",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$63956",
                "typeString": "contract ERC20"
              }
            },
            "visibility": "public"
          },
          {
            "id": 63112,
            "nodeType": "FunctionDefinition",
            "src": "1184:172:99",
            "nodes": [],
            "body": {
              "id": 63111,
              "nodeType": "Block",
              "src": "1325:31:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 63109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 63107,
                      "name": "asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63090,
                      "src": "1335:5:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$63956",
                        "typeString": "contract ERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 63108,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63093,
                      "src": "1343:6:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$63956",
                        "typeString": "contract ERC20"
                      }
                    },
                    "src": "1335:14:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63956",
                      "typeString": "contract ERC20"
                    }
                  },
                  "id": 63110,
                  "nodeType": "ExpressionStatement",
                  "src": "1335:14:99"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 63100,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63095,
                    "src": "1290:5:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 63101,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63097,
                    "src": "1297:7:99",
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
                        "id": 63102,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63093,
                        "src": "1306:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$63956",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 63103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1313:8:99",
                      "memberName": "decimals",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63593,
                      "src": "1306:15:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                        "typeString": "function () view external returns (uint8)"
                      }
                    },
                    "id": 63104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1306:17:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 63105,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 63099,
                  "name": "ERC20",
                  "nameLocations": [
                    "1284:5:99"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 63956,
                  "src": "1284:5:99"
                },
                "nodeType": "ModifierInvocation",
                "src": "1284:40:99"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 63098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63093,
                  "mutability": "mutable",
                  "name": "_asset",
                  "nameLocation": "1211:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63112,
                  "src": "1205:12:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63956",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 63092,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63091,
                      "name": "ERC20",
                      "nameLocations": [
                        "1205:5:99"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63956,
                      "src": "1205:5:99"
                    },
                    "referencedDeclaration": 63956,
                    "src": "1205:5:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63956",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63095,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "1241:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63112,
                  "src": "1227:19:99",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63094,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1227:6:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63097,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "1270:7:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63112,
                  "src": "1256:21:99",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 63096,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1256:6:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1195:88:99"
            },
            "returnParameters": {
              "id": 63106,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1325:0:99"
            },
            "scope": 63568,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 63164,
            "nodeType": "FunctionDefinition",
            "src": "1550:516:99",
            "nodes": [],
            "body": {
              "id": 63163,
              "nodeType": "Block",
              "src": "1641:425:99",
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
                        "id": 63129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "id": 63126,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 63122,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63119,
                                "src": "1735:6:99",
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
                                    "id": 63124,
                                    "name": "assets",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 63114,
                                    "src": "1759:6:99",
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
                                  "id": 63123,
                                  "name": "previewDeposit",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63437,
                                  "src": "1744:14:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (uint256) view returns (uint256)"
                                  }
                                },
                                "id": 63125,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1744:22:99",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1735:31:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 63127,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1734:33:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 63128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1771:1:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1734:38:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5a45524f5f534841524553",
                        "id": 63130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1774:13:99",
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
                      "id": 63121,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1726:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1726:62:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63132,
                  "nodeType": "ExpressionStatement",
                  "src": "1726:62:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63136,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1891:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63137,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1895:6:99",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1891:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 63140,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "1911:4:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626_$63568",
                              "typeString": "contract ERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626_$63568",
                              "typeString": "contract ERC4626"
                            }
                          ],
                          "id": 63139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1903:7:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63138,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1903:7:99",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1903:13:99",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63142,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63114,
                        "src": "1918:6:99",
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
                        "id": 63133,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63090,
                        "src": "1868:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$63956",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 63135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1874:16:99",
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64224,
                      "src": "1868:22:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63956_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63956_$",
                        "typeString": "function (contract ERC20,address,address,uint256)"
                      }
                    },
                    "id": 63143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1868:57:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63144,
                  "nodeType": "ExpressionStatement",
                  "src": "1868:57:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63146,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63116,
                        "src": "1942:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63147,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63119,
                        "src": "1952:6:99",
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
                      "id": 63145,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63927,
                      "src": "1936:5:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 63148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1936:23:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63149,
                  "nodeType": "ExpressionStatement",
                  "src": "1936:23:99"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63151,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1983:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1987:6:99",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1983:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63153,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63116,
                        "src": "1995:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63154,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63114,
                        "src": "2005:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63155,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63119,
                        "src": "2013:6:99",
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
                      "id": 63150,
                      "name": "Deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63075,
                      "src": "1975:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 63156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1975:45:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63157,
                  "nodeType": "EmitStatement",
                  "src": "1970:50:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63159,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63114,
                        "src": "2044:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63160,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63119,
                        "src": "2052:6:99",
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
                      "id": 63158,
                      "name": "afterDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63567,
                      "src": "2031:12:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 63161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2031:28:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63162,
                  "nodeType": "ExpressionStatement",
                  "src": "2031:28:99"
                }
              ]
            },
            "functionSelector": "6e553f65",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1559:7:99",
            "parameters": {
              "id": 63117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63114,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "1575:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63164,
                  "src": "1567:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63113,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1567:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63116,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "1591:8:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63164,
                  "src": "1583:16:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1583:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1566:34:99"
            },
            "returnParameters": {
              "id": 63120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63119,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "1633:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63164,
                  "src": "1625:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63118,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1625:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1624:16:99"
            },
            "scope": 63568,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63210,
            "nodeType": "FunctionDefinition",
            "src": "2072:467:99",
            "nodes": [],
            "body": {
              "id": 63209,
              "nodeType": "Block",
              "src": "2160:379:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 63177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 63173,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63171,
                      "src": "2170:6:99",
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
                          "id": 63175,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63166,
                          "src": "2191:6:99",
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
                        "id": 63174,
                        "name": "previewMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63461,
                        "src": "2179:11:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 63176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2179:19:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2170:28:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63178,
                  "nodeType": "ExpressionStatement",
                  "src": "2170:28:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63182,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2364:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2368:6:99",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2364:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 63186,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2384:4:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC4626_$63568",
                              "typeString": "contract ERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC4626_$63568",
                              "typeString": "contract ERC4626"
                            }
                          ],
                          "id": 63185,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2376:7:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63184,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2376:7:99",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63187,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2376:13:99",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63188,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63171,
                        "src": "2391:6:99",
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
                        "id": 63179,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63090,
                        "src": "2341:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$63956",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 63181,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2347:16:99",
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64224,
                      "src": "2341:22:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63956_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63956_$",
                        "typeString": "function (contract ERC20,address,address,uint256)"
                      }
                    },
                    "id": 63189,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2341:57:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63190,
                  "nodeType": "ExpressionStatement",
                  "src": "2341:57:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63192,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63168,
                        "src": "2415:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63193,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63166,
                        "src": "2425:6:99",
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
                      "id": 63191,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63927,
                      "src": "2409:5:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 63194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2409:23:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63195,
                  "nodeType": "ExpressionStatement",
                  "src": "2409:23:99"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63197,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2456:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2460:6:99",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2456:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63199,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63168,
                        "src": "2468:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63200,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63171,
                        "src": "2478:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63201,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63166,
                        "src": "2486:6:99",
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
                      "id": 63196,
                      "name": "Deposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63075,
                      "src": "2448:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 63202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2448:45:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63203,
                  "nodeType": "EmitStatement",
                  "src": "2443:50:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63205,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63171,
                        "src": "2517:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63206,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63166,
                        "src": "2525:6:99",
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
                      "id": 63204,
                      "name": "afterDeposit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63567,
                      "src": "2504:12:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 63207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2504:28:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63208,
                  "nodeType": "ExpressionStatement",
                  "src": "2504:28:99"
                }
              ]
            },
            "functionSelector": "94bf804d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2081:4:99",
            "parameters": {
              "id": 63169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63166,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2094:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63210,
                  "src": "2086:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63165,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2086:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63168,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2110:8:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63210,
                  "src": "2102:16:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63167,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2102:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2085:34:99"
            },
            "returnParameters": {
              "id": 63172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63171,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2152:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63210,
                  "src": "2144:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63170,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2144:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2143:16:99"
            },
            "scope": 63568,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63288,
            "nodeType": "FunctionDefinition",
            "src": "2545:679:99",
            "nodes": [],
            "body": {
              "id": 63287,
              "nodeType": "Block",
              "src": "2682:542:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 63225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 63221,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63219,
                      "src": "2692:6:99",
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
                          "id": 63223,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63212,
                          "src": "2717:6:99",
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
                        "id": 63222,
                        "name": "previewWithdraw",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63485,
                        "src": "2701:15:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view returns (uint256)"
                        }
                      },
                      "id": 63224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2701:23:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2692:32:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63226,
                  "nodeType": "ExpressionStatement",
                  "src": "2692:32:99"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 63230,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 63227,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "2806:3:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 63228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2810:6:99",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "2806:10:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 63229,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63216,
                      "src": "2820:5:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2806:19:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63260,
                  "nodeType": "IfStatement",
                  "src": "2802:228:99",
                  "trueBody": {
                    "id": 63259,
                    "nodeType": "Block",
                    "src": "2827:203:99",
                    "statements": [
                      {
                        "assignments": [
                          63232
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 63232,
                            "mutability": "mutable",
                            "name": "allowed",
                            "nameLocation": "2849:7:99",
                            "nodeType": "VariableDeclaration",
                            "scope": 63259,
                            "src": "2841:15:99",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 63231,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "2841:7:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 63239,
                        "initialValue": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 63233,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63605,
                              "src": "2859:9:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 63235,
                            "indexExpression": {
                              "id": 63234,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63216,
                              "src": "2869:5:99",
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
                            "src": "2859:16:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 63238,
                          "indexExpression": {
                            "expression": {
                              "id": 63236,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2876:3:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 63237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2880:6:99",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2876:10:99",
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
                          "src": "2859:28:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2841:46:99"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 63246,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 63240,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63232,
                            "src": "2942:7:99",
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
                                  "id": 63243,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2958:7:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 63242,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2958:7:99",
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
                                "id": 63241,
                                "name": "type",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -27,
                                "src": "2953:4:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 63244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2953:13:99",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                "typeString": "type(uint256)"
                              }
                            },
                            "id": 63245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2967:3:99",
                            "memberName": "max",
                            "nodeType": "MemberAccess",
                            "src": "2953:17:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2942:28:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 63258,
                        "nodeType": "IfStatement",
                        "src": "2938:81:99",
                        "trueBody": {
                          "expression": {
                            "id": 63256,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 63247,
                                  "name": "allowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63605,
                                  "src": "2972:9:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 63251,
                                "indexExpression": {
                                  "id": 63248,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63216,
                                  "src": "2982:5:99",
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
                                "src": "2972:16:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 63252,
                              "indexExpression": {
                                "expression": {
                                  "id": 63249,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "2989:3:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 63250,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2993:6:99",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "2989:10:99",
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
                              "src": "2972:28:99",
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
                              "id": 63255,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 63253,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63232,
                                "src": "3003:7:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 63254,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63219,
                                "src": "3013:6:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3003:16:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2972:47:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 63257,
                          "nodeType": "ExpressionStatement",
                          "src": "2972:47:99"
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63262,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63212,
                        "src": "3055:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63263,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63219,
                        "src": "3063:6:99",
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
                      "id": 63261,
                      "name": "beforeWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63559,
                      "src": "3040:14:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 63264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3040:30:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63265,
                  "nodeType": "ExpressionStatement",
                  "src": "3040:30:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63267,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63216,
                        "src": "3087:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63268,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63219,
                        "src": "3094:6:99",
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
                      "id": 63266,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63955,
                      "src": "3081:5:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 63269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3081:20:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63270,
                  "nodeType": "ExpressionStatement",
                  "src": "3081:20:99"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63272,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3126:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3130:6:99",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3126:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63274,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63214,
                        "src": "3138:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63275,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63216,
                        "src": "3148:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63276,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63212,
                        "src": "3155:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63277,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63219,
                        "src": "3163:6:99",
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
                      "id": 63271,
                      "name": "Withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63087,
                      "src": "3117:8:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256)"
                      }
                    },
                    "id": 63278,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3117:53:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63279,
                  "nodeType": "EmitStatement",
                  "src": "3112:58:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63283,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63214,
                        "src": "3200:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63284,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63212,
                        "src": "3210:6:99",
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
                        "id": 63280,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63090,
                        "src": "3181:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$63956",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 63282,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3187:12:99",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64244,
                      "src": "3181:18:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63956_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63956_$",
                        "typeString": "function (contract ERC20,address,uint256)"
                      }
                    },
                    "id": 63285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3181:36:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63286,
                  "nodeType": "ExpressionStatement",
                  "src": "3181:36:99"
                }
              ]
            },
            "functionSelector": "b460af94",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2554:8:99",
            "parameters": {
              "id": 63217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63212,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2580:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63288,
                  "src": "2572:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63211,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2572:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63214,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2604:8:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63288,
                  "src": "2596:16:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63213,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2596:7:99",
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
                  "id": 63216,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2630:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63288,
                  "src": "2622:13:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63215,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2622:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2562:79:99"
            },
            "returnParameters": {
              "id": 63220,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63219,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2674:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63288,
                  "src": "2666:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63218,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2666:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2665:16:99"
            },
            "scope": 63568,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63372,
            "nodeType": "FunctionDefinition",
            "src": "3230:713:99",
            "nodes": [],
            "body": {
              "id": 63371,
              "nodeType": "Block",
              "src": "3365:578:99",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 63302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 63299,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "3379:3:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 63300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3383:6:99",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "3379:10:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 63301,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63294,
                      "src": "3393:5:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3379:19:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63332,
                  "nodeType": "IfStatement",
                  "src": "3375:228:99",
                  "trueBody": {
                    "id": 63331,
                    "nodeType": "Block",
                    "src": "3400:203:99",
                    "statements": [
                      {
                        "assignments": [
                          63304
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 63304,
                            "mutability": "mutable",
                            "name": "allowed",
                            "nameLocation": "3422:7:99",
                            "nodeType": "VariableDeclaration",
                            "scope": 63331,
                            "src": "3414:15:99",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 63303,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3414:7:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 63311,
                        "initialValue": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 63305,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63605,
                              "src": "3432:9:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 63307,
                            "indexExpression": {
                              "id": 63306,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63294,
                              "src": "3442:5:99",
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
                            "src": "3432:16:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 63310,
                          "indexExpression": {
                            "expression": {
                              "id": 63308,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3449:3:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 63309,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3453:6:99",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3449:10:99",
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
                          "src": "3432:28:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3414:46:99"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 63318,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 63312,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63304,
                            "src": "3515:7:99",
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
                                  "id": 63315,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "3531:7:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 63314,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "3531:7:99",
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
                                "id": 63313,
                                "name": "type",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -27,
                                "src": "3526:4:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 63316,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3526:13:99",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                "typeString": "type(uint256)"
                              }
                            },
                            "id": 63317,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "3540:3:99",
                            "memberName": "max",
                            "nodeType": "MemberAccess",
                            "src": "3526:17:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3515:28:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 63330,
                        "nodeType": "IfStatement",
                        "src": "3511:81:99",
                        "trueBody": {
                          "expression": {
                            "id": 63328,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 63319,
                                  "name": "allowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63605,
                                  "src": "3545:9:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 63323,
                                "indexExpression": {
                                  "id": 63320,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63294,
                                  "src": "3555:5:99",
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
                                "src": "3545:16:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 63324,
                              "indexExpression": {
                                "expression": {
                                  "id": 63321,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "3562:3:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 63322,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3566:6:99",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "3562:10:99",
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
                              "src": "3545:28:99",
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
                              "id": 63327,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 63325,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63304,
                                "src": "3576:7:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 63326,
                                "name": "shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63290,
                                "src": "3586:6:99",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3576:16:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3545:47:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 63329,
                          "nodeType": "ExpressionStatement",
                          "src": "3545:47:99"
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
                        "id": 63341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "id": 63338,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 63334,
                                "name": "assets",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63297,
                                "src": "3696:6:99",
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
                                    "id": 63336,
                                    "name": "shares",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 63290,
                                    "src": "3719:6:99",
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
                                  "id": 63335,
                                  "name": "previewRedeem",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 63497,
                                  "src": "3705:13:99",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                    "typeString": "function (uint256) view returns (uint256)"
                                  }
                                },
                                "id": 63337,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3705:21:99",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "3696:30:99",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 63339,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "3695:32:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 63340,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3731:1:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3695:37:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5a45524f5f415353455453",
                        "id": 63342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3734:13:99",
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
                      "id": 63333,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3687:7:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 63343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3687:61:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63344,
                  "nodeType": "ExpressionStatement",
                  "src": "3687:61:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63346,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63297,
                        "src": "3774:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63347,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63290,
                        "src": "3782:6:99",
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
                      "id": 63345,
                      "name": "beforeWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63559,
                      "src": "3759:14:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 63348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3759:30:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63349,
                  "nodeType": "ExpressionStatement",
                  "src": "3759:30:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63351,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63294,
                        "src": "3806:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63352,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63290,
                        "src": "3813:6:99",
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
                      "id": 63350,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63955,
                      "src": "3800:5:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 63353,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3800:20:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63354,
                  "nodeType": "ExpressionStatement",
                  "src": "3800:20:99"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63356,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3845:3:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3849:6:99",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3845:10:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63358,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63292,
                        "src": "3857:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63359,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63294,
                        "src": "3867:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63360,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63297,
                        "src": "3874:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63361,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63290,
                        "src": "3882:6:99",
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
                      "id": 63355,
                      "name": "Withdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63087,
                      "src": "3836:8:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256,uint256)"
                      }
                    },
                    "id": 63362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3836:53:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63363,
                  "nodeType": "EmitStatement",
                  "src": "3831:58:99"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63367,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63292,
                        "src": "3919:8:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63368,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63297,
                        "src": "3929:6:99",
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
                        "id": 63364,
                        "name": "asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63090,
                        "src": "3900:5:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$63956",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 63366,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3906:12:99",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64244,
                      "src": "3900:18:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63956_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63956_$",
                        "typeString": "function (contract ERC20,address,uint256)"
                      }
                    },
                    "id": 63369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3900:36:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63370,
                  "nodeType": "ExpressionStatement",
                  "src": "3900:36:99"
                }
              ]
            },
            "functionSelector": "ba087652",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "3239:6:99",
            "parameters": {
              "id": 63295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63290,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3263:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63372,
                  "src": "3255:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63292,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "3287:8:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63372,
                  "src": "3279:16:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63291,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3279:7:99",
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
                  "id": 63294,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3313:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63372,
                  "src": "3305:13:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63293,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3305:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3245:79:99"
            },
            "returnParameters": {
              "id": 63298,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63297,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3357:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63372,
                  "src": "3349:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63296,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3348:16:99"
            },
            "scope": 63568,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63377,
            "nodeType": "FunctionDefinition",
            "src": "4133:61:99",
            "nodes": [],
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "4142:11:99",
            "parameters": {
              "id": 63373,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4153:2:99"
            },
            "returnParameters": {
              "id": 63376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63375,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63377,
                  "src": "4185:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63374,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4185:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4184:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63401,
            "nodeType": "FunctionDefinition",
            "src": "4200:257:99",
            "nodes": [],
            "body": {
              "id": 63400,
              "nodeType": "Block",
              "src": "4279:178:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63385
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63385,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "4297:6:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63400,
                      "src": "4289:14:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63384,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4289:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63387,
                  "initialValue": {
                    "id": 63386,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63595,
                    "src": "4306:11:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4289:28:99"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 63390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 63388,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63385,
                        "src": "4387:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 63389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4397:1:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4387:11:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "id": 63394,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63385,
                          "src": "4428:6:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 63395,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63377,
                            "src": "4436:11:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 63396,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4436:13:99",
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
                          "id": 63392,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63379,
                          "src": "4410:6:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 63393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4417:10:99",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64085,
                        "src": "4410:17:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 63397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4410:40:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 63398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "4387:63:99",
                    "trueExpression": {
                      "id": 63391,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63379,
                      "src": "4401:6:99",
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
                  "functionReturnParameters": 63383,
                  "id": 63399,
                  "nodeType": "Return",
                  "src": "4380:70:99"
                }
              ]
            },
            "functionSelector": "c6e6f592",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "4209:15:99",
            "parameters": {
              "id": 63380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63379,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4233:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63401,
                  "src": "4225:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63378,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4225:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4224:16:99"
            },
            "returnParameters": {
              "id": 63383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63382,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63401,
                  "src": "4270:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4270:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4269:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63425,
            "nodeType": "FunctionDefinition",
            "src": "4463:257:99",
            "nodes": [],
            "body": {
              "id": 63424,
              "nodeType": "Block",
              "src": "4542:178:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63409
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63409,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "4560:6:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63424,
                      "src": "4552:14:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63408,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4552:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63411,
                  "initialValue": {
                    "id": 63410,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63595,
                    "src": "4569:11:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4552:28:99"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 63414,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 63412,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63409,
                        "src": "4650:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 63413,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4660:1:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4650:11:99",
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
                            "id": 63418,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63377,
                            "src": "4691:11:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 63419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4691:13:99",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 63420,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63409,
                          "src": "4706:6:99",
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
                          "id": 63416,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63403,
                          "src": "4673:6:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 63417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4680:10:99",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64085,
                        "src": "4673:17:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 63421,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4673:40:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 63422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "4650:63:99",
                    "trueExpression": {
                      "id": 63415,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63403,
                      "src": "4664:6:99",
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
                  "functionReturnParameters": 63407,
                  "id": 63423,
                  "nodeType": "Return",
                  "src": "4643:70:99"
                }
              ]
            },
            "functionSelector": "07a2d13a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "4472:15:99",
            "parameters": {
              "id": 63404,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63403,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4496:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63425,
                  "src": "4488:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63402,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4488:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4487:16:99"
            },
            "returnParameters": {
              "id": 63407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63406,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63425,
                  "src": "4533:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4533:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4532:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63437,
            "nodeType": "FunctionDefinition",
            "src": "4726:125:99",
            "nodes": [],
            "body": {
              "id": 63436,
              "nodeType": "Block",
              "src": "4804:47:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63433,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63427,
                        "src": "4837:6:99",
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
                      "id": 63432,
                      "name": "convertToShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63401,
                      "src": "4821:15:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 63434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4821:23:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63431,
                  "id": 63435,
                  "nodeType": "Return",
                  "src": "4814:30:99"
                }
              ]
            },
            "functionSelector": "ef8b30f7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "4735:14:99",
            "parameters": {
              "id": 63428,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63427,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4758:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63437,
                  "src": "4750:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63426,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4750:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4749:16:99"
            },
            "returnParameters": {
              "id": 63431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63430,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63437,
                  "src": "4795:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63429,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4795:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4794:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63461,
            "nodeType": "FunctionDefinition",
            "src": "4857:251:99",
            "nodes": [],
            "body": {
              "id": 63460,
              "nodeType": "Block",
              "src": "4932:176:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63445
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63445,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "4950:6:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63460,
                      "src": "4942:14:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63444,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4942:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63447,
                  "initialValue": {
                    "id": 63446,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63595,
                    "src": "4959:11:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4942:28:99"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 63450,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 63448,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63445,
                        "src": "5040:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 63449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5050:1:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5040:11:99",
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
                            "id": 63454,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63377,
                            "src": "5079:11:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 63455,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5079:13:99",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 63456,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63445,
                          "src": "5094:6:99",
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
                          "id": 63452,
                          "name": "shares",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63439,
                          "src": "5063:6:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 63453,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5070:8:99",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64098,
                        "src": "5063:15:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 63457,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5063:38:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 63458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "5040:61:99",
                    "trueExpression": {
                      "id": 63451,
                      "name": "shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63439,
                      "src": "5054:6:99",
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
                  "functionReturnParameters": 63443,
                  "id": 63459,
                  "nodeType": "Return",
                  "src": "5033:68:99"
                }
              ]
            },
            "functionSelector": "b3d7f6b9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "4866:11:99",
            "parameters": {
              "id": 63440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63439,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4886:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63461,
                  "src": "4878:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4878:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4877:16:99"
            },
            "returnParameters": {
              "id": 63443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63442,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63461,
                  "src": "4923:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4923:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4922:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63485,
            "nodeType": "FunctionDefinition",
            "src": "5114:255:99",
            "nodes": [],
            "body": {
              "id": 63484,
              "nodeType": "Block",
              "src": "5193:176:99",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    63469
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63469,
                      "mutability": "mutable",
                      "name": "supply",
                      "nameLocation": "5211:6:99",
                      "nodeType": "VariableDeclaration",
                      "scope": 63484,
                      "src": "5203:14:99",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63468,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5203:7:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63471,
                  "initialValue": {
                    "id": 63470,
                    "name": "totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 63595,
                    "src": "5220:11:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5203:28:99"
                },
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 63474,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 63472,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63469,
                        "src": "5301:6:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 63473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5311:1:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "5301:11:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "id": 63478,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63469,
                          "src": "5340:6:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 63479,
                            "name": "totalAssets",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63377,
                            "src": "5348:11:99",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 63480,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5348:13:99",
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
                          "id": 63476,
                          "name": "assets",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63463,
                          "src": "5324:6:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 63477,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5331:8:99",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64098,
                        "src": "5324:15:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 63481,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5324:38:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 63482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "5301:61:99",
                    "trueExpression": {
                      "id": 63475,
                      "name": "assets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63463,
                      "src": "5315:6:99",
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
                  "functionReturnParameters": 63467,
                  "id": 63483,
                  "nodeType": "Return",
                  "src": "5294:68:99"
                }
              ]
            },
            "functionSelector": "0a28a477",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "5123:15:99",
            "parameters": {
              "id": 63464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63463,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5147:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63485,
                  "src": "5139:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63462,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5139:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5138:16:99"
            },
            "returnParameters": {
              "id": 63467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63466,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63485,
                  "src": "5184:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63465,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5184:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5183:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63497,
            "nodeType": "FunctionDefinition",
            "src": "5375:124:99",
            "nodes": [],
            "body": {
              "id": 63496,
              "nodeType": "Block",
              "src": "5452:47:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63493,
                        "name": "shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63487,
                        "src": "5485:6:99",
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
                      "id": 63492,
                      "name": "convertToAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63425,
                      "src": "5469:15:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 63494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5469:23:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63491,
                  "id": 63495,
                  "nodeType": "Return",
                  "src": "5462:30:99"
                }
              ]
            },
            "functionSelector": "4cdad506",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "5384:13:99",
            "parameters": {
              "id": 63488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63487,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5406:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63497,
                  "src": "5398:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63486,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5398:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5397:16:99"
            },
            "returnParameters": {
              "id": 63491,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63490,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63497,
                  "src": "5443:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63489,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5443:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5442:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63511,
            "nodeType": "FunctionDefinition",
            "src": "5696:108:99",
            "nodes": [],
            "body": {
              "id": 63510,
              "nodeType": "Block",
              "src": "5763:41:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 63506,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5785:7:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 63505,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5785:7:99",
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
                        "id": 63504,
                        "name": "type",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -27,
                        "src": "5780:4:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 63507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5780:13:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_meta_type_t_uint256",
                        "typeString": "type(uint256)"
                      }
                    },
                    "id": 63508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "5794:3:99",
                    "memberName": "max",
                    "nodeType": "MemberAccess",
                    "src": "5780:17:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63503,
                  "id": 63509,
                  "nodeType": "Return",
                  "src": "5773:24:99"
                }
              ]
            },
            "functionSelector": "402d267d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "5705:10:99",
            "parameters": {
              "id": 63500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63499,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63511,
                  "src": "5716:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63498,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5716:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5715:9:99"
            },
            "returnParameters": {
              "id": 63503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63502,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63511,
                  "src": "5754:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63501,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5754:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5753:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63525,
            "nodeType": "FunctionDefinition",
            "src": "5810:105:99",
            "nodes": [],
            "body": {
              "id": 63524,
              "nodeType": "Block",
              "src": "5874:41:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 63520,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5896:7:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 63519,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5896:7:99",
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
                        "id": 63518,
                        "name": "type",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -27,
                        "src": "5891:4:99",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 63521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5891:13:99",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_meta_type_t_uint256",
                        "typeString": "type(uint256)"
                      }
                    },
                    "id": 63522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "5905:3:99",
                    "memberName": "max",
                    "nodeType": "MemberAccess",
                    "src": "5891:17:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63517,
                  "id": 63523,
                  "nodeType": "Return",
                  "src": "5884:24:99"
                }
              ]
            },
            "functionSelector": "c63d75b6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "5819:7:99",
            "parameters": {
              "id": 63514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63513,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63525,
                  "src": "5827:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63512,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5827:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5826:9:99"
            },
            "returnParameters": {
              "id": 63517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63516,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63525,
                  "src": "5865:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63515,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5865:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5864:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63539,
            "nodeType": "FunctionDefinition",
            "src": "5921:131:99",
            "nodes": [],
            "body": {
              "id": 63538,
              "nodeType": "Block",
              "src": "5995:57:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 63533,
                          "name": "balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63599,
                          "src": "6028:9:99",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 63535,
                        "indexExpression": {
                          "id": 63534,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63527,
                          "src": "6038:5:99",
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
                        "src": "6028:16:99",
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
                      "id": 63532,
                      "name": "convertToAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63425,
                      "src": "6012:15:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 63536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6012:33:99",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63531,
                  "id": 63537,
                  "nodeType": "Return",
                  "src": "6005:40:99"
                }
              ]
            },
            "functionSelector": "ce96cb77",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "5930:11:99",
            "parameters": {
              "id": 63528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63527,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5950:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63539,
                  "src": "5942:13:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63526,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5942:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5941:15:99"
            },
            "returnParameters": {
              "id": 63531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63530,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63539,
                  "src": "5986:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63529,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5986:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5985:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63551,
            "nodeType": "FunctionDefinition",
            "src": "6058:112:99",
            "nodes": [],
            "body": {
              "id": 63550,
              "nodeType": "Block",
              "src": "6130:40:99",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 63546,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63599,
                      "src": "6147:9:99",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 63548,
                    "indexExpression": {
                      "id": 63547,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63541,
                      "src": "6157:5:99",
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
                    "src": "6147:16:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 63545,
                  "id": 63549,
                  "nodeType": "Return",
                  "src": "6140:23:99"
                }
              ]
            },
            "functionSelector": "d905777e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "6067:9:99",
            "parameters": {
              "id": 63542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63541,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "6085:5:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63551,
                  "src": "6077:13:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63540,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6077:7:99",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6076:15:99"
            },
            "returnParameters": {
              "id": 63545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63544,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 63551,
                  "src": "6121:7:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6121:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6120:9:99"
            },
            "scope": 63568,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 63559,
            "nodeType": "FunctionDefinition",
            "src": "6362:75:99",
            "nodes": [],
            "body": {
              "id": 63558,
              "nodeType": "Block",
              "src": "6435:2:99",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "beforeWithdraw",
            "nameLocation": "6371:14:99",
            "parameters": {
              "id": 63556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63553,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "6394:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63559,
                  "src": "6386:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63552,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6386:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63555,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "6410:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63559,
                  "src": "6402:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6402:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6385:32:99"
            },
            "returnParameters": {
              "id": 63557,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6435:0:99"
            },
            "scope": 63568,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 63567,
            "nodeType": "FunctionDefinition",
            "src": "6443:73:99",
            "nodes": [],
            "body": {
              "id": 63566,
              "nodeType": "Block",
              "src": "6514:2:99",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "afterDeposit",
            "nameLocation": "6452:12:99",
            "parameters": {
              "id": 63564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63561,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "6473:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63567,
                  "src": "6465:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63560,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6465:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63563,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "6489:6:99",
                  "nodeType": "VariableDeclaration",
                  "scope": 63567,
                  "src": "6481:14:99",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6481:7:99",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6464:32:99"
            },
            "returnParameters": {
              "id": 63565,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6514:0:99"
            },
            "scope": 63568,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 63057,
              "name": "ERC20",
              "nameLocations": [
                "427:5:99"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63956,
              "src": "427:5:99"
            },
            "id": 63058,
            "nodeType": "InheritanceSpecifier",
            "src": "427:5:99"
          }
        ],
        "canonicalName": "ERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 63056,
          "nodeType": "StructuredDocumentation",
          "src": "240:158:99",
          "text": "@notice Minimal ERC4626 tokenized Vault implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/mixins/ERC4626.sol)"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          63568,
          63956
        ],
        "name": "ERC4626",
        "nameLocation": "416:7:99",
        "scope": 63569,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 99
} as const;
