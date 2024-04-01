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
                    "name": "lpShares",
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
                    "name": "lpShares",
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
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bondProceeds",
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
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deposit",
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
                    "name": "proceeds",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "withdrawalSharesRedeemed",
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
                    "name": "proceeds",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "withdrawalShares",
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
            "name": "setFeeCollector",
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
                    "internalType": "address",
                    "name": "_who",
                    "type": "address"
                }
            ],
            "name": "setSweepCollector",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "_target",
                    "type": "address"
                }
            ],
            "name": "sweep",
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
        "setFeeCollector(address)": "a42dce80",
        "setGovernance(address)": "ab033ea9",
        "setPauser(address,bool)": "7180c8ca",
        "setSweepCollector(address)": "e4af29d1",
        "sweep(address)": "01681a62",
        "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
        "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minLpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"batchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"collectGovernanceFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondProceeds\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deposit\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"_status\",\"type\":\"bool\"}],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permitForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesRedeemed\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"proceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalShares\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"setApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"setApprovalBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setFeeCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"who\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"setPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"setSweepCollector\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_target\",\"type\":\"address\"}],\"name\":\"sweep\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"}],\"name\":\"transferFromBridge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_minLpSharePrice\":\"The minimum LP share price the LP is willing        to accept for their shares. LPs incur negative slippage when        adding liquidity if there is a net curve position in the market,        so this allows LPs to protect themselves from high levels of        slippage. The units of this quantity are either base or vault        shares, depending on the value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The LP shares received by the LP.\"}},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"params\":{\"from\":\"The source account.\",\"ids\":\"The array of token ids of the asset to transfer.\",\"to\":\"The destination account.\",\"values\":\"The amount of each token to transfer.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the long.\",\"_minOutput\":\"The minimum proceeds the trader will accept. The units        of this quantity are either base or vault shares, depending on        the value of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"proceeds\":\"The proceeds the user receives. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"proceeds\":\"The proceeds of closing this short. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"collectGovernanceFee((address,bool,bytes))\":{\"params\":{\"_options\":\"The options that configure how the fees are settled.\"},\"returns\":{\"proceeds\":\"The governance fees collected. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of capital to supply. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_amount\":\"The amount of capital provided to open the long. The        units of this quantity are either base or vault shares, depending        on the value of `_options.asBase`.\",\"_minOutput\":\"The minimum number of bonds to receive.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the long. This allows traders to protect themselves from        opening a long in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"bondProceeds\":\"The amount of bonds the user received.\",\"maturityTime\":\"The maturity time of the bonds.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to open        the short. This allows traders to protect themselves from opening        a short in a checkpoint where negative interest has accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"deposit\":\"The amount the user deposited for this trade. The units         of this quantity are either base or vault shares, depending on         the value of `_options.asBase`.\",\"maturityTime\":\"The maturity time of the short.\"}},\"pause(bool)\":{\"params\":{\"_status\":\"True to pause all deposits and false to unpause them.\"}},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP 712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values, those values are not      supported.\",\"params\":{\"_approved\":\"A boolean of the approval status to set to.\",\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount the LP expects to        receive for each withdrawal share that is burned. The units of        this quantity are either base or vault shares, depending on the        value of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"proceeds\":\"The amount the LP received. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.\",\"withdrawalSharesRedeemed\":\"The amount of withdrawal shares that         were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutputPerShare\":\"The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"proceeds\":\"The amount the LP removing liquidity receives. The         units of this quantity are either base or vault shares,         depending on the value of `_options.asBase`.\",\"withdrawalShares\":\"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal in         value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.\"}},\"setApproval(uint256,address,uint256)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement (saving gas        on transfer).\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalBridge(uint256,address,uint256,address)\":{\"params\":{\"amount\":\"The max tokens the approved person can use, setting to        uint256.max will cause the value to never decrement [saving gas        on transfer].\",\"caller\":\"The eth address which called the linking contract.\",\"operator\":\"The address who will be able to use the tokens.\",\"tokenID\":\"The asset to approve the use of.\"}},\"setApprovalForAll(address,bool)\":{\"params\":{\"approved\":\"True to approve, false to remove approval.\",\"operator\":\"The eth address which can access the caller's assets.\"}},\"setFeeCollector(address)\":{\"params\":{\"_who\":\"The new fee collector address.\"}},\"setGovernance(address)\":{\"params\":{\"_who\":\"The new governance address.\"}},\"setPauser(address,bool)\":{\"params\":{\"status\":\"The new pauser status.\",\"who\":\"The address to change.\"}},\"setSweepCollector(address)\":{\"params\":{\"_who\":\"The new sweep collector address.\"}},\"sweep(address)\":{\"details\":\"WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.\",\"params\":{\"_target\":\"The target token to sweep.\"}},\"transferFrom(uint256,address,address,uint256)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"params\":{\"amount\":\"The amount of token to move.\",\"caller\":\"The msg.sender or the caller of the ERC20Forwarder.\",\"from\":\"The address whose balance will be reduced.\",\"to\":\"The address whose balance will be increased.\",\"tokenID\":\"The token identifier.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"batchTransferFrom(address,address,uint256[],uint256[])\":{\"notice\":\"Transfers several assets from one account to another.\"},\"checkpoint(uint256)\":{\"notice\":\"Attempts to mint a checkpoint with the specified checkpoint time.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"collectGovernanceFee((address,bool,bytes))\":{\"notice\":\"This function collects the governance fees accrued by the pool.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"openLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a long position.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"},\"pause(bool)\":{\"notice\":\"Allows an authorized address to pause this contract.\"},\"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Allows a caller who is not the owner of an account to execute the         functionality of 'approve' for all assets with the owner's         signature.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"},\"setApproval(uint256,address,uint256)\":{\"notice\":\"Allows a user to set an approval for an individual asset with         specific amount.\"},\"setApprovalBridge(uint256,address,uint256,address)\":{\"notice\":\"Allows the compatibility linking contract to forward calls to         set asset approvals.\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Allows a user to approve an operator to use all of their assets.\"},\"setFeeCollector(address)\":{\"notice\":\"Allows governance to transfer the fee collector role.\"},\"setGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"},\"setPauser(address,bool)\":{\"notice\":\"Allows governance to change the pauser status of an address.\"},\"setSweepCollector(address)\":{\"notice\":\"Allows governance to transfer the sweep collector role.\"},\"sweep(address)\":{\"notice\":\"Transfers the contract's balance of a target token to the fee         collector address.\"},\"transferFrom(uint256,address,address,uint256)\":{\"notice\":\"Transfers an amount of assets from the source to the destination.\"},\"transferFromBridge(uint256,address,address,uint256,address)\":{\"notice\":\"Permissioned transfer for the bridge to access, only callable by         the ERC20 linking bridge.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveCore.sol\":\"IHyperdriveCore\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                            "name": "lpShares",
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
                            "name": "proceeds",
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
                            "name": "proceeds",
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
                            "name": "lpShares",
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
                            "name": "maturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondProceeds",
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
                            "name": "maturityTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deposit",
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
                            "name": "proceeds",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalSharesRedeemed",
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
                            "name": "proceeds",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShares",
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
                    "name": "setFeeCollector"
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
                            "internalType": "address",
                            "name": "_who",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setSweepCollector"
                },
                {
                    "inputs": [
                        {
                            "internalType": "contract IERC20",
                            "name": "_target",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "sweep"
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
                            "lpShares": "The LP shares received by the LP."
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
                            "proceeds": "The proceeds the user receives. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
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
                            "proceeds": "The proceeds of closing this short. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`."
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
                            "lpShares": "The initial number of LP shares created."
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
                            "bondProceeds": "The amount of bonds the user received.",
                            "maturityTime": "The maturity time of the bonds."
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
                            "deposit": "The amount the user deposited for this trade. The units         of this quantity are either base or vault shares, depending on         the value of `_options.asBase`.",
                            "maturityTime": "The maturity time of the short."
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
                            "proceeds": "The amount the LP received. The units of this quantity         are either base or vault shares, depending on the value of         `_options.asBase`.",
                            "withdrawalSharesRedeemed": "The amount of withdrawal shares that         were redeemed."
                        }
                    },
                    "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
                        "params": {
                            "_lpShares": "The LP shares to burn.",
                            "_minOutputPerShare": "The minimum amount the LP expects to receive        for each withdrawal share that is burned. The units of this        quantity are either base or vault shares, depending on the value        of `_options.asBase`.",
                            "_options": "The options that configure how the operation is settled."
                        },
                        "returns": {
                            "proceeds": "The amount the LP removing liquidity receives. The         units of this quantity are either base or vault shares,         depending on the value of `_options.asBase`.",
                            "withdrawalShares": "The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal in         value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares."
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
                    "setFeeCollector(address)": {
                        "params": {
                            "_who": "The new fee collector address."
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
                    "setSweepCollector(address)": {
                        "params": {
                            "_who": "The new sweep collector address."
                        }
                    },
                    "sweep(address)": {
                        "details": "WARN: It is unlikely but possible that there is a selector overlap      with 'transferFrom'. Any integrating contracts should be checked      for that, as it may result in an unexpected call from this address.",
                        "params": {
                            "_target": "The target token to sweep."
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
                    "setFeeCollector(address)": {
                        "notice": "Allows governance to transfer the fee collector role."
                    },
                    "setGovernance(address)": {
                        "notice": "Allows governance to transfer the governance role."
                    },
                    "setPauser(address,bool)": {
                        "notice": "Allows governance to change the pauser status of an address."
                    },
                    "setSweepCollector(address)": {
                        "notice": "Allows governance to transfer the sweep collector role."
                    },
                    "sweep(address)": {
                        "notice": "Transfers the contract's balance of a target token to the fee         collector address."
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
                "keccak256": "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71",
                "urls": [
                    "bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf",
                    "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e",
                "urls": [
                    "bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24",
                    "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRead.sol": {
                "keccak256": "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045",
                "urls": [
                    "bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86",
                    "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"
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
        "id": 10866,
        "exportedSymbols": {
            "IERC20": [
                9980
            ],
            "IHyperdrive": [
                10676
            ],
            "IHyperdriveCore": [
                10865
            ],
            "IMultiTokenCore": [
                11743
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:10663:86",
        "nodes": [
            {
                "id": 10678,
                "nodeType": "PragmaDirective",
                "src": "39:23:86",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 10680,
                "nodeType": "ImportDirective",
                "src": "64:38:86",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10866,
                "sourceUnit": 9981,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10679,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9980,
                            "src": "73:6:86",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10682,
                "nodeType": "ImportDirective",
                "src": "103:48:86",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "./IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10866,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10681,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "112:11:86",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10684,
                "nodeType": "ImportDirective",
                "src": "152:56:86",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenCore.sol",
                "file": "./IMultiTokenCore.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10866,
                "sourceUnit": 11744,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10683,
                            "name": "IMultiTokenCore",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11743,
                            "src": "161:15:86",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10865,
                "nodeType": "ContractDefinition",
                "src": "210:10491:86",
                "nodes": [
                    {
                        "id": 10703,
                        "nodeType": "FunctionDefinition",
                        "src": "1050:231:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10687,
                            "nodeType": "StructuredDocumentation",
                            "src": "280:765:86",
                            "text": "@notice Opens a long position.\n @param _amount The amount of capital provided to open the long. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @param _minOutput The minimum number of bonds to receive.\n @param _minVaultSharePrice The minimum vault share price at which to\n        open the long. This allows traders to protect themselves from\n        opening a long in a checkpoint where negative interest has\n        accrued.\n @param _options The options that configure how the trade is settled.\n @return maturityTime The maturity time of the bonds.\n @return bondProceeds The amount of bonds the user received."
                        },
                        "functionSelector": "cba2e58d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "openLong",
                        "nameLocation": "1059:8:86",
                        "parameters": {
                            "id": 10697,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10689,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1085:7:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10703,
                                    "src": "1077:15:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10688,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1077:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10691,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "1110:10:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10703,
                                    "src": "1102:18:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10690,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1102:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10693,
                                    "mutability": "mutable",
                                    "name": "_minVaultSharePrice",
                                    "nameLocation": "1138:19:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10703,
                                    "src": "1130:27:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10692,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1130:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10696,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "1196:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10703,
                                    "src": "1167:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10695,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10694,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "1167:11:86",
                                                "1179:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "1167:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "1167:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1067:143:86"
                        },
                        "returnParameters": {
                            "id": 10702,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10699,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1245:12:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10703,
                                    "src": "1237:20:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10698,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1237:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10701,
                                    "mutability": "mutable",
                                    "name": "bondProceeds",
                                    "nameLocation": "1267:12:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10703,
                                    "src": "1259:20:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10700,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1259:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1236:44:86"
                        },
                        "scope": 10865,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10718,
                        "nodeType": "FunctionDefinition",
                        "src": "1952:196:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10704,
                            "nodeType": "StructuredDocumentation",
                            "src": "1287:660:86",
                            "text": "@notice Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the long.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum proceeds the trader will accept. The units\n        of this quantity are either base or vault shares, depending on\n        the value of `_options.asBase`.\n @param _options The options that configure how the trade is settled.\n @return proceeds The proceeds the user receives. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`."
                        },
                        "functionSelector": "ded06231",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "closeLong",
                        "nameLocation": "1961:9:86",
                        "parameters": {
                            "id": 10714,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10706,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "1988:13:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10718,
                                    "src": "1980:21:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10705,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1980:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10708,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "2019:11:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10718,
                                    "src": "2011:19:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10707,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2011:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10710,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "2048:10:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10718,
                                    "src": "2040:18:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10709,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2040:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10713,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "2097:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10718,
                                    "src": "2068:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10712,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10711,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "2068:11:86",
                                                "2080:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "2068:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "2068:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1970:141:86"
                        },
                        "returnParameters": {
                            "id": 10717,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10716,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "2138:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10718,
                                    "src": "2130:16:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10715,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2130:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2129:18:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10735,
                        "nodeType": "FunctionDefinition",
                        "src": "3070:232:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10719,
                            "nodeType": "StructuredDocumentation",
                            "src": "2174:891:86",
                            "text": "@notice Opens a short position.\n @param _bondAmount The amount of bonds to short.\n @param _maxDeposit The most the user expects to deposit for this trade.\n        The units of this quantity are either base or vault shares,\n        depending on the value of `_options.asBase`.\n @param _minVaultSharePrice The minimum vault share price at which to open\n        the short. This allows traders to protect themselves from opening\n        a short in a checkpoint where negative interest has accrued.\n @param _options The options that configure how the trade is settled.\n @return maturityTime The maturity time of the short.\n @return deposit The amount the user deposited for this trade. The units\n         of this quantity are either base or vault shares, depending on\n         the value of `_options.asBase`."
                        },
                        "functionSelector": "dbbe8070",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "openShort",
                        "nameLocation": "3079:9:86",
                        "parameters": {
                            "id": 10729,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10721,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "3106:11:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10735,
                                    "src": "3098:19:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10720,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3098:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10723,
                                    "mutability": "mutable",
                                    "name": "_maxDeposit",
                                    "nameLocation": "3135:11:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10735,
                                    "src": "3127:19:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10722,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3127:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10725,
                                    "mutability": "mutable",
                                    "name": "_minVaultSharePrice",
                                    "nameLocation": "3164:19:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10735,
                                    "src": "3156:27:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10724,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3156:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10728,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "3222:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10735,
                                    "src": "3193:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10727,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10726,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "3193:11:86",
                                                "3205:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "3193:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "3193:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3088:148:86"
                        },
                        "returnParameters": {
                            "id": 10734,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10731,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "3271:12:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10735,
                                    "src": "3263:20:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10730,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3263:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10733,
                                    "mutability": "mutable",
                                    "name": "deposit",
                                    "nameLocation": "3293:7:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10735,
                                    "src": "3285:15:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10732,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3285:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3262:39:86"
                        },
                        "scope": 10865,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10750,
                        "nodeType": "FunctionDefinition",
                        "src": "3969:197:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10736,
                            "nodeType": "StructuredDocumentation",
                            "src": "3308:656:86",
                            "text": "@notice Closes a short position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of shorts to close.\n @param _minOutput The minimum output of this trade. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the trade is settled.\n @return proceeds The proceeds of closing this short. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`."
                        },
                        "functionSelector": "29b23fc1",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "closeShort",
                        "nameLocation": "3978:10:86",
                        "parameters": {
                            "id": 10746,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10738,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "4006:13:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10750,
                                    "src": "3998:21:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10737,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3998:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10740,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "4037:11:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10750,
                                    "src": "4029:19:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4029:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10742,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "4066:10:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10750,
                                    "src": "4058:18:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10741,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4058:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10745,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "4115:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10750,
                                    "src": "4086:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10744,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10743,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "4086:11:86",
                                                "4098:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "4086:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "4086:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3988:141:86"
                        },
                        "returnParameters": {
                            "id": 10749,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10748,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "4156:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10750,
                                    "src": "4148:16:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10747,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4148:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4147:18:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10763,
                        "nodeType": "FunctionDefinition",
                        "src": "4649:170:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10751,
                            "nodeType": "StructuredDocumentation",
                            "src": "4189:455:86",
                            "text": "@notice Allows the first LP to initialize the market with a target APR.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the operation is settled.\n @return lpShares The initial number of LP shares created."
                        },
                        "functionSelector": "77d05ff4",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initialize",
                        "nameLocation": "4658:10:86",
                        "parameters": {
                            "id": 10759,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10753,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "4686:13:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10763,
                                    "src": "4678:21:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10752,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4678:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10755,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "4717:4:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10763,
                                    "src": "4709:12:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10754,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4709:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10758,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "4760:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10763,
                                    "src": "4731:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10757,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10756,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "4731:11:86",
                                                "4743:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "4731:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "4731:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4668:106:86"
                        },
                        "returnParameters": {
                            "id": 10762,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10761,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "4809:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10763,
                                    "src": "4801:16:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10760,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4801:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4800:18:86"
                        },
                        "scope": 10865,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10780,
                        "nodeType": "FunctionDefinition",
                        "src": "5832:234:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10764,
                            "nodeType": "StructuredDocumentation",
                            "src": "4825:1002:86",
                            "text": "@notice Allows LPs to supply liquidity for LP shares.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _minLpSharePrice The minimum LP share price the LP is willing\n        to accept for their shares. LPs incur negative slippage when\n        adding liquidity if there is a net curve position in the market,\n        so this allows LPs to protect themselves from high levels of\n        slippage. The units of this quantity are either base or vault\n        shares, depending on the value of `_options.asBase`.\n @param _minApr The minimum APR at which the LP is willing to supply.\n @param _maxApr The maximum APR at which the LP is willing to supply.\n @param _options The options that configure how the operation is settled.\n @return lpShares The LP shares received by the LP."
                        },
                        "functionSelector": "4c2ac1d9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "addLiquidity",
                        "nameLocation": "5841:12:86",
                        "parameters": {
                            "id": 10776,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10766,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "5871:13:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10780,
                                    "src": "5863:21:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10765,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5863:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10768,
                                    "mutability": "mutable",
                                    "name": "_minLpSharePrice",
                                    "nameLocation": "5902:16:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10780,
                                    "src": "5894:24:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10767,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5894:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10770,
                                    "mutability": "mutable",
                                    "name": "_minApr",
                                    "nameLocation": "5936:7:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10780,
                                    "src": "5928:15:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10769,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5928:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10772,
                                    "mutability": "mutable",
                                    "name": "_maxApr",
                                    "nameLocation": "5961:7:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10780,
                                    "src": "5953:15:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10771,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5953:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10775,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "6007:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10780,
                                    "src": "5978:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10774,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10773,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "5978:11:86",
                                                "5990:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "5978:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "5978:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5853:168:86"
                        },
                        "returnParameters": {
                            "id": 10779,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10778,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "6056:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10780,
                                    "src": "6048:16:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10777,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6048:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6047:18:86"
                        },
                        "scope": 10865,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10795,
                        "nodeType": "FunctionDefinition",
                        "src": "7139:203:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10781,
                            "nodeType": "StructuredDocumentation",
                            "src": "6072:1062:86",
                            "text": "@notice Allows an LP to burn shares and withdraw from the pool.\n @param _lpShares The LP shares to burn.\n @param _minOutputPerShare The minimum amount the LP expects to receive\n        for each withdrawal share that is burned. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP removing liquidity receives. The\n         units of this quantity are either base or vault shares,\n         depending on the value of `_options.asBase`.\n @return withdrawalShares The base that the LP receives buys out some of\n         their LP shares, but it may not be sufficient to fully buy the\n         LP out. In this case, the LP receives withdrawal shares equal in\n         value to the present value they are owed. As idle capital\n         becomes available, the pool will buy back these shares."
                        },
                        "functionSelector": "cbc13434",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "removeLiquidity",
                        "nameLocation": "7148:15:86",
                        "parameters": {
                            "id": 10789,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10783,
                                    "mutability": "mutable",
                                    "name": "_lpShares",
                                    "nameLocation": "7181:9:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10795,
                                    "src": "7173:17:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10782,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7173:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10785,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "7208:18:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10795,
                                    "src": "7200:26:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10784,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7200:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10788,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "7265:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10795,
                                    "src": "7236:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10787,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10786,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "7236:11:86",
                                                "7248:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "7236:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "7236:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7163:116:86"
                        },
                        "returnParameters": {
                            "id": 10794,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10791,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "7306:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10795,
                                    "src": "7298:16:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10790,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7298:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10793,
                                    "mutability": "mutable",
                                    "name": "withdrawalShares",
                                    "nameLocation": "7324:16:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10795,
                                    "src": "7316:24:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10792,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7316:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7297:44:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10810,
                        "nodeType": "FunctionDefinition",
                        "src": "8358:226:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10796,
                            "nodeType": "StructuredDocumentation",
                            "src": "7348:1005:86",
                            "text": "@notice Redeems withdrawal shares by giving the LP a pro-rata amount of\n         the withdrawal pool's proceeds. This function redeems the\n         maximum amount of the specified withdrawal shares given the\n         amount of withdrawal shares ready to withdraw.\n @param _withdrawalShares The withdrawal shares to redeem.\n @param _minOutputPerShare The minimum amount the LP expects to\n        receive for each withdrawal share that is burned. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP received. The units of this quantity\n         are either base or vault shares, depending on the value of\n         `_options.asBase`.\n @return withdrawalSharesRedeemed The amount of withdrawal shares that\n         were redeemed."
                        },
                        "functionSelector": "074a6de9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "redeemWithdrawalShares",
                        "nameLocation": "8367:22:86",
                        "parameters": {
                            "id": 10804,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10798,
                                    "mutability": "mutable",
                                    "name": "_withdrawalShares",
                                    "nameLocation": "8407:17:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10810,
                                    "src": "8399:25:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10797,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8399:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10800,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "8442:18:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10810,
                                    "src": "8434:26:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10799,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8434:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10803,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "8499:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10810,
                                    "src": "8470:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10802,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10801,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "8470:11:86",
                                                "8482:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "8470:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "8470:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8389:124:86"
                        },
                        "returnParameters": {
                            "id": 10809,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10806,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "8540:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10810,
                                    "src": "8532:16:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10805,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8532:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10808,
                                    "mutability": "mutable",
                                    "name": "withdrawalSharesRedeemed",
                                    "nameLocation": "8558:24:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10810,
                                    "src": "8550:32:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10807,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8550:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8531:52:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10816,
                        "nodeType": "FunctionDefinition",
                        "src": "8766:54:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10811,
                            "nodeType": "StructuredDocumentation",
                            "src": "8615:146:86",
                            "text": "@notice Attempts to mint a checkpoint with the specified checkpoint time.\n @param _checkpointTime The time of the checkpoint to create."
                        },
                        "functionSelector": "ed64bab2",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "checkpoint",
                        "nameLocation": "8775:10:86",
                        "parameters": {
                            "id": 10814,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10813,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "8794:15:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10816,
                                    "src": "8786:23:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10812,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8786:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8785:25:86"
                        },
                        "returnParameters": {
                            "id": 10815,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8819:0:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10825,
                        "nodeType": "FunctionDefinition",
                        "src": "9195:119:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10817,
                            "nodeType": "StructuredDocumentation",
                            "src": "8845:345:86",
                            "text": "@notice This function collects the governance fees accrued by the pool.\n @param _options The options that configure how the fees are settled.\n @return proceeds The governance fees collected. The units of this\n         quantity are either base or vault shares, depending on the value\n         of `_options.asBase`."
                        },
                        "functionSelector": "3e691db9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "collectGovernanceFee",
                        "nameLocation": "9204:20:86",
                        "parameters": {
                            "id": 10821,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10820,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "9263:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10825,
                                    "src": "9234:37:86",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10819,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10818,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "9234:11:86",
                                                "9246:7:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "9234:19:86"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "9234:19:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9224:53:86"
                        },
                        "returnParameters": {
                            "id": 10824,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10823,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "9304:8:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10825,
                                    "src": "9296:16:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10822,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9296:7:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9295:18:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10831,
                        "nodeType": "FunctionDefinition",
                        "src": "9466:38:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10826,
                            "nodeType": "StructuredDocumentation",
                            "src": "9320:141:86",
                            "text": "@notice Allows an authorized address to pause this contract.\n @param _status True to pause all deposits and false to unpause them."
                        },
                        "functionSelector": "02329a29",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "pause",
                        "nameLocation": "9475:5:86",
                        "parameters": {
                            "id": 10829,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10828,
                                    "mutability": "mutable",
                                    "name": "_status",
                                    "nameLocation": "9486:7:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10831,
                                    "src": "9481:12:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10827,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9481:4:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9480:14:86"
                        },
                        "returnParameters": {
                            "id": 10830,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9503:0:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10837,
                        "nodeType": "FunctionDefinition",
                        "src": "9631:48:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10832,
                            "nodeType": "StructuredDocumentation",
                            "src": "9510:116:86",
                            "text": "@notice Allows governance to transfer the fee collector role.\n @param _who The new fee collector address."
                        },
                        "functionSelector": "a42dce80",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFeeCollector",
                        "nameLocation": "9640:15:86",
                        "parameters": {
                            "id": 10835,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10834,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "9664:4:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10837,
                                    "src": "9656:12:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10833,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9656:7:86",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9655:14:86"
                        },
                        "returnParameters": {
                            "id": 10836,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9678:0:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10843,
                        "nodeType": "FunctionDefinition",
                        "src": "9810:50:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10838,
                            "nodeType": "StructuredDocumentation",
                            "src": "9685:120:86",
                            "text": "@notice Allows governance to transfer the sweep collector role.\n @param _who The new sweep collector address."
                        },
                        "functionSelector": "e4af29d1",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setSweepCollector",
                        "nameLocation": "9819:17:86",
                        "parameters": {
                            "id": 10841,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10840,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "9845:4:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10843,
                                    "src": "9837:12:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10839,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9837:7:86",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9836:14:86"
                        },
                        "returnParameters": {
                            "id": 10842,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9859:0:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10849,
                        "nodeType": "FunctionDefinition",
                        "src": "9981:46:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10844,
                            "nodeType": "StructuredDocumentation",
                            "src": "9866:110:86",
                            "text": "@notice Allows governance to transfer the governance role.\n @param _who The new governance address."
                        },
                        "functionSelector": "ab033ea9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setGovernance",
                        "nameLocation": "9990:13:86",
                        "parameters": {
                            "id": 10847,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10846,
                                    "mutability": "mutable",
                                    "name": "_who",
                                    "nameLocation": "10012:4:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10849,
                                    "src": "10004:12:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10845,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10004:7:86",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10003:14:86"
                        },
                        "returnParameters": {
                            "id": 10848,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10026:0:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10857,
                        "nodeType": "FunctionDefinition",
                        "src": "10197:54:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10850,
                            "nodeType": "StructuredDocumentation",
                            "src": "10033:159:86",
                            "text": "@notice Allows governance to change the pauser status of an address.\n @param who The address to change.\n @param status The new pauser status."
                        },
                        "functionSelector": "7180c8ca",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setPauser",
                        "nameLocation": "10206:9:86",
                        "parameters": {
                            "id": 10855,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10852,
                                    "mutability": "mutable",
                                    "name": "who",
                                    "nameLocation": "10224:3:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10857,
                                    "src": "10216:11:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10851,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10216:7:86",
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
                                    "id": 10854,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "10234:6:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10857,
                                    "src": "10229:11:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10853,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10229:4:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10215:26:86"
                        },
                        "returnParameters": {
                            "id": 10856,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10250:0:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10864,
                        "nodeType": "FunctionDefinition",
                        "src": "10659:40:86",
                        "nodes": [],
                        "documentation": {
                            "id": 10858,
                            "nodeType": "StructuredDocumentation",
                            "src": "10257:397:86",
                            "text": "@notice Transfers the contract's balance of a target token to the fee\n         collector address.\n @dev WARN: It is unlikely but possible that there is a selector overlap\n      with 'transferFrom'. Any integrating contracts should be checked\n      for that, as it may result in an unexpected call from this address.\n @param _target The target token to sweep."
                        },
                        "functionSelector": "01681a62",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sweep",
                        "nameLocation": "10668:5:86",
                        "parameters": {
                            "id": 10862,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10861,
                                    "mutability": "mutable",
                                    "name": "_target",
                                    "nameLocation": "10681:7:86",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10864,
                                    "src": "10674:14:86",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$9980",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 10860,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10859,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "10674:6:86"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 9980,
                                            "src": "10674:6:86"
                                        },
                                        "referencedDeclaration": 9980,
                                        "src": "10674:6:86",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10673:16:86"
                        },
                        "returnParameters": {
                            "id": 10863,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10698:0:86"
                        },
                        "scope": 10865,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 10685,
                            "name": "IMultiTokenCore",
                            "nameLocations": [
                                "239:15:86"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11743,
                            "src": "239:15:86"
                        },
                        "id": 10686,
                        "nodeType": "InheritanceSpecifier",
                        "src": "239:15:86"
                    }
                ],
                "canonicalName": "IHyperdriveCore",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    10865,
                    11743
                ],
                "name": "IHyperdriveCore",
                "nameLocation": "220:15:86",
                "scope": 10866,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 86
};
