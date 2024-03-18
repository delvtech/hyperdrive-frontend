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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":\"IHyperdriveEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]}},\"version\":1}",
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
        "id": 11552,
        "exportedSymbols": {
            "IHyperdriveEvents": [
                11551
            ],
            "IMultiTokenEvents": [
                12117
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3746:91",
        "nodes": [
            {
                "id": 11352,
                "nodeType": "PragmaDirective",
                "src": "39:23:91",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11354,
                "nodeType": "ImportDirective",
                "src": "64:60:91",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenEvents.sol",
                "file": "./IMultiTokenEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11552,
                "sourceUnit": 12118,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11353,
                            "name": "IMultiTokenEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12117,
                            "src": "73:17:91",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11551,
                "nodeType": "ContractDefinition",
                "src": "126:3658:91",
                "nodes": [
                    {
                        "id": 11371,
                        "nodeType": "EventDefinition",
                        "src": "246:187:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11357,
                            "nodeType": "StructuredDocumentation",
                            "src": "181:60:91",
                            "text": "@notice Emitted when the Hyperdrive pool is initialized."
                        },
                        "eventSelector": "dfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952",
                        "name": "Initialize",
                        "nameLocation": "252:10:91",
                        "parameters": {
                            "id": 11370,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11359,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "288:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11371,
                                    "src": "272:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11358,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "272:7:91",
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
                                    "id": 11361,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "314:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11371,
                                    "src": "306:16:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11360,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "306:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11363,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "340:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11371,
                                    "src": "332:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11362,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "332:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11365,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "368:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11371,
                                    "src": "360:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11364,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "360:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11367,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "399:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11371,
                                    "src": "394:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11366,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "394:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11369,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "423:3:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11371,
                                    "src": "415:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11368,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "415:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "262:170:91"
                        }
                    },
                    {
                        "id": 11386,
                        "nodeType": "EventDefinition",
                        "src": "513:198:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11372,
                            "nodeType": "StructuredDocumentation",
                            "src": "439:69:91",
                            "text": "@notice Emitted when an LP adds liquidity to the Hyperdrive pool."
                        },
                        "eventSelector": "a59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a86",
                        "name": "AddLiquidity",
                        "nameLocation": "519:12:91",
                        "parameters": {
                            "id": 11385,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11374,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "557:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11386,
                                    "src": "541:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11373,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "541:7:91",
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
                                    "id": 11376,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "583:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11386,
                                    "src": "575:16:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11375,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "575:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11378,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "609:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11386,
                                    "src": "601:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11377,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "601:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11380,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "637:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11386,
                                    "src": "629:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11379,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "629:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11382,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "668:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11386,
                                    "src": "663:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11381,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "663:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11384,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "692:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11386,
                                    "src": "684:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11383,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "684:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "531:179:91"
                        }
                    },
                    {
                        "id": 11405,
                        "nodeType": "EventDefinition",
                        "src": "796:277:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11387,
                            "nodeType": "StructuredDocumentation",
                            "src": "717:74:91",
                            "text": "@notice Emitted when an LP removes liquidity from the Hyperdrive pool."
                        },
                        "eventSelector": "56e07298e87dce53d3298b9775b947b87b39b2dde51df86371f0540885da83c9",
                        "name": "RemoveLiquidity",
                        "nameLocation": "802:15:91",
                        "parameters": {
                            "id": 11404,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11389,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "843:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "827:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11388,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "827:7:91",
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
                                    "id": 11391,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "877:11:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "861:27:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11390,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "861:7:91",
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
                                    "id": 11393,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "906:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "898:16:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11392,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "898:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11395,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "932:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "924:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11394,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "924:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11397,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "960:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "952:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11396,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "952:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11399,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "991:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "986:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11398,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "986:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11401,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "1015:21:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "1007:29:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11400,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1007:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11403,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "1054:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11405,
                                    "src": "1046:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11402,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1046:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "817:255:91"
                        }
                    },
                    {
                        "id": 11420,
                        "nodeType": "EventDefinition",
                        "src": "1141:228:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11406,
                            "nodeType": "StructuredDocumentation",
                            "src": "1079:57:91",
                            "text": "@notice Emitted when an LP redeems withdrawal shares."
                        },
                        "eventSelector": "4ce1e73a001c994d4d884cd1e382579f9c1e81eccf26e70ece8caa1b60a8c2cf",
                        "name": "RedeemWithdrawalShares",
                        "nameLocation": "1147:22:91",
                        "parameters": {
                            "id": 11419,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11408,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "1195:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11420,
                                    "src": "1179:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11407,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1179:7:91",
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
                                    "id": 11410,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "1229:11:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11420,
                                    "src": "1213:27:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11409,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1213:7:91",
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
                                    "id": 11412,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "1258:21:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11420,
                                    "src": "1250:29:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11411,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1250:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11414,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1297:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11420,
                                    "src": "1289:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11413,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1289:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11416,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1325:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11420,
                                    "src": "1317:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11415,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1317:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11418,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1356:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11420,
                                    "src": "1351:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11417,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1351:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1169:199:91"
                        }
                    },
                    {
                        "id": 11437,
                        "nodeType": "EventDefinition",
                        "src": "1431:227:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11421,
                            "nodeType": "StructuredDocumentation",
                            "src": "1375:51:91",
                            "text": "@notice Emitted when a long position is opened."
                        },
                        "eventSelector": "88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c",
                        "name": "OpenLong",
                        "nameLocation": "1437:8:91",
                        "parameters": {
                            "id": 11436,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11423,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1471:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11437,
                                    "src": "1455:22:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11422,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1455:7:91",
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
                                    "id": 11425,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1503:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11437,
                                    "src": "1487:23:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11424,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1487:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11427,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1528:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11437,
                                    "src": "1520:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11426,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1520:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11429,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1558:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11437,
                                    "src": "1550:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11428,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1550:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11431,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1586:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11437,
                                    "src": "1578:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11430,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1578:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11433,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1617:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11437,
                                    "src": "1612:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11432,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11435,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1641:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11437,
                                    "src": "1633:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11434,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1633:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1445:212:91"
                        }
                    },
                    {
                        "id": 11456,
                        "nodeType": "EventDefinition",
                        "src": "1721:258:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11438,
                            "nodeType": "StructuredDocumentation",
                            "src": "1664:52:91",
                            "text": "@notice Emitted when a short position is opened."
                        },
                        "eventSelector": "b354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b",
                        "name": "OpenShort",
                        "nameLocation": "1727:9:91",
                        "parameters": {
                            "id": 11455,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11440,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1762:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1746:22:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11439,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1746:7:91",
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
                                    "id": 11442,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1794:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1778:23:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11441,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1778:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11444,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1819:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1811:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11443,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1811:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11446,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1849:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1841:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11445,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1841:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11448,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1877:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1869:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11447,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1869:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11450,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1908:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1903:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11449,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1903:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11452,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseProceeds",
                                    "nameLocation": "1932:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1924:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11451,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1924:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11454,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1962:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "1954:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11453,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1954:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1736:242:91"
                        }
                    },
                    {
                        "id": 11475,
                        "nodeType": "EventDefinition",
                        "src": "2041:265:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11457,
                            "nodeType": "StructuredDocumentation",
                            "src": "1985:51:91",
                            "text": "@notice Emitted when a long position is closed."
                        },
                        "eventSelector": "c0e1704f2ff88686bdc2a73d31e0dc4e054eddbdc3564af7a148229cf857b802",
                        "name": "CloseLong",
                        "nameLocation": "2047:9:91",
                        "parameters": {
                            "id": 11474,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11459,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2082:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2066:22:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11458,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2066:7:91",
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
                                    "id": 11461,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2114:11:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2098:27:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11460,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2098:7:91",
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
                                    "id": 11463,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2151:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2135:23:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11462,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2135:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11465,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2176:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2168:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11464,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2168:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11467,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2206:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2198:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11466,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2198:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11469,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2234:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2226:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11468,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2226:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11471,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2265:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2260:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11470,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2260:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11473,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2289:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11475,
                                    "src": "2281:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11472,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2281:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2056:249:91"
                        }
                    },
                    {
                        "id": 11496,
                        "nodeType": "EventDefinition",
                        "src": "2369:295:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11476,
                            "nodeType": "StructuredDocumentation",
                            "src": "2312:52:91",
                            "text": "@notice Emitted when a short position is closed."
                        },
                        "eventSelector": "cb02fec44af7356703a283b87ccec63f4ea688efc67fee9cdc1834a93260c730",
                        "name": "CloseShort",
                        "nameLocation": "2375:10:91",
                        "parameters": {
                            "id": 11495,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11478,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2411:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2395:22:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11477,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2395:7:91",
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
                                    "id": 11480,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "destination",
                                    "nameLocation": "2443:11:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2427:27:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11479,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2427:7:91",
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
                                    "id": 11482,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2480:7:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2464:23:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11481,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2464:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11484,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2505:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2497:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11483,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2497:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11486,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2535:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2527:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11485,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2527:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11488,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2563:16:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2555:24:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11487,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2555:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11490,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2594:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2589:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11489,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2589:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11492,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "basePayment",
                                    "nameLocation": "2618:11:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2610:19:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11491,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2610:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11494,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2647:10:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11496,
                                    "src": "2639:18:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11493,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2639:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2385:278:91"
                        }
                    },
                    {
                        "id": 11509,
                        "nodeType": "EventDefinition",
                        "src": "2724:193:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11497,
                            "nodeType": "StructuredDocumentation",
                            "src": "2670:49:91",
                            "text": "@notice Emitted when a checkpoint is created."
                        },
                        "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
                        "name": "CreateCheckpoint",
                        "nameLocation": "2730:16:91",
                        "parameters": {
                            "id": 11508,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11499,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "checkpointTime",
                                    "nameLocation": "2772:14:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11509,
                                    "src": "2756:30:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11498,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2756:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11501,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "2804:15:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11509,
                                    "src": "2796:23:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11500,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2796:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11503,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedShorts",
                                    "nameLocation": "2837:13:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11509,
                                    "src": "2829:21:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11502,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2829:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11505,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedLongs",
                                    "nameLocation": "2868:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11509,
                                    "src": "2860:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11504,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2860:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11507,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "2898:12:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11509,
                                    "src": "2890:20:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11506,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2890:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2746:170:91"
                        }
                    },
                    {
                        "id": 11516,
                        "nodeType": "EventDefinition",
                        "src": "2983:68:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11510,
                            "nodeType": "StructuredDocumentation",
                            "src": "2923:55:91",
                            "text": "@notice Emitted when governance fees are collected."
                        },
                        "eventSelector": "a4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47",
                        "name": "CollectGovernanceFee",
                        "nameLocation": "2989:20:91",
                        "parameters": {
                            "id": 11515,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11512,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "collector",
                                    "nameLocation": "3026:9:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11516,
                                    "src": "3010:25:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11511,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3010:7:91",
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
                                    "id": 11514,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "fees",
                                    "nameLocation": "3045:4:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11516,
                                    "src": "3037:12:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11513,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3037:7:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3009:41:91"
                        }
                    },
                    {
                        "id": 11521,
                        "nodeType": "EventDefinition",
                        "src": "3124:59:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11517,
                            "nodeType": "StructuredDocumentation",
                            "src": "3057:62:91",
                            "text": "@notice Emitted when the fee collector address is updated."
                        },
                        "eventSelector": "e5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f",
                        "name": "FeeCollectorUpdated",
                        "nameLocation": "3130:19:91",
                        "parameters": {
                            "id": 11520,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11519,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newFeeCollector",
                                    "nameLocation": "3166:15:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11521,
                                    "src": "3150:31:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11518,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3150:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3149:33:91"
                        }
                    },
                    {
                        "id": 11526,
                        "nodeType": "EventDefinition",
                        "src": "3258:63:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11522,
                            "nodeType": "StructuredDocumentation",
                            "src": "3189:64:91",
                            "text": "@notice Emitted when the sweep collector address is updated."
                        },
                        "eventSelector": "c049058b1df2dd8902739ceb78992df12fa8369c06c450b3c6787137b452fdd2",
                        "name": "SweepCollectorUpdated",
                        "nameLocation": "3264:21:91",
                        "parameters": {
                            "id": 11525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11524,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newSweepCollector",
                                    "nameLocation": "3302:17:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11526,
                                    "src": "3286:33:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11523,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3286:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3285:35:91"
                        }
                    },
                    {
                        "id": 11531,
                        "nodeType": "EventDefinition",
                        "src": "3391:55:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11527,
                            "nodeType": "StructuredDocumentation",
                            "src": "3327:59:91",
                            "text": "@notice Emitted when the governance address is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "3397:17:91",
                        "parameters": {
                            "id": 11530,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11529,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newGovernance",
                                    "nameLocation": "3431:13:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11531,
                                    "src": "3415:29:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11528,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3415:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3414:31:91"
                        }
                    },
                    {
                        "id": 11538,
                        "nodeType": "EventDefinition",
                        "src": "3502:60:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11532,
                            "nodeType": "StructuredDocumentation",
                            "src": "3452:45:91",
                            "text": "@notice Emitted when a pauser is updated."
                        },
                        "eventSelector": "902923dcd4814f6cef7005a70e01d5cf2035ab02d4523ef3b865f1d7bab885af",
                        "name": "PauserUpdated",
                        "nameLocation": "3508:13:91",
                        "parameters": {
                            "id": 11537,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11534,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newPauser",
                                    "nameLocation": "3538:9:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11538,
                                    "src": "3522:25:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11533,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3522:7:91",
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
                                    "id": 11536,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nameLocation": "3554:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11538,
                                    "src": "3549:11:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11535,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3549:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3521:40:91"
                        }
                    },
                    {
                        "id": 11543,
                        "nodeType": "EventDefinition",
                        "src": "3626:40:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11539,
                            "nodeType": "StructuredDocumentation",
                            "src": "3568:53:91",
                            "text": "@notice Emitted when the pause status is updated."
                        },
                        "eventSelector": "7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5",
                        "name": "PauseStatusUpdated",
                        "nameLocation": "3632:18:91",
                        "parameters": {
                            "id": 11542,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11541,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "isPaused",
                                    "nameLocation": "3656:8:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11543,
                                    "src": "3651:13:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11540,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3651:4:91",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3650:15:91"
                        }
                    },
                    {
                        "id": 11550,
                        "nodeType": "EventDefinition",
                        "src": "3719:63:91",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 11544,
                            "nodeType": "StructuredDocumentation",
                            "src": "3672:42:91",
                            "text": "@notice Emitted when tokens are swept."
                        },
                        "eventSelector": "951f51ee88c8e42633698bba90d1e53c0954470938036879e691c0232b47e096",
                        "name": "Sweep",
                        "nameLocation": "3725:5:91",
                        "parameters": {
                            "id": 11549,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11546,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "collector",
                                    "nameLocation": "3747:9:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11550,
                                    "src": "3731:25:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11545,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3731:7:91",
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
                                    "id": 11548,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "3774:6:91",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11550,
                                    "src": "3758:22:91",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11547,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3758:7:91",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3730:51:91"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 11355,
                            "name": "IMultiTokenEvents",
                            "nameLocations": [
                                "157:17:91"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12117,
                            "src": "157:17:91"
                        },
                        "id": 11356,
                        "nodeType": "InheritanceSpecifier",
                        "src": "157:17:91"
                    }
                ],
                "canonicalName": "IHyperdriveEvents",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    11551,
                    12117
                ],
                "name": "IHyperdriveEvents",
                "nameLocation": "136:17:91",
                "scope": 11552,
                "usedErrors": [],
                "usedEvents": [
                    11371,
                    11386,
                    11405,
                    11420,
                    11437,
                    11456,
                    11475,
                    11496,
                    11509,
                    11516,
                    11521,
                    11526,
                    11531,
                    11538,
                    11543,
                    11550,
                    12098,
                    12107,
                    12116
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 91
};
