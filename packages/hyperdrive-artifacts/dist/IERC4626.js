export const IERC4626 = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}}},\"title\":\"ERC4626 interface See: https://eips.ethereum.org/EIPS/eip-4626\",\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `assets` for `shares`, and transferred those `shares` to `receiver`.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"`sender` has exchanged `shares` for `assets`, and transferred those `assets` to `receiver`.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"asset()\":{\"notice\":\"The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"convertToAssets(uint256)\":{\"notice\":\"The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met.\"},\"convertToShares(uint256)\":{\"notice\":\"The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"deposit(uint256,address)\":{\"notice\":\"Mints `shares` Vault shares to `receiver` by depositing exactly `assets` of underlying tokens.\"},\"maxDeposit(address)\":{\"notice\":\"Total number of underlying assets that can be deposited by `owner` into the Vault, where `owner` corresponds to the input parameter `receiver` of a `deposit` call.\"},\"maxMint(address)\":{\"notice\":\"Total number of underlying shares that can be minted for `owner`, where `owner` corresponds to the input parameter `receiver` of a `mint` call.\"},\"maxRedeem(address)\":{\"notice\":\"Total number of underlying shares that can be redeemed from the Vault by `owner`, where `owner` corresponds to the input parameter of a `redeem` call.\"},\"maxWithdraw(address)\":{\"notice\":\"Total number of underlying assets that can be withdrawn from the Vault by `owner`, where `owner` corresponds to the input parameter of a `withdraw` call.\"},\"mint(uint256,address)\":{\"notice\":\"Mints exactly `shares` Vault shares to `receiver` by depositing `assets` of underlying tokens.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"previewDeposit(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their deposit at the current block, given current on-chain conditions.\"},\"previewMint(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their mint at the current block, given current on-chain conditions.\"},\"previewRedeem(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their redemption at the current block, given current on-chain conditions.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Allows an on-chain or off-chain user to simulate the effects of their withdrawal at the current block, given current on-chain conditions.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalAssets()\":{\"notice\":\"Total amount of the underlying asset that is \\\"managed\\\" by Vault.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Redeems `shares` from `owner` and sends `assets` of underlying tokens to `receiver`.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]}},\"version\":1}",
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
                "methods": {
                    "allowance(address,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "spender": "The spender of the tokens."
                        },
                        "returns": {
                            "_0": "The allowance of the spender for the owner."
                        }
                    },
                    "approve(address,uint256)": {
                        "params": {
                            "amount": "The new allowance of the spender.",
                            "spender": "The account with the allowance."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the approval succeeded."
                        }
                    },
                    "balanceOf(address)": {
                        "params": {
                            "account": "The owner of the tokens."
                        },
                        "returns": {
                            "_0": "The account's balance."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The token's decimals."
                        }
                    },
                    "name()": {
                        "returns": {
                            "_0": "The token's name."
                        }
                    },
                    "symbol()": {
                        "returns": {
                            "_0": "The token's symbol."
                        }
                    },
                    "totalSupply()": {
                        "returns": {
                            "_0": "The token's total supply."
                        }
                    },
                    "transfer(address,uint256)": {
                        "params": {
                            "amount": "The amount of tokens that will be transferred.",
                            "to": "The recipient of the tokens."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the transfer succeeded."
                        }
                    },
                    "transferFrom(address,address,uint256)": {
                        "params": {
                            "amount": "The amount of tokens that will be transferred.",
                            "from": "The owner of the tokens.",
                            "to": "The recipient of the tokens."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the transfer succeeded."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "allowance(address,address)": {
                        "notice": "Gets the allowance of a spender for an owner."
                    },
                    "approve(address,uint256)": {
                        "notice": "Updates the allowance of a spender on behalf of the sender."
                    },
                    "asset()": {
                        "notice": "The address of the underlying ERC20 token used for the Vault for accounting, depositing, and withdrawing."
                    },
                    "balanceOf(address)": {
                        "notice": "Gets the balance of an account."
                    },
                    "convertToAssets(uint256)": {
                        "notice": "The amount of assets that the vault would exchange for the amount of shares provided, in an ideal scenario where all the conditions are met."
                    },
                    "convertToShares(uint256)": {
                        "notice": "The amount of shares that the vault would exchange for the amount of assets provided, in an ideal scenario where all the conditions are met."
                    },
                    "decimals()": {
                        "notice": "Gets the token's decimals."
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
                    "name()": {
                        "notice": "Gets the token's name."
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
                    "symbol()": {
                        "notice": "Gets the token's symbol."
                    },
                    "totalAssets()": {
                        "notice": "Total amount of the underlying asset that is \"managed\" by Vault."
                    },
                    "totalSupply()": {
                        "notice": "Gets the token's total supply."
                    },
                    "transfer(address,uint256)": {
                        "notice": "Transfers tokens from the sender's account to another account."
                    },
                    "transferFrom(address,address,uint256)": {
                        "notice": "Transfers tokens from an owner to a recipient. This draws from         the sender's allowance."
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
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
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
        "id": 10603,
        "exportedSymbols": {
            "IERC20": [
                10319
            ],
            "IERC4626": [
                10602
            ]
        },
        "nodeType": "SourceUnit",
        "src": "152:5540:82",
        "nodes": [
            {
                "id": 10438,
                "nodeType": "PragmaDirective",
                "src": "152:23:82",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 10440,
                "nodeType": "ImportDirective",
                "src": "177:38:82",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10603,
                "sourceUnit": 10320,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10439,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10319,
                            "src": "186:6:82",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10602,
                "nodeType": "ContractDefinition",
                "src": "295:5396:82",
                "nodes": [
                    {
                        "id": 10454,
                        "nodeType": "EventDefinition",
                        "src": "610:134:82",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10444,
                            "nodeType": "StructuredDocumentation",
                            "src": "494:111:82",
                            "text": "@notice `sender` has exchanged `assets` for `shares`,\n and transferred those `shares` to `receiver`."
                        },
                        "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
                        "name": "Deposit",
                        "nameLocation": "616:7:82",
                        "parameters": {
                            "id": 10453,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10446,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "649:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10454,
                                    "src": "633:22:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10445,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "633:7:82",
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
                                    "id": 10448,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "681:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10454,
                                    "src": "665:24:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10447,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:7:82",
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
                                    "id": 10450,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "707:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10454,
                                    "src": "699:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10449,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "699:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10452,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "731:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10454,
                                    "src": "723:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10451,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "723:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "623:120:82"
                        }
                    },
                    {
                        "id": 10465,
                        "nodeType": "EventDefinition",
                        "src": "866:135:82",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10455,
                            "nodeType": "StructuredDocumentation",
                            "src": "750:111:82",
                            "text": "@notice `sender` has exchanged `shares` for `assets`,\n and transferred those `assets` to `receiver`."
                        },
                        "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
                        "name": "Withdraw",
                        "nameLocation": "872:8:82",
                        "parameters": {
                            "id": 10464,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10457,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "906:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10465,
                                    "src": "890:22:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10456,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "890:7:82",
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
                                    "id": 10459,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "938:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10465,
                                    "src": "922:24:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10458,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "922:7:82",
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
                                    "id": 10461,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "964:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10465,
                                    "src": "956:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10460,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "956:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10463,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "988:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10465,
                                    "src": "980:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10462,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "980:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "880:120:82"
                        }
                    },
                    {
                        "id": 10471,
                        "nodeType": "FunctionDefinition",
                        "src": "1303:63:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10466,
                            "nodeType": "StructuredDocumentation",
                            "src": "1173:125:82",
                            "text": "@notice The address of the underlying ERC20 token used for\n the Vault for accounting, depositing, and withdrawing."
                        },
                        "functionSelector": "38d52e0f",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "asset",
                        "nameLocation": "1312:5:82",
                        "parameters": {
                            "id": 10467,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1317:2:82"
                        },
                        "returnParameters": {
                            "id": 10470,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10469,
                                    "mutability": "mutable",
                                    "name": "asset",
                                    "nameLocation": "1359:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10471,
                                    "src": "1351:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10468,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1351:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1350:15:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10477,
                        "nodeType": "FunctionDefinition",
                        "src": "1461:75:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10472,
                            "nodeType": "StructuredDocumentation",
                            "src": "1372:84:82",
                            "text": "@notice Total amount of the underlying asset that\n is \"managed\" by Vault."
                        },
                        "functionSelector": "01e1d114",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalAssets",
                        "nameLocation": "1470:11:82",
                        "parameters": {
                            "id": 10473,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1481:2:82"
                        },
                        "returnParameters": {
                            "id": 10476,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10475,
                                    "mutability": "mutable",
                                    "name": "totalAssets",
                                    "nameLocation": "1523:11:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10477,
                                    "src": "1515:19:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10474,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1515:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1514:21:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10487,
                        "nodeType": "FunctionDefinition",
                        "src": "1835:115:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10478,
                            "nodeType": "StructuredDocumentation",
                            "src": "1716:114:82",
                            "text": "@notice Mints `shares` Vault shares to `receiver` by\n depositing exactly `assets` of underlying tokens."
                        },
                        "functionSelector": "6e553f65",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deposit",
                        "nameLocation": "1844:7:82",
                        "parameters": {
                            "id": 10483,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10480,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "1869:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10487,
                                    "src": "1861:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10479,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1861:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10482,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1893:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10487,
                                    "src": "1885:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10481,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1885:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1851:56:82"
                        },
                        "returnParameters": {
                            "id": 10486,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10485,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "1942:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10487,
                                    "src": "1934:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10484,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1934:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1933:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10497,
                        "nodeType": "FunctionDefinition",
                        "src": "2075:112:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10488,
                            "nodeType": "StructuredDocumentation",
                            "src": "1956:114:82",
                            "text": "@notice Mints exactly `shares` Vault shares to `receiver`\n by depositing `assets` of underlying tokens."
                        },
                        "functionSelector": "94bf804d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "2084:4:82",
                        "parameters": {
                            "id": 10493,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10490,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2106:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10497,
                                    "src": "2098:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10489,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2098:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10492,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2130:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10497,
                                    "src": "2122:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10491,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2122:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2088:56:82"
                        },
                        "returnParameters": {
                            "id": 10496,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10495,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2179:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10497,
                                    "src": "2171:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10494,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2171:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2170:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10509,
                        "nodeType": "FunctionDefinition",
                        "src": "2302:139:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10498,
                            "nodeType": "StructuredDocumentation",
                            "src": "2193:104:82",
                            "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
                        },
                        "functionSelector": "b460af94",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "withdraw",
                        "nameLocation": "2311:8:82",
                        "parameters": {
                            "id": 10505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10500,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2337:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10509,
                                    "src": "2329:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10499,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2329:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10502,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2361:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10509,
                                    "src": "2353:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10501,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2353:7:82",
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
                                    "id": 10504,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2387:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10509,
                                    "src": "2379:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10503,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2379:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2319:79:82"
                        },
                        "returnParameters": {
                            "id": 10508,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10507,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2433:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10509,
                                    "src": "2425:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10506,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2425:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2424:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10521,
                        "nodeType": "FunctionDefinition",
                        "src": "2556:137:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10510,
                            "nodeType": "StructuredDocumentation",
                            "src": "2447:104:82",
                            "text": "@notice Redeems `shares` from `owner` and sends `assets`\n of underlying tokens to `receiver`."
                        },
                        "functionSelector": "ba087652",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeem",
                        "nameLocation": "2565:6:82",
                        "parameters": {
                            "id": 10517,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10512,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2589:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10521,
                                    "src": "2581:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10511,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2581:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10514,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2613:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10521,
                                    "src": "2605:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10513,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2605:7:82",
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
                                    "id": 10516,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2639:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10521,
                                    "src": "2631:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10515,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2631:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2571:79:82"
                        },
                        "returnParameters": {
                            "id": 10520,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10519,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2685:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10521,
                                    "src": "2677:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10518,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2677:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2676:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10529,
                        "nodeType": "FunctionDefinition",
                        "src": "3044:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10522,
                            "nodeType": "StructuredDocumentation",
                            "src": "2871:168:82",
                            "text": "@notice The amount of shares that the vault would\n exchange for the amount of assets provided, in an\n ideal scenario where all the conditions are met."
                        },
                        "functionSelector": "c6e6f592",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToShares",
                        "nameLocation": "3053:15:82",
                        "parameters": {
                            "id": 10525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10524,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3086:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10529,
                                    "src": "3078:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10523,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3078:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3068:30:82"
                        },
                        "returnParameters": {
                            "id": 10528,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10527,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3138:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10529,
                                    "src": "3130:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10526,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3130:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3129:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10537,
                        "nodeType": "FunctionDefinition",
                        "src": "3325:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10530,
                            "nodeType": "StructuredDocumentation",
                            "src": "3152:168:82",
                            "text": "@notice The amount of assets that the vault would\n exchange for the amount of shares provided, in an\n ideal scenario where all the conditions are met."
                        },
                        "functionSelector": "07a2d13a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToAssets",
                        "nameLocation": "3334:15:82",
                        "parameters": {
                            "id": 10533,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10532,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3367:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10537,
                                    "src": "3359:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10531,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3359:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3349:30:82"
                        },
                        "returnParameters": {
                            "id": 10536,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10535,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3419:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10537,
                                    "src": "3411:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10534,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3411:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3410:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10545,
                        "nodeType": "FunctionDefinition",
                        "src": "3637:99:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10538,
                            "nodeType": "StructuredDocumentation",
                            "src": "3433:199:82",
                            "text": "@notice Total number of underlying assets that can\n be deposited by `owner` into the Vault, where `owner`\n corresponds to the input parameter `receiver` of a\n `deposit` call."
                        },
                        "functionSelector": "402d267d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxDeposit",
                        "nameLocation": "3646:10:82",
                        "parameters": {
                            "id": 10541,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10540,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3674:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10545,
                                    "src": "3666:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10539,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3666:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3656:29:82"
                        },
                        "returnParameters": {
                            "id": 10544,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10543,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "3725:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10545,
                                    "src": "3717:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10542,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3717:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3716:19:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10553,
                        "nodeType": "FunctionDefinition",
                        "src": "3909:101:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10546,
                            "nodeType": "StructuredDocumentation",
                            "src": "3742:162:82",
                            "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their deposit at the current block, given\n current on-chain conditions."
                        },
                        "functionSelector": "ef8b30f7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewDeposit",
                        "nameLocation": "3918:14:82",
                        "parameters": {
                            "id": 10549,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10548,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3950:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10553,
                                    "src": "3942:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10547,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3942:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3932:30:82"
                        },
                        "returnParameters": {
                            "id": 10552,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10551,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4002:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10553,
                                    "src": "3994:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10550,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3994:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3993:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10561,
                        "nodeType": "FunctionDefinition",
                        "src": "4192:96:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10554,
                            "nodeType": "StructuredDocumentation",
                            "src": "4016:171:82",
                            "text": "@notice Total number of underlying shares that can be minted\n for `owner`, where `owner` corresponds to the input\n parameter `receiver` of a `mint` call."
                        },
                        "functionSelector": "c63d75b6",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxMint",
                        "nameLocation": "4201:7:82",
                        "parameters": {
                            "id": 10557,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10556,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4226:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10561,
                                    "src": "4218:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10555,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4218:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4208:29:82"
                        },
                        "returnParameters": {
                            "id": 10560,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10559,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "4277:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10561,
                                    "src": "4269:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10558,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4269:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4268:19:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10569,
                        "nodeType": "FunctionDefinition",
                        "src": "4458:98:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10562,
                            "nodeType": "StructuredDocumentation",
                            "src": "4294:159:82",
                            "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their mint at the current block, given\n current on-chain conditions."
                        },
                        "functionSelector": "b3d7f6b9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewMint",
                        "nameLocation": "4467:11:82",
                        "parameters": {
                            "id": 10565,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10564,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4496:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10569,
                                    "src": "4488:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10563,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4488:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4478:30:82"
                        },
                        "returnParameters": {
                            "id": 10568,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10567,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "4548:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10569,
                                    "src": "4540:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10566,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4540:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4539:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10577,
                        "nodeType": "FunctionDefinition",
                        "src": "4748:100:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10570,
                            "nodeType": "StructuredDocumentation",
                            "src": "4562:181:82",
                            "text": "@notice Total number of underlying assets that can be\n withdrawn from the Vault by `owner`, where `owner`\n corresponds to the input parameter of a `withdraw` call."
                        },
                        "functionSelector": "ce96cb77",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxWithdraw",
                        "nameLocation": "4757:11:82",
                        "parameters": {
                            "id": 10573,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10572,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4786:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10577,
                                    "src": "4778:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10571,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4778:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4768:29:82"
                        },
                        "returnParameters": {
                            "id": 10576,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10575,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "4837:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10577,
                                    "src": "4829:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10574,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4829:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4828:19:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10585,
                        "nodeType": "FunctionDefinition",
                        "src": "5024:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10578,
                            "nodeType": "StructuredDocumentation",
                            "src": "4854:165:82",
                            "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their withdrawal at the current block,\n given current on-chain conditions."
                        },
                        "functionSelector": "0a28a477",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewWithdraw",
                        "nameLocation": "5033:15:82",
                        "parameters": {
                            "id": 10581,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10580,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5066:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10585,
                                    "src": "5058:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10579,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5058:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5048:30:82"
                        },
                        "returnParameters": {
                            "id": 10584,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10583,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5118:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10585,
                                    "src": "5110:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10582,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5110:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5109:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10593,
                        "nodeType": "FunctionDefinition",
                        "src": "5315:98:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10586,
                            "nodeType": "StructuredDocumentation",
                            "src": "5132:178:82",
                            "text": "@notice Total number of underlying shares that can be\n redeemed from the Vault by `owner`, where `owner` corresponds\n to the input parameter of a `redeem` call."
                        },
                        "functionSelector": "d905777e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxRedeem",
                        "nameLocation": "5324:9:82",
                        "parameters": {
                            "id": 10589,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10588,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "5351:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10593,
                                    "src": "5343:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10587,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5343:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5333:29:82"
                        },
                        "returnParameters": {
                            "id": 10592,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10591,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "5402:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10593,
                                    "src": "5394:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10590,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5394:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5393:19:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10601,
                        "nodeType": "FunctionDefinition",
                        "src": "5589:100:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10594,
                            "nodeType": "StructuredDocumentation",
                            "src": "5419:165:82",
                            "text": "@notice Allows an on-chain or off-chain user to simulate\n the effects of their redemption at the current block,\n given current on-chain conditions."
                        },
                        "functionSelector": "4cdad506",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewRedeem",
                        "nameLocation": "5598:13:82",
                        "parameters": {
                            "id": 10597,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10596,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5629:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10601,
                                    "src": "5621:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10595,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5621:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5611:30:82"
                        },
                        "returnParameters": {
                            "id": 10600,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10599,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5681:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10601,
                                    "src": "5673:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10598,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5673:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5672:16:82"
                        },
                        "scope": 10602,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 10442,
                            "name": "IERC20",
                            "nameLocations": [
                                "325:6:82"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10319,
                            "src": "325:6:82"
                        },
                        "id": 10443,
                        "nodeType": "InheritanceSpecifier",
                        "src": "325:6:82"
                    }
                ],
                "canonicalName": "IERC4626",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 10441,
                    "nodeType": "StructuredDocumentation",
                    "src": "217:78:82",
                    "text": "@title ERC4626 interface\n See: https://eips.ethereum.org/EIPS/eip-4626"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    10602,
                    10319
                ],
                "name": "IERC4626",
                "nameLocation": "313:8:82",
                "scope": 10603,
                "usedErrors": [],
                "usedEvents": [
                    10235,
                    10244,
                    10454,
                    10465
                ]
            }
        ],
        "license": "GPL-2.0-or-later"
    },
    "id": 82
};
