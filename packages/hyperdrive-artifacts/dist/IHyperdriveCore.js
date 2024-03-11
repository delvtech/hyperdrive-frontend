export const IHyperdriveCore = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minLpSharePrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minApr",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxApr",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "addLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
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
                    "internalType": "uint256[]",
                    "name": "ids",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "values",
                    "type": "uint256[]"
                }
            ],
            "name": "batchTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "name": "checkpoint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "closeLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "closeShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "collectGovernanceFee",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "proceeds",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_contribution",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_apr",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "initialize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutput",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "openLong",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_bondAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_maxDeposit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "openShort",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                }
            ],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
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
                    "internalType": "bool",
                    "name": "_approved",
                    "type": "bool"
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
            "name": "permitForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_withdrawalShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutputPerShare",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "redeemWithdrawalShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_lpShares",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_minOutputPerShare",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool"
                        },
                        {
                            "internalType": "bytes",
                            "name": "extraData",
                            "type": "bytes"
                        }
                    ],
                    "internalType": "struct IHyperdrive.Options",
                    "name": "_options",
                    "type": "tuple"
                }
            ],
            "name": "removeLiquidity",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "setApproval",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "setApprovalBridge",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                }
            ],
            "name": "setGovernance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "who",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "setPauser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
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
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID",
                    "type": "uint256"
                },
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
                },
                {
                    "internalType": "address",
                    "name": "caller",
                    "type": "address"
                }
            ],
            "name": "transferFromBridge",
            "outputs": [],
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
        "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": "4c2ac1d9",
        "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
        "checkpoint(uint256)": "ed64bab2",
        "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
        "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
        "collectGovernanceFee((address,bool,bytes))": "3e691db9",
        "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
        "openLong(uint256,uint256,uint256,(address,bool,bytes))": "cba2e58d",
        "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070",
        "pause(bool)": "02329a29",
        "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": "9032c726",
        "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
        "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434",
        "setApproval(uint256,address,uint256)": "9cd241af",
        "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
        "setApprovalForAll(address,bool)": "a22cb465",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minLpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The number of LP tokens created.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds the user receives. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The proceeds of closing this short. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the bonds.\",\"_1\":\"The amount of bonds the user received.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`.\",\"_1\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_1\":\"The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveCore.sol\":\"IHyperdriveCore\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                            "name": "_contribution",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minLpSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minApr",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_maxApr",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "addLiquidity",
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
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "ids",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "values",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "batchTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_checkpointTime",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "checkpoint"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_maturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_bondAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutput",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "closeLong",
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
                            "name": "_maturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_bondAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutput",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "closeShort",
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
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "collectGovernanceFee",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "proceeds",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_contribution",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_apr",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "initialize",
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
                            "name": "_amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutput",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "openLong",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
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
                            "name": "_bondAmount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_maxDeposit",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minVaultSharePrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "openShort",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
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
                            "internalType": "bool",
                            "name": "_status",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "pause"
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
                            "internalType": "bool",
                            "name": "_approved",
                            "type": "bool"
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
                    "name": "permitForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_withdrawalShares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutputPerShare",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "redeemWithdrawalShares",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
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
                            "name": "_lpShares",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_minOutputPerShare",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct IHyperdrive.Options",
                            "name": "_options",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "asBase",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "extraData",
                                    "type": "bytes"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "removeLiquidity",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
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
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
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
                    "name": "setApproval"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalBridge"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_who",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setGovernance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "who",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPauser"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
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
                    "name": "transferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenID",
                            "type": "uint256"
                        },
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
                        },
                        {
                            "internalType": "address",
                            "name": "caller",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFromBridge"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_contribution": "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_maxApr": "The maximum APR at which the LP is willing to supply.",
                            "_minApr": "The minimum APR at which the LP is willing to supply.",
                            "_minLpSharePrice": "The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The number of LP tokens created."
                        }
                    },
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "params": {
                            "from": "The source account.",
                            "ids": "The array of token ids of the asset to transfer.",
                            "to": "The destination account.",
                            "values": "The amount of each token to transfer."
                        }
                    },
                    "checkpoint(uint256)": {
                        "params": {
                            "_checkpointTime": "The time of the checkpoint to create."
                        }
                    },
                    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of longs to close.",
                            "_maturityTime": "The maturity time of the long.",
                            "_minOutput": "The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The proceeds the user receives. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`."
                        }
                    },
                    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of shorts to close.",
                            "_maturityTime": "The maturity time of the short.",
                            "_minOutput": "The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The proceeds of closing this short. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`."
                        }
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "params": {
                            "_options": "The options that configure how the fees are settled."
                        },
                        "returns": {
                            "proceeds": "The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
                        }
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_apr": "The target APR.",
                            "_contribution": "The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The initial number of LP shares created."
                        }
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_amount": "The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.",
                            "_minOutput": "The minimum number of bonds to receive.",
                            "_minVaultSharePrice": "The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the bonds.",
                            "_1": "The amount of bonds the user received."
                        }
                    },
                    "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_bondAmount": "The amount of bonds to short.",
                            "_maxDeposit": "The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.",
                            "_minVaultSharePrice": "The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.",
                            "_options": "The options that configure how the trade is settled."
                        },
                        "returns": {
                            "_0": "The maturity time of the short.",
                            "_1": "The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
                        }
                    },
                    "pause(bool)": {
                        "params": {
                            "_status": "True to pause all deposits and false to unpause them."
                        }
                    },
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "details": "The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.",
                        "params": {
                            "_approved": "A boolean of the approval status to set to.",
                            "deadline": "The timestamp which the signature must be submitted by        to be valid.",
                            "owner": "The owner of the account which is having the new approval set.",
                            "r": "The r component of the ECDSA signature.",
                            "s": "The s component of the ECDSA signature.",
                            "spender": "The address which will be allowed to spend owner's tokens.",
                            "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28."
                        }
                    },
                    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_minOutputPerShare": "The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled.",
                            "_withdrawalShares": "The withdrawal shares to redeem."
                        },
                        "returns": {
                            "_0": "The amount the LP received. The units of this quantity are         either base or vault shares, depending on the value of         `_options.asBase`.",
                            "_1": "The amount of withdrawal shares that were redeemed."
                        }
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_lpShares": "The LP shares to burn.",
                            "_minOutputPerShare": "The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "_0": "The amount the LP removing liquidity receives. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.",
                            "_1": "The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares."
                        }
                    },
                    "setApproval(uint256,address,uint256)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
                        }
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "params": {
                            "amount": "The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].",
                            "caller": "The eth address which called the linking contract.",
                            "operator": "The address who will be able to use the tokens.",
                            "tokenID": "The asset to approve the use of."
                        }
                    },
                    "setApprovalForAll(address,bool)": {
                        "params": {
                            "approved": "True to approve, false to remove approval.",
                            "operator": "The eth address which can access the caller's assets."
                        }
                    },
                    "setGovernance(address)": {
                        "params": {
                            "_who": "The new governance address."
                        }
                    },
                    "setPauser(address,bool)": {
                        "params": {
                            "status": "The new pauser status.",
                            "who": "The address to change."
                        }
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "params": {
                            "amount": "The amount of token to move.",
                            "caller": "The msg.sender or the caller of the ERC20Forwarder.",
                            "from": "The address whose balance will be reduced.",
                            "to": "The address whose balance will be increased.",
                            "tokenID": "The token identifier."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows LPs to supply liquidity for LP shares."
                    },
                    "batchTransferFrom(address,address,uint256[],uint256[])": {
                        "notice": "Transfers several assets from one account to another."
                    },
                    "checkpoint(uint256)": {
                        "notice": "Attempts to mint a checkpoint with the specified checkpoint time."
                    },
                    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Closes a long position with a specified maturity time."
                    },
                    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Closes a short position with a specified maturity time."
                    },
                    "collectGovernanceFee((address,bool,bytes))": {
                        "notice": "This function collects the governance fees accrued by the pool."
                    },
                    "initialize(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows the first LP to initialize the market with a target APR."
                    },
                    "openLong(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Opens a long position."
                    },
                    "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        "notice": "Opens a short position."
                    },
                    "pause(bool)": {
                        "notice": "Allows an authorized address to pause this contract."
                    },
                    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
                        "notice": "Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature."
                    },
                    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "notice": "Allows an LP to burn shares and withdraw from the pool."
                    },
                    "setApproval(uint256,address,uint256)": {
                        "notice": "Allows a user to set an approval for an individual asset with         specific amount."
                    },
                    "setApprovalBridge(uint256,address,uint256,address)": {
                        "notice": "Allows the compatibility linking contract to forward calls to         set asset approvals."
                    },
                    "setApprovalForAll(address,bool)": {
                        "notice": "Allows a user to approve an operator to use all of their assets."
                    },
                    "setGovernance(address)": {
                        "notice": "Allows governance to transfer the governance role."
                    },
                    "setPauser(address,bool)": {
                        "notice": "Allows governance to change the pauser status of an address."
                    },
                    "transferFrom(uint256,address,address,uint256)": {
                        "notice": "Transfers an amount of assets from the source to the destination."
                    },
                    "transferFromBridge(uint256,address,address,uint256,address)": {
                        "notice": "Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge."
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
                "contracts/src/interfaces/IHyperdriveCore.sol": "IHyperdriveCore"
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
        "absolutePath": "contracts/src/interfaces/IHyperdriveCore.sol",
        "id": 7785,
        "exportedSymbols": {
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveCore": [
                7784
            ],
            "IMultiTokenCore": [
                8589
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:9515:45",
        "nodes": [
            {
                "id": 7618,
                "nodeType": "PragmaDirective",
                "src": "39:23:45",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 7620,
                "nodeType": "ImportDirective",
                "src": "64:48:45",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7785,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7619,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "73:11:45",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7622,
                "nodeType": "ImportDirective",
                "src": "113:56:45",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenCore.sol",
                "file": "./IMultiTokenCore.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7785,
                "sourceUnit": 8590,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7621,
                            "name": "IMultiTokenCore",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8589,
                            "src": "122:15:45",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7784,
                "nodeType": "ContractDefinition",
                "src": "171:9382:45",
                "nodes": [
                    {
                        "id": 7641,
                        "nodeType": "FunctionDefinition",
                        "src": "985:205:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7625,
                            "nodeType": "StructuredDocumentation",
                            "src": "241:739:45",
                            "text": "@notice Opens a long position.\n @param _amount The amount of capital provided to open the long. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @param _minOutput The minimum number of bonds to receive.\n @param _minVaultSharePrice The minimum vault share price at which to\n        open the long. This allows traders to protect themselves from\n        opening a long in a checkpoint where negative interest has\n        accrued.\n @param _options The options that configure how the trade is settled.\n @return The maturity time of the bonds.\n @return The amount of bonds the user received."
                        },
                        "functionSelector": "cba2e58d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "openLong",
                        "nameLocation": "994:8:45",
                        "parameters": {
                            "id": 7635,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7627,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1020:7:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7641,
                                    "src": "1012:15:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7626,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1012:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7629,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "1045:10:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7641,
                                    "src": "1037:18:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7628,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1037:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7631,
                                    "mutability": "mutable",
                                    "name": "_minVaultSharePrice",
                                    "nameLocation": "1073:19:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7641,
                                    "src": "1065:27:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7630,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1065:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7634,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "1131:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7641,
                                    "src": "1102:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7633,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7632,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "1102:11:45",
                                                "1114:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "1102:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "1102:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1002:143:45"
                        },
                        "returnParameters": {
                            "id": 7640,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7637,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7641,
                                    "src": "1172:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7636,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1172:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7639,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7641,
                                    "src": "1181:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7638,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1181:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1171:18:45"
                        },
                        "scope": 7784,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7656,
                        "nodeType": "FunctionDefinition",
                        "src": "1852:187:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7642,
                            "nodeType": "StructuredDocumentation",
                            "src": "1196:651:45",
                            "text": "@notice Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the long.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum proceeds the trader will accept. The units\n        of this quantity are either base or vault shares, depending on\n        the value of `_options.asBase`.\n @param _options The options that configure how the trade is settled.\n @return The proceeds the user receives. The units of this quantity are\n         either base or vault shares, depending on the value of\n         `_options.asBase`."
                        },
                        "functionSelector": "ded06231",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "closeLong",
                        "nameLocation": "1861:9:45",
                        "parameters": {
                            "id": 7652,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7644,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "1888:13:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7656,
                                    "src": "1880:21:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7643,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1880:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7646,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "1919:11:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7656,
                                    "src": "1911:19:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7645,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1911:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7648,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "1948:10:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7656,
                                    "src": "1940:18:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7647,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1940:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7651,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "1997:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7656,
                                    "src": "1968:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7650,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7649,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "1968:11:45",
                                                "1980:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "1968:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "1968:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1870:141:45"
                        },
                        "returnParameters": {
                            "id": 7655,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7654,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7656,
                                    "src": "2030:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7653,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2030:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2029:9:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7673,
                        "nodeType": "FunctionDefinition",
                        "src": "2940:211:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7657,
                            "nodeType": "StructuredDocumentation",
                            "src": "2065:870:45",
                            "text": "@notice Opens a short position.\n @param _bondAmount The amount of bonds to short.\n @param _maxDeposit The most the user expects to deposit for this trade.\n        The units of this quantity are either base or vault shares,\n        depending on the value of `_options.asBase`.\n @param _minVaultSharePrice The minimum vault share price at which to open\n        the short. This allows traders to protect themselves from opening\n        a short in a checkpoint where negative interest has accrued.\n @param _options The options that configure how the trade is settled.\n @return The maturity time of the short.\n @return The amount the user deposited for this trade. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`."
                        },
                        "functionSelector": "dbbe8070",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "openShort",
                        "nameLocation": "2949:9:45",
                        "parameters": {
                            "id": 7667,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7659,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "2976:11:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7673,
                                    "src": "2968:19:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7658,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2968:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7661,
                                    "mutability": "mutable",
                                    "name": "_maxDeposit",
                                    "nameLocation": "3005:11:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7673,
                                    "src": "2997:19:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7660,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2997:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7663,
                                    "mutability": "mutable",
                                    "name": "_minVaultSharePrice",
                                    "nameLocation": "3034:19:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7673,
                                    "src": "3026:27:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7662,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3026:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7666,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "3092:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7673,
                                    "src": "3063:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7665,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7664,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "3063:11:45",
                                                "3075:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "3063:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "3063:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2958:148:45"
                        },
                        "returnParameters": {
                            "id": 7672,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7669,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7673,
                                    "src": "3133:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7668,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3133:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7671,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7673,
                                    "src": "3142:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7670,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3142:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3132:18:45"
                        },
                        "scope": 7784,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7688,
                        "nodeType": "FunctionDefinition",
                        "src": "3809:188:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7674,
                            "nodeType": "StructuredDocumentation",
                            "src": "3157:647:45",
                            "text": "@notice Closes a short position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of shorts to close.\n @param _minOutput The minimum output of this trade. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the trade is settled.\n @return The proceeds of closing this short. The units of this quantity\n         are either base or vault shares, depending on the value of\n         `_options.asBase`."
                        },
                        "functionSelector": "29b23fc1",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "closeShort",
                        "nameLocation": "3818:10:45",
                        "parameters": {
                            "id": 7684,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7676,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "3846:13:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7688,
                                    "src": "3838:21:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7675,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3838:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7678,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "3877:11:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7688,
                                    "src": "3869:19:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7677,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3869:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7680,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "3906:10:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7688,
                                    "src": "3898:18:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7679,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3898:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7683,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "3955:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7688,
                                    "src": "3926:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7682,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7681,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "3926:11:45",
                                                "3938:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "3926:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "3926:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3828:141:45"
                        },
                        "returnParameters": {
                            "id": 7687,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7686,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7688,
                                    "src": "3988:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7685,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3988:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3987:9:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7701,
                        "nodeType": "FunctionDefinition",
                        "src": "4471:161:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7689,
                            "nodeType": "StructuredDocumentation",
                            "src": "4020:446:45",
                            "text": "@notice Allows the first LP to initialize the market with a target APR.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the operation is settled.\n @return The initial number of LP shares created."
                        },
                        "functionSelector": "77d05ff4",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nameLocation": "4480:10:45",
                        "parameters": {
                            "id": 7697,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7691,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "4508:13:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7701,
                                    "src": "4500:21:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7690,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4500:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7693,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "4539:4:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7701,
                                    "src": "4531:12:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7692,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4531:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7696,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "4582:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7701,
                                    "src": "4553:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7695,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7694,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "4553:11:45",
                                                "4565:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "4553:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "4553:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4490:106:45"
                        },
                        "returnParameters": {
                            "id": 7700,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7699,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7701,
                                    "src": "4623:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7698,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4623:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4622:9:45"
                        },
                        "scope": 7784,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7718,
                        "nodeType": "FunctionDefinition",
                        "src": "5635:225:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7702,
                            "nodeType": "StructuredDocumentation",
                            "src": "4638:992:45",
                            "text": "@notice Allows LPs to supply liquidity for LP shares.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _minLpSharePrice The minimum LP share price the LP is willing\n        to accept for their shares. LPs incur negative slippage when\n        adding liquidity if there is a net curve position in the market,\n        so this allows LPs to protect themselves from high levels of\n        slippage. The units of this quantity are either base or vault\n        shares, depending on the value of `_options.asBase`.\n @param _minApr The minimum APR at which the LP is willing to supply.\n @param _maxApr The maximum APR at which the LP is willing to supply.\n @param _options The options that configure how the operation is settled.\n @return The number of LP tokens created."
                        },
                        "functionSelector": "4c2ac1d9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "addLiquidity",
                        "nameLocation": "5644:12:45",
                        "parameters": {
                            "id": 7714,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7704,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "5674:13:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7718,
                                    "src": "5666:21:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7703,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5666:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7706,
                                    "mutability": "mutable",
                                    "name": "_minLpSharePrice",
                                    "nameLocation": "5705:16:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7718,
                                    "src": "5697:24:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7705,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5697:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7708,
                                    "mutability": "mutable",
                                    "name": "_minApr",
                                    "nameLocation": "5739:7:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7718,
                                    "src": "5731:15:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7707,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5731:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7710,
                                    "mutability": "mutable",
                                    "name": "_maxApr",
                                    "nameLocation": "5764:7:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7718,
                                    "src": "5756:15:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7709,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5756:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7713,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "5810:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7718,
                                    "src": "5781:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7712,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7711,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "5781:11:45",
                                                "5793:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "5781:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "5781:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5656:168:45"
                        },
                        "returnParameters": {
                            "id": 7717,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7716,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7718,
                                    "src": "5851:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7715,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5851:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5850:9:45"
                        },
                        "scope": 7784,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7733,
                        "nodeType": "FunctionDefinition",
                        "src": "6905:177:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7719,
                            "nodeType": "StructuredDocumentation",
                            "src": "5866:1034:45",
                            "text": "@notice Allows an LP to burn shares and withdraw from the pool.\n @param _lpShares The LP shares to burn.\n @param _minOutputPerShare The minimum amount the LP expects to receive\n        for each withdrawal share that is burned. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return The amount the LP removing liquidity receives. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @return The base that the LP receives buys out some of their LP shares,\n         but it may not be sufficient to fully buy the LP out. In this\n         case, the LP receives withdrawal shares equal in value to the\n         present value they are owed. As idle capital becomes available,\n         the pool will buy back these shares."
                        },
                        "functionSelector": "cbc13434",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "removeLiquidity",
                        "nameLocation": "6914:15:45",
                        "parameters": {
                            "id": 7727,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7721,
                                    "mutability": "mutable",
                                    "name": "_lpShares",
                                    "nameLocation": "6947:9:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7733,
                                    "src": "6939:17:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7720,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6939:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7723,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "6974:18:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7733,
                                    "src": "6966:26:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7722,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6966:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7726,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "7031:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7733,
                                    "src": "7002:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7725,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7724,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "7002:11:45",
                                                "7014:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "7002:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "7002:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6929:116:45"
                        },
                        "returnParameters": {
                            "id": 7732,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7729,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7733,
                                    "src": "7064:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7728,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7064:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7731,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7733,
                                    "src": "7073:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7730,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7073:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7063:18:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7748,
                        "nodeType": "FunctionDefinition",
                        "src": "8048:192:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7734,
                            "nodeType": "StructuredDocumentation",
                            "src": "7088:955:45",
                            "text": "@notice Redeems withdrawal shares by giving the LP a pro-rata amount of\n         the withdrawal pool's proceeds. This function redeems the\n         maximum amount of the specified withdrawal shares given the\n         amount of withdrawal shares ready to withdraw.\n @param _withdrawalShares The withdrawal shares to redeem.\n @param _minOutputPerShare The minimum amount the LP expects to\n        receive for each withdrawal share that is burned. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return The amount the LP received. The units of this quantity are\n         either base or vault shares, depending on the value of\n         `_options.asBase`.\n @return The amount of withdrawal shares that were redeemed."
                        },
                        "functionSelector": "074a6de9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeemWithdrawalShares",
                        "nameLocation": "8057:22:45",
                        "parameters": {
                            "id": 7742,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7736,
                                    "mutability": "mutable",
                                    "name": "_withdrawalShares",
                                    "nameLocation": "8097:17:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7748,
                                    "src": "8089:25:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7735,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8089:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7738,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "8132:18:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7748,
                                    "src": "8124:26:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7737,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8124:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7741,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "8189:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7748,
                                    "src": "8160:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7740,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7739,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "8160:11:45",
                                                "8172:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "8160:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "8160:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8079:124:45"
                        },
                        "returnParameters": {
                            "id": 7747,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7744,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7748,
                                    "src": "8222:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7743,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8222:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7746,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7748,
                                    "src": "8231:7:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7745,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8231:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8221:18:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7754,
                        "nodeType": "FunctionDefinition",
                        "src": "8422:54:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7749,
                            "nodeType": "StructuredDocumentation",
                            "src": "8271:146:45",
                            "text": "@notice Attempts to mint a checkpoint with the specified checkpoint time.\n @param _checkpointTime The time of the checkpoint to create."
                        },
                        "functionSelector": "ed64bab2",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "checkpoint",
                        "nameLocation": "8431:10:45",
                        "parameters": {
                            "id": 7752,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7751,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "8450:15:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7754,
                                    "src": "8442:23:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7750,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8442:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8441:25:45"
                        },
                        "returnParameters": {
                            "id": 7753,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8475:0:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7763,
                        "nodeType": "FunctionDefinition",
                        "src": "8851:119:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7755,
                            "nodeType": "StructuredDocumentation",
                            "src": "8501:345:45",
                            "text": "@notice This function collects the governance fees accrued by the pool.\n @param _options The options that configure how the fees are settled.\n @return proceeds The governance fees collected. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`."
                        },
                        "functionSelector": "3e691db9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "collectGovernanceFee",
                        "nameLocation": "8860:20:45",
                        "parameters": {
                            "id": 7759,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7758,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "8919:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7763,
                                    "src": "8890:37:45",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 7757,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 7756,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "8890:11:45",
                                                "8902:7:45"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "8890:19:45"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "8890:19:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8880:53:45"
                        },
                        "returnParameters": {
                            "id": 7762,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7761,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "8960:8:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7763,
                                    "src": "8952:16:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7760,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8952:7:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8951:18:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7769,
                        "nodeType": "FunctionDefinition",
                        "src": "9122:38:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7764,
                            "nodeType": "StructuredDocumentation",
                            "src": "8976:141:45",
                            "text": "@notice Allows an authorized address to pause this contract.\n @param _status True to pause all deposits and false to unpause them."
                        },
                        "functionSelector": "02329a29",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pause",
                        "nameLocation": "9131:5:45",
                        "parameters": {
                            "id": 7767,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7766,
                                    "mutability": "mutable",
                                    "name": "_status",
                                    "nameLocation": "9142:7:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7769,
                                    "src": "9137:12:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7765,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9137:4:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9136:14:45"
                        },
                        "returnParameters": {
                            "id": 7768,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9159:0:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7775,
                        "nodeType": "FunctionDefinition",
                        "src": "9281:46:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7770,
                            "nodeType": "StructuredDocumentation",
                            "src": "9166:110:45",
                            "text": "@notice Allows governance to transfer the governance role.\n @param _who The new governance address."
                        },
                        "functionSelector": "ab033ea9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setGovernance",
                        "nameLocation": "9290:13:45",
                        "parameters": {
                            "id": 7773,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7772,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "9312:4:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7775,
                                    "src": "9304:12:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7771,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9304:7:45",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9303:14:45"
                        },
                        "returnParameters": {
                            "id": 7774,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9326:0:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7783,
                        "nodeType": "FunctionDefinition",
                        "src": "9497:54:45",
                        "nodes": [],
                        "documentation": {
                            "id": 7776,
                            "nodeType": "StructuredDocumentation",
                            "src": "9333:159:45",
                            "text": "@notice Allows governance to change the pauser status of an address.\n @param who The address to change.\n @param status The new pauser status."
                        },
                        "functionSelector": "7180c8ca",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setPauser",
                        "nameLocation": "9506:9:45",
                        "parameters": {
                            "id": 7781,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7778,
                                    "mutability": "mutable",
                                    "name": "who",
                                    "nameLocation": "9524:3:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7783,
                                    "src": "9516:11:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7777,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9516:7:45",
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
                                    "id": 7780,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "9534:6:45",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7783,
                                    "src": "9529:11:45",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7779,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9529:4:45",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9515:26:45"
                        },
                        "returnParameters": {
                            "id": 7782,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9550:0:45"
                        },
                        "scope": 7784,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 7623,
                            "name": "IMultiTokenCore",
                            "nameLocations": [
                                "200:15:45"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8589,
                            "src": "200:15:45"
                        },
                        "id": 7624,
                        "nodeType": "InheritanceSpecifier",
                        "src": "200:15:45"
                    }
                ],
                "canonicalName": "IHyperdriveCore",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    7784,
                    8589
                ],
                "name": "IHyperdriveCore",
                "nameLocation": "181:15:45",
                "scope": 7785,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 45
};
