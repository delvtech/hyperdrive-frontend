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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"title\":\"ERC4626 interface See: https://eips.ethereum.org/EIPS/eip-4626\",\"version\":1},\"userdoc\":{\"events\":{\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `assets` for `shares`, and transferred those `shares` to `receiver`.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `shares` for `assets`, and transferred those `assets` to `receiver`.\"}},\"kind\":\"user\",\"methods\":{\"asset()\":{\"notice\":\"The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing.\"},\"convertToAssets(uint256)\":{\"notice\":\"The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met.\"},\"convertToShares(uint256)\":{\"notice\":\"The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met.\"},\"deposit(uint256,address)\":{\"notice\":\"Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens.\"},\"maxDeposit(address)\":{\"notice\":\"Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call.\"},\"maxMint(address)\":{\"notice\":\"Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call.\"},\"maxRedeem(address)\":{\"notice\":\"Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call.\"},\"maxWithdraw(address)\":{\"notice\":\"Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call.\"},\"mint(uint256,address)\":{\"notice\":\"Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens.\"},\"previewDeposit(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions.\"},\"previewMint(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions.\"},\"previewRedeem(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"},\"totalAssets()\":{\"notice\":\"Total amount of the underlying asset that is \\\"managed\\\" by Vault.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]}},\"version\":1}",
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
        "contracts/src/interfaces/IERC4626.sol": "IERC4626"
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
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e",
        "urls": [
          "bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3",
          "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"
        ],
        "license": "GPL-2.0-or-later"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IERC4626.sol",
    "id": 7014,
    "exportedSymbols": {
      "IERC20": [
        6740
      ],
      "IERC4626": [
        7013
      ]
    },
    "nodeType": "SourceUnit",
    "src": "152:5540:40",
    "nodes": [
      {
        "id": 6849,
        "nodeType": "PragmaDirective",
        "src": "152:23:40",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 6851,
        "nodeType": "ImportDirective",
        "src": "177:38:40",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7014,
        "sourceUnit": 6741,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6850,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6740,
              "src": "186:6:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7013,
        "nodeType": "ContractDefinition",
        "src": "295:5396:40",
        "nodes": [
          {
            "id": 6865,
            "nodeType": "EventDefinition",
            "src": "610:134:40",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 6855,
              "nodeType": "StructuredDocumentation",
              "src": "494:111:40",
              "text": "@notice `sender` has exchanged `assets` for `shares`,\n and transferred those `shares` to `receiver`."
            },
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "616:7:40",
            "parameters": {
              "id": 6864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6857,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "649:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6865,
                  "src": "633:22:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6856,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:40",
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
                  "id": 6859,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "681:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6865,
                  "src": "665:24:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6858,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "665:7:40",
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
                  "id": 6861,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "707:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6865,
                  "src": "699:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6860,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6863,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "731:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6865,
                  "src": "723:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6862,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "623:120:40"
            }
          },
          {
            "id": 6876,
            "nodeType": "EventDefinition",
            "src": "866:135:40",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 6866,
              "nodeType": "StructuredDocumentation",
              "src": "750:111:40",
              "text": "@notice `sender` has exchanged `shares` for `assets`,\n and transferred those `assets` to `receiver`."
            },
            "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
            "name": "Withdraw",
            "nameLocation": "872:8:40",
            "parameters": {
              "id": 6875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6868,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "906:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6876,
                  "src": "890:22:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6867,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "890:7:40",
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
                  "id": 6870,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "938:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6876,
                  "src": "922:24:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6869,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:40",
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
                  "id": 6872,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "964:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6876,
                  "src": "956:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6871,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6874,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "988:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6876,
                  "src": "980:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6873,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "880:120:40"
            }
          },
          {
            "id": 6882,
            "nodeType": "FunctionDefinition",
            "src": "1303:63:40",
            "nodes": [],
            "documentation": {
              "id": 6877,
              "nodeType": "StructuredDocumentation",
              "src": "1173:125:40",
              "text": "@notice The address of the underlying ERC20 token used for\n the Vault for accounting, depositing, and withdrawing."
            },
            "functionSelector": "38d52e0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "1312:5:40",
            "parameters": {
              "id": 6878,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1317:2:40"
            },
            "returnParameters": {
              "id": 6881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6880,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "1359:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6882,
                  "src": "1351:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6879,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1351:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1350:15:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6888,
            "nodeType": "FunctionDefinition",
            "src": "1461:75:40",
            "nodes": [],
            "documentation": {
              "id": 6883,
              "nodeType": "StructuredDocumentation",
              "src": "1372:84:40",
              "text": "@notice Total amount of the underlying asset that\n is \"managed\" by Vault."
            },
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "1470:11:40",
            "parameters": {
              "id": 6884,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1481:2:40"
            },
            "returnParameters": {
              "id": 6887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6886,
                  "mutability": "mutable",
                  "name": "totalAssets",
                  "nameLocation": "1523:11:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6888,
                  "src": "1515:19:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1515:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1514:21:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6898,
            "nodeType": "FunctionDefinition",
            "src": "1835:115:40",
            "nodes": [],
            "documentation": {
              "id": 6889,
              "nodeType": "StructuredDocumentation",
              "src": "1716:114:40",
              "text": "@notice Mints `shares` Vault shares to `receiver` by\n depositing exactly `assets` of underlying tokens."
            },
            "functionSelector": "6e553f65",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1844:7:40",
            "parameters": {
              "id": 6894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6891,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "1869:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6898,
                  "src": "1861:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6890,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6893,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "1893:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6898,
                  "src": "1885:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6892,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1851:56:40"
            },
            "returnParameters": {
              "id": 6897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6896,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "1942:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6898,
                  "src": "1934:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6895,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1934:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1933:16:40"
            },
            "scope": 7013,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6908,
            "nodeType": "FunctionDefinition",
            "src": "2075:112:40",
            "nodes": [],
            "documentation": {
              "id": 6899,
              "nodeType": "StructuredDocumentation",
              "src": "1956:114:40",
              "text": "@notice Mints exactly `shares` Vault shares to `receiver`\n by depositing `assets` of underlying tokens."
            },
            "functionSelector": "94bf804d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2084:4:40",
            "parameters": {
              "id": 6904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6901,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2106:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6908,
                  "src": "2098:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6900,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6903,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2130:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6908,
                  "src": "2122:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6902,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2122:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2088:56:40"
            },
            "returnParameters": {
              "id": 6907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6906,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2179:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6908,
                  "src": "2171:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6905,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2170:16:40"
            },
            "scope": 7013,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6920,
            "nodeType": "FunctionDefinition",
            "src": "2302:139:40",
            "nodes": [],
            "documentation": {
              "id": 6909,
              "nodeType": "StructuredDocumentation",
              "src": "2193:104:40",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "b460af94",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2311:8:40",
            "parameters": {
              "id": 6916,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6911,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2337:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6920,
                  "src": "2329:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6910,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2329:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6913,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2361:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6920,
                  "src": "2353:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6912,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2353:7:40",
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
                  "id": 6915,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2387:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6920,
                  "src": "2379:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6914,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2379:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2319:79:40"
            },
            "returnParameters": {
              "id": 6919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6918,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2433:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6920,
                  "src": "2425:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6917,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2425:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2424:16:40"
            },
            "scope": 7013,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6932,
            "nodeType": "FunctionDefinition",
            "src": "2556:137:40",
            "nodes": [],
            "documentation": {
              "id": 6921,
              "nodeType": "StructuredDocumentation",
              "src": "2447:104:40",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "ba087652",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "2565:6:40",
            "parameters": {
              "id": 6928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6923,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2589:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6932,
                  "src": "2581:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6922,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2581:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6925,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2613:8:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6932,
                  "src": "2605:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6924,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:7:40",
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
                  "id": 6927,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2639:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6932,
                  "src": "2631:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6926,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2631:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2571:79:40"
            },
            "returnParameters": {
              "id": 6931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6930,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2685:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6932,
                  "src": "2677:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6929,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2677:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2676:16:40"
            },
            "scope": 7013,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6940,
            "nodeType": "FunctionDefinition",
            "src": "3044:102:40",
            "nodes": [],
            "documentation": {
              "id": 6933,
              "nodeType": "StructuredDocumentation",
              "src": "2871:168:40",
              "text": "@notice The amount of shares that the vault would\n exchange for the amount of assets provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "c6e6f592",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "3053:15:40",
            "parameters": {
              "id": 6936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6935,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3086:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6940,
                  "src": "3078:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3078:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3068:30:40"
            },
            "returnParameters": {
              "id": 6939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6938,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3138:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6940,
                  "src": "3130:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6937,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3129:16:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6948,
            "nodeType": "FunctionDefinition",
            "src": "3325:102:40",
            "nodes": [],
            "documentation": {
              "id": 6941,
              "nodeType": "StructuredDocumentation",
              "src": "3152:168:40",
              "text": "@notice The amount of assets that the vault would\n exchange for the amount of shares provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "07a2d13a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "3334:15:40",
            "parameters": {
              "id": 6944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6943,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3367:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6948,
                  "src": "3359:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6942,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3359:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3349:30:40"
            },
            "returnParameters": {
              "id": 6947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6946,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3419:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6948,
                  "src": "3411:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6945,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3411:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:16:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6956,
            "nodeType": "FunctionDefinition",
            "src": "3637:99:40",
            "nodes": [],
            "documentation": {
              "id": 6949,
              "nodeType": "StructuredDocumentation",
              "src": "3433:199:40",
              "text": "@notice Total number of underlying assets that can\n be deposited by `owner` into the Vault, where `owner`\n corresponds to the input parameter `receiver` of a\n `deposit` call."
            },
            "functionSelector": "402d267d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "3646:10:40",
            "parameters": {
              "id": 6952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6951,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3674:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6956,
                  "src": "3666:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6950,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3666:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3656:29:40"
            },
            "returnParameters": {
              "id": 6955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6954,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "3725:9:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6956,
                  "src": "3717:17:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6953,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3716:19:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6964,
            "nodeType": "FunctionDefinition",
            "src": "3909:101:40",
            "nodes": [],
            "documentation": {
              "id": 6957,
              "nodeType": "StructuredDocumentation",
              "src": "3742:162:40",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their deposit at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "ef8b30f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "3918:14:40",
            "parameters": {
              "id": 6960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6959,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3950:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6964,
                  "src": "3942:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6958,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3932:30:40"
            },
            "returnParameters": {
              "id": 6963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6962,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4002:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6964,
                  "src": "3994:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6961,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3994:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3993:16:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6972,
            "nodeType": "FunctionDefinition",
            "src": "4192:96:40",
            "nodes": [],
            "documentation": {
              "id": 6965,
              "nodeType": "StructuredDocumentation",
              "src": "4016:171:40",
              "text": "@notice Total number of underlying shares that can be minted\n for `owner`, where `owner` corresponds to the input\n parameter `receiver` of a `mint` call."
            },
            "functionSelector": "c63d75b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "4201:7:40",
            "parameters": {
              "id": 6968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6967,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4226:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6972,
                  "src": "4218:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6966,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4218:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4208:29:40"
            },
            "returnParameters": {
              "id": 6971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6970,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "4277:9:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6972,
                  "src": "4269:17:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6969,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4269:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4268:19:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6980,
            "nodeType": "FunctionDefinition",
            "src": "4458:98:40",
            "nodes": [],
            "documentation": {
              "id": 6973,
              "nodeType": "StructuredDocumentation",
              "src": "4294:159:40",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their mint at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "b3d7f6b9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "4467:11:40",
            "parameters": {
              "id": 6976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6975,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4496:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6980,
                  "src": "4488:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6974,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4488:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4478:30:40"
            },
            "returnParameters": {
              "id": 6979,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6978,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4548:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6980,
                  "src": "4540:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6977,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4540:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4539:16:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6988,
            "nodeType": "FunctionDefinition",
            "src": "4748:100:40",
            "nodes": [],
            "documentation": {
              "id": 6981,
              "nodeType": "StructuredDocumentation",
              "src": "4562:181:40",
              "text": "@notice Total number of underlying assets that can be\n withdrawn from the Vault by `owner`, where `owner`\n corresponds to the input parameter of a `withdraw` call."
            },
            "functionSelector": "ce96cb77",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "4757:11:40",
            "parameters": {
              "id": 6984,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6983,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4786:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6988,
                  "src": "4778:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6982,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4778:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4768:29:40"
            },
            "returnParameters": {
              "id": 6987,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6986,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "4837:9:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6988,
                  "src": "4829:17:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6985,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4829:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4828:19:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6996,
            "nodeType": "FunctionDefinition",
            "src": "5024:102:40",
            "nodes": [],
            "documentation": {
              "id": 6989,
              "nodeType": "StructuredDocumentation",
              "src": "4854:165:40",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their withdrawal at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "0a28a477",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "5033:15:40",
            "parameters": {
              "id": 6992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6991,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5066:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6996,
                  "src": "5058:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6990,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5058:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5048:30:40"
            },
            "returnParameters": {
              "id": 6995,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6994,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5118:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 6996,
                  "src": "5110:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6993,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5110:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5109:16:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 7004,
            "nodeType": "FunctionDefinition",
            "src": "5315:98:40",
            "nodes": [],
            "documentation": {
              "id": 6997,
              "nodeType": "StructuredDocumentation",
              "src": "5132:178:40",
              "text": "@notice Total number of underlying shares that can be\n redeemed from the Vault by `owner`, where `owner` corresponds\n to the input parameter of a `redeem` call."
            },
            "functionSelector": "d905777e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "5324:9:40",
            "parameters": {
              "id": 7000,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6999,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5351:5:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 7004,
                  "src": "5343:13:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6998,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5343:7:40",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5333:29:40"
            },
            "returnParameters": {
              "id": 7003,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7002,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "5402:9:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 7004,
                  "src": "5394:17:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5394:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5393:19:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 7012,
            "nodeType": "FunctionDefinition",
            "src": "5589:100:40",
            "nodes": [],
            "documentation": {
              "id": 7005,
              "nodeType": "StructuredDocumentation",
              "src": "5419:165:40",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their redemption at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "4cdad506",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "5598:13:40",
            "parameters": {
              "id": 7008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7007,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5629:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 7012,
                  "src": "5621:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7006,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5621:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5611:30:40"
            },
            "returnParameters": {
              "id": 7011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7010,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5681:6:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 7012,
                  "src": "5673:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5673:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5672:16:40"
            },
            "scope": 7013,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 6853,
              "name": "IERC20",
              "nameLocations": [
                "325:6:40"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6740,
              "src": "325:6:40"
            },
            "id": 6854,
            "nodeType": "InheritanceSpecifier",
            "src": "325:6:40"
          }
        ],
        "canonicalName": "IERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 6852,
          "nodeType": "StructuredDocumentation",
          "src": "217:78:40",
          "text": "@title ERC4626 interface\n See: https://eips.ethereum.org/EIPS/eip-4626"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          7013,
          6740
        ],
        "name": "IERC4626",
        "nameLocation": "313:8:40",
        "scope": 7014,
        "usedErrors": [],
        "usedEvents": [
          6666,
          6674,
          6865,
          6876
        ]
      }
    ],
    "license": "GPL-2.0-or-later"
  },
  "id": 40
} as const;
