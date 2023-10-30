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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"title\":\"ERC4626 interface See: https://eips.ethereum.org/EIPS/eip-4626\",\"version\":1},\"userdoc\":{\"events\":{\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `assets` for `shares`, and transferred those `shares` to `receiver`.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `shares` for `assets`, and transferred those `assets` to `receiver`.\"}},\"kind\":\"user\",\"methods\":{\"asset()\":{\"notice\":\"The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing.\"},\"convertToAssets(uint256)\":{\"notice\":\"The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met.\"},\"convertToShares(uint256)\":{\"notice\":\"The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met.\"},\"deposit(uint256,address)\":{\"notice\":\"Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens.\"},\"maxDeposit(address)\":{\"notice\":\"Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call.\"},\"maxMint(address)\":{\"notice\":\"Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call.\"},\"maxRedeem(address)\":{\"notice\":\"Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call.\"},\"maxWithdraw(address)\":{\"notice\":\"Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call.\"},\"mint(uint256,address)\":{\"notice\":\"Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens.\"},\"previewDeposit(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions.\"},\"previewMint(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions.\"},\"previewRedeem(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"},\"totalAssets()\":{\"notice\":\"Total amount of the underlying asset that is \\\"managed\\\" by Vault.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
    "id": 6687,
    "exportedSymbols": {
      "IERC20": [
        6461
      ],
      "IERC4626": [
        6686
      ]
    },
    "nodeType": "SourceUnit",
    "src": "152:5540:17",
    "nodes": [
      {
        "id": 6522,
        "nodeType": "PragmaDirective",
        "src": "152:23:17",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 6524,
        "nodeType": "ImportDirective",
        "src": "177:38:17",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6687,
        "sourceUnit": 6462,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6523,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6461,
              "src": "186:6:17",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6686,
        "nodeType": "ContractDefinition",
        "src": "295:5396:17",
        "nodes": [
          {
            "id": 6538,
            "nodeType": "EventDefinition",
            "src": "610:134:17",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 6528,
              "nodeType": "StructuredDocumentation",
              "src": "494:111:17",
              "text": "@notice `sender` has exchanged `assets` for `shares`,\n and transferred those `shares` to `receiver`."
            },
            "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
            "name": "Deposit",
            "nameLocation": "616:7:17",
            "parameters": {
              "id": 6537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6530,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "649:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6538,
                  "src": "633:22:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6529,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "633:7:17",
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
                  "id": 6532,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "681:8:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6538,
                  "src": "665:24:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6531,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "665:7:17",
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
                  "id": 6534,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "707:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6538,
                  "src": "699:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6533,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6536,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "731:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6538,
                  "src": "723:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "623:120:17"
            }
          },
          {
            "id": 6549,
            "nodeType": "EventDefinition",
            "src": "866:135:17",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 6539,
              "nodeType": "StructuredDocumentation",
              "src": "750:111:17",
              "text": "@notice `sender` has exchanged `shares` for `assets`,\n and transferred those `assets` to `receiver`."
            },
            "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
            "name": "Withdraw",
            "nameLocation": "872:8:17",
            "parameters": {
              "id": 6548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6541,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "906:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6549,
                  "src": "890:22:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6540,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "890:7:17",
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
                  "id": 6543,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "938:8:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6549,
                  "src": "922:24:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6542,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:17",
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
                  "id": 6545,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "964:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6549,
                  "src": "956:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6544,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6547,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "988:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6549,
                  "src": "980:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6546,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "980:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "880:120:17"
            }
          },
          {
            "id": 6555,
            "nodeType": "FunctionDefinition",
            "src": "1303:63:17",
            "nodes": [],
            "documentation": {
              "id": 6550,
              "nodeType": "StructuredDocumentation",
              "src": "1173:125:17",
              "text": "@notice The address of the underlying ERC20 token used for\n the Vault for accounting, depositing, and withdrawing."
            },
            "functionSelector": "38d52e0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "asset",
            "nameLocation": "1312:5:17",
            "parameters": {
              "id": 6551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1317:2:17"
            },
            "returnParameters": {
              "id": 6554,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6553,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "1359:5:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6555,
                  "src": "1351:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6552,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1351:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1350:15:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6561,
            "nodeType": "FunctionDefinition",
            "src": "1461:75:17",
            "nodes": [],
            "documentation": {
              "id": 6556,
              "nodeType": "StructuredDocumentation",
              "src": "1372:84:17",
              "text": "@notice Total amount of the underlying asset that\n is \"managed\" by Vault."
            },
            "functionSelector": "01e1d114",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "1470:11:17",
            "parameters": {
              "id": 6557,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1481:2:17"
            },
            "returnParameters": {
              "id": 6560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6559,
                  "mutability": "mutable",
                  "name": "totalAssets",
                  "nameLocation": "1523:11:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6561,
                  "src": "1515:19:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6558,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1515:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1514:21:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6571,
            "nodeType": "FunctionDefinition",
            "src": "1835:115:17",
            "nodes": [],
            "documentation": {
              "id": 6562,
              "nodeType": "StructuredDocumentation",
              "src": "1716:114:17",
              "text": "@notice Mints `shares` Vault shares to `receiver` by\n depositing exactly `assets` of underlying tokens."
            },
            "functionSelector": "6e553f65",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1844:7:17",
            "parameters": {
              "id": 6567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6564,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "1869:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6571,
                  "src": "1861:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6566,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "1893:8:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6571,
                  "src": "1885:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6565,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1851:56:17"
            },
            "returnParameters": {
              "id": 6570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6569,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "1942:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6571,
                  "src": "1934:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6568,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1934:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1933:16:17"
            },
            "scope": 6686,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6581,
            "nodeType": "FunctionDefinition",
            "src": "2075:112:17",
            "nodes": [],
            "documentation": {
              "id": 6572,
              "nodeType": "StructuredDocumentation",
              "src": "1956:114:17",
              "text": "@notice Mints exactly `shares` Vault shares to `receiver`\n by depositing `assets` of underlying tokens."
            },
            "functionSelector": "94bf804d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2084:4:17",
            "parameters": {
              "id": 6577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6574,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2106:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6581,
                  "src": "2098:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6573,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6576,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2130:8:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6581,
                  "src": "2122:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2122:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2088:56:17"
            },
            "returnParameters": {
              "id": 6580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6579,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2179:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6581,
                  "src": "2171:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2170:16:17"
            },
            "scope": 6686,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6593,
            "nodeType": "FunctionDefinition",
            "src": "2302:139:17",
            "nodes": [],
            "documentation": {
              "id": 6582,
              "nodeType": "StructuredDocumentation",
              "src": "2193:104:17",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "b460af94",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2311:8:17",
            "parameters": {
              "id": 6589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6584,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2337:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6593,
                  "src": "2329:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2329:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6586,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2361:8:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6593,
                  "src": "2353:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6585,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2353:7:17",
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
                  "id": 6588,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2387:5:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6593,
                  "src": "2379:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6587,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2379:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2319:79:17"
            },
            "returnParameters": {
              "id": 6592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6591,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2433:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6593,
                  "src": "2425:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6590,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2425:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2424:16:17"
            },
            "scope": 6686,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6605,
            "nodeType": "FunctionDefinition",
            "src": "2556:137:17",
            "nodes": [],
            "documentation": {
              "id": 6594,
              "nodeType": "StructuredDocumentation",
              "src": "2447:104:17",
              "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
            },
            "functionSelector": "ba087652",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "2565:6:17",
            "parameters": {
              "id": 6601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6596,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "2589:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6605,
                  "src": "2581:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2581:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6598,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nameLocation": "2613:8:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6605,
                  "src": "2605:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:7:17",
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
                  "id": 6600,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2639:5:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6605,
                  "src": "2631:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6599,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2631:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2571:79:17"
            },
            "returnParameters": {
              "id": 6604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6603,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "2685:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6605,
                  "src": "2677:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2677:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2676:16:17"
            },
            "scope": 6686,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6613,
            "nodeType": "FunctionDefinition",
            "src": "3044:102:17",
            "nodes": [],
            "documentation": {
              "id": 6606,
              "nodeType": "StructuredDocumentation",
              "src": "2871:168:17",
              "text": "@notice The amount of shares that the vault would\n exchange for the amount of assets provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "c6e6f592",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToShares",
            "nameLocation": "3053:15:17",
            "parameters": {
              "id": 6609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6608,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3086:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6613,
                  "src": "3078:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3078:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3068:30:17"
            },
            "returnParameters": {
              "id": 6612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6611,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3138:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6613,
                  "src": "3130:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6610,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3129:16:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6621,
            "nodeType": "FunctionDefinition",
            "src": "3325:102:17",
            "nodes": [],
            "documentation": {
              "id": 6614,
              "nodeType": "StructuredDocumentation",
              "src": "3152:168:17",
              "text": "@notice The amount of assets that the vault would\n exchange for the amount of shares provided, in an\n ideal scenario where all the conditions are met."
            },
            "functionSelector": "07a2d13a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "convertToAssets",
            "nameLocation": "3334:15:17",
            "parameters": {
              "id": 6617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6616,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "3367:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6621,
                  "src": "3359:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6615,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3359:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3349:30:17"
            },
            "returnParameters": {
              "id": 6620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6619,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3419:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6621,
                  "src": "3411:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3411:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:16:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6629,
            "nodeType": "FunctionDefinition",
            "src": "3637:99:17",
            "nodes": [],
            "documentation": {
              "id": 6622,
              "nodeType": "StructuredDocumentation",
              "src": "3433:199:17",
              "text": "@notice Total number of underlying assets that can\n be deposited by `owner` into the Vault, where `owner`\n corresponds to the input parameter `receiver` of a\n `deposit` call."
            },
            "functionSelector": "402d267d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxDeposit",
            "nameLocation": "3646:10:17",
            "parameters": {
              "id": 6625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6624,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3674:5:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6629,
                  "src": "3666:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6623,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3666:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3656:29:17"
            },
            "returnParameters": {
              "id": 6628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6627,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "3725:9:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6629,
                  "src": "3717:17:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6626,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3716:19:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6637,
            "nodeType": "FunctionDefinition",
            "src": "3909:101:17",
            "nodes": [],
            "documentation": {
              "id": 6630,
              "nodeType": "StructuredDocumentation",
              "src": "3742:162:17",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their deposit at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "ef8b30f7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewDeposit",
            "nameLocation": "3918:14:17",
            "parameters": {
              "id": 6633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6632,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "3950:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6637,
                  "src": "3942:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3932:30:17"
            },
            "returnParameters": {
              "id": 6636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6635,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4002:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6637,
                  "src": "3994:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3994:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3993:16:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6645,
            "nodeType": "FunctionDefinition",
            "src": "4192:96:17",
            "nodes": [],
            "documentation": {
              "id": 6638,
              "nodeType": "StructuredDocumentation",
              "src": "4016:171:17",
              "text": "@notice Total number of underlying shares that can be minted\n for `owner`, where `owner` corresponds to the input\n parameter `receiver` of a `mint` call."
            },
            "functionSelector": "c63d75b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxMint",
            "nameLocation": "4201:7:17",
            "parameters": {
              "id": 6641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6640,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4226:5:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6645,
                  "src": "4218:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6639,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4218:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4208:29:17"
            },
            "returnParameters": {
              "id": 6644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6643,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "4277:9:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6645,
                  "src": "4269:17:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6642,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4269:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4268:19:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6653,
            "nodeType": "FunctionDefinition",
            "src": "4458:98:17",
            "nodes": [],
            "documentation": {
              "id": 6646,
              "nodeType": "StructuredDocumentation",
              "src": "4294:159:17",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their mint at the current block, given\n current on-chain conditions."
            },
            "functionSelector": "b3d7f6b9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewMint",
            "nameLocation": "4467:11:17",
            "parameters": {
              "id": 6649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6648,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "4496:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6653,
                  "src": "4488:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6647,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4488:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4478:30:17"
            },
            "returnParameters": {
              "id": 6652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6651,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "4548:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6653,
                  "src": "4540:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6650,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4540:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4539:16:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6661,
            "nodeType": "FunctionDefinition",
            "src": "4748:100:17",
            "nodes": [],
            "documentation": {
              "id": 6654,
              "nodeType": "StructuredDocumentation",
              "src": "4562:181:17",
              "text": "@notice Total number of underlying assets that can be\n withdrawn from the Vault by `owner`, where `owner`\n corresponds to the input parameter of a `withdraw` call."
            },
            "functionSelector": "ce96cb77",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxWithdraw",
            "nameLocation": "4757:11:17",
            "parameters": {
              "id": 6657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6656,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4786:5:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6661,
                  "src": "4778:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6655,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4778:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4768:29:17"
            },
            "returnParameters": {
              "id": 6660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6659,
                  "mutability": "mutable",
                  "name": "maxAssets",
                  "nameLocation": "4837:9:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6661,
                  "src": "4829:17:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6658,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4829:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4828:19:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6669,
            "nodeType": "FunctionDefinition",
            "src": "5024:102:17",
            "nodes": [],
            "documentation": {
              "id": 6662,
              "nodeType": "StructuredDocumentation",
              "src": "4854:165:17",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their withdrawal at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "0a28a477",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewWithdraw",
            "nameLocation": "5033:15:17",
            "parameters": {
              "id": 6665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6664,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5066:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6669,
                  "src": "5058:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5058:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5048:30:17"
            },
            "returnParameters": {
              "id": 6668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6667,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5118:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6669,
                  "src": "5110:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6666,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5110:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5109:16:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6677,
            "nodeType": "FunctionDefinition",
            "src": "5315:98:17",
            "nodes": [],
            "documentation": {
              "id": 6670,
              "nodeType": "StructuredDocumentation",
              "src": "5132:178:17",
              "text": "@notice Total number of underlying shares that can be\n redeemed from the Vault by `owner`, where `owner` corresponds\n to the input parameter of a `redeem` call."
            },
            "functionSelector": "d905777e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "maxRedeem",
            "nameLocation": "5324:9:17",
            "parameters": {
              "id": 6673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6672,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "5351:5:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6677,
                  "src": "5343:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5343:7:17",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5333:29:17"
            },
            "returnParameters": {
              "id": 6676,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6675,
                  "mutability": "mutable",
                  "name": "maxShares",
                  "nameLocation": "5402:9:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6677,
                  "src": "5394:17:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5394:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5393:19:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 6685,
            "nodeType": "FunctionDefinition",
            "src": "5589:100:17",
            "nodes": [],
            "documentation": {
              "id": 6678,
              "nodeType": "StructuredDocumentation",
              "src": "5419:165:17",
              "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their redemption at the current block,\n given current on-chain conditions."
            },
            "functionSelector": "4cdad506",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "previewRedeem",
            "nameLocation": "5598:13:17",
            "parameters": {
              "id": 6681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6680,
                  "mutability": "mutable",
                  "name": "shares",
                  "nameLocation": "5629:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6685,
                  "src": "5621:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6679,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5621:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5611:30:17"
            },
            "returnParameters": {
              "id": 6684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6683,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5681:6:17",
                  "nodeType": "VariableDeclaration",
                  "scope": 6685,
                  "src": "5673:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6682,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5673:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5672:16:17"
            },
            "scope": 6686,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 6526,
              "name": "IERC20",
              "nameLocations": [
                "325:6:17"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6461,
              "src": "325:6:17"
            },
            "id": 6527,
            "nodeType": "InheritanceSpecifier",
            "src": "325:6:17"
          }
        ],
        "canonicalName": "IERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 6525,
          "nodeType": "StructuredDocumentation",
          "src": "217:78:17",
          "text": "@title ERC4626 interface\n See: https://eips.ethereum.org/EIPS/eip-4626"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          6686,
          6461,
          58980
        ],
        "name": "IERC4626",
        "nameLocation": "313:8:17",
        "scope": 6687,
        "usedErrors": []
      }
    ],
    "license": "GPL-2.0-or-later"
  },
  "id": 17
} as const;
