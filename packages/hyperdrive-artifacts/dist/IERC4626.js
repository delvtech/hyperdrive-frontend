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
        "id": 7204,
        "exportedSymbols": {
            "IERC20": [
                6920
            ],
            "IERC4626": [
                7203
            ]
        },
        "nodeType": "SourceUnit",
        "src": "152:5540:40",
        "nodes": [
            {
                "id": 7039,
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
                "id": 7041,
                "nodeType": "ImportDirective",
                "src": "177:38:40",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7204,
                "sourceUnit": 6921,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7040,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6920,
                            "src": "186:6:40",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7203,
                "nodeType": "ContractDefinition",
                "src": "295:5396:40",
                "nodes": [
                    {
                        "id": 7055,
                        "nodeType": "EventDefinition",
                        "src": "610:134:40",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7045,
                            "nodeType": "StructuredDocumentation",
                            "src": "494:111:40",
                            "text": "@notice `sender` has exchanged `assets` for `shares`,\n and transferred those `shares` to `receiver`."
                        },
                        "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
                        "name": "Deposit",
                        "nameLocation": "616:7:40",
                        "parameters": {
                            "id": 7054,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7047,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "649:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7055,
                                    "src": "633:22:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7046,
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
                                    "id": 7049,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "681:8:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7055,
                                    "src": "665:24:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7048,
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
                                    "id": 7051,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "707:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7055,
                                    "src": "699:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7050,
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
                                    "id": 7053,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "731:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7055,
                                    "src": "723:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7052,
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
                        "id": 7066,
                        "nodeType": "EventDefinition",
                        "src": "866:135:40",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7056,
                            "nodeType": "StructuredDocumentation",
                            "src": "750:111:40",
                            "text": "@notice `sender` has exchanged `shares` for `assets`,\n and transferred those `assets` to `receiver`."
                        },
                        "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
                        "name": "Withdraw",
                        "nameLocation": "872:8:40",
                        "parameters": {
                            "id": 7065,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7058,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "906:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7066,
                                    "src": "890:22:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7057,
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
                                    "id": 7060,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "938:8:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7066,
                                    "src": "922:24:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7059,
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
                                    "id": 7062,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "964:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7066,
                                    "src": "956:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7061,
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
                                    "id": 7064,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "988:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7066,
                                    "src": "980:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7063,
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
                        "id": 7072,
                        "nodeType": "FunctionDefinition",
                        "src": "1303:63:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7067,
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
                            "id": 7068,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1317:2:40"
                        },
                        "returnParameters": {
                            "id": 7071,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7070,
                                    "mutability": "mutable",
                                    "name": "asset",
                                    "nameLocation": "1359:5:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7072,
                                    "src": "1351:13:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7069,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7078,
                        "nodeType": "FunctionDefinition",
                        "src": "1461:75:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7073,
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
                            "id": 7074,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1481:2:40"
                        },
                        "returnParameters": {
                            "id": 7077,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7076,
                                    "mutability": "mutable",
                                    "name": "totalAssets",
                                    "nameLocation": "1523:11:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7078,
                                    "src": "1515:19:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7075,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7088,
                        "nodeType": "FunctionDefinition",
                        "src": "1835:115:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7079,
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
                            "id": 7084,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7081,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "1869:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7088,
                                    "src": "1861:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7080,
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
                                    "id": 7083,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1893:8:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7088,
                                    "src": "1885:16:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7082,
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
                            "id": 7087,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7086,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "1942:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7088,
                                    "src": "1934:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7085,
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
                        "scope": 7203,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7098,
                        "nodeType": "FunctionDefinition",
                        "src": "2075:112:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7089,
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
                            "id": 7094,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7091,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2106:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7098,
                                    "src": "2098:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7090,
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
                                    "id": 7093,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2130:8:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7098,
                                    "src": "2122:16:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7092,
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
                            "id": 7097,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7096,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2179:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7098,
                                    "src": "2171:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7095,
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
                        "scope": 7203,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7110,
                        "nodeType": "FunctionDefinition",
                        "src": "2302:139:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7099,
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
                            "id": 7106,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7101,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2337:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7110,
                                    "src": "2329:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7100,
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
                                    "id": 7103,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2361:8:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7110,
                                    "src": "2353:16:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7102,
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
                                    "id": 7105,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2387:5:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7110,
                                    "src": "2379:13:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7104,
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
                            "id": 7109,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7108,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2433:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7110,
                                    "src": "2425:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7107,
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
                        "scope": 7203,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7122,
                        "nodeType": "FunctionDefinition",
                        "src": "2556:137:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7111,
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
                            "id": 7118,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7113,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2589:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7122,
                                    "src": "2581:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7112,
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
                                    "id": 7115,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2613:8:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7122,
                                    "src": "2605:16:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7114,
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
                                    "id": 7117,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2639:5:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7122,
                                    "src": "2631:13:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7116,
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
                            "id": 7121,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7120,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2685:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7122,
                                    "src": "2677:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7119,
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
                        "scope": 7203,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7130,
                        "nodeType": "FunctionDefinition",
                        "src": "3044:102:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7123,
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
                            "id": 7126,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7125,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3086:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7130,
                                    "src": "3078:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7124,
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
                            "id": 7129,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7128,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3138:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7130,
                                    "src": "3130:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7127,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7138,
                        "nodeType": "FunctionDefinition",
                        "src": "3325:102:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7131,
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
                            "id": 7134,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7133,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3367:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7138,
                                    "src": "3359:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7132,
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
                            "id": 7137,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7136,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3419:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7138,
                                    "src": "3411:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7135,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7146,
                        "nodeType": "FunctionDefinition",
                        "src": "3637:99:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7139,
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
                            "id": 7142,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7141,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3674:5:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7146,
                                    "src": "3666:13:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7140,
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
                            "id": 7145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7144,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "3725:9:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7146,
                                    "src": "3717:17:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7143,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7154,
                        "nodeType": "FunctionDefinition",
                        "src": "3909:101:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7147,
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
                            "id": 7150,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7149,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3950:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7154,
                                    "src": "3942:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7148,
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
                            "id": 7153,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7152,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4002:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7154,
                                    "src": "3994:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7151,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7162,
                        "nodeType": "FunctionDefinition",
                        "src": "4192:96:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7155,
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
                            "id": 7158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7157,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4226:5:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7162,
                                    "src": "4218:13:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7156,
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
                            "id": 7161,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7160,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "4277:9:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7162,
                                    "src": "4269:17:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7159,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7170,
                        "nodeType": "FunctionDefinition",
                        "src": "4458:98:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7163,
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
                            "id": 7166,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7165,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4496:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7170,
                                    "src": "4488:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7164,
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
                            "id": 7169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7168,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "4548:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7170,
                                    "src": "4540:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7167,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7178,
                        "nodeType": "FunctionDefinition",
                        "src": "4748:100:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7171,
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
                            "id": 7174,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7173,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4786:5:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7178,
                                    "src": "4778:13:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7172,
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
                            "id": 7177,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7176,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "4837:9:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7178,
                                    "src": "4829:17:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7175,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7186,
                        "nodeType": "FunctionDefinition",
                        "src": "5024:102:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7179,
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
                            "id": 7182,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7181,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5066:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7186,
                                    "src": "5058:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7180,
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
                            "id": 7185,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7184,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5118:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7186,
                                    "src": "5110:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7183,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7194,
                        "nodeType": "FunctionDefinition",
                        "src": "5315:98:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7187,
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
                            "id": 7190,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7189,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "5351:5:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7194,
                                    "src": "5343:13:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7188,
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
                            "id": 7193,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7192,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "5402:9:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7194,
                                    "src": "5394:17:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7191,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 7202,
                        "nodeType": "FunctionDefinition",
                        "src": "5589:100:40",
                        "nodes": [],
                        "documentation": {
                            "id": 7195,
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
                            "id": 7198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7197,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5629:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7202,
                                    "src": "5621:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7196,
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
                            "id": 7201,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7200,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5681:6:40",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7202,
                                    "src": "5673:14:40",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7199,
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
                        "scope": 7203,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 7043,
                            "name": "IERC20",
                            "nameLocations": [
                                "325:6:40"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 6920,
                            "src": "325:6:40"
                        },
                        "id": 7044,
                        "nodeType": "InheritanceSpecifier",
                        "src": "325:6:40"
                    }
                ],
                "canonicalName": "IERC4626",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 7042,
                    "nodeType": "StructuredDocumentation",
                    "src": "217:78:40",
                    "text": "@title ERC4626 interface\n See: https://eips.ethereum.org/EIPS/eip-4626"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    7203,
                    6920
                ],
                "name": "IERC4626",
                "nameLocation": "313:8:40",
                "scope": 7204,
                "usedErrors": [],
                "usedEvents": [
                    6836,
                    6845,
                    7055,
                    7066
                ]
            }
        ],
        "license": "GPL-2.0-or-later"
    },
    "id": 40
};
