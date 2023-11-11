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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"title\":\"ERC4626 interface See: https://eips.ethereum.org/EIPS/eip-4626\",\"version\":1},\"userdoc\":{\"events\":{\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `assets` for `shares`, and transferred those `shares` to `receiver`.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `shares` for `assets`, and transferred those `assets` to `receiver`.\"}},\"kind\":\"user\",\"methods\":{\"asset()\":{\"notice\":\"The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing.\"},\"convertToAssets(uint256)\":{\"notice\":\"The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met.\"},\"convertToShares(uint256)\":{\"notice\":\"The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met.\"},\"deposit(uint256,address)\":{\"notice\":\"Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens.\"},\"maxDeposit(address)\":{\"notice\":\"Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call.\"},\"maxMint(address)\":{\"notice\":\"Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call.\"},\"maxRedeem(address)\":{\"notice\":\"Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call.\"},\"maxWithdraw(address)\":{\"notice\":\"Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call.\"},\"mint(uint256,address)\":{\"notice\":\"Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens.\"},\"previewDeposit(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions.\"},\"previewMint(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions.\"},\"previewRedeem(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"},\"totalAssets()\":{\"notice\":\"Total amount of the underlying asset that is \\\"managed\\\" by Vault.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
        "methods": {
          "allowance(address,address)": {
            "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
          },
          "approve(address,uint256)": {
            "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
          },
          "balanceOf(address)": {
            "details": "Returns the amount of tokens owned by `account`."
          },
          "totalSupply()": {
            "details": "Returns the amount of tokens in existence."
          },
          "transfer(address,uint256)": {
            "details": "Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
          },
          "transferFrom(address,address,uint256)": {
            "details": "Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
          }
        },
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
        "contracts/src/interfaces/IERC4626.sol": "IERC4626"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        "urls": [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"
        ],
        "license": "GPL-2.0-or-later"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IERC4626.sol",
    "id": 6957,
    "exportedSymbols": {
      "IERC20": [
        6731
      ],
      "IERC4626": [
        6956
      ]
    },
    "nodeType": "SourceUnit",
    "src": "152:5540:18",
    "nodes": [
      {
        "id": 6792,
        "nodeType": "PragmaDirective",
        "src": "152:23:18",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 6794,
        "nodeType": "ImportDirective",
        "src": "177:38:18",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6957,
        "sourceUnit": 6732,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6793,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6731,
              "src": "186:6:18",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6956,
        "nodeType": "ContractDefinition",
        "src": "295:5396:18",
        "nodes": [
          {
            "id": 6808,
            "nodeType": "EventDefinition",
            "src": "610:134:18",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 6798,
              "nodeType": "StructuredDocumentation",
              "src": "494:111:18",
              "text": "@notice `sender` has exchanged `assets` for `shares`,\n and transferred those `shares` to `receiver`."
            },
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "616:7:18",
            "parameters": {
              "id": 6807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6800,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "649:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6808,
                  "src": "633:22:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6799,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:18",
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
                  "id": 6802,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "681:8:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6808,
                  "src": "665:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6801,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "665:7:18",
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
                  "id": 6804,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "707:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6808,
                  "src": "699:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6803,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6806,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "731:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6808,
                  "src": "723:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "623:120:18"
            }
          },
          {
            "id": 6819,
            "nodeType": "EventDefinition",
            "src": "866:135:18",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 6809,
              "nodeType": "StructuredDocumentation",
              "src": "750:111:18",
              "text": "@notice `sender` has exchanged `shares` for `assets`,\n and transferred those `assets` to `receiver`."
            },
            "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
            "name": "Withdraw",
            "nameLocation": "872:8:18",
            "parameters": {
              "id": 6818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6811,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "906:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6819,
                  "src": "890:22:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6810,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "890:7:18",
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
                  "id": 6813,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "938:8:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6819,
                  "src": "922:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:18",
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
                  "id": 6815,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "964:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6819,
                  "src": "956:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6817,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "988:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6819,
                  "src": "980:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6816,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "880:120:18"
            }
          },
          {
            "id": 6825,
            "nodeType": "FunctionDefinition",
            "src": "1303:63:18",
            "nodes": [],
            "documentation": {
              "id": 6820,
              "nodeType": "StructuredDocumentation",
              "src": "1173:125:18",
              "text": "@notice The address of the underlying ERC20 token used for\n the Vault for accounting, depositing, and withdrawing."
            },
            "functionSelector": "38d52e0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "1312:5:18",
            "parameters": {
              "id": 6821,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1317:2:18"
            },
            "returnParameters": {
              "id": 6824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6823,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "1359:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6825,
                  "src": "1351:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1351:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1350:15:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6831,
            "nodeType": "FunctionDefinition",
            "src": "1461:75:18",
            "nodes": [],
            "documentation": {
              "id": 6826,
              "nodeType": "StructuredDocumentation",
              "src": "1372:84:18",
              "text": "@notice Total amount of the underlying asset that\n is \"managed\" by Vault."
            },
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "1470:11:18",
            "parameters": {
              "id": 6827,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1481:2:18"
            },
            "returnParameters": {
              "id": 6830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6829,
                  "mutability": "mutable",
                  "name": "totalAssets",
                  "nameLocation": "1523:11:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6831,
                  "src": "1515:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6828,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1515:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1514:21:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6841,
            "nodeType": "FunctionDefinition",
            "src": "1835:115:18",
            "nodes": [],
            "documentation": {
              "id": 6832,
              "nodeType": "StructuredDocumentation",
              "src": "1716:114:18",
              "text": "@notice Mints `shares` Vault shares to `receiver` by\n depositing exactly `assets` of underlying tokens."
            },
            "functionSelector": "6e553f65",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1844:7:18",
            "parameters": {
              "id": 6837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6834,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "1869:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "1861:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6836,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "1893:8:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "1885:16:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6835,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1851:56:18"
            },
            "returnParameters": {
              "id": 6840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6839,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "1942:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "1934:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1934:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1933:16:18"
            },
            "scope": 6956,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6851,
            "nodeType": "FunctionDefinition",
            "src": "2075:112:18",
            "nodes": [],
            "documentation": {
              "id": 6842,
              "nodeType": "StructuredDocumentation",
              "src": "1956:114:18",
              "text": "@notice Mints exactly `shares` Vault shares to `receiver`\n by depositing `assets` of underlying tokens."
            },
            "functionSelector": "94bf804d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2084:4:18",
            "parameters": {
              "id": 6847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6844,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2106:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6851,
                  "src": "2098:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6846,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2130:8:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6851,
                  "src": "2122:16:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6845,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2122:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2088:56:18"
            },
            "returnParameters": {
              "id": 6850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6849,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2179:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6851,
                  "src": "2171:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6848,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2170:16:18"
            },
            "scope": 6956,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6863,
            "nodeType": "FunctionDefinition",
            "src": "2302:139:18",
            "nodes": [],
            "documentation": {
              "id": 6852,
              "nodeType": "StructuredDocumentation",
              "src": "2193:104:18",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "b460af94",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2311:8:18",
            "parameters": {
              "id": 6859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6854,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2337:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6863,
                  "src": "2329:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6853,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2329:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6856,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2361:8:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6863,
                  "src": "2353:16:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6855,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2353:7:18",
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
                  "id": 6858,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2387:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6863,
                  "src": "2379:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6857,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2379:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2319:79:18"
            },
            "returnParameters": {
              "id": 6862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6861,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2433:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6863,
                  "src": "2425:14:18",
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
                    "src": "2425:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2424:16:18"
            },
            "scope": 6956,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6875,
            "nodeType": "FunctionDefinition",
            "src": "2556:137:18",
            "nodes": [],
            "documentation": {
              "id": 6864,
              "nodeType": "StructuredDocumentation",
              "src": "2447:104:18",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "ba087652",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "2565:6:18",
            "parameters": {
              "id": 6871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6866,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2589:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6875,
                  "src": "2581:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6865,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2581:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6868,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2613:8:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6875,
                  "src": "2605:16:18",
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
                    "src": "2605:7:18",
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
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2639:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6875,
                  "src": "2631:13:18",
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
                    "src": "2631:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2571:79:18"
            },
            "returnParameters": {
              "id": 6874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6873,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2685:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6875,
                  "src": "2677:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2677:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2676:16:18"
            },
            "scope": 6956,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6883,
            "nodeType": "FunctionDefinition",
            "src": "3044:102:18",
            "nodes": [],
            "documentation": {
              "id": 6876,
              "nodeType": "StructuredDocumentation",
              "src": "2871:168:18",
              "text": "@notice The amount of shares that the vault would\n exchange for the amount of assets provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "c6e6f592",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "3053:15:18",
            "parameters": {
              "id": 6879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6878,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3086:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6883,
                  "src": "3078:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6877,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3078:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3068:30:18"
            },
            "returnParameters": {
              "id": 6882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6881,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3138:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6883,
                  "src": "3130:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6880,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3129:16:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6891,
            "nodeType": "FunctionDefinition",
            "src": "3325:102:18",
            "nodes": [],
            "documentation": {
              "id": 6884,
              "nodeType": "StructuredDocumentation",
              "src": "3152:168:18",
              "text": "@notice The amount of assets that the vault would\n exchange for the amount of shares provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "07a2d13a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "3334:15:18",
            "parameters": {
              "id": 6887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6886,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3367:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6891,
                  "src": "3359:14:18",
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
                    "src": "3359:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3349:30:18"
            },
            "returnParameters": {
              "id": 6890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6889,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3419:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6891,
                  "src": "3411:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6888,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3411:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:16:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6899,
            "nodeType": "FunctionDefinition",
            "src": "3637:99:18",
            "nodes": [],
            "documentation": {
              "id": 6892,
              "nodeType": "StructuredDocumentation",
              "src": "3433:199:18",
              "text": "@notice Total number of underlying assets that can\n be deposited by `owner` into the Vault, where `owner`\n corresponds to the input parameter `receiver` of a\n `deposit` call."
            },
            "functionSelector": "402d267d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "3646:10:18",
            "parameters": {
              "id": 6895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6894,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3674:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6899,
                  "src": "3666:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6893,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3666:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3656:29:18"
            },
            "returnParameters": {
              "id": 6898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6897,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "3725:9:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6899,
                  "src": "3717:17:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6896,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3716:19:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6907,
            "nodeType": "FunctionDefinition",
            "src": "3909:101:18",
            "nodes": [],
            "documentation": {
              "id": 6900,
              "nodeType": "StructuredDocumentation",
              "src": "3742:162:18",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their deposit at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "ef8b30f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "3918:14:18",
            "parameters": {
              "id": 6903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6902,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3950:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6907,
                  "src": "3942:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6901,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3932:30:18"
            },
            "returnParameters": {
              "id": 6906,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6905,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4002:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6907,
                  "src": "3994:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6904,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3994:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3993:16:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6915,
            "nodeType": "FunctionDefinition",
            "src": "4192:96:18",
            "nodes": [],
            "documentation": {
              "id": 6908,
              "nodeType": "StructuredDocumentation",
              "src": "4016:171:18",
              "text": "@notice Total number of underlying shares that can be minted\n for `owner`, where `owner` corresponds to the input\n parameter `receiver` of a `mint` call."
            },
            "functionSelector": "c63d75b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "4201:7:18",
            "parameters": {
              "id": 6911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6910,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4226:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6915,
                  "src": "4218:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6909,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4218:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4208:29:18"
            },
            "returnParameters": {
              "id": 6914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6913,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "4277:9:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6915,
                  "src": "4269:17:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6912,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4269:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4268:19:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6923,
            "nodeType": "FunctionDefinition",
            "src": "4458:98:18",
            "nodes": [],
            "documentation": {
              "id": 6916,
              "nodeType": "StructuredDocumentation",
              "src": "4294:159:18",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their mint at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "b3d7f6b9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "4467:11:18",
            "parameters": {
              "id": 6919,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6918,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4496:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6923,
                  "src": "4488:14:18",
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
                    "src": "4488:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4478:30:18"
            },
            "returnParameters": {
              "id": 6922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6921,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4548:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6923,
                  "src": "4540:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4540:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4539:16:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6931,
            "nodeType": "FunctionDefinition",
            "src": "4748:100:18",
            "nodes": [],
            "documentation": {
              "id": 6924,
              "nodeType": "StructuredDocumentation",
              "src": "4562:181:18",
              "text": "@notice Total number of underlying assets that can be\n withdrawn from the Vault by `owner`, where `owner`\n corresponds to the input parameter of a `withdraw` call."
            },
            "functionSelector": "ce96cb77",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "4757:11:18",
            "parameters": {
              "id": 6927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6926,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4786:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6931,
                  "src": "4778:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6925,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4778:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4768:29:18"
            },
            "returnParameters": {
              "id": 6930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6929,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "4837:9:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6931,
                  "src": "4829:17:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6928,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4829:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4828:19:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6939,
            "nodeType": "FunctionDefinition",
            "src": "5024:102:18",
            "nodes": [],
            "documentation": {
              "id": 6932,
              "nodeType": "StructuredDocumentation",
              "src": "4854:165:18",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their withdrawal at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "0a28a477",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "5033:15:18",
            "parameters": {
              "id": 6935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6934,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5066:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6939,
                  "src": "5058:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6933,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5058:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5048:30:18"
            },
            "returnParameters": {
              "id": 6938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6937,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5118:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6939,
                  "src": "5110:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5110:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5109:16:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6947,
            "nodeType": "FunctionDefinition",
            "src": "5315:98:18",
            "nodes": [],
            "documentation": {
              "id": 6940,
              "nodeType": "StructuredDocumentation",
              "src": "5132:178:18",
              "text": "@notice Total number of underlying shares that can be\n redeemed from the Vault by `owner`, where `owner` corresponds\n to the input parameter of a `redeem` call."
            },
            "functionSelector": "d905777e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "5324:9:18",
            "parameters": {
              "id": 6943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6942,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5351:5:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6947,
                  "src": "5343:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6941,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5343:7:18",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5333:29:18"
            },
            "returnParameters": {
              "id": 6946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6945,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "5402:9:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6947,
                  "src": "5394:17:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6944,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5394:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5393:19:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6955,
            "nodeType": "FunctionDefinition",
            "src": "5589:100:18",
            "nodes": [],
            "documentation": {
              "id": 6948,
              "nodeType": "StructuredDocumentation",
              "src": "5419:165:18",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their redemption at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "4cdad506",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "5598:13:18",
            "parameters": {
              "id": 6951,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6950,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5629:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6955,
                  "src": "5621:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6949,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5621:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5611:30:18"
            },
            "returnParameters": {
              "id": 6954,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6953,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5681:6:18",
                  "nodeType": "VariableDeclaration",
                  "scope": 6955,
                  "src": "5673:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6952,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5673:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5672:16:18"
            },
            "scope": 6956,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 6796,
              "name": "IERC20",
              "nameLocations": [
                "325:6:18"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6731,
              "src": "325:6:18"
            },
            "id": 6797,
            "nodeType": "InheritanceSpecifier",
            "src": "325:6:18"
          }
        ],
        "canonicalName": "IERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 6795,
          "nodeType": "StructuredDocumentation",
          "src": "217:78:18",
          "text": "@title ERC4626 interface\n See: https://eips.ethereum.org/EIPS/eip-4626"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          6956,
          6731,
          59686
        ],
        "name": "IERC4626",
        "nameLocation": "313:8:18",
        "scope": 6957,
        "usedErrors": []
      }
    ],
    "license": "GPL-2.0-or-later"
  },
  "id": 18
} as const;
