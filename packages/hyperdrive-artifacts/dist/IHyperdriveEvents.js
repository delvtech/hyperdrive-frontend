export const IHyperdriveEvents = {
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidity",
            "type": "event"
        },
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
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "basePayment",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "CloseShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fees",
                    "type": "uint256"
                }
            ],
            "name": "CollectGovernanceFee",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "checkpointTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "checkpointVaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultSharePrice",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedShorts",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturedLongs",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "CreateCheckpoint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newFeeCollector",
                    "type": "address"
                }
            ],
            "name": "FeeCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newGovernance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "apr",
                    "type": "uint256"
                }
            ],
            "name": "Initialize",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenLong",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "trader",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "assetId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "maturityTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseProceeds",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "bondAmount",
                    "type": "uint256"
                }
            ],
            "name": "OpenShort",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isPaused",
                    "type": "bool"
                }
            ],
            "name": "PauseStatusUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newPauser",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "status",
                    "type": "bool"
                }
            ],
            "name": "PauserUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                }
            ],
            "name": "RedeemWithdrawalShares",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "provider",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "destination",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "vaultShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "asBase",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "withdrawalShareAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "lpSharePrice",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidity",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "Sweep",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newSweepCollector",
                    "type": "address"
                }
            ],
            "name": "SweepCollectorUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
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
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "TransferSingle",
            "type": "event"
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
    "methodIdentifiers": {},
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":\"IHyperdriveEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]}},\"version\":1}",
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
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "AddLiquidity",
                    "anonymous": false
                },
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
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "basePayment",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CloseShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "fees",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CollectGovernanceFee",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "checkpointTime",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "checkpointVaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultSharePrice",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedShorts",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturedLongs",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "CreateCheckpoint",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newFeeCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "FeeCollectorUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newGovernance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "apr",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialize",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenLong",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "trader",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "assetId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "maturityTime",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseProceeds",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "bondAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "OpenShort",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "bool",
                            "name": "isPaused",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauseStatusUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newPauser",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "PauserUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RedeemWithdrawalShares",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "provider",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "destination",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "baseAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "vaultShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "bool",
                            "name": "asBase",
                            "type": "bool",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "withdrawalShareAmount",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "lpSharePrice",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "RemoveLiquidity",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "collector",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "Sweep",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newSweepCollector",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SweepCollectorUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
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
                            "name": "id",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "TransferSingle",
                    "anonymous": false
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
                "contracts/src/interfaces/IHyperdriveEvents.sol": "IHyperdriveEvents"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
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
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
        "id": 11038,
        "exportedSymbols": {
            "IHyperdriveEvents": [
                11037
            ],
            "IMultiTokenEvents": [
                11609
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3789:89",
        "nodes": [
            {
                "id": 10836,
                "nodeType": "PragmaDirective",
                "src": "39:23:89",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 10838,
                "nodeType": "ImportDirective",
                "src": "64:60:89",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenEvents.sol",
                "file": "./IMultiTokenEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11038,
                "sourceUnit": 11610,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10837,
                            "name": "IMultiTokenEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11609,
                            "src": "73:17:89",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11037,
                "nodeType": "ContractDefinition",
                "src": "126:3701:89",
                "nodes": [
                    {
                        "id": 10855,
                        "nodeType": "EventDefinition",
                        "src": "246:187:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10841,
                            "nodeType": "StructuredDocumentation",
                            "src": "181:60:89",
                            "text": "@notice Emitted when the Hyperdrive pool is initialized."
                        },
                        "eventSelector": "dfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952",
                        "name": "Initialize",
                        "nameLocation": "252:10:89",
                        "parameters": {
                            "id": 10854,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10843,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "288:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10855,
                                    "src": "272:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10842,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "272:7:89",
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
                                    "id": 10845,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "314:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10855,
                                    "src": "306:16:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10844,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "306:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10847,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "340:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10855,
                                    "src": "332:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10846,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "332:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10849,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "368:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10855,
                                    "src": "360:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10848,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "360:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10851,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "399:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10855,
                                    "src": "394:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10850,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "394:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10853,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "423:3:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10855,
                                    "src": "415:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10852,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "415:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "262:170:89"
                        }
                    },
                    {
                        "id": 10870,
                        "nodeType": "EventDefinition",
                        "src": "513:198:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10856,
                            "nodeType": "StructuredDocumentation",
                            "src": "439:69:89",
                            "text": "@notice Emitted when an LP adds liquidity to the Hyperdrive pool."
                        },
                        "eventSelector": "a59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a86",
                        "name": "AddLiquidity",
                        "nameLocation": "519:12:89",
                        "parameters": {
                            "id": 10869,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10858,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "557:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10870,
                                    "src": "541:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10857,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "541:7:89",
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
                                    "id": 10860,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "583:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10870,
                                    "src": "575:16:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10859,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "575:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10862,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "609:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10870,
                                    "src": "601:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10861,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "601:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10864,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "637:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10870,
                                    "src": "629:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10863,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "629:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10866,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "668:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10870,
                                    "src": "663:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10865,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "663:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10868,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "692:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10870,
                                    "src": "684:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10867,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "684:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "531:179:89"
                        }
                    },
                    {
                        "id": 10889,
                        "nodeType": "EventDefinition",
                        "src": "796:277:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10871,
                            "nodeType": "StructuredDocumentation",
                            "src": "717:74:89",
                            "text": "@notice Emitted when an LP removes liquidity from the Hyperdrive pool."
                        },
                        "eventSelector": "56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c9",
                        "name": "RemoveLiquidity",
                        "nameLocation": "802:15:89",
                        "parameters": {
                            "id": 10888,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10873,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "843:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "827:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10872,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "827:7:89",
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
                                    "id": 10875,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "877:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "861:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10874,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "861:7:89",
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
                                    "id": 10877,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "906:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "898:16:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10876,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "898:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10879,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "932:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "924:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10878,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "924:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10881,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "960:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "952:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10880,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "952:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10883,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "991:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "986:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10882,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "986:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10885,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "1015:21:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "1007:29:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10884,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1007:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10887,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "1054:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10889,
                                    "src": "1046:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10886,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1046:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "817:255:89"
                        }
                    },
                    {
                        "id": 10904,
                        "nodeType": "EventDefinition",
                        "src": "1141:228:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10890,
                            "nodeType": "StructuredDocumentation",
                            "src": "1079:57:89",
                            "text": "@notice Emitted when an LP redeems withdrawal shares."
                        },
                        "eventSelector": "4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf",
                        "name": "RedeemWithdrawalShares",
                        "nameLocation": "1147:22:89",
                        "parameters": {
                            "id": 10903,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10892,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "1195:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10904,
                                    "src": "1179:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10891,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1179:7:89",
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
                                    "id": 10894,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "1229:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10904,
                                    "src": "1213:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10893,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1213:7:89",
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
                                    "id": 10896,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "1258:21:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10904,
                                    "src": "1250:29:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10895,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1250:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10898,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1297:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10904,
                                    "src": "1289:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10897,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1289:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10900,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1325:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10904,
                                    "src": "1317:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10899,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1317:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10902,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1356:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10904,
                                    "src": "1351:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10901,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1351:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1169:199:89"
                        }
                    },
                    {
                        "id": 10921,
                        "nodeType": "EventDefinition",
                        "src": "1431:227:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10905,
                            "nodeType": "StructuredDocumentation",
                            "src": "1375:51:89",
                            "text": "@notice Emitted when a long position is opened."
                        },
                        "eventSelector": "88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c",
                        "name": "OpenLong",
                        "nameLocation": "1437:8:89",
                        "parameters": {
                            "id": 10920,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10907,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1471:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10921,
                                    "src": "1455:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10906,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1455:7:89",
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
                                    "id": 10909,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1503:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10921,
                                    "src": "1487:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10908,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1487:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10911,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1528:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10921,
                                    "src": "1520:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10910,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1520:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10913,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1558:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10921,
                                    "src": "1550:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10912,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1550:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10915,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1586:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10921,
                                    "src": "1578:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10914,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1578:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10917,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1617:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10921,
                                    "src": "1612:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10916,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10919,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1641:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10921,
                                    "src": "1633:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10918,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1633:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1445:212:89"
                        }
                    },
                    {
                        "id": 10940,
                        "nodeType": "EventDefinition",
                        "src": "1721:258:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10922,
                            "nodeType": "StructuredDocumentation",
                            "src": "1664:52:89",
                            "text": "@notice Emitted when a short position is opened."
                        },
                        "eventSelector": "b354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b",
                        "name": "OpenShort",
                        "nameLocation": "1727:9:89",
                        "parameters": {
                            "id": 10939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10924,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1762:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1746:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10923,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1746:7:89",
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
                                    "id": 10926,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1794:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1778:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10925,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1778:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10928,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1819:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1811:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10927,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1811:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10930,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1849:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1841:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10929,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1841:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10932,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1877:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1869:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10931,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1869:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10934,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1908:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1903:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10933,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1903:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10936,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseProceeds",
                                    "nameLocation": "1932:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1924:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10935,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1924:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10938,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1962:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10940,
                                    "src": "1954:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10937,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1954:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1736:242:89"
                        }
                    },
                    {
                        "id": 10959,
                        "nodeType": "EventDefinition",
                        "src": "2041:265:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10941,
                            "nodeType": "StructuredDocumentation",
                            "src": "1985:51:89",
                            "text": "@notice Emitted when a long position is closed."
                        },
                        "eventSelector": "c0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b802",
                        "name": "CloseLong",
                        "nameLocation": "2047:9:89",
                        "parameters": {
                            "id": 10958,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10943,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2082:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2066:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10942,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2066:7:89",
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
                                    "id": 10945,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2114:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2098:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10944,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2098:7:89",
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
                                    "id": 10947,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2151:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2135:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10946,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10949,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2176:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2168:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10948,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2168:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10951,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2206:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2198:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10950,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2198:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10953,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2234:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2226:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10952,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2226:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10955,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2265:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2260:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10954,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2260:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10957,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2289:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10959,
                                    "src": "2281:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10956,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2281:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2056:249:89"
                        }
                    },
                    {
                        "id": 10980,
                        "nodeType": "EventDefinition",
                        "src": "2369:295:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10960,
                            "nodeType": "StructuredDocumentation",
                            "src": "2312:52:89",
                            "text": "@notice Emitted when a short position is closed."
                        },
                        "eventSelector": "cb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730",
                        "name": "CloseShort",
                        "nameLocation": "2375:10:89",
                        "parameters": {
                            "id": 10979,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10962,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2411:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2395:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10961,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2395:7:89",
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
                                    "id": 10964,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2443:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2427:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10963,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2427:7:89",
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
                                    "id": 10966,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2480:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2464:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10965,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2464:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10968,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2505:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2497:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10967,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2497:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10970,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2535:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2527:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10969,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2527:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10972,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2563:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2555:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10971,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2555:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10974,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2594:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2589:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 10973,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2589:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10976,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "basePayment",
                                    "nameLocation": "2618:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2610:19:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10975,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2610:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10978,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2647:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10980,
                                    "src": "2639:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10977,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2639:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2385:278:89"
                        }
                    },
                    {
                        "id": 10995,
                        "nodeType": "EventDefinition",
                        "src": "2724:236:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10981,
                            "nodeType": "StructuredDocumentation",
                            "src": "2670:49:89",
                            "text": "@notice Emitted when a checkpoint is created."
                        },
                        "eventSelector": "ff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab7",
                        "name": "CreateCheckpoint",
                        "nameLocation": "2730:16:89",
                        "parameters": {
                            "id": 10994,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10983,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "checkpointTime",
                                    "nameLocation": "2772:14:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10995,
                                    "src": "2756:30:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10982,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2756:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10985,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "checkpointVaultSharePrice",
                                    "nameLocation": "2804:25:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10995,
                                    "src": "2796:33:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10984,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2796:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10987,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "2847:15:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10995,
                                    "src": "2839:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10986,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2839:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10989,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedShorts",
                                    "nameLocation": "2880:13:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10995,
                                    "src": "2872:21:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10988,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2872:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10991,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedLongs",
                                    "nameLocation": "2911:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10995,
                                    "src": "2903:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10990,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2903:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10993,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "2941:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10995,
                                    "src": "2933:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10992,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2933:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2746:213:89"
                        }
                    },
                    {
                        "id": 11002,
                        "nodeType": "EventDefinition",
                        "src": "3026:68:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 10996,
                            "nodeType": "StructuredDocumentation",
                            "src": "2966:55:89",
                            "text": "@notice Emitted when governance fees are collected."
                        },
                        "eventSelector": "a4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47",
                        "name": "CollectGovernanceFee",
                        "nameLocation": "3032:20:89",
                        "parameters": {
                            "id": 11001,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10998,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "collector",
                                    "nameLocation": "3069:9:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11002,
                                    "src": "3053:25:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10997,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3053:7:89",
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
                                    "id": 11000,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "fees",
                                    "nameLocation": "3088:4:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11002,
                                    "src": "3080:12:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10999,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3080:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3052:41:89"
                        }
                    },
                    {
                        "id": 11007,
                        "nodeType": "EventDefinition",
                        "src": "3167:59:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11003,
                            "nodeType": "StructuredDocumentation",
                            "src": "3100:62:89",
                            "text": "@notice Emitted when the fee collector address is updated."
                        },
                        "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
                        "name": "FeeCollectorUpdated",
                        "nameLocation": "3173:19:89",
                        "parameters": {
                            "id": 11006,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11005,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newFeeCollector",
                                    "nameLocation": "3209:15:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11007,
                                    "src": "3193:31:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11004,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3193:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3192:33:89"
                        }
                    },
                    {
                        "id": 11012,
                        "nodeType": "EventDefinition",
                        "src": "3301:63:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11008,
                            "nodeType": "StructuredDocumentation",
                            "src": "3232:64:89",
                            "text": "@notice Emitted when the sweep collector address is updated."
                        },
                        "eventSelector": "c049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2",
                        "name": "SweepCollectorUpdated",
                        "nameLocation": "3307:21:89",
                        "parameters": {
                            "id": 11011,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11010,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newSweepCollector",
                                    "nameLocation": "3345:17:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11012,
                                    "src": "3329:33:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11009,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3329:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3328:35:89"
                        }
                    },
                    {
                        "id": 11017,
                        "nodeType": "EventDefinition",
                        "src": "3434:55:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11013,
                            "nodeType": "StructuredDocumentation",
                            "src": "3370:59:89",
                            "text": "@notice Emitted when the governance address is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "3440:17:89",
                        "parameters": {
                            "id": 11016,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11015,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newGovernance",
                                    "nameLocation": "3474:13:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11017,
                                    "src": "3458:29:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11014,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3458:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3457:31:89"
                        }
                    },
                    {
                        "id": 11024,
                        "nodeType": "EventDefinition",
                        "src": "3545:60:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11018,
                            "nodeType": "StructuredDocumentation",
                            "src": "3495:45:89",
                            "text": "@notice Emitted when a pauser is updated."
                        },
                        "eventSelector": "902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af",
                        "name": "PauserUpdated",
                        "nameLocation": "3551:13:89",
                        "parameters": {
                            "id": 11023,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11020,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newPauser",
                                    "nameLocation": "3581:9:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11024,
                                    "src": "3565:25:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11019,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3565:7:89",
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
                                    "id": 11022,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "3597:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11024,
                                    "src": "3592:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11021,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3592:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3564:40:89"
                        }
                    },
                    {
                        "id": 11029,
                        "nodeType": "EventDefinition",
                        "src": "3669:40:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11025,
                            "nodeType": "StructuredDocumentation",
                            "src": "3611:53:89",
                            "text": "@notice Emitted when the pause status is updated."
                        },
                        "eventSelector": "7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5",
                        "name": "PauseStatusUpdated",
                        "nameLocation": "3675:18:89",
                        "parameters": {
                            "id": 11028,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11027,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "isPaused",
                                    "nameLocation": "3699:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11029,
                                    "src": "3694:13:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11026,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3694:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3693:15:89"
                        }
                    },
                    {
                        "id": 11036,
                        "nodeType": "EventDefinition",
                        "src": "3762:63:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11030,
                            "nodeType": "StructuredDocumentation",
                            "src": "3715:42:89",
                            "text": "@notice Emitted when tokens are swept."
                        },
                        "eventSelector": "951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e096",
                        "name": "Sweep",
                        "nameLocation": "3768:5:89",
                        "parameters": {
                            "id": 11035,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11032,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "collector",
                                    "nameLocation": "3790:9:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11036,
                                    "src": "3774:25:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11031,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3774:7:89",
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
                                    "id": 11034,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3817:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11036,
                                    "src": "3801:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11033,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3801:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3773:51:89"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 10839,
                            "name": "IMultiTokenEvents",
                            "nameLocations": [
                                "157:17:89"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11609,
                            "src": "157:17:89"
                        },
                        "id": 10840,
                        "nodeType": "InheritanceSpecifier",
                        "src": "157:17:89"
                    }
                ],
                "canonicalName": "IHyperdriveEvents",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    11037,
                    11609
                ],
                "name": "IHyperdriveEvents",
                "nameLocation": "136:17:89",
                "scope": 11038,
                "usedErrors": [],
                "usedEvents": [
                    10855,
                    10870,
                    10889,
                    10904,
                    10921,
                    10940,
                    10959,
                    10980,
                    10995,
                    11002,
                    11007,
                    11012,
                    11017,
                    11024,
                    11029,
                    11036,
                    11590,
                    11599,
                    11608
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 89
};
