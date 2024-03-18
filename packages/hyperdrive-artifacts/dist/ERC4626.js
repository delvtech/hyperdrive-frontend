export const ERC4626 = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC4626.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Minimal ERC4626 tokenized Vault implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/tokens/ERC4626.sol\":\"ERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/tokens/ERC4626.sol\":{\"keccak256\":\"0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431\",\"dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060\",\"dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv\"]}},\"version\":1}",
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
                "lib/solmate/src/tokens/ERC4626.sol": "ERC4626"
            },
            "libraries": {}
        },
        "sources": {
            "lib/solmate/src/tokens/ERC20.sol": {
                "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
                "urls": [
                    "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
                    "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/tokens/ERC4626.sol": {
                "keccak256": "0xbc0fbc5200d17334a98ce69b49d4c5eb95f5716995679b0bab2562e924fba483",
                "urls": [
                    "bzz-raw://6069b0b4b8b6d75f0fcc15b521ac92f80ba4648b22ebccef78727f3472e55431",
                    "dweb:/ipfs/Qmer8KABno4MvAZ7uawPpEKyU5mpSBqtTaBBK5Yf1kZPtZ"
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
                "keccak256": "0x6ab948013c2c7ca6351e593600425b0ec6df9035320280c678e735bce16e996b",
                "urls": [
                    "bzz-raw://2ab977d0eeb2bf458f9798250215c646d2f3b1f90b5a7e2b506fdf3335c0f060",
                    "dweb:/ipfs/QmYPRoPhNtBAmCSq7imN1scMVpKNQvMTpoqab3tXUx5Tnv"
                ],
                "license": "AGPL-3.0-only"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/solmate/src/tokens/ERC4626.sol",
        "id": 73382,
        "exportedSymbols": {
            "ERC20": [
                72860
            ],
            "ERC4626": [
                73381
            ],
            "FixedPointMathLib": [
                73540
            ],
            "SafeTransferLib": [
                73625
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:6477:175",
        "nodes": [
            {
                "id": 72862,
                "nodeType": "PragmaDirective",
                "src": "42:24:175",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 72864,
                "nodeType": "ImportDirective",
                "src": "68:42:175",
                "nodes": [],
                "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
                "file": "../tokens/ERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 73382,
                "sourceUnit": 72861,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 72863,
                            "name": "ERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 72860,
                            "src": "76:5:175",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 72866,
                "nodeType": "ImportDirective",
                "src": "111:61:175",
                "nodes": [],
                "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
                "file": "../utils/SafeTransferLib.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 73382,
                "sourceUnit": 73626,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 72865,
                            "name": "SafeTransferLib",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73625,
                            "src": "119:15:175",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 72868,
                "nodeType": "ImportDirective",
                "src": "173:65:175",
                "nodes": [],
                "absolutePath": "lib/solmate/src/utils/FixedPointMathLib.sol",
                "file": "../utils/FixedPointMathLib.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 73382,
                "sourceUnit": 73541,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 72867,
                            "name": "FixedPointMathLib",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73540,
                            "src": "181:17:175",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 73381,
                "nodeType": "ContractDefinition",
                "src": "398:6120:175",
                "nodes": [
                    {
                        "id": 72875,
                        "nodeType": "UsingForDirective",
                        "src": "439:32:175",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 72872,
                            "name": "SafeTransferLib",
                            "nameLocations": [
                                "445:15:175"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 73625,
                            "src": "445:15:175"
                        },
                        "typeName": {
                            "id": 72874,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 72873,
                                "name": "ERC20",
                                "nameLocations": [
                                    "465:5:175"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 72860,
                                "src": "465:5:175"
                            },
                            "referencedDeclaration": 72860,
                            "src": "465:5:175",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$72860",
                                "typeString": "contract ERC20"
                            }
                        }
                    },
                    {
                        "id": 72878,
                        "nodeType": "UsingForDirective",
                        "src": "476:36:175",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 72876,
                            "name": "FixedPointMathLib",
                            "nameLocations": [
                                "482:17:175"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 73540,
                            "src": "482:17:175"
                        },
                        "typeName": {
                            "id": 72877,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "504:7:175",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 72888,
                        "nodeType": "EventDefinition",
                        "src": "697:93:175",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "dcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7",
                        "name": "Deposit",
                        "nameLocation": "703:7:175",
                        "parameters": {
                            "id": 72887,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72880,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "727:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72888,
                                    "src": "711:22:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72879,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "711:7:175",
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
                                    "id": 72882,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "751:5:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72888,
                                    "src": "735:21:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72881,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "735:7:175",
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
                                    "id": 72884,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "766:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72888,
                                    "src": "758:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72883,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "758:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72886,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "782:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72888,
                                    "src": "774:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72885,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "774:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "710:79:175"
                        }
                    },
                    {
                        "id": 72900,
                        "nodeType": "EventDefinition",
                        "src": "796:166:175",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "fbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db",
                        "name": "Withdraw",
                        "nameLocation": "802:8:175",
                        "parameters": {
                            "id": 72899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72890,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "caller",
                                    "nameLocation": "836:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72900,
                                    "src": "820:22:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72889,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "820:7:175",
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
                                    "id": 72892,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "868:8:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72900,
                                    "src": "852:24:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72891,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "852:7:175",
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
                                    "id": 72894,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "902:5:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72900,
                                    "src": "886:21:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72893,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "886:7:175",
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
                                    "id": 72896,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "925:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72900,
                                    "src": "917:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72895,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "917:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72898,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "949:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72900,
                                    "src": "941:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72897,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "941:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "810:151:175"
                        }
                    },
                    {
                        "id": 72903,
                        "nodeType": "VariableDeclaration",
                        "src": "1149:28:175",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "38d52e0f",
                        "mutability": "immutable",
                        "name": "asset",
                        "nameLocation": "1172:5:175",
                        "scope": 73381,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$72860",
                            "typeString": "contract ERC20"
                        },
                        "typeName": {
                            "id": 72902,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 72901,
                                "name": "ERC20",
                                "nameLocations": [
                                    "1149:5:175"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 72860,
                                "src": "1149:5:175"
                            },
                            "referencedDeclaration": 72860,
                            "src": "1149:5:175",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$72860",
                                "typeString": "contract ERC20"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72925,
                        "nodeType": "FunctionDefinition",
                        "src": "1184:172:175",
                        "nodes": [],
                        "body": {
                            "id": 72924,
                            "nodeType": "Block",
                            "src": "1325:31:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72922,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72920,
                                            "name": "asset",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72903,
                                            "src": "1335:5:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ERC20_$72860",
                                                "typeString": "contract ERC20"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72921,
                                            "name": "_asset",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72906,
                                            "src": "1343:6:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_ERC20_$72860",
                                                "typeString": "contract ERC20"
                                            }
                                        },
                                        "src": "1335:14:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ERC20_$72860",
                                            "typeString": "contract ERC20"
                                        }
                                    },
                                    "id": 72923,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1335:14:175"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 72913,
                                        "name": "_name",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 72908,
                                        "src": "1290:5:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    {
                                        "id": 72914,
                                        "name": "_symbol",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 72910,
                                        "src": "1297:7:175",
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
                                                "id": 72915,
                                                "name": "_asset",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72906,
                                                "src": "1306:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$72860",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 72916,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1313:8:175",
                                            "memberName": "decimals",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 72497,
                                            "src": "1306:15:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$__$returns$_t_uint8_$",
                                                "typeString": "function () view external returns (uint8)"
                                            }
                                        },
                                        "id": 72917,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1306:17:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    }
                                ],
                                "id": 72918,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 72912,
                                    "name": "ERC20",
                                    "nameLocations": [
                                        "1284:5:175"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 72860,
                                    "src": "1284:5:175"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1284:40:175"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 72911,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72906,
                                    "mutability": "mutable",
                                    "name": "_asset",
                                    "nameLocation": "1211:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72925,
                                    "src": "1205:12:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ERC20_$72860",
                                        "typeString": "contract ERC20"
                                    },
                                    "typeName": {
                                        "id": 72905,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 72904,
                                            "name": "ERC20",
                                            "nameLocations": [
                                                "1205:5:175"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 72860,
                                            "src": "1205:5:175"
                                        },
                                        "referencedDeclaration": 72860,
                                        "src": "1205:5:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_ERC20_$72860",
                                            "typeString": "contract ERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72908,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "1241:5:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72925,
                                    "src": "1227:19:175",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 72907,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1227:6:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72910,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "1270:7:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72925,
                                    "src": "1256:21:175",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 72909,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1256:6:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1195:88:175"
                        },
                        "returnParameters": {
                            "id": 72919,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1325:0:175"
                        },
                        "scope": 73381,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 72977,
                        "nodeType": "FunctionDefinition",
                        "src": "1550:516:175",
                        "nodes": [],
                        "body": {
                            "id": 72976,
                            "nodeType": "Block",
                            "src": "1641:425:175",
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
                                                "id": 72942,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "components": [
                                                        {
                                                            "id": 72939,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "id": 72935,
                                                                "name": "shares",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 72932,
                                                                "src": "1735:6:175",
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
                                                                        "id": 72937,
                                                                        "name": "assets",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 72927,
                                                                        "src": "1759:6:175",
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
                                                                    "id": 72936,
                                                                    "name": "previewDeposit",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 73250,
                                                                    "src": "1744:14:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                                        "typeString": "function (uint256) view returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 72938,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1744:22:175",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "1735:31:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 72940,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "1734:33:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 72941,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1771:1:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "1734:38:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5a45524f5f534841524553",
                                                "id": 72943,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1774:13:175",
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
                                            "id": 72934,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1726:7:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 72944,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1726:62:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72945,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1726:62:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72949,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1891:3:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72950,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1895:6:175",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1891:10:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 72953,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "1911:4:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ERC4626_$73381",
                                                            "typeString": "contract ERC4626"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ERC4626_$73381",
                                                            "typeString": "contract ERC4626"
                                                        }
                                                    ],
                                                    "id": 72952,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1903:7:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 72951,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1903:7:175",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 72954,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1903:13:175",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72955,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72927,
                                                "src": "1918:6:175",
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
                                                "id": 72946,
                                                "name": "asset",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72903,
                                                "src": "1868:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$72860",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 72948,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1874:16:175",
                                            "memberName": "safeTransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 73584,
                                            "src": "1868:22:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$72860_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72860_$",
                                                "typeString": "function (contract ERC20,address,address,uint256)"
                                            }
                                        },
                                        "id": 72956,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1868:57:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72957,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1868:57:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 72959,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72929,
                                                "src": "1942:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72960,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72932,
                                                "src": "1952:6:175",
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
                                            "id": 72958,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72831,
                                            "src": "1936:5:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 72961,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1936:23:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72962,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1936:23:175"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72964,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1983:3:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72965,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1987:6:175",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1983:10:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72966,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72929,
                                                "src": "1995:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72967,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72927,
                                                "src": "2005:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 72968,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72932,
                                                "src": "2013:6:175",
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
                                            "id": 72963,
                                            "name": "Deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72888,
                                            "src": "1975:7:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256,uint256)"
                                            }
                                        },
                                        "id": 72969,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1975:45:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72970,
                                    "nodeType": "EmitStatement",
                                    "src": "1970:50:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 72972,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72927,
                                                "src": "2044:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 72973,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72932,
                                                "src": "2052:6:175",
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
                                            "id": 72971,
                                            "name": "afterDeposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73380,
                                            "src": "2031:12:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,uint256)"
                                            }
                                        },
                                        "id": 72974,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2031:28:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72975,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2031:28:175"
                                }
                            ]
                        },
                        "functionSelector": "6e553f65",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deposit",
                        "nameLocation": "1559:7:175",
                        "parameters": {
                            "id": 72930,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72927,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "1575:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72977,
                                    "src": "1567:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72926,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1567:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72929,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "1591:8:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72977,
                                    "src": "1583:16:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72928,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1583:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1566:34:175"
                        },
                        "returnParameters": {
                            "id": 72933,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72932,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "1633:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72977,
                                    "src": "1625:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72931,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1625:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1624:16:175"
                        },
                        "scope": 73381,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73023,
                        "nodeType": "FunctionDefinition",
                        "src": "2072:467:175",
                        "nodes": [],
                        "body": {
                            "id": 73022,
                            "nodeType": "Block",
                            "src": "2160:379:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72990,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72986,
                                            "name": "assets",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72984,
                                            "src": "2170:6:175",
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
                                                    "id": 72988,
                                                    "name": "shares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72979,
                                                    "src": "2191:6:175",
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
                                                "id": 72987,
                                                "name": "previewMint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73274,
                                                "src": "2179:11:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256) view returns (uint256)"
                                                }
                                            },
                                            "id": 72989,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2179:19:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2170:28:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 72991,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2170:28:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72995,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2364:3:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72996,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2368:6:175",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2364:10:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 72999,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2384:4:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ERC4626_$73381",
                                                            "typeString": "contract ERC4626"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_ERC4626_$73381",
                                                            "typeString": "contract ERC4626"
                                                        }
                                                    ],
                                                    "id": 72998,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2376:7:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 72997,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2376:7:175",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 73000,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2376:13:175",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73001,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72984,
                                                "src": "2391:6:175",
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
                                                "id": 72992,
                                                "name": "asset",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72903,
                                                "src": "2341:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$72860",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 72994,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2347:16:175",
                                            "memberName": "safeTransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 73584,
                                            "src": "2341:22:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$72860_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72860_$",
                                                "typeString": "function (contract ERC20,address,address,uint256)"
                                            }
                                        },
                                        "id": 73002,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2341:57:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73003,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2341:57:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73005,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72981,
                                                "src": "2415:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73006,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72979,
                                                "src": "2425:6:175",
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
                                            "id": 73004,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72831,
                                            "src": "2409:5:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 73007,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2409:23:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73008,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2409:23:175"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 73010,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2456:3:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 73011,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2460:6:175",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2456:10:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73012,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72981,
                                                "src": "2468:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73013,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72984,
                                                "src": "2478:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73014,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72979,
                                                "src": "2486:6:175",
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
                                            "id": 73009,
                                            "name": "Deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72888,
                                            "src": "2448:7:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256,uint256)"
                                            }
                                        },
                                        "id": 73015,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2448:45:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73016,
                                    "nodeType": "EmitStatement",
                                    "src": "2443:50:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73018,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72984,
                                                "src": "2517:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73019,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72979,
                                                "src": "2525:6:175",
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
                                            "id": 73017,
                                            "name": "afterDeposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73380,
                                            "src": "2504:12:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,uint256)"
                                            }
                                        },
                                        "id": 73020,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2504:28:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73021,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2504:28:175"
                                }
                            ]
                        },
                        "functionSelector": "94bf804d",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "2081:4:175",
                        "parameters": {
                            "id": 72982,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72979,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2094:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73023,
                                    "src": "2086:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72978,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2086:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72981,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2110:8:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73023,
                                    "src": "2102:16:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72980,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2102:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2085:34:175"
                        },
                        "returnParameters": {
                            "id": 72985,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72984,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2152:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73023,
                                    "src": "2144:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72983,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2144:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2143:16:175"
                        },
                        "scope": 73381,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73101,
                        "nodeType": "FunctionDefinition",
                        "src": "2545:679:175",
                        "nodes": [],
                        "body": {
                            "id": 73100,
                            "nodeType": "Block",
                            "src": "2682:542:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 73038,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 73034,
                                            "name": "shares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73032,
                                            "src": "2692:6:175",
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
                                                    "id": 73036,
                                                    "name": "assets",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73025,
                                                    "src": "2717:6:175",
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
                                                "id": 73035,
                                                "name": "previewWithdraw",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73298,
                                                "src": "2701:15:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256) view returns (uint256)"
                                                }
                                            },
                                            "id": 73037,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2701:23:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2692:32:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 73039,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2692:32:175"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 73043,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 73040,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "2806:3:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 73041,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2810:6:175",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "2806:10:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 73042,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73029,
                                            "src": "2820:5:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2806:19:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 73073,
                                    "nodeType": "IfStatement",
                                    "src": "2802:228:175",
                                    "trueBody": {
                                        "id": 73072,
                                        "nodeType": "Block",
                                        "src": "2827:203:175",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    73045
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 73045,
                                                        "mutability": "mutable",
                                                        "name": "allowed",
                                                        "nameLocation": "2849:7:175",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 73072,
                                                        "src": "2841:15:175",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 73044,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2841:7:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 73052,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "baseExpression": {
                                                            "id": 73046,
                                                            "name": "allowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 72509,
                                                            "src": "2859:9:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                "typeString": "mapping(address => mapping(address => uint256))"
                                                            }
                                                        },
                                                        "id": 73048,
                                                        "indexExpression": {
                                                            "id": 73047,
                                                            "name": "owner",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 73029,
                                                            "src": "2869:5:175",
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
                                                        "src": "2859:16:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 73051,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 73049,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "2876:3:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 73050,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2880:6:175",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2876:10:175",
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
                                                    "src": "2859:28:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "2841:46:175"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 73059,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 73053,
                                                        "name": "allowed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 73045,
                                                        "src": "2942:7:175",
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
                                                                    "id": 73056,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "2958:7:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                        "typeString": "type(uint256)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 73055,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "2958:7:175",
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
                                                                "id": 73054,
                                                                "name": "type",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -27,
                                                                "src": "2953:4:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 73057,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2953:13:175",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                                                "typeString": "type(uint256)"
                                                            }
                                                        },
                                                        "id": 73058,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2967:3:175",
                                                        "memberName": "max",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2953:17:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2942:28:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 73071,
                                                "nodeType": "IfStatement",
                                                "src": "2938:81:175",
                                                "trueBody": {
                                                    "expression": {
                                                        "id": 73069,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 73060,
                                                                    "name": "allowance",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 72509,
                                                                    "src": "2972:9:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                        "typeString": "mapping(address => mapping(address => uint256))"
                                                                    }
                                                                },
                                                                "id": 73064,
                                                                "indexExpression": {
                                                                    "id": 73061,
                                                                    "name": "owner",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 73029,
                                                                    "src": "2982:5:175",
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
                                                                "src": "2972:16:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                    "typeString": "mapping(address => uint256)"
                                                                }
                                                            },
                                                            "id": 73065,
                                                            "indexExpression": {
                                                                "expression": {
                                                                    "id": 73062,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -15,
                                                                    "src": "2989:3:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 73063,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2993:6:175",
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2989:10:175",
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
                                                            "src": "2972:28:175",
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
                                                            "id": 73068,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 73066,
                                                                "name": "allowed",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 73045,
                                                                "src": "3003:7:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 73067,
                                                                "name": "shares",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 73032,
                                                                "src": "3013:6:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "3003:16:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2972:47:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 73070,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2972:47:175"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73075,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73025,
                                                "src": "3055:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73076,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73032,
                                                "src": "3063:6:175",
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
                                            "id": 73074,
                                            "name": "beforeWithdraw",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73372,
                                            "src": "3040:14:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,uint256)"
                                            }
                                        },
                                        "id": 73077,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3040:30:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73078,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3040:30:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73080,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73029,
                                                "src": "3087:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73081,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73032,
                                                "src": "3094:6:175",
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
                                            "id": 73079,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72859,
                                            "src": "3081:5:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 73082,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3081:20:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73083,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3081:20:175"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 73085,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "3126:3:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 73086,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3130:6:175",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "3126:10:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73087,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73027,
                                                "src": "3138:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73088,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73029,
                                                "src": "3148:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73089,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73025,
                                                "src": "3155:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73090,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73032,
                                                "src": "3163:6:175",
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
                                            "id": 73084,
                                            "name": "Withdraw",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72900,
                                            "src": "3117:8:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,address,uint256,uint256)"
                                            }
                                        },
                                        "id": 73091,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3117:53:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73092,
                                    "nodeType": "EmitStatement",
                                    "src": "3112:58:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73096,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73027,
                                                "src": "3200:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73097,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73025,
                                                "src": "3210:6:175",
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
                                                "id": 73093,
                                                "name": "asset",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72903,
                                                "src": "3181:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$72860",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 73095,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3187:12:175",
                                            "memberName": "safeTransfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 73604,
                                            "src": "3181:18:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$72860_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72860_$",
                                                "typeString": "function (contract ERC20,address,uint256)"
                                            }
                                        },
                                        "id": 73098,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3181:36:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73099,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3181:36:175"
                                }
                            ]
                        },
                        "functionSelector": "b460af94",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "withdraw",
                        "nameLocation": "2554:8:175",
                        "parameters": {
                            "id": 73030,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73025,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "2580:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73101,
                                    "src": "2572:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73024,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2572:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73027,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "2604:8:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73101,
                                    "src": "2596:16:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73026,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2596:7:175",
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
                                    "id": 73029,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2630:5:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73101,
                                    "src": "2622:13:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73028,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2622:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2562:79:175"
                        },
                        "returnParameters": {
                            "id": 73033,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73032,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "2674:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73101,
                                    "src": "2666:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73031,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2666:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2665:16:175"
                        },
                        "scope": 73381,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73185,
                        "nodeType": "FunctionDefinition",
                        "src": "3230:713:175",
                        "nodes": [],
                        "body": {
                            "id": 73184,
                            "nodeType": "Block",
                            "src": "3365:578:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 73115,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 73112,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "3379:3:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 73113,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3383:6:175",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "3379:10:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 73114,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73107,
                                            "src": "3393:5:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3379:19:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 73145,
                                    "nodeType": "IfStatement",
                                    "src": "3375:228:175",
                                    "trueBody": {
                                        "id": 73144,
                                        "nodeType": "Block",
                                        "src": "3400:203:175",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    73117
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 73117,
                                                        "mutability": "mutable",
                                                        "name": "allowed",
                                                        "nameLocation": "3422:7:175",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 73144,
                                                        "src": "3414:15:175",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 73116,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "3414:7:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 73124,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "baseExpression": {
                                                            "id": 73118,
                                                            "name": "allowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 72509,
                                                            "src": "3432:9:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                "typeString": "mapping(address => mapping(address => uint256))"
                                                            }
                                                        },
                                                        "id": 73120,
                                                        "indexExpression": {
                                                            "id": 73119,
                                                            "name": "owner",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 73107,
                                                            "src": "3442:5:175",
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
                                                        "src": "3432:16:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 73123,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 73121,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "3449:3:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 73122,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3453:6:175",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "3449:10:175",
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
                                                    "src": "3432:28:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "3414:46:175"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 73131,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 73125,
                                                        "name": "allowed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 73117,
                                                        "src": "3515:7:175",
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
                                                                    "id": 73128,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "3531:7:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                        "typeString": "type(uint256)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 73127,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "3531:7:175",
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
                                                                "id": 73126,
                                                                "name": "type",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -27,
                                                                "src": "3526:4:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 73129,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "3526:13:175",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                                                "typeString": "type(uint256)"
                                                            }
                                                        },
                                                        "id": 73130,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3540:3:175",
                                                        "memberName": "max",
                                                        "nodeType": "MemberAccess",
                                                        "src": "3526:17:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3515:28:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 73143,
                                                "nodeType": "IfStatement",
                                                "src": "3511:81:175",
                                                "trueBody": {
                                                    "expression": {
                                                        "id": 73141,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "baseExpression": {
                                                                "baseExpression": {
                                                                    "id": 73132,
                                                                    "name": "allowance",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 72509,
                                                                    "src": "3545:9:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                        "typeString": "mapping(address => mapping(address => uint256))"
                                                                    }
                                                                },
                                                                "id": 73136,
                                                                "indexExpression": {
                                                                    "id": 73133,
                                                                    "name": "owner",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 73107,
                                                                    "src": "3555:5:175",
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
                                                                "src": "3545:16:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                    "typeString": "mapping(address => uint256)"
                                                                }
                                                            },
                                                            "id": 73137,
                                                            "indexExpression": {
                                                                "expression": {
                                                                    "id": 73134,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -15,
                                                                    "src": "3562:3:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 73135,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "3566:6:175",
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "src": "3562:10:175",
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
                                                            "src": "3545:28:175",
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
                                                            "id": 73140,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 73138,
                                                                "name": "allowed",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 73117,
                                                                "src": "3576:7:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 73139,
                                                                "name": "shares",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 73103,
                                                                "src": "3586:6:175",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "3576:16:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3545:47:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 73142,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "3545:47:175"
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
                                                "id": 73154,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "components": [
                                                        {
                                                            "id": 73151,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "id": 73147,
                                                                "name": "assets",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 73110,
                                                                "src": "3696:6:175",
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
                                                                        "id": 73149,
                                                                        "name": "shares",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 73103,
                                                                        "src": "3719:6:175",
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
                                                                    "id": 73148,
                                                                    "name": "previewRedeem",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 73310,
                                                                    "src": "3705:13:175",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                                        "typeString": "function (uint256) view returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 73150,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3705:21:175",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "3696:30:175",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 73152,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "3695:32:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 73153,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3731:1:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3695:37:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5a45524f5f415353455453",
                                                "id": 73155,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3734:13:175",
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
                                            "id": 73146,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3687:7:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 73156,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3687:61:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73157,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3687:61:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73159,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73110,
                                                "src": "3774:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73160,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73103,
                                                "src": "3782:6:175",
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
                                            "id": 73158,
                                            "name": "beforeWithdraw",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73372,
                                            "src": "3759:14:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,uint256)"
                                            }
                                        },
                                        "id": 73161,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3759:30:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73162,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3759:30:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73164,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73107,
                                                "src": "3806:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73165,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73103,
                                                "src": "3813:6:175",
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
                                            "id": 73163,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72859,
                                            "src": "3800:5:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 73166,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3800:20:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73167,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3800:20:175"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 73169,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "3845:3:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 73170,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3849:6:175",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "3845:10:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73171,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73105,
                                                "src": "3857:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73172,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73107,
                                                "src": "3867:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73173,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73110,
                                                "src": "3874:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 73174,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73103,
                                                "src": "3882:6:175",
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
                                            "id": 73168,
                                            "name": "Withdraw",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72900,
                                            "src": "3836:8:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,address,uint256,uint256)"
                                            }
                                        },
                                        "id": 73175,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3836:53:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73176,
                                    "nodeType": "EmitStatement",
                                    "src": "3831:58:175"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73180,
                                                "name": "receiver",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73105,
                                                "src": "3919:8:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 73181,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73110,
                                                "src": "3929:6:175",
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
                                                "id": 73177,
                                                "name": "asset",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72903,
                                                "src": "3900:5:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ERC20_$72860",
                                                    "typeString": "contract ERC20"
                                                }
                                            },
                                            "id": 73179,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3906:12:175",
                                            "memberName": "safeTransfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 73604,
                                            "src": "3900:18:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$72860_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$72860_$",
                                                "typeString": "function (contract ERC20,address,uint256)"
                                            }
                                        },
                                        "id": 73182,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3900:36:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 73183,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3900:36:175"
                                }
                            ]
                        },
                        "functionSelector": "ba087652",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeem",
                        "nameLocation": "3239:6:175",
                        "parameters": {
                            "id": 73108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73103,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "3263:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73185,
                                    "src": "3255:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73102,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3255:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73105,
                                    "mutability": "mutable",
                                    "name": "receiver",
                                    "nameLocation": "3287:8:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73185,
                                    "src": "3279:16:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73104,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3279:7:175",
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
                                    "id": 73107,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3313:5:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73185,
                                    "src": "3305:13:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73106,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3305:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3245:79:175"
                        },
                        "returnParameters": {
                            "id": 73111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73110,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "3357:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73185,
                                    "src": "3349:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73109,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3349:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3348:16:175"
                        },
                        "scope": 73381,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73190,
                        "nodeType": "FunctionDefinition",
                        "src": "4133:61:175",
                        "nodes": [],
                        "functionSelector": "01e1d114",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalAssets",
                        "nameLocation": "4142:11:175",
                        "parameters": {
                            "id": 73186,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4153:2:175"
                        },
                        "returnParameters": {
                            "id": 73189,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73188,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73190,
                                    "src": "4185:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73187,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4185:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4184:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73214,
                        "nodeType": "FunctionDefinition",
                        "src": "4200:257:175",
                        "nodes": [],
                        "body": {
                            "id": 73213,
                            "nodeType": "Block",
                            "src": "4279:178:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        73198
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 73198,
                                            "mutability": "mutable",
                                            "name": "supply",
                                            "nameLocation": "4297:6:175",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 73213,
                                            "src": "4289:14:175",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 73197,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4289:7:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 73200,
                                    "initialValue": {
                                        "id": 73199,
                                        "name": "totalSupply",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 72499,
                                        "src": "4306:11:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4289:28:175"
                                },
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 73203,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 73201,
                                                "name": "supply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73198,
                                                "src": "4387:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 73202,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4397:1:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "4387:11:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "arguments": [
                                                {
                                                    "id": 73207,
                                                    "name": "supply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73198,
                                                    "src": "4428:6:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 73208,
                                                        "name": "totalAssets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 73190,
                                                        "src": "4436:11:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 73209,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4436:13:175",
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
                                                    "id": 73205,
                                                    "name": "assets",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73192,
                                                    "src": "4410:6:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 73206,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4417:10:175",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 73471,
                                                "src": "4410:17:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 73210,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4410:40:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 73211,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "4387:63:175",
                                        "trueExpression": {
                                            "id": 73204,
                                            "name": "assets",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73192,
                                            "src": "4401:6:175",
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
                                    "functionReturnParameters": 73196,
                                    "id": 73212,
                                    "nodeType": "Return",
                                    "src": "4380:70:175"
                                }
                            ]
                        },
                        "functionSelector": "c6e6f592",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToShares",
                        "nameLocation": "4209:15:175",
                        "parameters": {
                            "id": 73193,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73192,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "4233:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73214,
                                    "src": "4225:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73191,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4225:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4224:16:175"
                        },
                        "returnParameters": {
                            "id": 73196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73195,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73214,
                                    "src": "4270:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73194,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4270:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4269:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73238,
                        "nodeType": "FunctionDefinition",
                        "src": "4463:257:175",
                        "nodes": [],
                        "body": {
                            "id": 73237,
                            "nodeType": "Block",
                            "src": "4542:178:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        73222
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 73222,
                                            "mutability": "mutable",
                                            "name": "supply",
                                            "nameLocation": "4560:6:175",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 73237,
                                            "src": "4552:14:175",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 73221,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4552:7:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 73224,
                                    "initialValue": {
                                        "id": 73223,
                                        "name": "totalSupply",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 72499,
                                        "src": "4569:11:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4552:28:175"
                                },
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 73227,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 73225,
                                                "name": "supply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73222,
                                                "src": "4650:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 73226,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4660:1:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "4650:11:175",
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
                                                        "id": 73231,
                                                        "name": "totalAssets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 73190,
                                                        "src": "4691:11:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 73232,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4691:13:175",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 73233,
                                                    "name": "supply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73222,
                                                    "src": "4706:6:175",
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
                                                    "id": 73229,
                                                    "name": "shares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73216,
                                                    "src": "4673:6:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 73230,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4680:10:175",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 73471,
                                                "src": "4673:17:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 73234,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4673:40:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 73235,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "4650:63:175",
                                        "trueExpression": {
                                            "id": 73228,
                                            "name": "shares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73216,
                                            "src": "4664:6:175",
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
                                    "functionReturnParameters": 73220,
                                    "id": 73236,
                                    "nodeType": "Return",
                                    "src": "4643:70:175"
                                }
                            ]
                        },
                        "functionSelector": "07a2d13a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToAssets",
                        "nameLocation": "4472:15:175",
                        "parameters": {
                            "id": 73217,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73216,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4496:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73238,
                                    "src": "4488:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73215,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4488:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4487:16:175"
                        },
                        "returnParameters": {
                            "id": 73220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73219,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73238,
                                    "src": "4533:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73218,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4533:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4532:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73250,
                        "nodeType": "FunctionDefinition",
                        "src": "4726:125:175",
                        "nodes": [],
                        "body": {
                            "id": 73249,
                            "nodeType": "Block",
                            "src": "4804:47:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73246,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73240,
                                                "src": "4837:6:175",
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
                                            "id": 73245,
                                            "name": "convertToShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73214,
                                            "src": "4821:15:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 73247,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4821:23:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73244,
                                    "id": 73248,
                                    "nodeType": "Return",
                                    "src": "4814:30:175"
                                }
                            ]
                        },
                        "functionSelector": "ef8b30f7",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewDeposit",
                        "nameLocation": "4735:14:175",
                        "parameters": {
                            "id": 73241,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73240,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "4758:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73250,
                                    "src": "4750:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73239,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4750:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4749:16:175"
                        },
                        "returnParameters": {
                            "id": 73244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73243,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73250,
                                    "src": "4795:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73242,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4795:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4794:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73274,
                        "nodeType": "FunctionDefinition",
                        "src": "4857:251:175",
                        "nodes": [],
                        "body": {
                            "id": 73273,
                            "nodeType": "Block",
                            "src": "4932:176:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        73258
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 73258,
                                            "mutability": "mutable",
                                            "name": "supply",
                                            "nameLocation": "4950:6:175",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 73273,
                                            "src": "4942:14:175",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 73257,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4942:7:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 73260,
                                    "initialValue": {
                                        "id": 73259,
                                        "name": "totalSupply",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 72499,
                                        "src": "4959:11:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4942:28:175"
                                },
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 73263,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 73261,
                                                "name": "supply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73258,
                                                "src": "5040:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 73262,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5050:1:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5040:11:175",
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
                                                        "id": 73267,
                                                        "name": "totalAssets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 73190,
                                                        "src": "5079:11:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 73268,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5079:13:175",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 73269,
                                                    "name": "supply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73258,
                                                    "src": "5094:6:175",
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
                                                    "id": 73265,
                                                    "name": "shares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73252,
                                                    "src": "5063:6:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 73266,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5070:8:175",
                                                "memberName": "mulDivUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 73484,
                                                "src": "5063:15:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 73270,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5063:38:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 73271,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "5040:61:175",
                                        "trueExpression": {
                                            "id": 73264,
                                            "name": "shares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73252,
                                            "src": "5054:6:175",
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
                                    "functionReturnParameters": 73256,
                                    "id": 73272,
                                    "nodeType": "Return",
                                    "src": "5033:68:175"
                                }
                            ]
                        },
                        "functionSelector": "b3d7f6b9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewMint",
                        "nameLocation": "4866:11:175",
                        "parameters": {
                            "id": 73253,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73252,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "4886:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73274,
                                    "src": "4878:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73251,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4878:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4877:16:175"
                        },
                        "returnParameters": {
                            "id": 73256,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73255,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73274,
                                    "src": "4923:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73254,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4923:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4922:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73298,
                        "nodeType": "FunctionDefinition",
                        "src": "5114:255:175",
                        "nodes": [],
                        "body": {
                            "id": 73297,
                            "nodeType": "Block",
                            "src": "5193:176:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        73282
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 73282,
                                            "mutability": "mutable",
                                            "name": "supply",
                                            "nameLocation": "5211:6:175",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 73297,
                                            "src": "5203:14:175",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 73281,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5203:7:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 73284,
                                    "initialValue": {
                                        "id": 73283,
                                        "name": "totalSupply",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 72499,
                                        "src": "5220:11:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5203:28:175"
                                },
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 73287,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 73285,
                                                "name": "supply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73282,
                                                "src": "5301:6:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 73286,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5311:1:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "5301:11:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "arguments": [
                                                {
                                                    "id": 73291,
                                                    "name": "supply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73282,
                                                    "src": "5340:6:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 73292,
                                                        "name": "totalAssets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 73190,
                                                        "src": "5348:11:175",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 73293,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5348:13:175",
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
                                                    "id": 73289,
                                                    "name": "assets",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73276,
                                                    "src": "5324:6:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 73290,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5331:8:175",
                                                "memberName": "mulDivUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 73484,
                                                "src": "5324:15:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 73294,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5324:38:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 73295,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "5301:61:175",
                                        "trueExpression": {
                                            "id": 73288,
                                            "name": "assets",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73276,
                                            "src": "5315:6:175",
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
                                    "functionReturnParameters": 73280,
                                    "id": 73296,
                                    "nodeType": "Return",
                                    "src": "5294:68:175"
                                }
                            ]
                        },
                        "functionSelector": "0a28a477",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewWithdraw",
                        "nameLocation": "5123:15:175",
                        "parameters": {
                            "id": 73277,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73276,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "5147:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73298,
                                    "src": "5139:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73275,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5139:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5138:16:175"
                        },
                        "returnParameters": {
                            "id": 73280,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73279,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73298,
                                    "src": "5184:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73278,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5184:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5183:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73310,
                        "nodeType": "FunctionDefinition",
                        "src": "5375:124:175",
                        "nodes": [],
                        "body": {
                            "id": 73309,
                            "nodeType": "Block",
                            "src": "5452:47:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 73306,
                                                "name": "shares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 73300,
                                                "src": "5485:6:175",
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
                                            "id": 73305,
                                            "name": "convertToAssets",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73238,
                                            "src": "5469:15:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 73307,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5469:23:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73304,
                                    "id": 73308,
                                    "nodeType": "Return",
                                    "src": "5462:30:175"
                                }
                            ]
                        },
                        "functionSelector": "4cdad506",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "previewRedeem",
                        "nameLocation": "5384:13:175",
                        "parameters": {
                            "id": 73301,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73300,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "5406:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73310,
                                    "src": "5398:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73299,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5398:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5397:16:175"
                        },
                        "returnParameters": {
                            "id": 73304,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73303,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73310,
                                    "src": "5443:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73302,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5443:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5442:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73324,
                        "nodeType": "FunctionDefinition",
                        "src": "5696:108:175",
                        "nodes": [],
                        "body": {
                            "id": 73323,
                            "nodeType": "Block",
                            "src": "5763:41:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "id": 73319,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "5785:7:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": {
                                                        "id": 73318,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5785:7:175",
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
                                                "id": 73317,
                                                "name": "type",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -27,
                                                "src": "5780:4:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                    "typeString": "function () pure"
                                                }
                                            },
                                            "id": 73320,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5780:13:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                                "typeString": "type(uint256)"
                                            }
                                        },
                                        "id": 73321,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "memberLocation": "5794:3:175",
                                        "memberName": "max",
                                        "nodeType": "MemberAccess",
                                        "src": "5780:17:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73316,
                                    "id": 73322,
                                    "nodeType": "Return",
                                    "src": "5773:24:175"
                                }
                            ]
                        },
                        "functionSelector": "402d267d",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxDeposit",
                        "nameLocation": "5705:10:175",
                        "parameters": {
                            "id": 73313,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73312,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73324,
                                    "src": "5716:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73311,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5716:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5715:9:175"
                        },
                        "returnParameters": {
                            "id": 73316,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73315,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73324,
                                    "src": "5754:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73314,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5754:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5753:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73338,
                        "nodeType": "FunctionDefinition",
                        "src": "5810:105:175",
                        "nodes": [],
                        "body": {
                            "id": 73337,
                            "nodeType": "Block",
                            "src": "5874:41:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "id": 73333,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "5896:7:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": {
                                                        "id": 73332,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "5896:7:175",
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
                                                "id": 73331,
                                                "name": "type",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -27,
                                                "src": "5891:4:175",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                    "typeString": "function () pure"
                                                }
                                            },
                                            "id": 73334,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5891:13:175",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_meta_type_t_uint256",
                                                "typeString": "type(uint256)"
                                            }
                                        },
                                        "id": 73335,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "memberLocation": "5905:3:175",
                                        "memberName": "max",
                                        "nodeType": "MemberAccess",
                                        "src": "5891:17:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73330,
                                    "id": 73336,
                                    "nodeType": "Return",
                                    "src": "5884:24:175"
                                }
                            ]
                        },
                        "functionSelector": "c63d75b6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxMint",
                        "nameLocation": "5819:7:175",
                        "parameters": {
                            "id": 73327,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73326,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73338,
                                    "src": "5827:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73325,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5827:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5826:9:175"
                        },
                        "returnParameters": {
                            "id": 73330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73329,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73338,
                                    "src": "5865:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73328,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5865:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5864:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73352,
                        "nodeType": "FunctionDefinition",
                        "src": "5921:131:175",
                        "nodes": [],
                        "body": {
                            "id": 73351,
                            "nodeType": "Block",
                            "src": "5995:57:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "baseExpression": {
                                                    "id": 73346,
                                                    "name": "balanceOf",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72503,
                                                    "src": "6028:9:175",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 73348,
                                                "indexExpression": {
                                                    "id": 73347,
                                                    "name": "owner",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 73340,
                                                    "src": "6038:5:175",
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
                                                "src": "6028:16:175",
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
                                            "id": 73345,
                                            "name": "convertToAssets",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73238,
                                            "src": "6012:15:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 73349,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6012:33:175",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73344,
                                    "id": 73350,
                                    "nodeType": "Return",
                                    "src": "6005:40:175"
                                }
                            ]
                        },
                        "functionSelector": "ce96cb77",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxWithdraw",
                        "nameLocation": "5930:11:175",
                        "parameters": {
                            "id": 73341,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73340,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "5950:5:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73352,
                                    "src": "5942:13:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73339,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5942:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5941:15:175"
                        },
                        "returnParameters": {
                            "id": 73344,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73343,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73352,
                                    "src": "5986:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73342,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5986:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5985:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73364,
                        "nodeType": "FunctionDefinition",
                        "src": "6058:112:175",
                        "nodes": [],
                        "body": {
                            "id": 73363,
                            "nodeType": "Block",
                            "src": "6130:40:175",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 73359,
                                            "name": "balanceOf",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72503,
                                            "src": "6147:9:175",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 73361,
                                        "indexExpression": {
                                            "id": 73360,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73354,
                                            "src": "6157:5:175",
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
                                        "src": "6147:16:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 73358,
                                    "id": 73362,
                                    "nodeType": "Return",
                                    "src": "6140:23:175"
                                }
                            ]
                        },
                        "functionSelector": "d905777e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maxRedeem",
                        "nameLocation": "6067:9:175",
                        "parameters": {
                            "id": 73355,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73354,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "6085:5:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73364,
                                    "src": "6077:13:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 73353,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6077:7:175",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6076:15:175"
                        },
                        "returnParameters": {
                            "id": 73358,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73357,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73364,
                                    "src": "6121:7:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73356,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6121:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6120:9:175"
                        },
                        "scope": 73381,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 73372,
                        "nodeType": "FunctionDefinition",
                        "src": "6362:75:175",
                        "nodes": [],
                        "body": {
                            "id": 73371,
                            "nodeType": "Block",
                            "src": "6435:2:175",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "beforeWithdraw",
                        "nameLocation": "6371:14:175",
                        "parameters": {
                            "id": 73369,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73366,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "6394:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73372,
                                    "src": "6386:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73365,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6386:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73368,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "6410:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73372,
                                    "src": "6402:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73367,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6402:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6385:32:175"
                        },
                        "returnParameters": {
                            "id": 73370,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6435:0:175"
                        },
                        "scope": 73381,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 73380,
                        "nodeType": "FunctionDefinition",
                        "src": "6443:73:175",
                        "nodes": [],
                        "body": {
                            "id": 73379,
                            "nodeType": "Block",
                            "src": "6514:2:175",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "afterDeposit",
                        "nameLocation": "6452:12:175",
                        "parameters": {
                            "id": 73377,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 73374,
                                    "mutability": "mutable",
                                    "name": "assets",
                                    "nameLocation": "6473:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73380,
                                    "src": "6465:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73373,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6465:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 73376,
                                    "mutability": "mutable",
                                    "name": "shares",
                                    "nameLocation": "6489:6:175",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 73380,
                                    "src": "6481:14:175",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 73375,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6481:7:175",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6464:32:175"
                        },
                        "returnParameters": {
                            "id": 73378,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6514:0:175"
                        },
                        "scope": 73381,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 72870,
                            "name": "ERC20",
                            "nameLocations": [
                                "427:5:175"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 72860,
                            "src": "427:5:175"
                        },
                        "id": 72871,
                        "nodeType": "InheritanceSpecifier",
                        "src": "427:5:175"
                    }
                ],
                "canonicalName": "ERC4626",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 72869,
                    "nodeType": "StructuredDocumentation",
                    "src": "240:158:175",
                    "text": "@notice Minimal ERC4626 tokenized Vault implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC4626.sol)"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    73381,
                    72860
                ],
                "name": "ERC4626",
                "nameLocation": "416:7:175",
                "scope": 73382,
                "usedErrors": [],
                "usedEvents": [
                    72483,
                    72491,
                    72888,
                    72900
                ]
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 175
};
