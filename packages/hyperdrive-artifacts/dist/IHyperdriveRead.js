export const IHyperdriveRead = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
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
            "inputs": [],
            "name": "baseToken",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
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
                    "name": "_checkpointTime",
                    "type": "uint256"
                }
            ],
            "name": "getCheckpoint",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint128",
                            "name": "vaultSharePrice",
                            "type": "uint128"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Checkpoint",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_checkpointTime",
                    "type": "uint256"
                }
            ],
            "name": "getCheckpointExposure",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMarketState",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint128",
                            "name": "shareReserves",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "bondReserves",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "longExposure",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "longsOutstanding",
                            "type": "uint128"
                        },
                        {
                            "internalType": "int128",
                            "name": "shareAdjustment",
                            "type": "int128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "shortsOutstanding",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "longAverageMaturityTime",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "shortAverageMaturityTime",
                            "type": "uint128"
                        },
                        {
                            "internalType": "bool",
                            "name": "isInitialized",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint112",
                            "name": "zombieBaseProceeds",
                            "type": "uint112"
                        },
                        {
                            "internalType": "uint128",
                            "name": "zombieShareReserves",
                            "type": "uint128"
                        }
                    ],
                    "internalType": "struct IHyperdrive.MarketState",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolConfig",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "contract IERC20",
                            "name": "baseToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "linkerFactory",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "linkerCodeHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "initialVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minimumTransactionAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "positionDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timeStretch",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "feeCollector",
                            "type": "address"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "curve",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "flat",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceLP",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "governanceZombie",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct IHyperdrive.Fees",
                            "name": "fees",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolConfig",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPoolInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "shareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "int256",
                            "name": "shareAdjustment",
                            "type": "int256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "zombieBaseProceeds",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "zombieShareReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondReserves",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longAverageMaturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortsOutstanding",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "shortAverageMaturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesReadyToWithdraw",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesProceeds",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "longExposure",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IHyperdrive.PoolInfo",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUncollectedGovernanceFees",
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
            "name": "getWithdrawPool",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint128",
                            "name": "readyToWithdraw",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "proceeds",
                            "type": "uint128"
                        }
                    ],
                    "internalType": "struct IHyperdrive.WithdrawPool",
                    "name": "",
                    "type": "tuple"
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
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "isPauser",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_slots",
                    "type": "uint256[]"
                }
            ],
            "name": "load",
            "outputs": [
                {
                    "internalType": "bytes32[]",
                    "name": "",
                    "type": "bytes32[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
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
                    "name": "owner",
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
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
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
            "name": "perTokenApprovals",
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
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
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
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
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
        "balanceOf(uint256,address)": "3656eec2",
        "baseToken()": "c55dae63",
        "decimals()": "313ce567",
        "getCheckpoint(uint256)": "20fc4881",
        "getCheckpointExposure(uint256)": "cf210e65",
        "getMarketState()": "d8165743",
        "getPoolConfig()": "b0d96580",
        "getPoolInfo()": "60246c88",
        "getUncollectedGovernanceFees()": "c69e16ad",
        "getWithdrawPool()": "fba56008",
        "isApprovedForAll(address,address)": "e985e9c5",
        "isPauser(address)": "46fbf68e",
        "load(uint256[])": "becee9c3",
        "name(uint256)": "00ad800c",
        "nonces(address)": "7ecebe00",
        "perTokenApprovals(uint256,address,address)": "21ff32a9",
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The balance of the owner.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"returns\":{\"_0\":\"The pool configuration.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"The amount of uncollected governance fees.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"The withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The approval-for-all status of the spender for the owner.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The account's pauser status.\"}},\"load(uint256[])\":{\"details\":\"This serves as a generalized getter that allows consumers to create      custom getters to suit their purposes.\",\"params\":{\"_slots\":\"The storage slots to load.\"},\"returns\":{\"_0\":\"The values at the specified slots.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The name of the MultiToken.\"}},\"nonces(address)\":{\"params\":{\"owner\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The permit nonce of the owner.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The symbol of the MultiToken.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The total supply of the MultiToken.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets the balance of a spender for a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the Hyperdrive pool's base token.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets one of the pool's checkpoints.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the pool's exposure from a checkpoint. This is the number         of non-netted longs in the checkpoint.\"},\"getMarketState()\":{\"notice\":\"Gets the pool's state relating to the Hyperdrive market.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets the amount of governance fees that haven't been collected.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information relating to the pool's withdrawal pool. This         includes the total proceeds underlying the withdrawal pool and         the number of withdrawal shares ready to be redeemed.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval-for-all status of a spender on behalf of an         owner.\"},\"isPauser(address)\":{\"notice\":\"Gets an account's pauser status within the Hyperdrive pool.\"},\"load(uint256[])\":{\"notice\":\"Gets the storage values at the specified slots.\"},\"name(uint256)\":{\"notice\":\"Gets the name of the MultiToken.\"},\"nonces(address)\":{\"notice\":\"Gets the permit nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the allowance of a spender for a sub-token.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of the MultiToken.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of the MultiToken.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveRead.sol\":\"IHyperdriveRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "baseToken",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
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
                            "name": "_checkpointTime",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCheckpoint",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.Checkpoint",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint128",
                                    "name": "vaultSharePrice",
                                    "type": "uint128"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_checkpointTime",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getCheckpointExposure",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getMarketState",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.MarketState",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint128",
                                    "name": "shareReserves",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "bondReserves",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "longExposure",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "longsOutstanding",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "int128",
                                    "name": "shareAdjustment",
                                    "type": "int128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "shortsOutstanding",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "longAverageMaturityTime",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "shortAverageMaturityTime",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isInitialized",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isPaused",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "uint112",
                                    "name": "zombieBaseProceeds",
                                    "type": "uint112"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "zombieShareReserves",
                                    "type": "uint128"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPoolConfig",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolConfig",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "contract IERC20",
                                    "name": "baseToken",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "linkerFactory",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "linkerCodeHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "initialVaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "minimumTransactionAmount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "positionDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "checkpointDuration",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timeStretch",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "governance",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "feeCollector",
                                    "type": "address"
                                },
                                {
                                    "internalType": "struct IHyperdrive.Fees",
                                    "name": "fees",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "uint256",
                                            "name": "curve",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "flat",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceLP",
                                            "type": "uint256"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "governanceZombie",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPoolInfo",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.PoolInfo",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "shareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "shareAdjustment",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "zombieBaseProceeds",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "zombieShareReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "bondReserves",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lpTotalSupply",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "vaultSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longAverageMaturityTime",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortsOutstanding",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "shortAverageMaturityTime",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "withdrawalSharesReadyToWithdraw",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "withdrawalSharesProceeds",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "lpSharePrice",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "longExposure",
                                    "type": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getUncollectedGovernanceFees",
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
                    "name": "getWithdrawPool",
                    "outputs": [
                        {
                            "internalType": "struct IHyperdrive.WithdrawPool",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint128",
                                    "name": "readyToWithdraw",
                                    "type": "uint128"
                                },
                                {
                                    "internalType": "uint128",
                                    "name": "proceeds",
                                    "type": "uint128"
                                }
                            ]
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
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isApprovedForAll",
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
                            "name": "_account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isPauser",
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
                            "internalType": "uint256[]",
                            "name": "_slots",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "load",
                    "outputs": [
                        {
                            "internalType": "bytes32[]",
                            "name": "",
                            "type": "bytes32[]"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
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
                            "name": "owner",
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
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
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
                    "name": "perTokenApprovals",
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
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
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
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
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
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "balanceOf(uint256,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The balance of the owner."
                        }
                    },
                    "baseToken()": {
                        "returns": {
                            "_0": "The base token."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The decimals of the MultiToken."
                        }
                    },
                    "getCheckpoint(uint256)": {
                        "params": {
                            "_checkpointTime": "The checkpoint time."
                        },
                        "returns": {
                            "_0": "The checkpoint."
                        }
                    },
                    "getCheckpointExposure(uint256)": {
                        "params": {
                            "_checkpointTime": "The checkpoint time."
                        },
                        "returns": {
                            "_0": "The checkpoint exposure."
                        }
                    },
                    "getMarketState()": {
                        "returns": {
                            "_0": "The market state."
                        }
                    },
                    "getPoolConfig()": {
                        "returns": {
                            "_0": "The pool configuration."
                        }
                    },
                    "getPoolInfo()": {
                        "returns": {
                            "_0": "The pool info."
                        }
                    },
                    "getUncollectedGovernanceFees()": {
                        "returns": {
                            "_0": "The amount of uncollected governance fees."
                        }
                    },
                    "getWithdrawPool()": {
                        "returns": {
                            "_0": "The withdrawal pool information."
                        }
                    },
                    "isApprovedForAll(address,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "spender": "The spender of the tokens."
                        },
                        "returns": {
                            "_0": "The approval-for-all status of the spender for the owner."
                        }
                    },
                    "isPauser(address)": {
                        "params": {
                            "_account": "The account to check."
                        },
                        "returns": {
                            "_0": "The account's pauser status."
                        }
                    },
                    "load(uint256[])": {
                        "details": "This serves as a generalized getter that allows consumers to create      custom getters to suit their purposes.",
                        "params": {
                            "_slots": "The storage slots to load."
                        },
                        "returns": {
                            "_0": "The values at the specified slots."
                        }
                    },
                    "name(uint256)": {
                        "params": {
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The name of the MultiToken."
                        }
                    },
                    "nonces(address)": {
                        "params": {
                            "owner": "The owner of the tokens."
                        },
                        "returns": {
                            "_0": "The permit nonce of the owner."
                        }
                    },
                    "perTokenApprovals(uint256,address,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "spender": "The spender of the tokens.",
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The allowance of the spender for the owner."
                        }
                    },
                    "symbol(uint256)": {
                        "params": {
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The symbol of the MultiToken."
                        }
                    },
                    "totalSupply(uint256)": {
                        "params": {
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The total supply of the MultiToken."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "balanceOf(uint256,address)": {
                        "notice": "Gets the balance of a spender for a sub-token."
                    },
                    "baseToken()": {
                        "notice": "Gets the Hyperdrive pool's base token."
                    },
                    "decimals()": {
                        "notice": "Gets the decimals of the MultiToken."
                    },
                    "getCheckpoint(uint256)": {
                        "notice": "Gets one of the pool's checkpoints."
                    },
                    "getCheckpointExposure(uint256)": {
                        "notice": "Gets the pool's exposure from a checkpoint. This is the number         of non-netted longs in the checkpoint."
                    },
                    "getMarketState()": {
                        "notice": "Gets the pool's state relating to the Hyperdrive market."
                    },
                    "getPoolConfig()": {
                        "notice": "Gets the pool's configuration parameters."
                    },
                    "getPoolInfo()": {
                        "notice": "Gets info about the pool's reserves and other state that is         important to evaluate potential trades."
                    },
                    "getUncollectedGovernanceFees()": {
                        "notice": "Gets the amount of governance fees that haven't been collected."
                    },
                    "getWithdrawPool()": {
                        "notice": "Gets information relating to the pool's withdrawal pool. This         includes the total proceeds underlying the withdrawal pool and         the number of withdrawal shares ready to be redeemed."
                    },
                    "isApprovedForAll(address,address)": {
                        "notice": "Gets the approval-for-all status of a spender on behalf of an         owner."
                    },
                    "isPauser(address)": {
                        "notice": "Gets an account's pauser status within the Hyperdrive pool."
                    },
                    "load(uint256[])": {
                        "notice": "Gets the storage values at the specified slots."
                    },
                    "name(uint256)": {
                        "notice": "Gets the name of the MultiToken."
                    },
                    "nonces(address)": {
                        "notice": "Gets the permit nonce for an account."
                    },
                    "perTokenApprovals(uint256,address,address)": {
                        "notice": "Gets the allowance of a spender for a sub-token."
                    },
                    "symbol(uint256)": {
                        "notice": "Gets the symbol of the MultiToken."
                    },
                    "totalSupply(uint256)": {
                        "notice": "Gets the total supply of the MultiToken."
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
                "contracts/src/interfaces/IHyperdriveRead.sol": "IHyperdriveRead"
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
            "contracts/src/interfaces/IHyperdrive.sol": {
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55",
                "urls": [
                    "bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf",
                    "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
        "id": 8372,
        "exportedSymbols": {
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveRead": [
                8371
            ],
            "IMultiTokenRead": [
                8711
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2830:51",
        "nodes": [
            {
                "id": 8289,
                "nodeType": "PragmaDirective",
                "src": "39:23:51",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 8291,
                "nodeType": "ImportDirective",
                "src": "64:48:51",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8372,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8290,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "73:11:51",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8293,
                "nodeType": "ImportDirective",
                "src": "113:56:51",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenRead.sol",
                "file": "./IMultiTokenRead.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 8372,
                "sourceUnit": 8712,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8292,
                            "name": "IMultiTokenRead",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8711,
                            "src": "122:15:51",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8371,
                "nodeType": "ContractDefinition",
                "src": "171:2697:51",
                "nodes": [
                    {
                        "id": 8301,
                        "nodeType": "FunctionDefinition",
                        "src": "309:53:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8296,
                            "nodeType": "StructuredDocumentation",
                            "src": "222:82:51",
                            "text": "@notice Gets the Hyperdrive pool's base token.\n @return The base token."
                        },
                        "functionSelector": "c55dae63",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "baseToken",
                        "nameLocation": "318:9:51",
                        "parameters": {
                            "id": 8297,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "327:2:51"
                        },
                        "returnParameters": {
                            "id": 8300,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8299,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8301,
                                    "src": "353:7:51",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8298,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "353:7:51",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "352:9:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8310,
                        "nodeType": "FunctionDefinition",
                        "src": "504:116:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8302,
                            "nodeType": "StructuredDocumentation",
                            "src": "368:131:51",
                            "text": "@notice Gets one of the pool's checkpoints.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint."
                        },
                        "functionSelector": "20fc4881",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCheckpoint",
                        "nameLocation": "513:13:51",
                        "parameters": {
                            "id": 8305,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8304,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "544:15:51",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8310,
                                    "src": "536:23:51",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8303,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "536:7:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "526:39:51"
                        },
                        "returnParameters": {
                            "id": 8309,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8308,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8310,
                                    "src": "589:29:51",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Checkpoint_$7312_memory_ptr",
                                        "typeString": "struct IHyperdrive.Checkpoint"
                                    },
                                    "typeName": {
                                        "id": 8307,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8306,
                                            "name": "IHyperdrive.Checkpoint",
                                            "nameLocations": [
                                                "589:11:51",
                                                "601:10:51"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7312,
                                            "src": "589:22:51"
                                        },
                                        "referencedDeclaration": 7312,
                                        "src": "589:22:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Checkpoint_$7312_storage_ptr",
                                            "typeString": "struct IHyperdrive.Checkpoint"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "588:31:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8318,
                        "nodeType": "FunctionDefinition",
                        "src": "853:101:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8311,
                            "nodeType": "StructuredDocumentation",
                            "src": "626:222:51",
                            "text": "@notice Gets the pool's exposure from a checkpoint. This is the number\n         of non-netted longs in the checkpoint.\n @param _checkpointTime The checkpoint time.\n @return The checkpoint exposure."
                        },
                        "functionSelector": "cf210e65",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getCheckpointExposure",
                        "nameLocation": "862:21:51",
                        "parameters": {
                            "id": 8314,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8313,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "901:15:51",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8318,
                                    "src": "893:23:51",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8312,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "893:7:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "883:39:51"
                        },
                        "returnParameters": {
                            "id": 8317,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8316,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8318,
                                    "src": "946:6:51",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 8315,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "946:6:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "945:8:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8325,
                        "nodeType": "FunctionDefinition",
                        "src": "1067:105:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8319,
                            "nodeType": "StructuredDocumentation",
                            "src": "960:102:51",
                            "text": "@notice Gets the pool's state relating to the Hyperdrive market.\n @return The market state."
                        },
                        "functionSelector": "d8165743",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getMarketState",
                        "nameLocation": "1076:14:51",
                        "parameters": {
                            "id": 8320,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1090:2:51"
                        },
                        "returnParameters": {
                            "id": 8324,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8323,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8325,
                                    "src": "1140:30:51",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$7308_memory_ptr",
                                        "typeString": "struct IHyperdrive.MarketState"
                                    },
                                    "typeName": {
                                        "id": 8322,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8321,
                                            "name": "IHyperdrive.MarketState",
                                            "nameLocations": [
                                                "1140:11:51",
                                                "1152:11:51"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7308,
                                            "src": "1140:23:51"
                                        },
                                        "referencedDeclaration": 7308,
                                        "src": "1140:23:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage_ptr",
                                            "typeString": "struct IHyperdrive.MarketState"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1139:32:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8332,
                        "nodeType": "FunctionDefinition",
                        "src": "1276:103:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8326,
                            "nodeType": "StructuredDocumentation",
                            "src": "1178:93:51",
                            "text": "@notice Gets the pool's configuration parameters.\n @return The pool configuration."
                        },
                        "functionSelector": "b0d96580",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPoolConfig",
                        "nameLocation": "1285:13:51",
                        "parameters": {
                            "id": 8327,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1298:2:51"
                        },
                        "returnParameters": {
                            "id": 8331,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8330,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8332,
                                    "src": "1348:29:51",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$7407_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 8329,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8328,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "1348:11:51",
                                                "1360:10:51"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7407,
                                            "src": "1348:22:51"
                                        },
                                        "referencedDeclaration": 7407,
                                        "src": "1348:22:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$7407_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1347:31:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8339,
                        "nodeType": "FunctionDefinition",
                        "src": "1548:75:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8333,
                            "nodeType": "StructuredDocumentation",
                            "src": "1385:158:51",
                            "text": "@notice Gets info about the pool's reserves and other state that is\n         important to evaluate potential trades.\n @return The pool info."
                        },
                        "functionSelector": "60246c88",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPoolInfo",
                        "nameLocation": "1557:11:51",
                        "parameters": {
                            "id": 8334,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1568:2:51"
                        },
                        "returnParameters": {
                            "id": 8338,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8337,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8339,
                                    "src": "1594:27:51",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolInfo_$7453_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolInfo"
                                    },
                                    "typeName": {
                                        "id": 8336,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8335,
                                            "name": "IHyperdrive.PoolInfo",
                                            "nameLocations": [
                                                "1594:11:51",
                                                "1606:8:51"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7453,
                                            "src": "1594:20:51"
                                        },
                                        "referencedDeclaration": 7453,
                                        "src": "1594:20:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolInfo_$7453_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolInfo"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1593:29:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8345,
                        "nodeType": "FunctionDefinition",
                        "src": "1768:72:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8340,
                            "nodeType": "StructuredDocumentation",
                            "src": "1629:134:51",
                            "text": "@notice Gets the amount of governance fees that haven't been collected.\n @return The amount of uncollected governance fees."
                        },
                        "functionSelector": "c69e16ad",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUncollectedGovernanceFees",
                        "nameLocation": "1777:28:51",
                        "parameters": {
                            "id": 8341,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1805:2:51"
                        },
                        "returnParameters": {
                            "id": 8344,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8343,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8345,
                                    "src": "1831:7:51",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 8342,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1831:7:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1830:9:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8352,
                        "nodeType": "FunctionDefinition",
                        "src": "2122:107:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8346,
                            "nodeType": "StructuredDocumentation",
                            "src": "1846:271:51",
                            "text": "@notice Gets information relating to the pool's withdrawal pool. This\n         includes the total proceeds underlying the withdrawal pool and\n         the number of withdrawal shares ready to be redeemed.\n @return The withdrawal pool information."
                        },
                        "functionSelector": "fba56008",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getWithdrawPool",
                        "nameLocation": "2131:15:51",
                        "parameters": {
                            "id": 8347,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2146:2:51"
                        },
                        "returnParameters": {
                            "id": 8351,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8350,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8352,
                                    "src": "2196:31:51",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_WithdrawPool_$7319_memory_ptr",
                                        "typeString": "struct IHyperdrive.WithdrawPool"
                                    },
                                    "typeName": {
                                        "id": 8349,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8348,
                                            "name": "IHyperdrive.WithdrawPool",
                                            "nameLocations": [
                                                "2196:11:51",
                                                "2208:12:51"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7319,
                                            "src": "2196:24:51"
                                        },
                                        "referencedDeclaration": 7319,
                                        "src": "2196:24:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage_ptr",
                                            "typeString": "struct IHyperdrive.WithdrawPool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2195:33:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8360,
                        "nodeType": "FunctionDefinition",
                        "src": "2402:65:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8353,
                            "nodeType": "StructuredDocumentation",
                            "src": "2235:162:51",
                            "text": "@notice Gets an account's pauser status within the Hyperdrive pool.\n @param _account The account to check.\n @return The account's pauser status."
                        },
                        "functionSelector": "46fbf68e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isPauser",
                        "nameLocation": "2411:8:51",
                        "parameters": {
                            "id": 8356,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8355,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "2428:8:51",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8360,
                                    "src": "2420:16:51",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 8354,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2420:7:51",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2419:18:51"
                        },
                        "returnParameters": {
                            "id": 8359,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8358,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8360,
                                    "src": "2461:4:51",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 8357,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2461:4:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2460:6:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8370,
                        "nodeType": "FunctionDefinition",
                        "src": "2770:96:51",
                        "nodes": [],
                        "documentation": {
                            "id": 8361,
                            "nodeType": "StructuredDocumentation",
                            "src": "2473:292:51",
                            "text": "@notice Gets the storage values at the specified slots.\n @dev This serves as a generalized getter that allows consumers to create\n      custom getters to suit their purposes.\n @param _slots The storage slots to load.\n @return The values at the specified slots."
                        },
                        "functionSelector": "becee9c3",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "load",
                        "nameLocation": "2779:4:51",
                        "parameters": {
                            "id": 8365,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8364,
                                    "mutability": "mutable",
                                    "name": "_slots",
                                    "nameLocation": "2812:6:51",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8370,
                                    "src": "2793:25:51",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 8362,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2793:7:51",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 8363,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2793:9:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2783:41:51"
                        },
                        "returnParameters": {
                            "id": 8369,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8368,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8370,
                                    "src": "2848:16:51",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 8366,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2848:7:51",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 8367,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2848:9:51",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                            "typeString": "bytes32[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2847:18:51"
                        },
                        "scope": 8371,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 8294,
                            "name": "IMultiTokenRead",
                            "nameLocations": [
                                "200:15:51"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8711,
                            "src": "200:15:51"
                        },
                        "id": 8295,
                        "nodeType": "InheritanceSpecifier",
                        "src": "200:15:51"
                    }
                ],
                "canonicalName": "IHyperdriveRead",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    8371,
                    8711
                ],
                "name": "IHyperdriveRead",
                "nameLocation": "181:15:51",
                "scope": 8372,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 51
};
