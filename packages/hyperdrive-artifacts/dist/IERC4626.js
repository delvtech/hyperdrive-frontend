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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxShares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maxAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"totalAssets\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"asset()\":{\"returns\":{\"asset\":\"The underlying asset.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"convertToAssets(uint256)\":{\"params\":{\"shares\":\"The amount of shares to convert.\"},\"returns\":{\"assets\":\"The amount of assets that would be received.\"}},\"convertToShares(uint256)\":{\"params\":{\"assets\":\"The amount of assets to convert.\"},\"returns\":{\"shares\":\"The amount of shares that would be minted.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"deposit(uint256,address)\":{\"params\":{\"assets\":\"The amount of assets to deposit.\",\"receiver\":\"The address that will receive the shares.\"},\"returns\":{\"shares\":\"The amount of shares minted.\"}},\"maxDeposit(address)\":{\"params\":{\"owner\":\"The address of the account that would deposit the assets.\"},\"returns\":{\"maxAssets\":\"The maximum amount of assets that can be deposited.\"}},\"maxMint(address)\":{\"params\":{\"owner\":\"The address of the account that would mint the shares.\"},\"returns\":{\"maxShares\":\"The maximum number of shares that can be minted.\"}},\"maxRedeem(address)\":{\"params\":{\"owner\":\"The address of the account that would redeem the shares.\"},\"returns\":{\"maxShares\":\"The maximum number of shares that can be redeemed.\"}},\"maxWithdraw(address)\":{\"params\":{\"owner\":\"The address of the account that would withdraw the assets.\"},\"returns\":{\"maxAssets\":\"The maximum amount of assets that can be withdrawn.\"}},\"mint(uint256,address)\":{\"params\":{\"receiver\":\"The address that will receive the shares.\",\"shares\":\"The amount of shares to mint.\"},\"returns\":{\"assets\":\"The amount of assets required to mint the shares.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"previewDeposit(uint256)\":{\"params\":{\"assets\":\"The amount of assets to deposit.\"},\"returns\":{\"shares\":\"The amount of shares that would be minted.\"}},\"previewMint(uint256)\":{\"params\":{\"shares\":\"The amount of shares to mint.\"},\"returns\":{\"assets\":\"The amount of assets deposited.\"}},\"previewRedeem(uint256)\":{\"params\":{\"shares\":\"The amount of shares to redeem.\"},\"returns\":{\"assets\":\"The amount of assets received.\"}},\"previewWithdraw(uint256)\":{\"params\":{\"assets\":\"The amount of assets to withdraw.\"},\"returns\":{\"shares\":\"The amount of shares that would be burned.\"}},\"redeem(uint256,address,address)\":{\"params\":{\"owner\":\"The address that owns the shares.\",\"receiver\":\"The address that will receive the assets.\",\"shares\":\"The amount of shares to burn.\"},\"returns\":{\"assets\":\"The amount of assets received for burning the shares.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalAssets()\":{\"returns\":{\"totalAssets\":\"The total number of underlying assets.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"withdraw(uint256,address,address)\":{\"params\":{\"assets\":\"The amount of assets to withdraw.\",\"owner\":\"The address that owns the shares.\",\"receiver\":\"The address that will receive the assets.\"},\"returns\":{\"shares\":\"The amount of shares burned.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Deposit(address,address,uint256,uint256)\":{\"notice\":\"Emitted when funds are deposited into the vault.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"},\"Withdraw(address,address,uint256,uint256)\":{\"notice\":\"Emitted when funds are withdrawn from the vault.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"asset()\":{\"notice\":\"The underlying asset of the vault.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"convertToAssets(uint256)\":{\"notice\":\"Converts an amount of shares to assets.\"},\"convertToShares(uint256)\":{\"notice\":\"Converts an amount of assets to shares.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"deposit(uint256,address)\":{\"notice\":\"Deposits assets into the vault and mints shares.\"},\"maxDeposit(address)\":{\"notice\":\"The maximum amount of assets that can be deposited into the         vault.\"},\"maxMint(address)\":{\"notice\":\"The maximum number of shares that can be minted by `owner`.\"},\"maxRedeem(address)\":{\"notice\":\"The maximum number of shares that can be redeemed by `owner`.\"},\"maxWithdraw(address)\":{\"notice\":\"The maximum amount of assets that can be withdrawn from the         vault.\"},\"mint(uint256,address)\":{\"notice\":\"Mints a specified amount of shares for a receiver.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"previewDeposit(uint256)\":{\"notice\":\"Previews the amount of shares that would be minted for a         given amount of assets.\"},\"previewMint(uint256)\":{\"notice\":\"Previews the amount of assets that would be minted for a         given amount of shares.\"},\"previewRedeem(uint256)\":{\"notice\":\"Previews the amount of assets that would be received for a         given amount of shares.\"},\"previewWithdraw(uint256)\":{\"notice\":\"Previews the amount of shares that would be burned for a         given amount of assets.\"},\"redeem(uint256,address,address)\":{\"notice\":\"Burns a specified amount of shares for an owner.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalAssets()\":{\"notice\":\"The total number of underlying assets held by the vault.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"withdraw(uint256,address,address)\":{\"notice\":\"Withdraws assets from the vault and burns shares.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC4626.sol\":\"IERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366\",\"dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB\"]}},\"version\":1}",
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
                    "asset()": {
                        "returns": {
                            "asset": "The underlying asset."
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
                    "convertToAssets(uint256)": {
                        "params": {
                            "shares": "The amount of shares to convert."
                        },
                        "returns": {
                            "assets": "The amount of assets that would be received."
                        }
                    },
                    "convertToShares(uint256)": {
                        "params": {
                            "assets": "The amount of assets to convert."
                        },
                        "returns": {
                            "shares": "The amount of shares that would be minted."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The token's decimals."
                        }
                    },
                    "deposit(uint256,address)": {
                        "params": {
                            "assets": "The amount of assets to deposit.",
                            "receiver": "The address that will receive the shares."
                        },
                        "returns": {
                            "shares": "The amount of shares minted."
                        }
                    },
                    "maxDeposit(address)": {
                        "params": {
                            "owner": "The address of the account that would deposit the assets."
                        },
                        "returns": {
                            "maxAssets": "The maximum amount of assets that can be deposited."
                        }
                    },
                    "maxMint(address)": {
                        "params": {
                            "owner": "The address of the account that would mint the shares."
                        },
                        "returns": {
                            "maxShares": "The maximum number of shares that can be minted."
                        }
                    },
                    "maxRedeem(address)": {
                        "params": {
                            "owner": "The address of the account that would redeem the shares."
                        },
                        "returns": {
                            "maxShares": "The maximum number of shares that can be redeemed."
                        }
                    },
                    "maxWithdraw(address)": {
                        "params": {
                            "owner": "The address of the account that would withdraw the assets."
                        },
                        "returns": {
                            "maxAssets": "The maximum amount of assets that can be withdrawn."
                        }
                    },
                    "mint(uint256,address)": {
                        "params": {
                            "receiver": "The address that will receive the shares.",
                            "shares": "The amount of shares to mint."
                        },
                        "returns": {
                            "assets": "The amount of assets required to mint the shares."
                        }
                    },
                    "name()": {
                        "returns": {
                            "_0": "The token's name."
                        }
                    },
                    "previewDeposit(uint256)": {
                        "params": {
                            "assets": "The amount of assets to deposit."
                        },
                        "returns": {
                            "shares": "The amount of shares that would be minted."
                        }
                    },
                    "previewMint(uint256)": {
                        "params": {
                            "shares": "The amount of shares to mint."
                        },
                        "returns": {
                            "assets": "The amount of assets deposited."
                        }
                    },
                    "previewRedeem(uint256)": {
                        "params": {
                            "shares": "The amount of shares to redeem."
                        },
                        "returns": {
                            "assets": "The amount of assets received."
                        }
                    },
                    "previewWithdraw(uint256)": {
                        "params": {
                            "assets": "The amount of assets to withdraw."
                        },
                        "returns": {
                            "shares": "The amount of shares that would be burned."
                        }
                    },
                    "redeem(uint256,address,address)": {
                        "params": {
                            "owner": "The address that owns the shares.",
                            "receiver": "The address that will receive the assets.",
                            "shares": "The amount of shares to burn."
                        },
                        "returns": {
                            "assets": "The amount of assets received for burning the shares."
                        }
                    },
                    "symbol()": {
                        "returns": {
                            "_0": "The token's symbol."
                        }
                    },
                    "totalAssets()": {
                        "returns": {
                            "totalAssets": "The total number of underlying assets."
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
                    },
                    "withdraw(uint256,address,address)": {
                        "params": {
                            "assets": "The amount of assets to withdraw.",
                            "owner": "The address that owns the shares.",
                            "receiver": "The address that will receive the assets."
                        },
                        "returns": {
                            "shares": "The amount of shares burned."
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
                        "notice": "The underlying asset of the vault."
                    },
                    "balanceOf(address)": {
                        "notice": "Gets the balance of an account."
                    },
                    "convertToAssets(uint256)": {
                        "notice": "Converts an amount of shares to assets."
                    },
                    "convertToShares(uint256)": {
                        "notice": "Converts an amount of assets to shares."
                    },
                    "decimals()": {
                        "notice": "Gets the token's decimals."
                    },
                    "deposit(uint256,address)": {
                        "notice": "Deposits assets into the vault and mints shares."
                    },
                    "maxDeposit(address)": {
                        "notice": "The maximum amount of assets that can be deposited into the         vault."
                    },
                    "maxMint(address)": {
                        "notice": "The maximum number of shares that can be minted by `owner`."
                    },
                    "maxRedeem(address)": {
                        "notice": "The maximum number of shares that can be redeemed by `owner`."
                    },
                    "maxWithdraw(address)": {
                        "notice": "The maximum amount of assets that can be withdrawn from the         vault."
                    },
                    "mint(uint256,address)": {
                        "notice": "Mints a specified amount of shares for a receiver."
                    },
                    "name()": {
                        "notice": "Gets the token's name."
                    },
                    "previewDeposit(uint256)": {
                        "notice": "Previews the amount of shares that would be minted for a         given amount of assets."
                    },
                    "previewMint(uint256)": {
                        "notice": "Previews the amount of assets that would be minted for a         given amount of shares."
                    },
                    "previewRedeem(uint256)": {
                        "notice": "Previews the amount of assets that would be received for a         given amount of shares."
                    },
                    "previewWithdraw(uint256)": {
                        "notice": "Previews the amount of shares that would be burned for a         given amount of assets."
                    },
                    "redeem(uint256,address,address)": {
                        "notice": "Burns a specified amount of shares for an owner."
                    },
                    "symbol()": {
                        "notice": "Gets the token's symbol."
                    },
                    "totalAssets()": {
                        "notice": "The total number of underlying assets held by the vault."
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
                        "notice": "Withdraws assets from the vault and burns shares."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
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
                "keccak256": "0x891ede2965eda391b0e78cdba7490a5ddadcc43f039c22c183529300dada0741",
                "urls": [
                    "bzz-raw://ec659582084892c1a857676bf39fa5e26532557a8210978408857315e9195366",
                    "dweb:/ipfs/QmYYXo28FtBLEBQxK9YeFhyB2zdrpbrNQXfrzN4fmBuHuB"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "id": 10263,
        "exportedSymbols": {
            "IERC20": [
                9980
            ],
            "IERC4626": [
                10262
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:5833:82",
        "nodes": [
            {
                "id": 10099,
                "nodeType": "PragmaDirective",
                "src": "39:23:82",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 10101,
                "nodeType": "ImportDirective",
                "src": "64:38:82",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10263,
                "sourceUnit": 9981,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10100,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9980,
                            "src": "73:6:82",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10262,
                "nodeType": "ContractDefinition",
                "src": "104:5767:82",
                "nodes": [
                    {
                        "id": 10114,
                        "nodeType": "EventDefinition",
                        "src": "212:134:82",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10104,
                            "nodeType": "StructuredDocumentation",
                            "src": "147:60:82",
                            "text": "@notice Emitted when funds are deposited into the vault."
                        },
                        "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
                        "name": "Deposit",
                        "nameLocation": "218:7:82",
                        "parameters": {
                            "id": 10113,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10106,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "251:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10114,
                                    "src": "235:22:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10105,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "235:7:82",
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
                                    "id": 10108,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "283:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10114,
                                    "src": "267:24:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10107,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "267:7:82",
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
                                    "id": 10110,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "309:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10114,
                                    "src": "301:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10109,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "301:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10112,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "333:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10114,
                                    "src": "325:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10111,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "325:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "225:120:82"
                        }
                    },
                    {
                        "id": 10125,
                        "nodeType": "EventDefinition",
                        "src": "417:135:82",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10115,
                            "nodeType": "StructuredDocumentation",
                            "src": "352:60:82",
                            "text": "@notice Emitted when funds are withdrawn from the vault."
                        },
                        "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
                        "name": "Withdraw",
                        "nameLocation": "423:8:82",
                        "parameters": {
                            "id": 10124,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10117,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "457:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10125,
                                    "src": "441:22:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10116,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "441:7:82",
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
                                    "id": 10119,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "489:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10125,
                                    "src": "473:24:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10118,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "473:7:82",
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
                                    "id": 10121,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "515:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10125,
                                    "src": "507:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10120,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "507:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10123,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "539:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10125,
                                    "src": "531:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10122,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "531:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "431:120:82"
                        }
                    },
                    {
                        "id": 10131,
                        "nodeType": "FunctionDefinition",
                        "src": "653:63:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10126,
                            "nodeType": "StructuredDocumentation",
                            "src": "558:90:82",
                            "text": "@notice The underlying asset of the vault.\n @return asset The underlying asset."
                        },
                        "functionSelector": "38d52e0f",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "asset",
                        "nameLocation": "662:5:82",
                        "parameters": {
                            "id": 10127,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "667:2:82"
                        },
                        "returnParameters": {
                            "id": 10130,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10129,
                                    "mutability": "mutable",
                                    "name": "asset",
                                    "nameLocation": "709:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10131,
                                    "src": "701:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10128,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "701:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "700:15:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10137,
                        "nodeType": "FunctionDefinition",
                        "src": "862:75:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10132,
                            "nodeType": "StructuredDocumentation",
                            "src": "722:135:82",
                            "text": "@notice The total number of underlying assets held by the vault.\n @return totalAssets The total number of underlying assets."
                        },
                        "functionSelector": "01e1d114",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalAssets",
                        "nameLocation": "871:11:82",
                        "parameters": {
                            "id": 10133,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "882:2:82"
                        },
                        "returnParameters": {
                            "id": 10136,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10135,
                                    "mutability": "mutable",
                                    "name": "totalAssets",
                                    "nameLocation": "924:11:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10137,
                                    "src": "916:19:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10134,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "916:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "915:21:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10147,
                        "nodeType": "FunctionDefinition",
                        "src": "1181:115:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10138,
                            "nodeType": "StructuredDocumentation",
                            "src": "943:233:82",
                            "text": "@notice Deposits assets into the vault and mints shares.\n @param assets The amount of assets to deposit.\n @param receiver The address that will receive the shares.\n @return shares The amount of shares minted."
                        },
                        "functionSelector": "6e553f65",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deposit",
                        "nameLocation": "1190:7:82",
                        "parameters": {
                            "id": 10143,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10140,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "1215:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10147,
                                    "src": "1207:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10139,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1207:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10142,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1239:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10147,
                                    "src": "1231:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10141,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1231:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1197:56:82"
                        },
                        "returnParameters": {
                            "id": 10146,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10145,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "1288:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10147,
                                    "src": "1280:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10144,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1280:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1279:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10157,
                        "nodeType": "FunctionDefinition",
                        "src": "1560:112:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10148,
                            "nodeType": "StructuredDocumentation",
                            "src": "1302:253:82",
                            "text": "@notice Mints a specified amount of shares for a receiver.\n @param shares The amount of shares to mint.\n @param receiver The address that will receive the shares.\n @return assets The amount of assets required to mint the shares."
                        },
                        "functionSelector": "94bf804d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "1569:4:82",
                        "parameters": {
                            "id": 10153,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10150,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "1591:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10157,
                                    "src": "1583:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10149,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1583:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10152,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1615:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10157,
                                    "src": "1607:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10151,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1607:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1573:56:82"
                        },
                        "returnParameters": {
                            "id": 10156,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10155,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "1664:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10157,
                                    "src": "1656:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10154,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1656:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1655:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10169,
                        "nodeType": "FunctionDefinition",
                        "src": "1973:139:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10158,
                            "nodeType": "StructuredDocumentation",
                            "src": "1678:290:82",
                            "text": "@notice Withdraws assets from the vault and burns shares.\n @param assets The amount of assets to withdraw.\n @param receiver The address that will receive the assets.\n @param owner The address that owns the shares.\n @return shares The amount of shares burned."
                        },
                        "functionSelector": "b460af94",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "withdraw",
                        "nameLocation": "1982:8:82",
                        "parameters": {
                            "id": 10165,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10160,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2008:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10169,
                                    "src": "2000:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10159,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2000:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10162,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2032:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10169,
                                    "src": "2024:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10161,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2024:7:82",
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
                                    "id": 10164,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2058:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10169,
                                    "src": "2050:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10163,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2050:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1990:79:82"
                        },
                        "returnParameters": {
                            "id": 10168,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10167,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2104:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10169,
                                    "src": "2096:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10166,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2096:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2095:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10181,
                        "nodeType": "FunctionDefinition",
                        "src": "2433:137:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10170,
                            "nodeType": "StructuredDocumentation",
                            "src": "2118:310:82",
                            "text": "@notice Burns a specified amount of shares for an owner.\n @param shares The amount of shares to burn.\n @param receiver The address that will receive the assets.\n @param owner The address that owns the shares.\n @return assets The amount of assets received for burning the shares."
                        },
                        "functionSelector": "ba087652",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeem",
                        "nameLocation": "2442:6:82",
                        "parameters": {
                            "id": 10177,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10172,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2466:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10181,
                                    "src": "2458:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10171,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2458:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10174,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2490:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10181,
                                    "src": "2482:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10173,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2482:7:82",
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
                                    "id": 10176,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2516:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10181,
                                    "src": "2508:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10175,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2508:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2448:79:82"
                        },
                        "returnParameters": {
                            "id": 10180,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10179,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2562:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10181,
                                    "src": "2554:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10178,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2554:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2553:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10189,
                        "nodeType": "FunctionDefinition",
                        "src": "2753:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10182,
                            "nodeType": "StructuredDocumentation",
                            "src": "2576:172:82",
                            "text": "@notice Converts an amount of assets to shares.\n @param assets The amount of assets to convert.\n @return shares The amount of shares that would be minted."
                        },
                        "functionSelector": "c6e6f592",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToShares",
                        "nameLocation": "2762:15:82",
                        "parameters": {
                            "id": 10185,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10184,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2795:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10189,
                                    "src": "2787:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10183,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2787:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2777:30:82"
                        },
                        "returnParameters": {
                            "id": 10188,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10187,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2847:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10189,
                                    "src": "2839:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10186,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2839:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2838:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10197,
                        "nodeType": "FunctionDefinition",
                        "src": "3040:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10190,
                            "nodeType": "StructuredDocumentation",
                            "src": "2861:174:82",
                            "text": "@notice Converts an amount of shares to assets.\n @param shares The amount of shares to convert.\n @return assets The amount of assets that would be received."
                        },
                        "functionSelector": "07a2d13a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToAssets",
                        "nameLocation": "3049:15:82",
                        "parameters": {
                            "id": 10193,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10192,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3082:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10197,
                                    "src": "3074:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10191,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3074:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3064:30:82"
                        },
                        "returnParameters": {
                            "id": 10196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10195,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3134:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10197,
                                    "src": "3126:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10194,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3126:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3125:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10205,
                        "nodeType": "FunctionDefinition",
                        "src": "3404:99:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10198,
                            "nodeType": "StructuredDocumentation",
                            "src": "3148:251:82",
                            "text": "@notice The maximum amount of assets that can be deposited into the\n         vault.\n @param owner The address of the account that would deposit the assets.\n @return maxAssets The maximum amount of assets that can be deposited."
                        },
                        "functionSelector": "402d267d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxDeposit",
                        "nameLocation": "3413:10:82",
                        "parameters": {
                            "id": 10201,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10200,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3441:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10205,
                                    "src": "3433:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10199,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3433:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3423:29:82"
                        },
                        "returnParameters": {
                            "id": 10204,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10203,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "3492:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10205,
                                    "src": "3484:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10202,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3484:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3483:19:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10213,
                        "nodeType": "FunctionDefinition",
                        "src": "3743:101:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10206,
                            "nodeType": "StructuredDocumentation",
                            "src": "3509:229:82",
                            "text": "@notice Previews the amount of shares that would be minted for a\n         given amount of assets.\n @param assets The amount of assets to deposit.\n @return shares The amount of shares that would be minted."
                        },
                        "functionSelector": "ef8b30f7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewDeposit",
                        "nameLocation": "3752:14:82",
                        "parameters": {
                            "id": 10209,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10208,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3784:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10213,
                                    "src": "3776:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10207,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3776:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3766:30:82"
                        },
                        "returnParameters": {
                            "id": 10212,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10211,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3836:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10213,
                                    "src": "3828:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10210,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3828:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3827:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10221,
                        "nodeType": "FunctionDefinition",
                        "src": "4077:96:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10214,
                            "nodeType": "StructuredDocumentation",
                            "src": "3850:222:82",
                            "text": "@notice The maximum number of shares that can be minted by `owner`.\n @param owner The address of the account that would mint the shares.\n @return maxShares The maximum number of shares that can be minted."
                        },
                        "functionSelector": "c63d75b6",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxMint",
                        "nameLocation": "4086:7:82",
                        "parameters": {
                            "id": 10217,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10216,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4111:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10221,
                                    "src": "4103:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10215,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4103:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4093:29:82"
                        },
                        "returnParameters": {
                            "id": 10220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10219,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "4162:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10221,
                                    "src": "4154:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10218,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4154:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4153:19:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10229,
                        "nodeType": "FunctionDefinition",
                        "src": "4399:98:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10222,
                            "nodeType": "StructuredDocumentation",
                            "src": "4179:215:82",
                            "text": "@notice Previews the amount of assets that would be minted for a\n         given amount of shares.\n @param shares The amount of shares to mint.\n @return assets The amount of assets deposited."
                        },
                        "functionSelector": "b3d7f6b9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewMint",
                        "nameLocation": "4408:11:82",
                        "parameters": {
                            "id": 10225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10224,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4437:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10229,
                                    "src": "4429:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10223,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4429:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4419:30:82"
                        },
                        "returnParameters": {
                            "id": 10228,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10227,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "4489:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10229,
                                    "src": "4481:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10226,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4481:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4480:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10237,
                        "nodeType": "FunctionDefinition",
                        "src": "4760:100:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10230,
                            "nodeType": "StructuredDocumentation",
                            "src": "4503:252:82",
                            "text": "@notice The maximum amount of assets that can be withdrawn from the\n         vault.\n @param owner The address of the account that would withdraw the assets.\n @return maxAssets The maximum amount of assets that can be withdrawn."
                        },
                        "functionSelector": "ce96cb77",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxWithdraw",
                        "nameLocation": "4769:11:82",
                        "parameters": {
                            "id": 10233,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10232,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4798:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10237,
                                    "src": "4790:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10231,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4790:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4780:29:82"
                        },
                        "returnParameters": {
                            "id": 10236,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10235,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "4849:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10237,
                                    "src": "4841:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10234,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4841:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4840:19:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10245,
                        "nodeType": "FunctionDefinition",
                        "src": "5101:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10238,
                            "nodeType": "StructuredDocumentation",
                            "src": "4866:230:82",
                            "text": "@notice Previews the amount of shares that would be burned for a\n         given amount of assets.\n @param assets The amount of assets to withdraw.\n @return shares The amount of shares that would be burned."
                        },
                        "functionSelector": "0a28a477",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewWithdraw",
                        "nameLocation": "5110:15:82",
                        "parameters": {
                            "id": 10241,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10240,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5143:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10245,
                                    "src": "5135:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10239,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5135:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5125:30:82"
                        },
                        "returnParameters": {
                            "id": 10244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10243,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5195:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10245,
                                    "src": "5187:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10242,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5187:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5186:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10253,
                        "nodeType": "FunctionDefinition",
                        "src": "5442:98:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10246,
                            "nodeType": "StructuredDocumentation",
                            "src": "5209:228:82",
                            "text": "@notice The maximum number of shares that can be redeemed by `owner`.\n @param owner The address of the account that would redeem the shares.\n @return maxShares The maximum number of shares that can be redeemed."
                        },
                        "functionSelector": "d905777e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxRedeem",
                        "nameLocation": "5451:9:82",
                        "parameters": {
                            "id": 10249,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10248,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "5478:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10253,
                                    "src": "5470:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10247,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5470:7:82",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5460:29:82"
                        },
                        "returnParameters": {
                            "id": 10252,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10251,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "5529:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10253,
                                    "src": "5521:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10250,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5521:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5520:19:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 10261,
                        "nodeType": "FunctionDefinition",
                        "src": "5769:100:82",
                        "nodes": [],
                        "documentation": {
                            "id": 10254,
                            "nodeType": "StructuredDocumentation",
                            "src": "5546:218:82",
                            "text": "@notice Previews the amount of assets that would be received for a\n         given amount of shares.\n @param shares The amount of shares to redeem.\n @return assets The amount of assets received."
                        },
                        "functionSelector": "4cdad506",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewRedeem",
                        "nameLocation": "5778:13:82",
                        "parameters": {
                            "id": 10257,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10256,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5809:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10261,
                                    "src": "5801:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10255,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5801:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5791:30:82"
                        },
                        "returnParameters": {
                            "id": 10260,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10259,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5861:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10261,
                                    "src": "5853:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10258,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5853:7:82",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5852:16:82"
                        },
                        "scope": 10262,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 10102,
                            "name": "IERC20",
                            "nameLocations": [
                                "134:6:82"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9980,
                            "src": "134:6:82"
                        },
                        "id": 10103,
                        "nodeType": "InheritanceSpecifier",
                        "src": "134:6:82"
                    }
                ],
                "canonicalName": "IERC4626",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    10262,
                    9980
                ],
                "name": "IERC4626",
                "nameLocation": "122:8:82",
                "scope": 10263,
                "usedErrors": [],
                "usedEvents": [
                    9896,
                    9905,
                    10114,
                    10125
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 82
};
