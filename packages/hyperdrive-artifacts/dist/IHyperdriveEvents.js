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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":\"IHyperdriveEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]}},\"version\":1}",
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
                "keccak256": "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0",
                "urls": [
                    "bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c",
                    "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"
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
        "id": 11206,
        "exportedSymbols": {
            "IHyperdriveEvents": [
                11205
            ],
            "IMultiTokenEvents": [
                11777
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3746:89",
        "nodes": [
            {
                "id": 11006,
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
                "id": 11008,
                "nodeType": "ImportDirective",
                "src": "64:60:89",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenEvents.sol",
                "file": "./IMultiTokenEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11206,
                "sourceUnit": 11778,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11007,
                            "name": "IMultiTokenEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11777,
                            "src": "73:17:89",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11205,
                "nodeType": "ContractDefinition",
                "src": "126:3658:89",
                "nodes": [
                    {
                        "id": 11025,
                        "nodeType": "EventDefinition",
                        "src": "246:187:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11011,
                            "nodeType": "StructuredDocumentation",
                            "src": "181:60:89",
                            "text": "@notice Emitted when the Hyperdrive pool is initialized."
                        },
                        "eventSelector": "dfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952",
                        "name": "Initialize",
                        "nameLocation": "252:10:89",
                        "parameters": {
                            "id": 11024,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11013,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "288:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11025,
                                    "src": "272:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11012,
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
                                    "id": 11015,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "314:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11025,
                                    "src": "306:16:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11014,
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
                                    "id": 11017,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "340:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11025,
                                    "src": "332:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11016,
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
                                    "id": 11019,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "368:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11025,
                                    "src": "360:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11018,
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
                                    "id": 11021,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "399:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11025,
                                    "src": "394:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11020,
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
                                    "id": 11023,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "423:3:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11025,
                                    "src": "415:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11022,
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
                        "id": 11040,
                        "nodeType": "EventDefinition",
                        "src": "513:198:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11026,
                            "nodeType": "StructuredDocumentation",
                            "src": "439:69:89",
                            "text": "@notice Emitted when an LP adds liquidity to the Hyperdrive pool."
                        },
                        "eventSelector": "a59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a86",
                        "name": "AddLiquidity",
                        "nameLocation": "519:12:89",
                        "parameters": {
                            "id": 11039,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11028,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "557:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11040,
                                    "src": "541:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11027,
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
                                    "id": 11030,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "583:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11040,
                                    "src": "575:16:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11029,
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
                                    "id": 11032,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "609:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11040,
                                    "src": "601:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11031,
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
                                    "id": 11034,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "637:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11040,
                                    "src": "629:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11033,
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
                                    "id": 11036,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "668:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11040,
                                    "src": "663:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11035,
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
                                    "id": 11038,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "692:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11040,
                                    "src": "684:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11037,
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
                        "id": 11059,
                        "nodeType": "EventDefinition",
                        "src": "796:277:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11041,
                            "nodeType": "StructuredDocumentation",
                            "src": "717:74:89",
                            "text": "@notice Emitted when an LP removes liquidity from the Hyperdrive pool."
                        },
                        "eventSelector": "56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c9",
                        "name": "RemoveLiquidity",
                        "nameLocation": "802:15:89",
                        "parameters": {
                            "id": 11058,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11043,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "843:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "827:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11042,
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
                                    "id": 11045,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "877:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "861:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11044,
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
                                    "id": 11047,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "906:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "898:16:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11046,
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
                                    "id": 11049,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "932:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "924:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11048,
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
                                    "id": 11051,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "960:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "952:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11050,
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
                                    "id": 11053,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "991:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "986:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11052,
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
                                    "id": 11055,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "1015:21:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "1007:29:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11054,
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
                                    "id": 11057,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "1054:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11059,
                                    "src": "1046:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11056,
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
                        "id": 11074,
                        "nodeType": "EventDefinition",
                        "src": "1141:228:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11060,
                            "nodeType": "StructuredDocumentation",
                            "src": "1079:57:89",
                            "text": "@notice Emitted when an LP redeems withdrawal shares."
                        },
                        "eventSelector": "4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf",
                        "name": "RedeemWithdrawalShares",
                        "nameLocation": "1147:22:89",
                        "parameters": {
                            "id": 11073,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11062,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "1195:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11074,
                                    "src": "1179:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11061,
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
                                    "id": 11064,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "1229:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11074,
                                    "src": "1213:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11063,
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
                                    "id": 11066,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "1258:21:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11074,
                                    "src": "1250:29:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11065,
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
                                    "id": 11068,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1297:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11074,
                                    "src": "1289:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11067,
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
                                    "id": 11070,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1325:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11074,
                                    "src": "1317:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11069,
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
                                    "id": 11072,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1356:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11074,
                                    "src": "1351:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11071,
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
                        "id": 11091,
                        "nodeType": "EventDefinition",
                        "src": "1431:227:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11075,
                            "nodeType": "StructuredDocumentation",
                            "src": "1375:51:89",
                            "text": "@notice Emitted when a long position is opened."
                        },
                        "eventSelector": "88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c",
                        "name": "OpenLong",
                        "nameLocation": "1437:8:89",
                        "parameters": {
                            "id": 11090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11077,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1471:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11091,
                                    "src": "1455:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11076,
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
                                    "id": 11079,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1503:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11091,
                                    "src": "1487:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11078,
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
                                    "id": 11081,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1528:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11091,
                                    "src": "1520:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11080,
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
                                    "id": 11083,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1558:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11091,
                                    "src": "1550:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11082,
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
                                    "id": 11085,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1586:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11091,
                                    "src": "1578:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11084,
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
                                    "id": 11087,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1617:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11091,
                                    "src": "1612:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11086,
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
                                    "id": 11089,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1641:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11091,
                                    "src": "1633:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11088,
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
                        "id": 11110,
                        "nodeType": "EventDefinition",
                        "src": "1721:258:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11092,
                            "nodeType": "StructuredDocumentation",
                            "src": "1664:52:89",
                            "text": "@notice Emitted when a short position is opened."
                        },
                        "eventSelector": "b354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b",
                        "name": "OpenShort",
                        "nameLocation": "1727:9:89",
                        "parameters": {
                            "id": 11109,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11094,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1762:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1746:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11093,
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
                                    "id": 11096,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1794:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1778:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11095,
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
                                    "id": 11098,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1819:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1811:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11097,
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
                                    "id": 11100,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1849:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1841:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11099,
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
                                    "id": 11102,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1877:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1869:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11101,
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
                                    "id": 11104,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1908:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1903:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11103,
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
                                    "id": 11106,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseProceeds",
                                    "nameLocation": "1932:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1924:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11105,
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
                                    "id": 11108,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1962:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "1954:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11107,
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
                        "id": 11129,
                        "nodeType": "EventDefinition",
                        "src": "2041:265:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11111,
                            "nodeType": "StructuredDocumentation",
                            "src": "1985:51:89",
                            "text": "@notice Emitted when a long position is closed."
                        },
                        "eventSelector": "c0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b802",
                        "name": "CloseLong",
                        "nameLocation": "2047:9:89",
                        "parameters": {
                            "id": 11128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11113,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2082:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2066:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11112,
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
                                    "id": 11115,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2114:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2098:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11114,
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
                                    "id": 11117,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2151:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2135:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11116,
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
                                    "id": 11119,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2176:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2168:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11118,
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
                                    "id": 11121,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2206:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2198:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11120,
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
                                    "id": 11123,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2234:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2226:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11122,
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
                                    "id": 11125,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2265:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2260:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11124,
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
                                    "id": 11127,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2289:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11129,
                                    "src": "2281:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11126,
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
                        "id": 11150,
                        "nodeType": "EventDefinition",
                        "src": "2369:295:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11130,
                            "nodeType": "StructuredDocumentation",
                            "src": "2312:52:89",
                            "text": "@notice Emitted when a short position is closed."
                        },
                        "eventSelector": "cb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730",
                        "name": "CloseShort",
                        "nameLocation": "2375:10:89",
                        "parameters": {
                            "id": 11149,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11132,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2411:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2395:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11131,
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
                                    "id": 11134,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2443:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2427:27:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11133,
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
                                    "id": 11136,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2480:7:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2464:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11135,
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
                                    "id": 11138,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2505:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2497:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11137,
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
                                    "id": 11140,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2535:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2527:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11139,
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
                                    "id": 11142,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2563:16:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2555:24:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11141,
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
                                    "id": 11144,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2594:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2589:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11143,
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
                                    "id": 11146,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "basePayment",
                                    "nameLocation": "2618:11:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2610:19:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11145,
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
                                    "id": 11148,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2647:10:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11150,
                                    "src": "2639:18:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11147,
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
                        "id": 11163,
                        "nodeType": "EventDefinition",
                        "src": "2724:193:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11151,
                            "nodeType": "StructuredDocumentation",
                            "src": "2670:49:89",
                            "text": "@notice Emitted when a checkpoint is created."
                        },
                        "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
                        "name": "CreateCheckpoint",
                        "nameLocation": "2730:16:89",
                        "parameters": {
                            "id": 11162,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11153,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "checkpointTime",
                                    "nameLocation": "2772:14:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11163,
                                    "src": "2756:30:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11152,
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
                                    "id": 11155,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "2804:15:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11163,
                                    "src": "2796:23:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11154,
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
                                    "id": 11157,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedShorts",
                                    "nameLocation": "2837:13:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11163,
                                    "src": "2829:21:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11156,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2829:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11159,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedLongs",
                                    "nameLocation": "2868:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11163,
                                    "src": "2860:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11158,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2860:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11161,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "2898:12:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11163,
                                    "src": "2890:20:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11160,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2890:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2746:170:89"
                        }
                    },
                    {
                        "id": 11170,
                        "nodeType": "EventDefinition",
                        "src": "2983:68:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11164,
                            "nodeType": "StructuredDocumentation",
                            "src": "2923:55:89",
                            "text": "@notice Emitted when governance fees are collected."
                        },
                        "eventSelector": "a4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47",
                        "name": "CollectGovernanceFee",
                        "nameLocation": "2989:20:89",
                        "parameters": {
                            "id": 11169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11166,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "collector",
                                    "nameLocation": "3026:9:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11170,
                                    "src": "3010:25:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11165,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3010:7:89",
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
                                    "id": 11168,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "fees",
                                    "nameLocation": "3045:4:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11170,
                                    "src": "3037:12:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11167,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3037:7:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3009:41:89"
                        }
                    },
                    {
                        "id": 11175,
                        "nodeType": "EventDefinition",
                        "src": "3124:59:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11171,
                            "nodeType": "StructuredDocumentation",
                            "src": "3057:62:89",
                            "text": "@notice Emitted when the fee collector address is updated."
                        },
                        "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
                        "name": "FeeCollectorUpdated",
                        "nameLocation": "3130:19:89",
                        "parameters": {
                            "id": 11174,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11173,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newFeeCollector",
                                    "nameLocation": "3166:15:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11175,
                                    "src": "3150:31:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11172,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3150:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3149:33:89"
                        }
                    },
                    {
                        "id": 11180,
                        "nodeType": "EventDefinition",
                        "src": "3258:63:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11176,
                            "nodeType": "StructuredDocumentation",
                            "src": "3189:64:89",
                            "text": "@notice Emitted when the sweep collector address is updated."
                        },
                        "eventSelector": "c049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2",
                        "name": "SweepCollectorUpdated",
                        "nameLocation": "3264:21:89",
                        "parameters": {
                            "id": 11179,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11178,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newSweepCollector",
                                    "nameLocation": "3302:17:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11180,
                                    "src": "3286:33:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11177,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3286:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3285:35:89"
                        }
                    },
                    {
                        "id": 11185,
                        "nodeType": "EventDefinition",
                        "src": "3391:55:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11181,
                            "nodeType": "StructuredDocumentation",
                            "src": "3327:59:89",
                            "text": "@notice Emitted when the governance address is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "3397:17:89",
                        "parameters": {
                            "id": 11184,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11183,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newGovernance",
                                    "nameLocation": "3431:13:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11185,
                                    "src": "3415:29:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11182,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3415:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3414:31:89"
                        }
                    },
                    {
                        "id": 11192,
                        "nodeType": "EventDefinition",
                        "src": "3502:60:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11186,
                            "nodeType": "StructuredDocumentation",
                            "src": "3452:45:89",
                            "text": "@notice Emitted when a pauser is updated."
                        },
                        "eventSelector": "902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af",
                        "name": "PauserUpdated",
                        "nameLocation": "3508:13:89",
                        "parameters": {
                            "id": 11191,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11188,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newPauser",
                                    "nameLocation": "3538:9:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11192,
                                    "src": "3522:25:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11187,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3522:7:89",
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
                                    "id": 11190,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "3554:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11192,
                                    "src": "3549:11:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11189,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3549:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3521:40:89"
                        }
                    },
                    {
                        "id": 11197,
                        "nodeType": "EventDefinition",
                        "src": "3626:40:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11193,
                            "nodeType": "StructuredDocumentation",
                            "src": "3568:53:89",
                            "text": "@notice Emitted when the pause status is updated."
                        },
                        "eventSelector": "7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5",
                        "name": "PauseStatusUpdated",
                        "nameLocation": "3632:18:89",
                        "parameters": {
                            "id": 11196,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11195,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "isPaused",
                                    "nameLocation": "3656:8:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11197,
                                    "src": "3651:13:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11194,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3651:4:89",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3650:15:89"
                        }
                    },
                    {
                        "id": 11204,
                        "nodeType": "EventDefinition",
                        "src": "3719:63:89",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11198,
                            "nodeType": "StructuredDocumentation",
                            "src": "3672:42:89",
                            "text": "@notice Emitted when tokens are swept."
                        },
                        "eventSelector": "951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e096",
                        "name": "Sweep",
                        "nameLocation": "3725:5:89",
                        "parameters": {
                            "id": 11203,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11200,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "collector",
                                    "nameLocation": "3747:9:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11204,
                                    "src": "3731:25:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11199,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3731:7:89",
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
                                    "id": 11202,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3774:6:89",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11204,
                                    "src": "3758:22:89",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11201,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3758:7:89",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3730:51:89"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 11009,
                            "name": "IMultiTokenEvents",
                            "nameLocations": [
                                "157:17:89"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11777,
                            "src": "157:17:89"
                        },
                        "id": 11010,
                        "nodeType": "InheritanceSpecifier",
                        "src": "157:17:89"
                    }
                ],
                "canonicalName": "IHyperdriveEvents",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    11205,
                    11777
                ],
                "name": "IHyperdriveEvents",
                "nameLocation": "136:17:89",
                "scope": 11206,
                "usedErrors": [],
                "usedEvents": [
                    11025,
                    11040,
                    11059,
                    11074,
                    11091,
                    11110,
                    11129,
                    11150,
                    11163,
                    11170,
                    11175,
                    11180,
                    11185,
                    11192,
                    11197,
                    11204,
                    11758,
                    11767,
                    11776
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 89
};
