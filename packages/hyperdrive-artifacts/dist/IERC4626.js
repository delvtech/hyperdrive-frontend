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
        "id": 9949,
        "exportedSymbols": {
            "IERC20": [
                9666
            ],
            "IERC4626": [
                9948
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:5833:82",
        "nodes": [
            {
                "id": 9785,
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
                "id": 9787,
                "nodeType": "ImportDirective",
                "src": "64:38:82",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9949,
                "sourceUnit": 9667,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9786,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9666,
                            "src": "73:6:82",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9948,
                "nodeType": "ContractDefinition",
                "src": "104:5767:82",
                "nodes": [
                    {
                        "id": 9800,
                        "nodeType": "EventDefinition",
                        "src": "212:134:82",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 9790,
                            "nodeType": "StructuredDocumentation",
                            "src": "147:60:82",
                            "text": "@notice Emitted when funds are deposited into the vault."
                        },
                        "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
                        "name": "Deposit",
                        "nameLocation": "218:7:82",
                        "parameters": {
                            "id": 9799,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9792,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "251:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9800,
                                    "src": "235:22:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9791,
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
                                    "id": 9794,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "283:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9800,
                                    "src": "267:24:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9793,
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
                                    "id": 9796,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "309:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9800,
                                    "src": "301:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9795,
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
                                    "id": 9798,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "333:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9800,
                                    "src": "325:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9797,
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
                        "id": 9811,
                        "nodeType": "EventDefinition",
                        "src": "417:135:82",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 9801,
                            "nodeType": "StructuredDocumentation",
                            "src": "352:60:82",
                            "text": "@notice Emitted when funds are withdrawn from the vault."
                        },
                        "eventSelector": "f341246adaac6f497bc2a656f546ab9e182111d630394f0c57c710a59a2cb567",
                        "name": "Withdraw",
                        "nameLocation": "423:8:82",
                        "parameters": {
                            "id": 9810,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9803,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "sender",
                                    "nameLocation": "457:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9811,
                                    "src": "441:22:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9802,
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
                                    "id": 9805,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "489:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9811,
                                    "src": "473:24:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9804,
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
                                    "id": 9807,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "515:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9811,
                                    "src": "507:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9806,
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
                                    "id": 9809,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "539:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9811,
                                    "src": "531:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9808,
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
                        "id": 9817,
                        "nodeType": "FunctionDefinition",
                        "src": "653:63:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9812,
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
                            "id": 9813,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "667:2:82"
                        },
                        "returnParameters": {
                            "id": 9816,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9815,
                                    "mutability": "mutable",
                                    "name": "asset",
                                    "nameLocation": "709:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9817,
                                    "src": "701:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9814,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9823,
                        "nodeType": "FunctionDefinition",
                        "src": "862:75:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9818,
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
                            "id": 9819,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "882:2:82"
                        },
                        "returnParameters": {
                            "id": 9822,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9821,
                                    "mutability": "mutable",
                                    "name": "totalAssets",
                                    "nameLocation": "924:11:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9823,
                                    "src": "916:19:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9820,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9833,
                        "nodeType": "FunctionDefinition",
                        "src": "1181:115:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9824,
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
                            "id": 9829,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9826,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "1215:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9833,
                                    "src": "1207:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9825,
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
                                    "id": 9828,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1239:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9833,
                                    "src": "1231:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9827,
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
                            "id": 9832,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9831,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "1288:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9833,
                                    "src": "1280:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9830,
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
                        "scope": 9948,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9843,
                        "nodeType": "FunctionDefinition",
                        "src": "1560:112:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9834,
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
                            "id": 9839,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9836,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "1591:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9843,
                                    "src": "1583:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9835,
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
                                    "id": 9838,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1615:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9843,
                                    "src": "1607:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9837,
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
                            "id": 9842,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9841,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "1664:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9843,
                                    "src": "1656:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9840,
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
                        "scope": 9948,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9855,
                        "nodeType": "FunctionDefinition",
                        "src": "1973:139:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9844,
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
                            "id": 9851,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9846,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2008:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9855,
                                    "src": "2000:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9845,
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
                                    "id": 9848,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2032:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9855,
                                    "src": "2024:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9847,
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
                                    "id": 9850,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2058:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9855,
                                    "src": "2050:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9849,
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
                            "id": 9854,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9853,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2104:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9855,
                                    "src": "2096:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9852,
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
                        "scope": 9948,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9867,
                        "nodeType": "FunctionDefinition",
                        "src": "2433:137:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9856,
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
                            "id": 9863,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9858,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2466:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9867,
                                    "src": "2458:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9857,
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
                                    "id": 9860,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2490:8:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9867,
                                    "src": "2482:16:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9859,
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
                                    "id": 9862,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2516:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9867,
                                    "src": "2508:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9861,
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
                            "id": 9866,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9865,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2562:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9867,
                                    "src": "2554:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9864,
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
                        "scope": 9948,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9875,
                        "nodeType": "FunctionDefinition",
                        "src": "2753:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9868,
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
                            "id": 9871,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9870,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2795:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9875,
                                    "src": "2787:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9869,
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
                            "id": 9874,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9873,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2847:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9875,
                                    "src": "2839:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9872,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9883,
                        "nodeType": "FunctionDefinition",
                        "src": "3040:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9876,
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
                            "id": 9879,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9878,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3082:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9883,
                                    "src": "3074:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9877,
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
                            "id": 9882,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9881,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3134:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9883,
                                    "src": "3126:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9880,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9891,
                        "nodeType": "FunctionDefinition",
                        "src": "3404:99:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9884,
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
                            "id": 9887,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9886,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3441:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9891,
                                    "src": "3433:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9885,
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
                            "id": 9890,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9889,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "3492:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9891,
                                    "src": "3484:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9888,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9899,
                        "nodeType": "FunctionDefinition",
                        "src": "3743:101:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9892,
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
                            "id": 9895,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9894,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3784:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9899,
                                    "src": "3776:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9893,
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
                            "id": 9898,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9897,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3836:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9899,
                                    "src": "3828:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9896,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9907,
                        "nodeType": "FunctionDefinition",
                        "src": "4077:96:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9900,
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
                            "id": 9903,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9902,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4111:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9907,
                                    "src": "4103:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9901,
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
                            "id": 9906,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9905,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "4162:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9907,
                                    "src": "4154:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9904,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9915,
                        "nodeType": "FunctionDefinition",
                        "src": "4399:98:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9908,
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
                            "id": 9911,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9910,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4437:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9915,
                                    "src": "4429:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9909,
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
                            "id": 9914,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9913,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "4489:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9915,
                                    "src": "4481:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9912,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9923,
                        "nodeType": "FunctionDefinition",
                        "src": "4760:100:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9916,
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
                            "id": 9919,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9918,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "4798:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9923,
                                    "src": "4790:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9917,
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
                            "id": 9922,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9921,
                                    "mutability": "mutable",
                                    "name": "maxAssets",
                                    "nameLocation": "4849:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9923,
                                    "src": "4841:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9920,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9931,
                        "nodeType": "FunctionDefinition",
                        "src": "5101:102:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9924,
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
                            "id": 9927,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9926,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5143:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9931,
                                    "src": "5135:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9925,
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
                            "id": 9930,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9929,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5195:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9931,
                                    "src": "5187:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9928,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9939,
                        "nodeType": "FunctionDefinition",
                        "src": "5442:98:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9932,
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
                            "id": 9935,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9934,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "5478:5:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9939,
                                    "src": "5470:13:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9933,
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
                            "id": 9938,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9937,
                                    "mutability": "mutable",
                                    "name": "maxShares",
                                    "nameLocation": "5529:9:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9939,
                                    "src": "5521:17:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9936,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    },
                    {
                        "id": 9947,
                        "nodeType": "FunctionDefinition",
                        "src": "5769:100:82",
                        "nodes": [],
                        "documentation": {
                            "id": 9940,
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
                            "id": 9943,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9942,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5809:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9947,
                                    "src": "5801:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9941,
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
                            "id": 9946,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9945,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5861:6:82",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9947,
                                    "src": "5853:14:82",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9944,
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
                        "scope": 9948,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "external"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 9788,
                            "name": "IERC20",
                            "nameLocations": [
                                "134:6:82"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9666,
                            "src": "134:6:82"
                        },
                        "id": 9789,
                        "nodeType": "InheritanceSpecifier",
                        "src": "134:6:82"
                    }
                ],
                "canonicalName": "IERC4626",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    9948,
                    9666
                ],
                "name": "IERC4626",
                "nameLocation": "122:8:82",
                "scope": 9949,
                "usedErrors": [],
                "usedEvents": [
                    9582,
                    9591,
                    9800,
                    9811
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 82
};
