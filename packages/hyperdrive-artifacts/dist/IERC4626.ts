export const IERC4626 = 
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
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
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
          "name": "value",
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
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
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
          "internalType": "address",
          "name": "asset",
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
          "name": "assets",
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
          "name": "shares",
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
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "maxDeposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maxAssets",
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
      "name": "maxMint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "maxShares",
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
          "name": "maxShares",
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
          "name": "maxAssets",
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
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "previewDeposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "shares",
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
          "name": "assets",
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
          "name": "assets",
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
          "name": "shares",
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
          "name": "totalAssets",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"title\":\"ERC4626 interface See: https://eips.ethereum.org/EIPS/eip-4626\",\"version\":1},\"userdoc\":{\"events\":{\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `assets` for `shares`, and transferred those `shares` to `receiver`.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `shares` for `assets`, and transferred those `assets` to `receiver`.\"}},\"kind\":\"user\",\"methods\":{\"asset()\":{\"notice\":\"The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing.\"},\"convertToAssets(uint256)\":{\"notice\":\"The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met.\"},\"convertToShares(uint256)\":{\"notice\":\"The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met.\"},\"deposit(uint256,address)\":{\"notice\":\"Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens.\"},\"maxDeposit(address)\":{\"notice\":\"Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call.\"},\"maxMint(address)\":{\"notice\":\"Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call.\"},\"maxRedeem(address)\":{\"notice\":\"Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call.\"},\"maxWithdraw(address)\":{\"notice\":\"Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call.\"},\"mint(uint256,address)\":{\"notice\":\"Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens.\"},\"previewDeposit(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions.\"},\"previewMint(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions.\"},\"previewRedeem(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"},\"totalAssets()\":{\"notice\":\"Total amount of the underlying asset that is \\\"managed\\\" by Vault.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]}},\"version\":1}",
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
              "name": "sender",
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
              "name": "value",
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
              "name": "sender",
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
              "internalType": "address",
              "name": "asset",
              "type": "address"
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
              "name": "assets",
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
              "name": "shares",
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
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxDeposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maxAssets",
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
          "name": "maxMint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "maxShares",
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
              "name": "maxShares",
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
              "name": "maxAssets",
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
              "name": "shares",
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
              "name": "assets",
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
              "name": "assets",
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
              "name": "shares",
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
              "name": "totalAssets",
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
        "methods": {
          "asset()": {
            "notice": "The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing."
          },
          "convertToAssets(uint256)": {
            "notice": "The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met."
          },
          "convertToShares(uint256)": {
            "notice": "The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met."
          },
          "deposit(uint256,address)": {
            "notice": "Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens."
          },
          "maxDeposit(address)": {
            "notice": "Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call."
          },
          "maxMint(address)": {
            "notice": "Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call."
          },
          "maxRedeem(address)": {
            "notice": "Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call."
          },
          "maxWithdraw(address)": {
            "notice": "Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call."
          },
          "mint(uint256,address)": {
            "notice": "Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens."
          },
          "previewDeposit(uint256)": {
            "notice": "Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions."
          },
          "previewMint(uint256)": {
            "notice": "Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions."
          },
          "previewRedeem(uint256)": {
            "notice": "Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions."
          },
          "previewWithdraw(uint256)": {
            "notice": "Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions."
          },
          "redeem(uint256,address,address)": {
            "notice": "Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`."
          },
          "totalAssets()": {
            "notice": "Total amount of the underlying asset that is \"managed\" by Vault."
          },
          "withdraw(uint256,address,address)": {
            "notice": "Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`."
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
        "contracts/src/interfaces/IERC4626.sol": "IERC4626"
      },
      "libraries": {}
    },
    "sources": {
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IERC4626.sol",
    "id": 3256,
    "exportedSymbols": {
      "IERC20": [
        3030
      ],
      "IERC4626": [
        3255
      ]
    },
    "nodeType": "SourceUnit",
    "src": "152:5540:15",
    "nodes": [
      {
        "id": 3091,
        "nodeType": "PragmaDirective",
        "src": "152:23:15",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 3093,
        "nodeType": "ImportDirective",
        "src": "177:38:15",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 3256,
        "sourceUnit": 3031,
        "symbolAliases": [
          {
            "foreign": {
              "id": 3092,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3030,
              "src": "186:6:15",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 3255,
        "nodeType": "ContractDefinition",
        "src": "295:5396:15",
        "nodes": [
          {
            "id": 3107,
            "nodeType": "EventDefinition",
            "src": "610:134:15",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 3097,
              "nodeType": "StructuredDocumentation",
              "src": "494:111:15",
              "text": "@notice `sender` has exchanged `assets` for `shares`,\n and transferred those `shares` to `receiver`."
            },
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "616:7:15",
            "parameters": {
              "id": 3106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3099,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "649:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3107,
                  "src": "633:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3098,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:15",
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
                  "id": 3101,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "681:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3107,
                  "src": "665:24:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3100,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "665:7:15",
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
                  "id": 3103,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "707:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3107,
                  "src": "699:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3102,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3105,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "731:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3107,
                  "src": "723:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3104,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "623:120:15"
            }
          },
          {
            "id": 3118,
            "nodeType": "EventDefinition",
            "src": "866:135:15",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 3108,
              "nodeType": "StructuredDocumentation",
              "src": "750:111:15",
              "text": "@notice `sender` has exchanged `shares` for `assets`,\n and transferred those `assets` to `receiver`."
            },
            "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
            "name": "Withdraw",
            "nameLocation": "872:8:15",
            "parameters": {
              "id": 3117,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3110,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "906:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3118,
                  "src": "890:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "890:7:15",
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
                  "id": 3112,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "938:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3118,
                  "src": "922:24:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3111,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:15",
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
                  "id": 3114,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "964:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3118,
                  "src": "956:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3113,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3116,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "988:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3118,
                  "src": "980:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "880:120:15"
            }
          },
          {
            "id": 3124,
            "nodeType": "FunctionDefinition",
            "src": "1303:63:15",
            "nodes": [],
            "documentation": {
              "id": 3119,
              "nodeType": "StructuredDocumentation",
              "src": "1173:125:15",
              "text": "@notice The address of the underlying ERC20 token used for\n the Vault for accounting, depositing, and withdrawing."
            },
            "functionSelector": "38d52e0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "1312:5:15",
            "parameters": {
              "id": 3120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1317:2:15"
            },
            "returnParameters": {
              "id": 3123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3122,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "1359:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3124,
                  "src": "1351:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3121,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1351:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1350:15:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3130,
            "nodeType": "FunctionDefinition",
            "src": "1461:75:15",
            "nodes": [],
            "documentation": {
              "id": 3125,
              "nodeType": "StructuredDocumentation",
              "src": "1372:84:15",
              "text": "@notice Total amount of the underlying asset that\n is \"managed\" by Vault."
            },
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "1470:11:15",
            "parameters": {
              "id": 3126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1481:2:15"
            },
            "returnParameters": {
              "id": 3129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3128,
                  "mutability": "mutable",
                  "name": "totalAssets",
                  "nameLocation": "1523:11:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3130,
                  "src": "1515:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1515:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1514:21:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3140,
            "nodeType": "FunctionDefinition",
            "src": "1835:115:15",
            "nodes": [],
            "documentation": {
              "id": 3131,
              "nodeType": "StructuredDocumentation",
              "src": "1716:114:15",
              "text": "@notice Mints `shares` Vault shares to `receiver` by\n depositing exactly `assets` of underlying tokens."
            },
            "functionSelector": "6e553f65",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1844:7:15",
            "parameters": {
              "id": 3136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3133,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "1869:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3140,
                  "src": "1861:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3135,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "1893:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3140,
                  "src": "1885:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1851:56:15"
            },
            "returnParameters": {
              "id": 3139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3138,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "1942:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3140,
                  "src": "1934:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1934:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1933:16:15"
            },
            "scope": 3255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3150,
            "nodeType": "FunctionDefinition",
            "src": "2075:112:15",
            "nodes": [],
            "documentation": {
              "id": 3141,
              "nodeType": "StructuredDocumentation",
              "src": "1956:114:15",
              "text": "@notice Mints exactly `shares` Vault shares to `receiver`\n by depositing `assets` of underlying tokens."
            },
            "functionSelector": "94bf804d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2084:4:15",
            "parameters": {
              "id": 3146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3143,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2106:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3150,
                  "src": "2098:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3142,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3145,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2130:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3150,
                  "src": "2122:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3144,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2122:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2088:56:15"
            },
            "returnParameters": {
              "id": 3149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3148,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2179:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3150,
                  "src": "2171:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3147,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2170:16:15"
            },
            "scope": 3255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3162,
            "nodeType": "FunctionDefinition",
            "src": "2302:139:15",
            "nodes": [],
            "documentation": {
              "id": 3151,
              "nodeType": "StructuredDocumentation",
              "src": "2193:104:15",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "b460af94",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2311:8:15",
            "parameters": {
              "id": 3158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3153,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2337:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3162,
                  "src": "2329:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3152,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2329:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3155,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2361:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3162,
                  "src": "2353:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2353:7:15",
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
                  "id": 3157,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2387:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3162,
                  "src": "2379:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2379:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2319:79:15"
            },
            "returnParameters": {
              "id": 3161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3160,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2433:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3162,
                  "src": "2425:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2425:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2424:16:15"
            },
            "scope": 3255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3174,
            "nodeType": "FunctionDefinition",
            "src": "2556:137:15",
            "nodes": [],
            "documentation": {
              "id": 3163,
              "nodeType": "StructuredDocumentation",
              "src": "2447:104:15",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "ba087652",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "2565:6:15",
            "parameters": {
              "id": 3170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3165,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2589:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3174,
                  "src": "2581:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2581:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3167,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2613:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3174,
                  "src": "2605:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3166,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:7:15",
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
                  "id": 3169,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2639:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3174,
                  "src": "2631:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3168,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2631:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2571:79:15"
            },
            "returnParameters": {
              "id": 3173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3172,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2685:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3174,
                  "src": "2677:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3171,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2677:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2676:16:15"
            },
            "scope": 3255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3182,
            "nodeType": "FunctionDefinition",
            "src": "3044:102:15",
            "nodes": [],
            "documentation": {
              "id": 3175,
              "nodeType": "StructuredDocumentation",
              "src": "2871:168:15",
              "text": "@notice The amount of shares that the vault would\n exchange for the amount of assets provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "c6e6f592",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "3053:15:15",
            "parameters": {
              "id": 3178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3177,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3086:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3182,
                  "src": "3078:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3176,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3078:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3068:30:15"
            },
            "returnParameters": {
              "id": 3181,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3180,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3138:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3182,
                  "src": "3130:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3179,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3129:16:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3190,
            "nodeType": "FunctionDefinition",
            "src": "3325:102:15",
            "nodes": [],
            "documentation": {
              "id": 3183,
              "nodeType": "StructuredDocumentation",
              "src": "3152:168:15",
              "text": "@notice The amount of assets that the vault would\n exchange for the amount of shares provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "07a2d13a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "3334:15:15",
            "parameters": {
              "id": 3186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3185,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3367:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3190,
                  "src": "3359:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3184,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3359:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3349:30:15"
            },
            "returnParameters": {
              "id": 3189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3188,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3419:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3190,
                  "src": "3411:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3187,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3411:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:16:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3198,
            "nodeType": "FunctionDefinition",
            "src": "3637:99:15",
            "nodes": [],
            "documentation": {
              "id": 3191,
              "nodeType": "StructuredDocumentation",
              "src": "3433:199:15",
              "text": "@notice Total number of underlying assets that can\n be deposited by `owner` into the Vault, where `owner`\n corresponds to the input parameter `receiver` of a\n `deposit` call."
            },
            "functionSelector": "402d267d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "3646:10:15",
            "parameters": {
              "id": 3194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3193,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3674:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3198,
                  "src": "3666:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3666:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3656:29:15"
            },
            "returnParameters": {
              "id": 3197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3196,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "3725:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3198,
                  "src": "3717:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3195,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3716:19:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3206,
            "nodeType": "FunctionDefinition",
            "src": "3909:101:15",
            "nodes": [],
            "documentation": {
              "id": 3199,
              "nodeType": "StructuredDocumentation",
              "src": "3742:162:15",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their deposit at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "ef8b30f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "3918:14:15",
            "parameters": {
              "id": 3202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3201,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3950:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3206,
                  "src": "3942:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3200,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3932:30:15"
            },
            "returnParameters": {
              "id": 3205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3204,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4002:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3206,
                  "src": "3994:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3203,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3994:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3993:16:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3214,
            "nodeType": "FunctionDefinition",
            "src": "4192:96:15",
            "nodes": [],
            "documentation": {
              "id": 3207,
              "nodeType": "StructuredDocumentation",
              "src": "4016:171:15",
              "text": "@notice Total number of underlying shares that can be minted\n for `owner`, where `owner` corresponds to the input\n parameter `receiver` of a `mint` call."
            },
            "functionSelector": "c63d75b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "4201:7:15",
            "parameters": {
              "id": 3210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3209,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4226:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3214,
                  "src": "4218:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3208,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4218:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4208:29:15"
            },
            "returnParameters": {
              "id": 3213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3212,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "4277:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3214,
                  "src": "4269:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3211,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4269:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4268:19:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3222,
            "nodeType": "FunctionDefinition",
            "src": "4458:98:15",
            "nodes": [],
            "documentation": {
              "id": 3215,
              "nodeType": "StructuredDocumentation",
              "src": "4294:159:15",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their mint at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "b3d7f6b9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "4467:11:15",
            "parameters": {
              "id": 3218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3217,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4496:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3222,
                  "src": "4488:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4488:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4478:30:15"
            },
            "returnParameters": {
              "id": 3221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3220,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4548:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3222,
                  "src": "4540:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3219,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4540:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4539:16:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3230,
            "nodeType": "FunctionDefinition",
            "src": "4748:100:15",
            "nodes": [],
            "documentation": {
              "id": 3223,
              "nodeType": "StructuredDocumentation",
              "src": "4562:181:15",
              "text": "@notice Total number of underlying assets that can be\n withdrawn from the Vault by `owner`, where `owner`\n corresponds to the input parameter of a `withdraw` call."
            },
            "functionSelector": "ce96cb77",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "4757:11:15",
            "parameters": {
              "id": 3226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3225,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4786:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3230,
                  "src": "4778:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3224,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4778:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4768:29:15"
            },
            "returnParameters": {
              "id": 3229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3228,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "4837:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3230,
                  "src": "4829:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3227,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4829:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4828:19:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3238,
            "nodeType": "FunctionDefinition",
            "src": "5024:102:15",
            "nodes": [],
            "documentation": {
              "id": 3231,
              "nodeType": "StructuredDocumentation",
              "src": "4854:165:15",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their withdrawal at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "0a28a477",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "5033:15:15",
            "parameters": {
              "id": 3234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3233,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5066:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3238,
                  "src": "5058:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3232,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5058:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5048:30:15"
            },
            "returnParameters": {
              "id": 3237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3236,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5118:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3238,
                  "src": "5110:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3235,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5110:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5109:16:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3246,
            "nodeType": "FunctionDefinition",
            "src": "5315:98:15",
            "nodes": [],
            "documentation": {
              "id": 3239,
              "nodeType": "StructuredDocumentation",
              "src": "5132:178:15",
              "text": "@notice Total number of underlying shares that can be\n redeemed from the Vault by `owner`, where `owner` corresponds\n to the input parameter of a `redeem` call."
            },
            "functionSelector": "d905777e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "5324:9:15",
            "parameters": {
              "id": 3242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3241,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5351:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3246,
                  "src": "5343:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3240,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5343:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5333:29:15"
            },
            "returnParameters": {
              "id": 3245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3244,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "5402:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3246,
                  "src": "5394:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3243,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5394:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5393:19:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 3254,
            "nodeType": "FunctionDefinition",
            "src": "5589:100:15",
            "nodes": [],
            "documentation": {
              "id": 3247,
              "nodeType": "StructuredDocumentation",
              "src": "5419:165:15",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their redemption at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "4cdad506",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "5598:13:15",
            "parameters": {
              "id": 3250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3249,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5629:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3254,
                  "src": "5621:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5621:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5611:30:15"
            },
            "returnParameters": {
              "id": 3253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3252,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5681:6:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 3254,
                  "src": "5673:14:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5673:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5672:16:15"
            },
            "scope": 3255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 3095,
              "name": "IERC20",
              "nameLocations": [
                "325:6:15"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3030,
              "src": "325:6:15"
            },
            "id": 3096,
            "nodeType": "InheritanceSpecifier",
            "src": "325:6:15"
          }
        ],
        "canonicalName": "IERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 3094,
          "nodeType": "StructuredDocumentation",
          "src": "217:78:15",
          "text": "@title ERC4626 interface\n See: https://eips.ethereum.org/EIPS/eip-4626"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          3255,
          3030
        ],
        "name": "IERC4626",
        "nameLocation": "313:8:15",
        "scope": 3256,
        "usedErrors": []
      }
    ],
    "license": "GPL-2.0-or-later"
  },
  "id": 15
} as const;
