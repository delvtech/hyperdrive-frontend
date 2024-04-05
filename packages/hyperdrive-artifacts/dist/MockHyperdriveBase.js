export const MockHyperdriveBase = {
    "abi": [
        {
            "inputs": [],
            "name": "ReentrancyGuardReentrantCall",
            "type": "error"
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e\",\"dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39\",\"dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad\",\"dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557\",\"dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c\",\"dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a\",\"dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9\",\"dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace\",\"dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ReentrancyGuardReentrantCall"
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
                "contracts/test/MockHyperdrive.sol": "MockHyperdriveBase"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/external/Hyperdrive.sol": {
                "keccak256": "0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8",
                "urls": [
                    "bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67",
                    "dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget0.sol": {
                "keccak256": "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92",
                "urls": [
                    "bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206",
                    "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget1.sol": {
                "keccak256": "0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da",
                "urls": [
                    "bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e",
                    "dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget2.sol": {
                "keccak256": "0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79",
                "urls": [
                    "bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39",
                    "dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget3.sol": {
                "keccak256": "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1",
                "urls": [
                    "bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a",
                    "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/external/HyperdriveTarget4.sol": {
                "keccak256": "0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa",
                "urls": [
                    "bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886",
                    "dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN"
                ],
                "license": "Apache-2.0"
            },
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
                "keccak256": "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784",
                "urls": [
                    "bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa",
                    "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"
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
            },
            "contracts/src/internal/HyperdriveAdmin.sol": {
                "keccak256": "0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95",
                "urls": [
                    "bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad",
                    "dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb",
                "urls": [
                    "bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6",
                    "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveCheckpoint.sol": {
                "keccak256": "0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588",
                "urls": [
                    "bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557",
                    "dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976",
                "urls": [
                    "bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c",
                    "dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832",
                "urls": [
                    "bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7",
                    "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveShort.sol": {
                "keccak256": "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5",
                "urls": [
                    "bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006",
                    "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4",
                "urls": [
                    "bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e",
                    "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/AssetId.sol": {
                "keccak256": "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b",
                "urls": [
                    "bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131",
                    "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Constants.sol": {
                "keccak256": "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d",
                "urls": [
                    "bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418",
                    "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/Errors.sol": {
                "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
                "urls": [
                    "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
                    "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076",
                "urls": [
                    "bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd",
                    "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab",
                "urls": [
                    "bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002",
                    "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed",
                "urls": [
                    "bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a",
                    "dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148",
                "urls": [
                    "bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8",
                    "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1",
                "urls": [
                    "bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9",
                    "dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/ERC20Mintable.sol": {
                "keccak256": "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d",
                "urls": [
                    "bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df",
                    "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"
                ],
                "license": "Apache-2.0"
            },
            "contracts/test/MockHyperdrive.sol": {
                "keccak256": "0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1",
                "urls": [
                    "bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace",
                    "dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
                "urls": [
                    "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
                    "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
                "urls": [
                    "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
                    "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
                "urls": [
                    "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
                    "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
                "urls": [
                    "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
                    "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
                "urls": [
                    "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
                    "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
                "urls": [
                    "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
                    "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            },
            "lib/solmate/src/auth/Auth.sol": {
                "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
                "urls": [
                    "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
                    "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
                "urls": [
                    "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
                    "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
                ],
                "license": "AGPL-3.0-only"
            },
            "lib/solmate/src/tokens/ERC20.sol": {
                "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
                "urls": [
                    "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
                    "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
                ],
                "license": "AGPL-3.0-only"
            },
            "test/utils/HyperdriveUtils.sol": {
                "keccak256": "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04",
                "urls": [
                    "bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6",
                    "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/MockHyperdrive.sol",
        "id": 25229,
        "exportedSymbols": {
            "ERC20Mintable": [
                23479
            ],
            "ETH": [
                18174
            ],
            "FixedPointMath": [
                18968
            ],
            "Hyperdrive": [
                4427
            ],
            "HyperdriveBase": [
                13835
            ],
            "HyperdriveTarget0": [
                5242
            ],
            "HyperdriveTarget1": [
                5355
            ],
            "HyperdriveTarget2": [
                5444
            ],
            "HyperdriveTarget3": [
                5532
            ],
            "HyperdriveTarget4": [
                5611
            ],
            "HyperdriveUtils": [
                157393
            ],
            "IHyperdrive": [
                10506
            ],
            "IMockHyperdrive": [
                24275
            ],
            "MockHyperdrive": [
                25139
            ],
            "MockHyperdriveBase": [
                24810
            ],
            "MockHyperdriveTarget0": [
                25168
            ],
            "MockHyperdriveTarget1": [
                25183
            ],
            "MockHyperdriveTarget2": [
                25198
            ],
            "MockHyperdriveTarget3": [
                25213
            ],
            "MockHyperdriveTarget4": [
                25228
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:14795:135",
        "nodes": [
            {
                "id": 24205,
                "nodeType": "PragmaDirective",
                "src": "39:23:135",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 24207,
                "nodeType": "ImportDirective",
                "src": "64:67:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/Hyperdrive.sol",
                "file": "contracts/src/external/Hyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 4428,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24206,
                            "name": "Hyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4427,
                            "src": "73:10:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24209,
                "nodeType": "ImportDirective",
                "src": "132:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget0.sol",
                "file": "contracts/src/external/HyperdriveTarget0.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 5243,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24208,
                            "name": "HyperdriveTarget0",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5242,
                            "src": "141:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24211,
                "nodeType": "ImportDirective",
                "src": "214:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
                "file": "contracts/src/external/HyperdriveTarget1.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 5356,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24210,
                            "name": "HyperdriveTarget1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5355,
                            "src": "223:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24213,
                "nodeType": "ImportDirective",
                "src": "296:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget2.sol",
                "file": "contracts/src/external/HyperdriveTarget2.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 5445,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24212,
                            "name": "HyperdriveTarget2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5444,
                            "src": "305:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24215,
                "nodeType": "ImportDirective",
                "src": "378:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget3.sol",
                "file": "contracts/src/external/HyperdriveTarget3.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 5533,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24214,
                            "name": "HyperdriveTarget3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5532,
                            "src": "387:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24217,
                "nodeType": "ImportDirective",
                "src": "460:81:135",
                "nodes": [],
                "absolutePath": "contracts/src/external/HyperdriveTarget4.sol",
                "file": "contracts/src/external/HyperdriveTarget4.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 5612,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24216,
                            "name": "HyperdriveTarget4",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5611,
                            "src": "469:17:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24219,
                "nodeType": "ImportDirective",
                "src": "542:75:135",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
                "file": "contracts/src/internal/HyperdriveBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 13836,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24218,
                            "name": "HyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13835,
                            "src": "551:14:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24221,
                "nodeType": "ImportDirective",
                "src": "618:71:135",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "contracts/src/interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 10507,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24220,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10506,
                            "src": "627:11:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24223,
                "nodeType": "ImportDirective",
                "src": "690:71:135",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "contracts/src/interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 10507,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24222,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10506,
                            "src": "699:11:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24225,
                "nodeType": "ImportDirective",
                "src": "762:60:135",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/Constants.sol",
                "file": "contracts/src/libraries/Constants.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 18175,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24224,
                            "name": "ETH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18174,
                            "src": "771:3:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24227,
                "nodeType": "ImportDirective",
                "src": "823:76:135",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "contracts/src/libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 18969,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24226,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18968,
                            "src": "832:14:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24229,
                "nodeType": "ImportDirective",
                "src": "900:65:135",
                "nodes": [],
                "absolutePath": "contracts/test/ERC20Mintable.sol",
                "file": "contracts/test/ERC20Mintable.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 23480,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24228,
                            "name": "ERC20Mintable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 23479,
                            "src": "909:13:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24231,
                "nodeType": "ImportDirective",
                "src": "966:65:135",
                "nodes": [],
                "absolutePath": "test/utils/HyperdriveUtils.sol",
                "file": "test/utils/HyperdriveUtils.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 25229,
                "sourceUnit": 157394,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 24230,
                            "name": "HyperdriveUtils",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 157393,
                            "src": "975:15:135",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 24275,
                "nodeType": "ContractDefinition",
                "src": "1033:594:135",
                "nodes": [
                    {
                        "id": 24238,
                        "nodeType": "FunctionDefinition",
                        "src": "1065:51:135",
                        "nodes": [],
                        "functionSelector": "68096239",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "accrue",
                        "nameLocation": "1074:6:135",
                        "parameters": {
                            "id": 24236,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24233,
                                    "mutability": "mutable",
                                    "name": "time",
                                    "nameLocation": "1089:4:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24238,
                                    "src": "1081:12:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24232,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1081:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24235,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "1102:3:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24238,
                                    "src": "1095:10:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24234,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1095:6:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1080:26:135"
                        },
                        "returnParameters": {
                            "id": 24237,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1115:0:135"
                        },
                        "scope": 24275,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24245,
                        "nodeType": "FunctionDefinition",
                        "src": "1122:101:135",
                        "nodes": [],
                        "functionSelector": "68c2ecb8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemaining",
                        "nameLocation": "1131:22:135",
                        "parameters": {
                            "id": 24241,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24240,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "1171:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24245,
                                    "src": "1163:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24239,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1163:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1153:37:135"
                        },
                        "returnParameters": {
                            "id": 24244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24243,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24245,
                                    "src": "1214:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24242,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1214:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1213:9:135"
                        },
                        "scope": 24275,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24252,
                        "nodeType": "FunctionDefinition",
                        "src": "1229:107:135",
                        "nodes": [],
                        "functionSelector": "ca6d38f7",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemainingScaled",
                        "nameLocation": "1238:28:135",
                        "parameters": {
                            "id": 24248,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24247,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "1284:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24252,
                                    "src": "1276:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24246,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1276:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1266:37:135"
                        },
                        "returnParameters": {
                            "id": 24251,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24250,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24252,
                                    "src": "1327:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24249,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1327:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1326:9:135"
                        },
                        "scope": 24275,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24257,
                        "nodeType": "FunctionDefinition",
                        "src": "1342:60:135",
                        "nodes": [],
                        "functionSelector": "907c0f92",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "latestCheckpoint",
                        "nameLocation": "1351:16:135",
                        "parameters": {
                            "id": 24253,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1367:2:135"
                        },
                        "returnParameters": {
                            "id": 24256,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24255,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24257,
                                    "src": "1393:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24254,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1393:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1392:9:135"
                        },
                        "scope": 24275,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24262,
                        "nodeType": "FunctionDefinition",
                        "src": "1408:62:135",
                        "nodes": [],
                        "functionSelector": "ced09112",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateLiquidity",
                        "nameLocation": "1417:15:135",
                        "parameters": {
                            "id": 24260,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24259,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "1441:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24262,
                                    "src": "1433:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24258,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1433:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1432:28:135"
                        },
                        "returnParameters": {
                            "id": 24261,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1469:0:135"
                        },
                        "scope": 24275,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24269,
                        "nodeType": "FunctionDefinition",
                        "src": "1476:75:135",
                        "nodes": [],
                        "functionSelector": "8392b8c0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setReserves",
                        "nameLocation": "1485:11:135",
                        "parameters": {
                            "id": 24267,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24264,
                                    "mutability": "mutable",
                                    "name": "shareReserves",
                                    "nameLocation": "1505:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24269,
                                    "src": "1497:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24263,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1497:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24266,
                                    "mutability": "mutable",
                                    "name": "bondReserves",
                                    "nameLocation": "1528:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24269,
                                    "src": "1520:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24265,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1520:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1496:45:135"
                        },
                        "returnParameters": {
                            "id": 24268,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1550:0:135"
                        },
                        "scope": 24275,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24274,
                        "nodeType": "FunctionDefinition",
                        "src": "1557:68:135",
                        "nodes": [],
                        "functionSelector": "8e67f87e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getGovernanceFeesAccrued",
                        "nameLocation": "1566:24:135",
                        "parameters": {
                            "id": 24270,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1590:2:135"
                        },
                        "returnParameters": {
                            "id": 24273,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24272,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24274,
                                    "src": "1616:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24271,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1616:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1615:9:135"
                        },
                        "scope": 24275,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IMockHyperdrive",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    24275
                ],
                "name": "IMockHyperdrive",
                "nameLocation": "1043:15:135",
                "scope": 25229,
                "usedErrors": [],
                "usedEvents": []
            },
            {
                "id": 24810,
                "nodeType": "ContractDefinition",
                "src": "1629:7833:135",
                "nodes": [
                    {
                        "id": 24280,
                        "nodeType": "UsingForDirective",
                        "src": "1690:33:135",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 24278,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1696:14:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18968,
                            "src": "1696:14:135"
                        },
                        "typeName": {
                            "id": 24279,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1715:7:135",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 24282,
                        "nodeType": "VariableDeclaration",
                        "src": "1729:28:135",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "totalShares",
                        "nameLocation": "1746:11:135",
                        "scope": 24810,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 24281,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1729:7:135",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 24415,
                        "nodeType": "FunctionDefinition",
                        "src": "2054:1483:135",
                        "nodes": [],
                        "body": {
                            "id": 24414,
                            "nodeType": "Block",
                            "src": "2194:1343:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24296
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24296,
                                            "mutability": "mutable",
                                            "name": "assets",
                                            "nameLocation": "2261:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24414,
                                            "src": "2253:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24295,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2253:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24297,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2253:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24303,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24300,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17691,
                                                    "src": "2289:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24299,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2281:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24298,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2281:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24301,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2281:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24302,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18174,
                                            "src": "2304:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2281:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24323,
                                        "nodeType": "Block",
                                        "src": "2370:69:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24321,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24313,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24296,
                                                        "src": "2384:6:135",
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
                                                                "arguments": [
                                                                    {
                                                                        "id": 24318,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "2422:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24317,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "2414:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24316,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "2414:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24319,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2414:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 24314,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17691,
                                                                "src": "2393:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24315,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2404:9:135",
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9809,
                                                            "src": "2393:20:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24320,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2393:35:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2384:44:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24322,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2384:44:135"
                                            }
                                        ]
                                    },
                                    "id": 24324,
                                    "nodeType": "IfStatement",
                                    "src": "2277:162:135",
                                    "trueBody": {
                                        "id": 24312,
                                        "nodeType": "Block",
                                        "src": "2309:55:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24310,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24304,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24296,
                                                        "src": "2323:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 24307,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "2340:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                ],
                                                                "id": 24306,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "2332:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24305,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "2332:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24308,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2332:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 24309,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2346:7:135",
                                                        "memberName": "balance",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2332:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2323:30:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24311,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2323:30:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        24326
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24326,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "2585:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24414,
                                            "src": "2580:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24325,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2580:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24328,
                                    "initialValue": {
                                        "hexValue": "74727565",
                                        "id": 24327,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2595:4:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2580:19:135"
                                },
                                {
                                    "assignments": [
                                        24330
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24330,
                                            "mutability": "mutable",
                                            "name": "refund",
                                            "nameLocation": "2617:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24414,
                                            "src": "2609:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24329,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2609:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24331,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2609:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24337,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24334,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17691,
                                                    "src": "2645:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24333,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2637:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24332,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2637:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24335,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2637:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24336,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18174,
                                            "src": "2660:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2637:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24370,
                                        "nodeType": "Block",
                                        "src": "2838:160:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24368,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24357,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24326,
                                                        "src": "2852:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "id": 24360,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -15,
                                                                    "src": "2903:3:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 24361,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2907:6:135",
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "src": "2903:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24364,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "2939:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24363,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "2931:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24362,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "2931:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24365,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2931:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24366,
                                                                "name": "_baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24285,
                                                                "src": "2962:11:135",
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
                                                                "id": 24358,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17691,
                                                                "src": "2862:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24359,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2873:12:135",
                                                            "memberName": "transferFrom",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9767,
                                                            "src": "2862:23:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24367,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2862:125:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "2852:135:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24369,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2852:135:135"
                                            }
                                        ]
                                    },
                                    "id": 24371,
                                    "nodeType": "IfStatement",
                                    "src": "2633:365:135",
                                    "trueBody": {
                                        "id": 24356,
                                        "nodeType": "Block",
                                        "src": "2665:167:135",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 24341,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 24338,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "2683:3:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 24339,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2687:5:135",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "2683:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "id": 24340,
                                                        "name": "_baseAmount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24285,
                                                        "src": "2695:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2683:23:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24348,
                                                "nodeType": "IfStatement",
                                                "src": "2679:97:135",
                                                "trueBody": {
                                                    "id": 24347,
                                                    "nodeType": "Block",
                                                    "src": "2708:68:135",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 24342,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10506,
                                                                        "src": "2733:11:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10506_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 24344,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "2745:14:135",
                                                                    "memberName": "TransferFailed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10451,
                                                                    "src": "2733:26:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 24345,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2733:28:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 24346,
                                                            "nodeType": "RevertStatement",
                                                            "src": "2726:35:135"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 24354,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24349,
                                                        "name": "refund",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24330,
                                                        "src": "2789:6:135",
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
                                                        "id": 24353,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 24350,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "2798:3:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 24351,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "2802:5:135",
                                                            "memberName": "value",
                                                            "nodeType": "MemberAccess",
                                                            "src": "2798:9:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 24352,
                                                            "name": "_baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24285,
                                                            "src": "2810:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2798:23:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2789:32:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24355,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2789:32:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24373,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "3011:8:135",
                                        "subExpression": {
                                            "id": 24372,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24326,
                                            "src": "3012:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24380,
                                    "nodeType": "IfStatement",
                                    "src": "3007:74:135",
                                    "trueBody": {
                                        "id": 24379,
                                        "nodeType": "Block",
                                        "src": "3021:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24374,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10506,
                                                            "src": "3042:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10506_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24376,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3054:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10451,
                                                        "src": "3042:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24377,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3042:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24378,
                                                "nodeType": "RevertStatement",
                                                "src": "3035:35:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 24383,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 24381,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24282,
                                            "src": "3216:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 24382,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3231:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "3216:16:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24412,
                                        "nodeType": "Block",
                                        "src": "3365:166:135",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    24397
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 24397,
                                                        "mutability": "mutable",
                                                        "name": "newShares",
                                                        "nameLocation": "3387:9:135",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 24412,
                                                        "src": "3379:17:135",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 24396,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "3379:7:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 24403,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 24400,
                                                            "name": "totalShares",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24282,
                                                            "src": "3422:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 24401,
                                                            "name": "assets",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24296,
                                                            "src": "3435:6:135",
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
                                                            "id": 24398,
                                                            "name": "_baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24285,
                                                            "src": "3399:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 24399,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3411:10:135",
                                                        "memberName": "mulDivDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18230,
                                                        "src": "3399:22:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 24402,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3399:43:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "3379:63:135"
                                            },
                                            {
                                                "expression": {
                                                    "id": 24406,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24404,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24282,
                                                        "src": "3456:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 24405,
                                                        "name": "newShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24397,
                                                        "src": "3471:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3456:24:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24407,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3456:24:135"
                                            },
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "id": 24408,
                                                            "name": "newShares",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24397,
                                                            "src": "3502:9:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 24409,
                                                            "name": "refund",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24330,
                                                            "src": "3513:6:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 24410,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "3501:19:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256)"
                                                    }
                                                },
                                                "functionReturnParameters": 24294,
                                                "id": 24411,
                                                "nodeType": "Return",
                                                "src": "3494:26:135"
                                            }
                                        ]
                                    },
                                    "id": 24413,
                                    "nodeType": "IfStatement",
                                    "src": "3212:319:135",
                                    "trueBody": {
                                        "id": 24395,
                                        "nodeType": "Block",
                                        "src": "3234:125:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24389,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24384,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24282,
                                                        "src": "3248:11:135",
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
                                                                "id": 24387,
                                                                "name": "_initialVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17719,
                                                                "src": "3282:23:135",
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
                                                            "expression": {
                                                                "id": 24385,
                                                                "name": "_baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24285,
                                                                "src": "3262:11:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 24386,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3274:7:135",
                                                            "memberName": "divDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18266,
                                                            "src": "3262:19:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24388,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3262:44:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3248:58:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24390,
                                                "nodeType": "ExpressionStatement",
                                                "src": "3248:58:135"
                                            },
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "id": 24391,
                                                            "name": "totalShares",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24282,
                                                            "src": "3328:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 24392,
                                                            "name": "refund",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24330,
                                                            "src": "3341:6:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 24393,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "3327:21:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256)"
                                                    }
                                                },
                                                "functionReturnParameters": 24294,
                                                "id": 24394,
                                                "nodeType": "Return",
                                                "src": "3320:28:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12866
                        ],
                        "documentation": {
                            "id": 24283,
                            "nodeType": "StructuredDocumentation",
                            "src": "1764:285:135",
                            "text": "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @return The shares that were minted in the deposit.\n @return The amount of ETH to refund. Since this yield source isn't\n         payable, this is always zero."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_depositWithBase",
                        "nameLocation": "2063:16:135",
                        "overrides": {
                            "id": 24289,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "2158:8:135"
                        },
                        "parameters": {
                            "id": 24288,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24285,
                                    "mutability": "mutable",
                                    "name": "_baseAmount",
                                    "nameLocation": "2097:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24415,
                                    "src": "2089:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24284,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2089:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24287,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24415,
                                    "src": "2118:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24286,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2118:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2079:69:135"
                        },
                        "returnParameters": {
                            "id": 24294,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24291,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24415,
                                    "src": "2176:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24290,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2176:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24293,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24415,
                                    "src": "2185:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24292,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2185:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2175:18:135"
                        },
                        "scope": 24810,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24510,
                        "nodeType": "FunctionDefinition",
                        "src": "3655:1226:135",
                        "nodes": [],
                        "body": {
                            "id": 24509,
                            "nodeType": "Block",
                            "src": "3771:1110:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24425
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24425,
                                            "mutability": "mutable",
                                            "name": "baseAmount",
                                            "nameLocation": "3842:10:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24509,
                                            "src": "3834:18:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24424,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3834:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24429,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24427,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24418,
                                                "src": "3870:12:135",
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
                                            "id": 24426,
                                            "name": "_convertToBase",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24734
                                            ],
                                            "referencedDeclaration": 24734,
                                            "src": "3855:14:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24428,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3855:28:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3834:49:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 24432,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 24430,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24282,
                                            "src": "4019:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 24431,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4034:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4019:16:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24451,
                                        "nodeType": "Block",
                                        "src": "4125:111:135",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    24442
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 24442,
                                                        "mutability": "mutable",
                                                        "name": "newShares",
                                                        "nameLocation": "4147:9:135",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 24451,
                                                        "src": "4139:17:135",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 24441,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "4139:7:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 24446,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 24444,
                                                            "name": "baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24425,
                                                            "src": "4176:10:135",
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
                                                        "id": 24443,
                                                        "name": "_convertToShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            24780
                                                        ],
                                                        "referencedDeclaration": 24780,
                                                        "src": "4159:16:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256) view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 24445,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4159:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "4139:48:135"
                                            },
                                            {
                                                "expression": {
                                                    "id": 24449,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24447,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24282,
                                                        "src": "4201:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 24448,
                                                        "name": "newShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24442,
                                                        "src": "4216:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4201:24:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24450,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4201:24:135"
                                            }
                                        ]
                                    },
                                    "id": 24452,
                                    "nodeType": "IfStatement",
                                    "src": "4015:221:135",
                                    "trueBody": {
                                        "id": 24440,
                                        "nodeType": "Block",
                                        "src": "4037:82:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24438,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24433,
                                                        "name": "totalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24282,
                                                        "src": "4051:11:135",
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
                                                                "id": 24436,
                                                                "name": "_initialVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17719,
                                                                "src": "4084:23:135",
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
                                                            "expression": {
                                                                "id": 24434,
                                                                "name": "baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24425,
                                                                "src": "4065:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 24435,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4076:7:135",
                                                            "memberName": "divDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18266,
                                                            "src": "4065:18:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24437,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4065:43:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4051:57:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24439,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4051:57:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        24454
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24454,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "4382:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24509,
                                            "src": "4377:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24453,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4377:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24456,
                                    "initialValue": {
                                        "hexValue": "74727565",
                                        "id": 24455,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "4392:4:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4377:19:135"
                                },
                                {
                                    "assignments": [
                                        24458
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24458,
                                            "mutability": "mutable",
                                            "name": "refund",
                                            "nameLocation": "4414:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24509,
                                            "src": "4406:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24457,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4406:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24459,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4406:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24465,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24462,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17691,
                                                    "src": "4442:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24461,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "4434:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24460,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "4434:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24463,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4434:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24464,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18174,
                                            "src": "4457:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "4434:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24498,
                                        "nodeType": "Block",
                                        "src": "4633:159:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24496,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24485,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24454,
                                                        "src": "4647:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "id": 24488,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -15,
                                                                    "src": "4698:3:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 24489,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "4702:6:135",
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "src": "4698:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24492,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "4734:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24491,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4726:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24490,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4726:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24493,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4726:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24494,
                                                                "name": "baseAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24425,
                                                                "src": "4757:10:135",
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
                                                                "id": 24486,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17691,
                                                                "src": "4657:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24487,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4668:12:135",
                                                            "memberName": "transferFrom",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9767,
                                                            "src": "4657:23:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24495,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4657:124:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "4647:134:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24497,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4647:134:135"
                                            }
                                        ]
                                    },
                                    "id": 24499,
                                    "nodeType": "IfStatement",
                                    "src": "4430:362:135",
                                    "trueBody": {
                                        "id": 24484,
                                        "nodeType": "Block",
                                        "src": "4462:165:135",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 24469,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 24466,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "4480:3:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 24467,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4484:5:135",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "4480:9:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "id": 24468,
                                                        "name": "baseAmount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24425,
                                                        "src": "4492:10:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4480:22:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24476,
                                                "nodeType": "IfStatement",
                                                "src": "4476:96:135",
                                                "trueBody": {
                                                    "id": 24475,
                                                    "nodeType": "Block",
                                                    "src": "4504:68:135",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 24470,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10506,
                                                                        "src": "4529:11:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10506_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 24472,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4541:14:135",
                                                                    "memberName": "TransferFailed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10451,
                                                                    "src": "4529:26:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 24473,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4529:28:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 24474,
                                                            "nodeType": "RevertStatement",
                                                            "src": "4522:35:135"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 24482,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24477,
                                                        "name": "refund",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24458,
                                                        "src": "4585:6:135",
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
                                                        "id": 24481,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 24478,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "4594:3:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 24479,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4598:5:135",
                                                            "memberName": "value",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4594:9:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 24480,
                                                            "name": "baseAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 24425,
                                                            "src": "4606:10:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "4594:22:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4585:31:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24483,
                                                "nodeType": "ExpressionStatement",
                                                "src": "4585:31:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24501,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "4805:8:135",
                                        "subExpression": {
                                            "id": 24500,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24454,
                                            "src": "4806:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24508,
                                    "nodeType": "IfStatement",
                                    "src": "4801:74:135",
                                    "trueBody": {
                                        "id": 24507,
                                        "nodeType": "Block",
                                        "src": "4815:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24502,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10506,
                                                            "src": "4836:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10506_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24504,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4848:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10451,
                                                        "src": "4836:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24505,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4836:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24506,
                                                "nodeType": "RevertStatement",
                                                "src": "4829:35:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12874
                        ],
                        "documentation": {
                            "id": 24416,
                            "nodeType": "StructuredDocumentation",
                            "src": "3543:107:135",
                            "text": "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_depositWithShares",
                        "nameLocation": "3664:18:135",
                        "overrides": {
                            "id": 24422,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3762:8:135"
                        },
                        "parameters": {
                            "id": 24421,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24418,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "3700:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24510,
                                    "src": "3692:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24417,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3692:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24420,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24510,
                                    "src": "3722:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24419,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3722:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3682:70:135"
                        },
                        "returnParameters": {
                            "id": 24423,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3771:0:135"
                        },
                        "scope": 24810,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24587,
                        "nodeType": "FunctionDefinition",
                        "src": "5177:986:135",
                        "nodes": [],
                        "body": {
                            "id": 24586,
                            "nodeType": "Block",
                            "src": "5356:807:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24530,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24523,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24513,
                                            "src": "5478:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 24526,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 24524,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24513,
                                                    "src": "5493:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 24525,
                                                    "name": "totalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24282,
                                                    "src": "5508:11:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5493:26:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "id": 24528,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24513,
                                                "src": "5536:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 24529,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "5493:55:135",
                                            "trueExpression": {
                                                "id": 24527,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24282,
                                                "src": "5522:11:135",
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
                                        "src": "5478:70:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24531,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5478:70:135"
                                },
                                {
                                    "assignments": [
                                        24533
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24533,
                                            "mutability": "mutable",
                                            "name": "withdrawValue",
                                            "nameLocation": "5607:13:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24586,
                                            "src": "5599:21:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24532,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5599:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24537,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24535,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24513,
                                                "src": "5638:12:135",
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
                                            "id": 24534,
                                            "name": "_convertToBase",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24734
                                            ],
                                            "referencedDeclaration": 24734,
                                            "src": "5623:14:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24536,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5623:28:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5599:52:135"
                                },
                                {
                                    "expression": {
                                        "id": 24540,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24538,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24282,
                                            "src": "5740:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 24539,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24513,
                                            "src": "5755:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5740:27:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24541,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5740:27:135"
                                },
                                {
                                    "assignments": [
                                        24543
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24543,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "5782:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24586,
                                            "src": "5777:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24542,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5777:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24544,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5777:12:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24550,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24547,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17691,
                                                    "src": "5811:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24546,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "5803:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24545,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5803:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24548,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5803:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24549,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18174,
                                            "src": "5826:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5803:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24573,
                                        "nodeType": "Block",
                                        "src": "5960:83:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24571,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24565,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24543,
                                                        "src": "5974:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 24568,
                                                                "name": "_destination",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24515,
                                                                "src": "6004:12:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24569,
                                                                "name": "withdrawValue",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24533,
                                                                "src": "6018:13:135",
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
                                                                "id": 24566,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17691,
                                                                "src": "5984:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24567,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5995:8:135",
                                                            "memberName": "transfer",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9755,
                                                            "src": "5984:19:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24570,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5984:48:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "5974:58:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24572,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5974:58:135"
                                            }
                                        ]
                                    },
                                    "id": 24574,
                                    "nodeType": "IfStatement",
                                    "src": "5799:244:135",
                                    "trueBody": {
                                        "id": 24564,
                                        "nodeType": "Block",
                                        "src": "5831:123:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24562,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "components": [
                                                            {
                                                                "id": 24551,
                                                                "name": "success",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24543,
                                                                "src": "5846:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            null
                                                        ],
                                                        "id": 24552,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "TupleExpression",
                                                        "src": "5845:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$__$",
                                                            "typeString": "tuple(bool,)"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "",
                                                                "id": 24560,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5927:2:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                },
                                                                "value": ""
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                        "typeString": "literal_string \"\""
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 24555,
                                                                            "name": "_destination",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 24515,
                                                                            "src": "5867:12:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        ],
                                                                        "id": 24554,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5859:8:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                                                            "typeString": "type(address payable)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 24553,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5859:8:135",
                                                                            "stateMutability": "payable",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 24556,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5859:21:135",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address_payable",
                                                                        "typeString": "address payable"
                                                                    }
                                                                },
                                                                "id": 24557,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5881:4:135",
                                                                "memberName": "call",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5859:26:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                                }
                                                            },
                                                            "id": 24559,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                "value"
                                                            ],
                                                            "nodeType": "FunctionCallOptions",
                                                            "options": [
                                                                {
                                                                    "id": 24558,
                                                                    "name": "withdrawValue",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 24533,
                                                                    "src": "5894:13:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "src": "5859:50:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                            }
                                                        },
                                                        "id": 24561,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5859:84:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                                            "typeString": "tuple(bool,bytes memory)"
                                                        }
                                                    },
                                                    "src": "5845:98:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24563,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5845:98:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24576,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "6056:8:135",
                                        "subExpression": {
                                            "id": 24575,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24543,
                                            "src": "6057:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24583,
                                    "nodeType": "IfStatement",
                                    "src": "6052:74:135",
                                    "trueBody": {
                                        "id": 24582,
                                        "nodeType": "Block",
                                        "src": "6066:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24577,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10506,
                                                            "src": "6087:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10506_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24579,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6099:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10451,
                                                        "src": "6087:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24580,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6087:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24581,
                                                "nodeType": "RevertStatement",
                                                "src": "6080:35:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 24584,
                                        "name": "withdrawValue",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24533,
                                        "src": "6143:13:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24522,
                                    "id": 24585,
                                    "nodeType": "Return",
                                    "src": "6136:20:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12886
                        ],
                        "documentation": {
                            "id": 24511,
                            "nodeType": "StructuredDocumentation",
                            "src": "4887:285:135",
                            "text": "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @return amountWithdrawn The amount of base withdrawn."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_withdrawWithBase",
                        "nameLocation": "5186:17:135",
                        "overrides": {
                            "id": 24519,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "5313:8:135"
                        },
                        "parameters": {
                            "id": 24518,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24513,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "5221:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24587,
                                    "src": "5213:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24512,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5213:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24515,
                                    "mutability": "mutable",
                                    "name": "_destination",
                                    "nameLocation": "5251:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24587,
                                    "src": "5243:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 24514,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5243:7:135",
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
                                    "id": 24517,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24587,
                                    "src": "5273:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24516,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5273:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5203:100:135"
                        },
                        "returnParameters": {
                            "id": 24522,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24521,
                                    "mutability": "mutable",
                                    "name": "amountWithdrawn",
                                    "nameLocation": "5339:15:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24587,
                                    "src": "5331:23:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24520,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5331:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5330:25:135"
                        },
                        "scope": 24810,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24660,
                        "nodeType": "FunctionDefinition",
                        "src": "6405:923:135",
                        "nodes": [],
                        "body": {
                            "id": 24659,
                            "nodeType": "Block",
                            "src": "6552:776:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24605,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24598,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24590,
                                            "src": "6674:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 24601,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 24599,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24590,
                                                    "src": "6689:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 24600,
                                                    "name": "totalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24282,
                                                    "src": "6704:11:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6689:26:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "id": 24603,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24590,
                                                "src": "6732:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 24604,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "6689:55:135",
                                            "trueExpression": {
                                                "id": 24602,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24282,
                                                "src": "6718:11:135",
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
                                        "src": "6674:70:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24606,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6674:70:135"
                                },
                                {
                                    "assignments": [
                                        24608
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24608,
                                            "mutability": "mutable",
                                            "name": "withdrawValue",
                                            "nameLocation": "6803:13:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24659,
                                            "src": "6795:21:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24607,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6795:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24612,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 24610,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24590,
                                                "src": "6834:12:135",
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
                                            "id": 24609,
                                            "name": "_convertToBase",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24734
                                            ],
                                            "referencedDeclaration": 24734,
                                            "src": "6819:14:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24611,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6819:28:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6795:52:135"
                                },
                                {
                                    "expression": {
                                        "id": 24615,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24613,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24282,
                                            "src": "6936:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 24614,
                                            "name": "_shareAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24590,
                                            "src": "6951:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6936:27:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24616,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6936:27:135"
                                },
                                {
                                    "assignments": [
                                        24618
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24618,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "6978:7:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24659,
                                            "src": "6973:12:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 24617,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6973:4:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24619,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6973:12:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24625,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24622,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17691,
                                                    "src": "7007:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24621,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "6999:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24620,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6999:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24623,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6999:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24624,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18174,
                                            "src": "7022:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "6999:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24648,
                                        "nodeType": "Block",
                                        "src": "7156:83:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24646,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24640,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24618,
                                                        "src": "7170:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 24643,
                                                                "name": "_destination",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24592,
                                                                "src": "7200:12:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 24644,
                                                                "name": "withdrawValue",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24608,
                                                                "src": "7214:13:135",
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
                                                                "id": 24641,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17691,
                                                                "src": "7180:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24642,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7191:8:135",
                                                            "memberName": "transfer",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9755,
                                                            "src": "7180:19:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                "typeString": "function (address,uint256) external returns (bool)"
                                                            }
                                                        },
                                                        "id": 24645,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7180:48:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "7170:58:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 24647,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7170:58:135"
                                            }
                                        ]
                                    },
                                    "id": 24649,
                                    "nodeType": "IfStatement",
                                    "src": "6995:244:135",
                                    "trueBody": {
                                        "id": 24639,
                                        "nodeType": "Block",
                                        "src": "7027:123:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24637,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "components": [
                                                            {
                                                                "id": 24626,
                                                                "name": "success",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 24618,
                                                                "src": "7042:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            null
                                                        ],
                                                        "id": 24627,
                                                        "isConstant": false,
                                                        "isInlineArray": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "nodeType": "TupleExpression",
                                                        "src": "7041:11:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$__$",
                                                            "typeString": "tuple(bool,)"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "",
                                                                "id": 24635,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "7123:2:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                },
                                                                "value": ""
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                    "typeString": "literal_string \"\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                        "typeString": "literal_string \"\""
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 24630,
                                                                            "name": "_destination",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 24592,
                                                                            "src": "7063:12:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        ],
                                                                        "id": 24629,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "7055:8:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_payable_$",
                                                                            "typeString": "type(address payable)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 24628,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "7055:8:135",
                                                                            "stateMutability": "payable",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 24631,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "7055:21:135",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address_payable",
                                                                        "typeString": "address payable"
                                                                    }
                                                                },
                                                                "id": 24632,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "7077:4:135",
                                                                "memberName": "call",
                                                                "nodeType": "MemberAccess",
                                                                "src": "7055:26:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                                }
                                                            },
                                                            "id": 24634,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                "value"
                                                            ],
                                                            "nodeType": "FunctionCallOptions",
                                                            "options": [
                                                                {
                                                                    "id": 24633,
                                                                    "name": "withdrawValue",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 24608,
                                                                    "src": "7090:13:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "src": "7055:50:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                                                                "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                                                            }
                                                        },
                                                        "id": 24636,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7055:84:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                                            "typeString": "tuple(bool,bytes memory)"
                                                        }
                                                    },
                                                    "src": "7041:98:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24638,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7041:98:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 24651,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "7252:8:135",
                                        "subExpression": {
                                            "id": 24650,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24618,
                                            "src": "7253:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24658,
                                    "nodeType": "IfStatement",
                                    "src": "7248:74:135",
                                    "trueBody": {
                                        "id": 24657,
                                        "nodeType": "Block",
                                        "src": "7262:60:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24652,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10506,
                                                            "src": "7283:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10506_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24654,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7295:14:135",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10451,
                                                        "src": "7283:26:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24655,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7283:28:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24656,
                                                "nodeType": "RevertStatement",
                                                "src": "7276:35:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12896
                        ],
                        "documentation": {
                            "id": 24588,
                            "nodeType": "StructuredDocumentation",
                            "src": "6169:231:135",
                            "text": "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_withdrawWithShares",
                        "nameLocation": "6414:19:135",
                        "overrides": {
                            "id": 24596,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "6543:8:135"
                        },
                        "parameters": {
                            "id": 24595,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24590,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "6451:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24660,
                                    "src": "6443:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24589,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6443:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24592,
                                    "mutability": "mutable",
                                    "name": "_destination",
                                    "nameLocation": "6481:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24660,
                                    "src": "6473:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 24591,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6473:7:135",
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
                                    "id": 24594,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24660,
                                    "src": "6503:14:135",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 24593,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6503:5:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6433:100:135"
                        },
                        "returnParameters": {
                            "id": 24597,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6552:0:135"
                        },
                        "scope": 24810,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24683,
                        "nodeType": "FunctionDefinition",
                        "src": "7513:174:135",
                        "nodes": [],
                        "body": {
                            "id": 24682,
                            "nodeType": "Block",
                            "src": "7566:121:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 24674,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 24669,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 24666,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17691,
                                                        "src": "7588:10:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9810",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_IERC20_$9810",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    ],
                                                    "id": 24665,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "7580:7:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 24664,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "7580:7:135",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 24667,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7580:19:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "id": 24668,
                                                "name": "ETH",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18174,
                                                "src": "7603:3:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "7580:26:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 24673,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 24670,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "7610:3:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 24671,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7614:5:135",
                                                "memberName": "value",
                                                "nodeType": "MemberAccess",
                                                "src": "7610:9:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 24672,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7622:1:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "7610:13:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "7580:43:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 24681,
                                    "nodeType": "IfStatement",
                                    "src": "7576:105:135",
                                    "trueBody": {
                                        "id": 24680,
                                        "nodeType": "Block",
                                        "src": "7625:56:135",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 24675,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10506,
                                                            "src": "7646:11:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10506_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 24677,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7658:10:135",
                                                        "memberName": "NotPayable",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10425,
                                                        "src": "7646:22:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 24678,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7646:24:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24679,
                                                "nodeType": "RevertStatement",
                                                "src": "7639:31:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "baseFunctions": [
                            12900
                        ],
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkMessageValue",
                        "nameLocation": "7522:18:135",
                        "overrides": {
                            "id": 24662,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "7557:8:135"
                        },
                        "parameters": {
                            "id": 24661,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7540:2:135"
                        },
                        "returnParameters": {
                            "id": 24663,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7566:0:135"
                        },
                        "scope": 24810,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24734,
                        "nodeType": "FunctionDefinition",
                        "src": "7848:460:135",
                        "nodes": [],
                        "body": {
                            "id": 24733,
                            "nodeType": "Block",
                            "src": "7949:359:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24693
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24693,
                                            "mutability": "mutable",
                                            "name": "assets",
                                            "nameLocation": "8027:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24733,
                                            "src": "8019:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24692,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8019:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24694,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8019:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24700,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24697,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17691,
                                                    "src": "8055:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24696,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "8047:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24695,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "8047:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24698,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8047:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24699,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18174,
                                            "src": "8070:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "8047:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24720,
                                        "nodeType": "Block",
                                        "src": "8136:69:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24718,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24710,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24693,
                                                        "src": "8150:6:135",
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
                                                                "arguments": [
                                                                    {
                                                                        "id": 24715,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "8188:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24714,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "8180:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24713,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "8180:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24716,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "8180:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 24711,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17691,
                                                                "src": "8159:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24712,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8170:9:135",
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9809,
                                                            "src": "8159:20:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24717,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8159:35:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8150:44:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24719,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8150:44:135"
                                            }
                                        ]
                                    },
                                    "id": 24721,
                                    "nodeType": "IfStatement",
                                    "src": "8043:162:135",
                                    "trueBody": {
                                        "id": 24709,
                                        "nodeType": "Block",
                                        "src": "8075:55:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24707,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24701,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24693,
                                                        "src": "8089:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 24704,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "8106:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                ],
                                                                "id": 24703,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "8098:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24702,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "8098:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24705,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "8098:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 24706,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8112:7:135",
                                                        "memberName": "balance",
                                                        "nodeType": "MemberAccess",
                                                        "src": "8098:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8089:30:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24708,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8089:30:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 24724,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 24722,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24282,
                                                "src": "8234:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 24723,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8249:1:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "8234:16:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "hexValue": "30",
                                            "id": 24730,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "8300:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "id": 24731,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "8234:67:135",
                                        "trueExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24727,
                                                    "name": "assets",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24693,
                                                    "src": "8277:6:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 24728,
                                                    "name": "totalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24282,
                                                    "src": "8285:11:135",
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
                                                    "id": 24725,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24686,
                                                    "src": "8253:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24726,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "8266:10:135",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18230,
                                                "src": "8253:23:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 24729,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8253:44:135",
                                            "tryCall": false,
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
                                    "functionReturnParameters": 24691,
                                    "id": 24732,
                                    "nodeType": "Return",
                                    "src": "8215:86:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12930
                        ],
                        "documentation": {
                            "id": 24684,
                            "nodeType": "StructuredDocumentation",
                            "src": "7693:150:135",
                            "text": "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return The base amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToBase",
                        "nameLocation": "7857:14:135",
                        "overrides": {
                            "id": 24688,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "7922:8:135"
                        },
                        "parameters": {
                            "id": 24687,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24686,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "7889:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24734,
                                    "src": "7881:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24685,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7881:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7871:36:135"
                        },
                        "returnParameters": {
                            "id": 24691,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24690,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24734,
                                    "src": "7940:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24689,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7940:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7939:9:135"
                        },
                        "scope": 24810,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24780,
                        "nodeType": "FunctionDefinition",
                        "src": "8468:425:135",
                        "nodes": [],
                        "body": {
                            "id": 24779,
                            "nodeType": "Block",
                            "src": "8570:323:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        24744
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 24744,
                                            "mutability": "mutable",
                                            "name": "assets",
                                            "nameLocation": "8648:6:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24779,
                                            "src": "8640:14:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 24743,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8640:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24745,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8640:14:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 24751,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 24748,
                                                    "name": "_baseToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17691,
                                                    "src": "8676:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_contract$_IERC20_$9810",
                                                        "typeString": "contract IERC20"
                                                    }
                                                ],
                                                "id": 24747,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "8668:7:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 24746,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "8668:7:135",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 24749,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8668:19:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 24750,
                                            "name": "ETH",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18174,
                                            "src": "8691:3:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "8668:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 24771,
                                        "nodeType": "Block",
                                        "src": "8757:69:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24769,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24761,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24744,
                                                        "src": "8771:6:135",
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
                                                                "arguments": [
                                                                    {
                                                                        "id": 24766,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "8809:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                            "typeString": "contract MockHyperdriveBase"
                                                                        }
                                                                    ],
                                                                    "id": 24765,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "8801:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24764,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "8801:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24767,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "8801:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 24762,
                                                                "name": "_baseToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17691,
                                                                "src": "8780:10:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            },
                                                            "id": 24763,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8791:9:135",
                                                            "memberName": "balanceOf",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 9809,
                                                            "src": "8780:20:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                                "typeString": "function (address) view external returns (uint256)"
                                                            }
                                                        },
                                                        "id": 24768,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8780:35:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8771:44:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24770,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8771:44:135"
                                            }
                                        ]
                                    },
                                    "id": 24772,
                                    "nodeType": "IfStatement",
                                    "src": "8664:162:135",
                                    "trueBody": {
                                        "id": 24760,
                                        "nodeType": "Block",
                                        "src": "8696:55:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 24758,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 24752,
                                                        "name": "assets",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24744,
                                                        "src": "8710:6:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 24755,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "8727:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                                        "typeString": "contract MockHyperdriveBase"
                                                                    }
                                                                ],
                                                                "id": 24754,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "8719:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24753,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "8719:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24756,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "8719:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "id": 24757,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8733:7:135",
                                                        "memberName": "balance",
                                                        "nodeType": "MemberAccess",
                                                        "src": "8719:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8710:30:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 24759,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8710:30:135"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 24775,
                                                "name": "totalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24282,
                                                "src": "8866:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24776,
                                                "name": "assets",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24744,
                                                "src": "8879:6:135",
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
                                                "id": 24773,
                                                "name": "_baseAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24737,
                                                "src": "8843:11:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 24774,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "8855:10:135",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18230,
                                            "src": "8843:22:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 24777,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8843:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24742,
                                    "id": 24778,
                                    "nodeType": "Return",
                                    "src": "8836:50:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12938
                        ],
                        "documentation": {
                            "id": 24735,
                            "nodeType": "StructuredDocumentation",
                            "src": "8314:149:135",
                            "text": "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return The vault shares amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToShares",
                        "nameLocation": "8477:16:135",
                        "overrides": {
                            "id": 24739,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "8543:8:135"
                        },
                        "parameters": {
                            "id": 24738,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24737,
                                    "mutability": "mutable",
                                    "name": "_baseAmount",
                                    "nameLocation": "8511:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24780,
                                    "src": "8503:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24736,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8503:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8493:35:135"
                        },
                        "returnParameters": {
                            "id": 24742,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24741,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24780,
                                    "src": "8561:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24740,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8561:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8560:9:135"
                        },
                        "scope": 24810,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24796,
                        "nodeType": "FunctionDefinition",
                        "src": "9013:122:135",
                        "nodes": [],
                        "body": {
                            "id": 24795,
                            "nodeType": "Block",
                            "src": "9076:59:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24791,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "9122:4:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                            "typeString": "contract MockHyperdriveBase"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveBase_$24810",
                                                            "typeString": "contract MockHyperdriveBase"
                                                        }
                                                    ],
                                                    "id": 24790,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "9114:7:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 24789,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "9114:7:135",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 24792,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9114:13:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24787,
                                                "name": "_baseToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17691,
                                                "src": "9093:10:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                    "typeString": "contract IERC20"
                                                }
                                            },
                                            "id": 24788,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "9104:9:135",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 9809,
                                            "src": "9093:20:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 24793,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9093:35:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24786,
                                    "id": 24794,
                                    "nodeType": "Return",
                                    "src": "9086:42:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12944
                        ],
                        "documentation": {
                            "id": 24781,
                            "nodeType": "StructuredDocumentation",
                            "src": "8899:109:135",
                            "text": "@dev Gets the total amount of base held by the pool.\n @return baseAmount The total amount of base."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_totalBase",
                        "nameLocation": "9022:10:135",
                        "overrides": {
                            "id": 24783,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "9049:8:135"
                        },
                        "parameters": {
                            "id": 24782,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9032:2:135"
                        },
                        "returnParameters": {
                            "id": 24786,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24785,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24796,
                                    "src": "9067:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24784,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9067:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9066:9:135"
                        },
                        "scope": 24810,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 24809,
                        "nodeType": "FunctionDefinition",
                        "src": "9293:167:135",
                        "nodes": [],
                        "body": {
                            "id": 24808,
                            "nodeType": "Block",
                            "src": "9406:54:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 24804,
                                                    "name": "_totalBase",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [
                                                        24796
                                                    ],
                                                    "referencedDeclaration": 24796,
                                                    "src": "9440:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 24805,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9440:12:135",
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
                                                }
                                            ],
                                            "id": 24803,
                                            "name": "_convertToShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                24780
                                            ],
                                            "referencedDeclaration": 24780,
                                            "src": "9423:16:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 24806,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9423:30:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 24802,
                                    "id": 24807,
                                    "nodeType": "Return",
                                    "src": "9416:37:135"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12950
                        ],
                        "documentation": {
                            "id": 24797,
                            "nodeType": "StructuredDocumentation",
                            "src": "9141:147:135",
                            "text": "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_totalShares",
                        "nameLocation": "9302:12:135",
                        "overrides": {
                            "id": 24799,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "9355:8:135"
                        },
                        "parameters": {
                            "id": 24798,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9314:2:135"
                        },
                        "returnParameters": {
                            "id": 24802,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24801,
                                    "mutability": "mutable",
                                    "name": "shareAmount",
                                    "nameLocation": "9389:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24809,
                                    "src": "9381:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24800,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9381:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9380:21:135"
                        },
                        "scope": 24810,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 24276,
                            "name": "HyperdriveBase",
                            "nameLocations": [
                                "1669:14:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13835,
                            "src": "1669:14:135"
                        },
                        "id": 24277,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1669:14:135"
                    }
                ],
                "canonicalName": "MockHyperdriveBase",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    24810,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609
                ],
                "name": "MockHyperdriveBase",
                "nameLocation": "1647:18:135",
                "scope": 25229,
                "usedErrors": [
                    71510
                ],
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
            },
            {
                "id": 25139,
                "nodeType": "ContractDefinition",
                "src": "9464:4336:135",
                "nodes": [
                    {
                        "id": 24817,
                        "nodeType": "UsingForDirective",
                        "src": "9528:33:135",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 24815,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "9534:14:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18968,
                            "src": "9534:14:135"
                        },
                        "typeName": {
                            "id": 24816,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "9553:7:135",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 24867,
                        "nodeType": "FunctionDefinition",
                        "src": "9567:406:135",
                        "nodes": [],
                        "body": {
                            "id": 24866,
                            "nodeType": "Block",
                            "src": "9971:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 24823,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24820,
                                        "src": "9664:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24829,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24820,
                                                        "src": "9719:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24828,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9693:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25168_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)"
                                                    },
                                                    "typeName": {
                                                        "id": 24827,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24826,
                                                            "name": "MockHyperdriveTarget0",
                                                            "nameLocations": [
                                                                "9697:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25168,
                                                            "src": "9697:21:135"
                                                        },
                                                        "referencedDeclaration": 25168,
                                                        "src": "9697:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25168",
                                                            "typeString": "contract MockHyperdriveTarget0"
                                                        }
                                                    }
                                                },
                                                "id": 24830,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9693:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25168",
                                                    "typeString": "contract MockHyperdriveTarget0"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget0_$25168",
                                                    "typeString": "contract MockHyperdriveTarget0"
                                                }
                                            ],
                                            "id": 24825,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9685:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24824,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9685:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24831,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9685:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24837,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24820,
                                                        "src": "9776:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24836,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9750:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$25183_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)"
                                                    },
                                                    "typeName": {
                                                        "id": 24835,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24834,
                                                            "name": "MockHyperdriveTarget1",
                                                            "nameLocations": [
                                                                "9754:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25183,
                                                            "src": "9754:21:135"
                                                        },
                                                        "referencedDeclaration": 25183,
                                                        "src": "9754:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$25183",
                                                            "typeString": "contract MockHyperdriveTarget1"
                                                        }
                                                    }
                                                },
                                                "id": 24838,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9750:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$25183",
                                                    "typeString": "contract MockHyperdriveTarget1"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget1_$25183",
                                                    "typeString": "contract MockHyperdriveTarget1"
                                                }
                                            ],
                                            "id": 24833,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9742:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24832,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9742:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24839,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9742:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24845,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24820,
                                                        "src": "9833:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24844,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9807:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$25198_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)"
                                                    },
                                                    "typeName": {
                                                        "id": 24843,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24842,
                                                            "name": "MockHyperdriveTarget2",
                                                            "nameLocations": [
                                                                "9811:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25198,
                                                            "src": "9811:21:135"
                                                        },
                                                        "referencedDeclaration": 25198,
                                                        "src": "9811:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$25198",
                                                            "typeString": "contract MockHyperdriveTarget2"
                                                        }
                                                    }
                                                },
                                                "id": 24846,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9807:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$25198",
                                                    "typeString": "contract MockHyperdriveTarget2"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget2_$25198",
                                                    "typeString": "contract MockHyperdriveTarget2"
                                                }
                                            ],
                                            "id": 24841,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9799:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24840,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9799:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24847,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9799:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24853,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24820,
                                                        "src": "9890:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24852,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9864:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$25213_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)"
                                                    },
                                                    "typeName": {
                                                        "id": 24851,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24850,
                                                            "name": "MockHyperdriveTarget3",
                                                            "nameLocations": [
                                                                "9868:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25213,
                                                            "src": "9868:21:135"
                                                        },
                                                        "referencedDeclaration": 25213,
                                                        "src": "9868:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$25213",
                                                            "typeString": "contract MockHyperdriveTarget3"
                                                        }
                                                    }
                                                },
                                                "id": 24854,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9864:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$25213",
                                                    "typeString": "contract MockHyperdriveTarget3"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget3_$25213",
                                                    "typeString": "contract MockHyperdriveTarget3"
                                                }
                                            ],
                                            "id": 24849,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9856:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24848,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9856:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24855,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9856:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 24861,
                                                        "name": "_config",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24820,
                                                        "src": "9947:7:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                                        }
                                                    ],
                                                    "id": 24860,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "NewExpression",
                                                    "src": "9921:25:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$25228_$",
                                                        "typeString": "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)"
                                                    },
                                                    "typeName": {
                                                        "id": 24859,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 24858,
                                                            "name": "MockHyperdriveTarget4",
                                                            "nameLocations": [
                                                                "9925:21:135"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 25228,
                                                            "src": "9925:21:135"
                                                        },
                                                        "referencedDeclaration": 25228,
                                                        "src": "9925:21:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$25228",
                                                            "typeString": "contract MockHyperdriveTarget4"
                                                        }
                                                    }
                                                },
                                                "id": 24862,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9921:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$25228",
                                                    "typeString": "contract MockHyperdriveTarget4"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_contract$_MockHyperdriveTarget4_$25228",
                                                    "typeString": "contract MockHyperdriveTarget4"
                                                }
                                            ],
                                            "id": 24857,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9913:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 24856,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9913:7:135",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 24863,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9913:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 24864,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 24822,
                                    "name": "Hyperdrive",
                                    "nameLocations": [
                                        "9640:10:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 4427,
                                    "src": "9640:10:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "9640:326:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 24821,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24820,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "9618:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24867,
                                    "src": "9588:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 24819,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 24818,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "9588:11:135",
                                                "9600:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "9588:22:135"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "9588:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9578:53:135"
                        },
                        "returnParameters": {
                            "id": 24865,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9971:0:135"
                        },
                        "scope": 25139,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 24879,
                        "nodeType": "FunctionDefinition",
                        "src": "9998:138:135",
                        "nodes": [],
                        "body": {
                            "id": 24878,
                            "nodeType": "Block",
                            "src": "10091:45:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24876,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24874,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17729,
                                            "src": "10101:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10187_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 24875,
                                            "name": "_marketState_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24871,
                                            "src": "10116:13:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10187_memory_ptr",
                                                "typeString": "struct IHyperdrive.MarketState memory"
                                            }
                                        },
                                        "src": "10101:28:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$10187_storage",
                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                        }
                                    },
                                    "id": 24877,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10101:28:135"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 24868,
                            "nodeType": "StructuredDocumentation",
                            "src": "9979:14:135",
                            "text": "Mocks ///"
                        },
                        "functionSelector": "f45cf2e0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setMarketState",
                        "nameLocation": "10007:14:135",
                        "parameters": {
                            "id": 24872,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24871,
                                    "mutability": "mutable",
                                    "name": "_marketState_",
                                    "nameLocation": "10062:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24879,
                                    "src": "10031:44:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_MarketState_$10187_memory_ptr",
                                        "typeString": "struct IHyperdrive.MarketState"
                                    },
                                    "typeName": {
                                        "id": 24870,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 24869,
                                            "name": "IHyperdrive.MarketState",
                                            "nameLocations": [
                                                "10031:11:135",
                                                "10043:11:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10187,
                                            "src": "10031:23:135"
                                        },
                                        "referencedDeclaration": 10187,
                                        "src": "10031:23:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$10187_storage_ptr",
                                            "typeString": "struct IHyperdrive.MarketState"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10021:60:135"
                        },
                        "returnParameters": {
                            "id": 24873,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10091:0:135"
                        },
                        "scope": 25139,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24889,
                        "nodeType": "FunctionDefinition",
                        "src": "10142:98:135",
                        "nodes": [],
                        "body": {
                            "id": 24888,
                            "nodeType": "Block",
                            "src": "10197:43:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24886,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 24884,
                                            "name": "totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24282,
                                            "src": "10207:11:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 24885,
                                            "name": "_totalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24881,
                                            "src": "10221:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "10207:26:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 24887,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10207:26:135"
                                }
                            ]
                        },
                        "functionSelector": "a77384c1",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setTotalShares",
                        "nameLocation": "10151:14:135",
                        "parameters": {
                            "id": 24882,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24881,
                                    "mutability": "mutable",
                                    "name": "_totalShares",
                                    "nameLocation": "10174:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24889,
                                    "src": "10166:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24880,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10166:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10165:22:135"
                        },
                        "returnParameters": {
                            "id": 24883,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10197:0:135"
                        },
                        "scope": 25139,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24957,
                        "nodeType": "FunctionDefinition",
                        "src": "10372:566:135",
                        "nodes": [],
                        "body": {
                            "id": 24956,
                            "nodeType": "Block",
                            "src": "10423:515:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        null,
                                        24897
                                    ],
                                    "declarations": [
                                        null,
                                        {
                                            "constant": false,
                                            "id": 24897,
                                            "mutability": "mutable",
                                            "name": "interest",
                                            "nameLocation": "10443:8:135",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 24956,
                                            "src": "10436:15:135",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 24896,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10436:6:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 24910,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 24904,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "10539:4:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_MockHyperdrive_$25139",
                                                                    "typeString": "contract MockHyperdrive"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_MockHyperdrive_$25139",
                                                                    "typeString": "contract MockHyperdrive"
                                                                }
                                                            ],
                                                            "id": 24903,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "10531:7:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 24902,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "10531:7:135",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 24905,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "10531:13:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 24900,
                                                        "name": "_baseToken",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17691,
                                                        "src": "10510:10:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_IERC20_$9810",
                                                            "typeString": "contract IERC20"
                                                        }
                                                    },
                                                    "id": 24901,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10521:9:135",
                                                    "memberName": "balanceOf",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 9809,
                                                    "src": "10510:20:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address) view external returns (uint256)"
                                                    }
                                                },
                                                "id": 24906,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10510:35:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24907,
                                                "name": "apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24893,
                                                "src": "10559:3:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 24908,
                                                "name": "time",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24891,
                                                "src": "10576:4:135",
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
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 24898,
                                                "name": "HyperdriveUtils",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 157393,
                                                "src": "10455:15:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveUtils_$157393_$",
                                                    "typeString": "type(library HyperdriveUtils)"
                                                }
                                            },
                                            "id": 24899,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "10471:25:135",
                                            "memberName": "calculateCompoundInterest",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 155221,
                                            "src": "10455:41:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$",
                                                "typeString": "function (uint256,int256,uint256) pure returns (uint256,int256)"
                                            }
                                        },
                                        "id": 24909,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10455:135:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$",
                                            "typeString": "tuple(uint256,int256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10433:157:135"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 24913,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 24911,
                                            "name": "interest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24897,
                                            "src": "10605:8:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 24912,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "10616:1:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "10605:12:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 24934,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 24932,
                                                "name": "interest",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24897,
                                                "src": "10773:8:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 24933,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10784:1:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "10773:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 24954,
                                        "nodeType": "IfStatement",
                                        "src": "10769:163:135",
                                        "trueBody": {
                                            "id": 24953,
                                            "nodeType": "Block",
                                            "src": "10787:145:135",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24944,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "10866:4:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_MockHyperdrive_$25139",
                                                                            "typeString": "contract MockHyperdrive"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_MockHyperdrive_$25139",
                                                                            "typeString": "contract MockHyperdrive"
                                                                        }
                                                                    ],
                                                                    "id": 24943,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "10858:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24942,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "10858:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24945,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10858:13:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 24949,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "UnaryOperation",
                                                                        "operator": "-",
                                                                        "prefix": true,
                                                                        "src": "10897:9:135",
                                                                        "subExpression": {
                                                                            "id": 24948,
                                                                            "name": "interest",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 24897,
                                                                            "src": "10898:8:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_int256",
                                                                                "typeString": "int256"
                                                                            }
                                                                        },
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_int256",
                                                                            "typeString": "int256"
                                                                        }
                                                                    ],
                                                                    "id": 24947,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "10889:7:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                        "typeString": "type(uint256)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 24946,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "10889:7:135",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 24950,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10889:18:135",
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
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "id": 24938,
                                                                                "name": "_baseToken",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 17691,
                                                                                "src": "10823:10:135",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                                    "typeString": "contract IERC20"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                                    "typeString": "contract IERC20"
                                                                                }
                                                                            ],
                                                                            "id": 24937,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "10815:7:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                                "typeString": "type(address)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 24936,
                                                                                "name": "address",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "10815:7:135",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 24939,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "10815:19:135",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "id": 24935,
                                                                    "name": "ERC20Mintable",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 23479,
                                                                    "src": "10801:13:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$23479_$",
                                                                        "typeString": "type(contract ERC20Mintable)"
                                                                    }
                                                                },
                                                                "id": 24940,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "10801:34:135",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ERC20Mintable_$23479",
                                                                    "typeString": "contract ERC20Mintable"
                                                                }
                                                            },
                                                            "id": 24941,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "10836:4:135",
                                                            "memberName": "burn",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 23478,
                                                            "src": "10801:39:135",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                                "typeString": "function (address,uint256) external"
                                                            }
                                                        },
                                                        "id": 24951,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "10801:120:135",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 24952,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "10801:120:135"
                                                }
                                            ]
                                        }
                                    },
                                    "id": 24955,
                                    "nodeType": "IfStatement",
                                    "src": "10601:331:135",
                                    "trueBody": {
                                        "id": 24931,
                                        "nodeType": "Block",
                                        "src": "10619:144:135",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 24923,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "10698:4:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_MockHyperdrive_$25139",
                                                                        "typeString": "contract MockHyperdrive"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_MockHyperdrive_$25139",
                                                                        "typeString": "contract MockHyperdrive"
                                                                    }
                                                                ],
                                                                "id": 24922,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "10690:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24921,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "10690:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24924,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10690:13:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 24927,
                                                                    "name": "interest",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 24897,
                                                                    "src": "10729:8:135",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                ],
                                                                "id": 24926,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "10721:7:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 24925,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "10721:7:135",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 24928,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10721:17:135",
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
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 24917,
                                                                            "name": "_baseToken",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 17691,
                                                                            "src": "10655:10:135",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                                "typeString": "contract IERC20"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_contract$_IERC20_$9810",
                                                                                "typeString": "contract IERC20"
                                                                            }
                                                                        ],
                                                                        "id": 24916,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "10647:7:135",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_address_$",
                                                                            "typeString": "type(address)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 24915,
                                                                            "name": "address",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "10647:7:135",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 24918,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "10647:19:135",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                ],
                                                                "id": 24914,
                                                                "name": "ERC20Mintable",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 23479,
                                                                "src": "10633:13:135",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$23479_$",
                                                                    "typeString": "type(contract ERC20Mintable)"
                                                                }
                                                            },
                                                            "id": 24919,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10633:34:135",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_ERC20Mintable_$23479",
                                                                "typeString": "contract ERC20Mintable"
                                                            }
                                                        },
                                                        "id": 24920,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10668:4:135",
                                                        "memberName": "mint",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 23449,
                                                        "src": "10633:39:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                            "typeString": "function (address,uint256) external"
                                                        }
                                                    },
                                                    "id": 24929,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10633:119:135",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 24930,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10633:119:135"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "functionSelector": "68096239",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "accrue",
                        "nameLocation": "10381:6:135",
                        "parameters": {
                            "id": 24894,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24891,
                                    "mutability": "mutable",
                                    "name": "time",
                                    "nameLocation": "10396:4:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24957,
                                    "src": "10388:12:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24890,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10388:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24893,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "10409:3:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24957,
                                    "src": "10402:10:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 24892,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10402:6:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10387:26:135"
                        },
                        "returnParameters": {
                            "id": 24895,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10423:0:135"
                        },
                        "scope": 25139,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 24985,
                        "nodeType": "FunctionDefinition",
                        "src": "10944:411:135",
                        "nodes": [],
                        "body": {
                            "id": 24984,
                            "nodeType": "Block",
                            "src": "11144:211:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 24978,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 24970,
                                                    "name": "curveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24966,
                                                    "src": "11155:8:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 24971,
                                                    "name": "governanceCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24968,
                                                    "src": "11165:18:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 24972,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "11154:30:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 24974,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24959,
                                                    "src": "11226:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 24975,
                                                    "name": "_spotPrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24961,
                                                    "src": "11252:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 24976,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24963,
                                                    "src": "11276:15:135",
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
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 24973,
                                                "name": "_calculateFeesGivenShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13686,
                                                "src": "11187:25:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                                                }
                                            },
                                            "id": 24977,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11187:114:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "src": "11154:147:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 24979,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11154:147:135"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 24980,
                                                "name": "curveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24966,
                                                "src": "11319:8:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 24981,
                                                "name": "governanceCurveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24968,
                                                "src": "11329:18:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 24982,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "11318:30:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 24969,
                                    "id": 24983,
                                    "nodeType": "Return",
                                    "src": "11311:37:135"
                                }
                            ]
                        },
                        "functionSelector": "71f88b7c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateFeesGivenShares",
                        "nameLocation": "10953:24:135",
                        "parameters": {
                            "id": 24964,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24959,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "10995:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24985,
                                    "src": "10987:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24958,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10987:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24961,
                                    "mutability": "mutable",
                                    "name": "_spotPrice",
                                    "nameLocation": "11025:10:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24985,
                                    "src": "11017:18:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24960,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11017:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24963,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "11053:15:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24985,
                                    "src": "11045:23:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24962,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11045:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10977:97:135"
                        },
                        "returnParameters": {
                            "id": 24969,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24966,
                                    "mutability": "mutable",
                                    "name": "curveFee",
                                    "nameLocation": "11106:8:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24985,
                                    "src": "11098:16:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24965,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11098:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24968,
                                    "mutability": "mutable",
                                    "name": "governanceCurveFee",
                                    "nameLocation": "11124:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 24985,
                                    "src": "11116:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24967,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11116:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11097:46:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25024,
                        "nodeType": "FunctionDefinition",
                        "src": "11361:822:135",
                        "nodes": [],
                        "body": {
                            "id": 25023,
                            "nodeType": "Block",
                            "src": "11742:441:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25015,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 25004,
                                                    "name": "totalCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24996,
                                                    "src": "11766:13:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25005,
                                                    "name": "totalFlatFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24998,
                                                    "src": "11793:12:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25006,
                                                    "name": "governanceCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25000,
                                                    "src": "11819:18:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25007,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 25002,
                                                    "src": "11851:18:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 25008,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "11752:127:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 25010,
                                                    "name": "_bondAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24987,
                                                    "src": "11920:11:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25011,
                                                    "name": "_normalizedTimeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24989,
                                                    "src": "11945:24:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25012,
                                                    "name": "_spotPrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24991,
                                                    "src": "11983:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 25013,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 24993,
                                                    "src": "12007:15:135",
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
                                                "id": 25009,
                                                "name": "_calculateFeesGivenBonds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13756,
                                                "src": "11882:24:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                                                }
                                            },
                                            "id": 25014,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11882:150:135",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                            }
                                        },
                                        "src": "11752:280:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 25016,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11752:280:135"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 25017,
                                                "name": "totalCurveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24996,
                                                "src": "12063:13:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25018,
                                                "name": "totalFlatFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24998,
                                                "src": "12090:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25019,
                                                "name": "governanceCurveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25000,
                                                "src": "12116:18:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25020,
                                                "name": "totalGovernanceFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25002,
                                                "src": "12148:18:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 25021,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "12049:127:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 25003,
                                    "id": 25022,
                                    "nodeType": "Return",
                                    "src": "12042:134:135"
                                }
                            ]
                        },
                        "functionSelector": "22d5506b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateFeesGivenBonds",
                        "nameLocation": "11370:23:135",
                        "parameters": {
                            "id": 24994,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24987,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "11411:11:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11403:19:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24986,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11403:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24989,
                                    "mutability": "mutable",
                                    "name": "_normalizedTimeRemaining",
                                    "nameLocation": "11440:24:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11432:32:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24988,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11432:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24991,
                                    "mutability": "mutable",
                                    "name": "_spotPrice",
                                    "nameLocation": "11482:10:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11474:18:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24990,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11474:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24993,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "11510:15:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11502:23:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24992,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11502:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11393:138:135"
                        },
                        "returnParameters": {
                            "id": 25003,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 24996,
                                    "mutability": "mutable",
                                    "name": "totalCurveFee",
                                    "nameLocation": "11600:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11592:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24995,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11592:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 24998,
                                    "mutability": "mutable",
                                    "name": "totalFlatFee",
                                    "nameLocation": "11635:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11627:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24997,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11627:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25000,
                                    "mutability": "mutable",
                                    "name": "governanceCurveFee",
                                    "nameLocation": "11669:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11661:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 24999,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11661:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25002,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "11709:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25024,
                                    "src": "11701:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25001,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11701:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11578:159:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25043,
                        "nodeType": "FunctionDefinition",
                        "src": "12232:351:135",
                        "nodes": [],
                        "body": {
                            "id": 25042,
                            "nodeType": "Block",
                            "src": "12509:74:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25038,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25026,
                                                "src": "12545:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 25039,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25028,
                                                "src": "12559:16:135",
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
                                            "id": 25037,
                                            "name": "_calculateOpenLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16059,
                                            "src": "12526:18:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) view returns (uint256,uint256,uint256)"
                                            }
                                        },
                                        "id": 25040,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12526:50:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 25036,
                                    "id": 25041,
                                    "nodeType": "Return",
                                    "src": "12519:57:135"
                                }
                            ]
                        },
                        "functionSelector": "9bd33498",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateOpenLong",
                        "nameLocation": "12241:17:135",
                        "parameters": {
                            "id": 25029,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25026,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "12276:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25043,
                                    "src": "12268:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25025,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12268:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25028,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "12306:16:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25043,
                                    "src": "12298:24:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25027,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12298:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12258:70:135"
                        },
                        "returnParameters": {
                            "id": 25036,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25031,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "12397:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25043,
                                    "src": "12389:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25030,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12389:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25033,
                                    "mutability": "mutable",
                                    "name": "bondReservesDelta",
                                    "nameLocation": "12437:17:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25043,
                                    "src": "12429:25:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25032,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12429:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25035,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "12476:18:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25043,
                                    "src": "12468:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25034,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12468:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12375:129:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25055,
                        "nodeType": "FunctionDefinition",
                        "src": "12589:177:135",
                        "nodes": [],
                        "body": {
                            "id": 25054,
                            "nodeType": "Block",
                            "src": "12704:62:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25051,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25045,
                                                "src": "12745:13:135",
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
                                            "id": 25050,
                                            "name": "_calculateTimeRemaining",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13006,
                                            "src": "12721:23:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 25052,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12721:38:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25049,
                                    "id": 25053,
                                    "nodeType": "Return",
                                    "src": "12714:45:135"
                                }
                            ]
                        },
                        "functionSelector": "68c2ecb8",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemaining",
                        "nameLocation": "12598:22:135",
                        "parameters": {
                            "id": 25046,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25045,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "12638:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25055,
                                    "src": "12630:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25044,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12630:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12620:37:135"
                        },
                        "returnParameters": {
                            "id": 25049,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25048,
                                    "mutability": "mutable",
                                    "name": "timeRemaining",
                                    "nameLocation": "12689:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25055,
                                    "src": "12681:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25047,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12681:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12680:23:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25067,
                        "nodeType": "FunctionDefinition",
                        "src": "12772:189:135",
                        "nodes": [],
                        "body": {
                            "id": 25066,
                            "nodeType": "Block",
                            "src": "12893:68:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25063,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25057,
                                                "src": "12940:13:135",
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
                                            "id": 25062,
                                            "name": "_calculateTimeRemainingScaled",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13042,
                                            "src": "12910:29:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 25064,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12910:44:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25061,
                                    "id": 25065,
                                    "nodeType": "Return",
                                    "src": "12903:51:135"
                                }
                            ]
                        },
                        "functionSelector": "ca6d38f7",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTimeRemainingScaled",
                        "nameLocation": "12781:28:135",
                        "parameters": {
                            "id": 25058,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25057,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "12827:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25067,
                                    "src": "12819:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25056,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12819:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12809:37:135"
                        },
                        "returnParameters": {
                            "id": 25061,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25060,
                                    "mutability": "mutable",
                                    "name": "timeRemaining",
                                    "nameLocation": "12878:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25067,
                                    "src": "12870:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25059,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12870:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12869:23:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25076,
                        "nodeType": "FunctionDefinition",
                        "src": "12967:118:135",
                        "nodes": [],
                        "body": {
                            "id": 25075,
                            "nodeType": "Block",
                            "src": "13042:43:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 25072,
                                            "name": "_latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13060,
                                            "src": "13059:17:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 25073,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13059:19:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25071,
                                    "id": 25074,
                                    "nodeType": "Return",
                                    "src": "13052:26:135"
                                }
                            ]
                        },
                        "functionSelector": "907c0f92",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "latestCheckpoint",
                        "nameLocation": "12976:16:135",
                        "parameters": {
                            "id": 25068,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12992:2:135"
                        },
                        "returnParameters": {
                            "id": 25071,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25070,
                                    "mutability": "mutable",
                                    "name": "checkpointTime",
                                    "nameLocation": "13026:14:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25076,
                                    "src": "13018:22:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25069,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13018:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13017:24:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25086,
                        "nodeType": "FunctionDefinition",
                        "src": "13091:116:135",
                        "nodes": [],
                        "body": {
                            "id": 25085,
                            "nodeType": "Block",
                            "src": "13153:54:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25082,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25078,
                                                "src": "13180:19:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "id": 25081,
                                            "name": "_updateLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15175,
                                            "src": "13163:16:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                                                "typeString": "function (int256)"
                                            }
                                        },
                                        "id": 25083,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13163:37:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 25084,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13163:37:135"
                                }
                            ]
                        },
                        "functionSelector": "8120a3e2",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "updateLiquidity",
                        "nameLocation": "13100:15:135",
                        "parameters": {
                            "id": 25079,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25078,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "13123:19:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25086,
                                    "src": "13116:26:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 25077,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13116:6:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13115:28:135"
                        },
                        "returnParameters": {
                            "id": 25080,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13153:0:135"
                        },
                        "scope": 25139,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25098,
                        "nodeType": "FunctionDefinition",
                        "src": "13213:177:135",
                        "nodes": [],
                        "body": {
                            "id": 25097,
                            "nodeType": "Block",
                            "src": "13321:69:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 25094,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 25088,
                                                "src": "13366:16:135",
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
                                            "id": 25093,
                                            "name": "_calculateIdleShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13568,
                                            "src": "13338:27:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 25095,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13338:45:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25092,
                                    "id": 25096,
                                    "nodeType": "Return",
                                    "src": "13331:52:135"
                                }
                            ]
                        },
                        "functionSelector": "b1b4b170",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateIdleShareReserves",
                        "nameLocation": "13222:26:135",
                        "parameters": {
                            "id": 25089,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25088,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "13266:16:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25098,
                                    "src": "13258:24:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25087,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13258:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13248:40:135"
                        },
                        "returnParameters": {
                            "id": 25092,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25091,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25098,
                                    "src": "13312:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25090,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13312:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13311:9:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25106,
                        "nodeType": "FunctionDefinition",
                        "src": "13396:93:135",
                        "nodes": [],
                        "body": {
                            "id": 25105,
                            "nodeType": "Block",
                            "src": "13454:35:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25103,
                                        "name": "totalShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 24282,
                                        "src": "13471:11:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 25102,
                                    "id": 25104,
                                    "nodeType": "Return",
                                    "src": "13464:18:135"
                                }
                            ]
                        },
                        "functionSelector": "d5002f2e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalShares",
                        "nameLocation": "13405:14:135",
                        "parameters": {
                            "id": 25099,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13419:2:135"
                        },
                        "returnParameters": {
                            "id": 25102,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25101,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25106,
                                    "src": "13445:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25100,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13445:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13444:9:135"
                        },
                        "scope": 25139,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25126,
                        "nodeType": "FunctionDefinition",
                        "src": "13495:184:135",
                        "nodes": [],
                        "body": {
                            "id": 25125,
                            "nodeType": "Block",
                            "src": "13570:109:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25117,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25113,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17729,
                                                "src": "13580:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10187_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 25115,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "13593:13:135",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10153,
                                            "src": "13580:26:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 25116,
                                            "name": "shareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25108,
                                            "src": "13609:13:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13580:42:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 25118,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13580:42:135"
                                },
                                {
                                    "expression": {
                                        "id": 25123,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25119,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17729,
                                                "src": "13632:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10187_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 25121,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "13645:12:135",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10156,
                                            "src": "13632:25:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 25122,
                                            "name": "bondReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25110,
                                            "src": "13660:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13632:40:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 25124,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13632:40:135"
                                }
                            ]
                        },
                        "functionSelector": "702db0eb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setReserves",
                        "nameLocation": "13504:11:135",
                        "parameters": {
                            "id": 25111,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25108,
                                    "mutability": "mutable",
                                    "name": "shareReserves",
                                    "nameLocation": "13524:13:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25126,
                                    "src": "13516:21:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 25107,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13516:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25110,
                                    "mutability": "mutable",
                                    "name": "bondReserves",
                                    "nameLocation": "13547:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25126,
                                    "src": "13539:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 25109,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13539:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13515:45:135"
                        },
                        "returnParameters": {
                            "id": 25112,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13570:0:135"
                        },
                        "scope": 25139,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 25138,
                        "nodeType": "FunctionDefinition",
                        "src": "13685:113:135",
                        "nodes": [],
                        "body": {
                            "id": 25137,
                            "nodeType": "Block",
                            "src": "13741:57:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 25135,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 25131,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17729,
                                                "src": "13751:12:135",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10187_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 25133,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "13764:12:135",
                                            "memberName": "longExposure",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10159,
                                            "src": "13751:25:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 25134,
                                            "name": "longExposure",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 25128,
                                            "src": "13779:12:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13751:40:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 25136,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13751:40:135"
                                }
                            ]
                        },
                        "functionSelector": "b4f8da39",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setLongExposure",
                        "nameLocation": "13694:15:135",
                        "parameters": {
                            "id": 25129,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25128,
                                    "mutability": "mutable",
                                    "name": "longExposure",
                                    "nameLocation": "13718:12:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25138,
                                    "src": "13710:20:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint128",
                                        "typeString": "uint128"
                                    },
                                    "typeName": {
                                        "id": 25127,
                                        "name": "uint128",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13710:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13709:22:135"
                        },
                        "returnParameters": {
                            "id": 25130,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13741:0:135"
                        },
                        "scope": 25139,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 24811,
                            "name": "Hyperdrive",
                            "nameLocations": [
                                "9491:10:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 4427,
                            "src": "9491:10:135"
                        },
                        "id": 24812,
                        "nodeType": "InheritanceSpecifier",
                        "src": "9491:10:135"
                    },
                    {
                        "baseName": {
                            "id": 24813,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "9503:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24810,
                            "src": "9503:18:135"
                        },
                        "id": 24814,
                        "nodeType": "InheritanceSpecifier",
                        "src": "9503:18:135"
                    }
                ],
                "canonicalName": "MockHyperdrive",
                "contractDependencies": [
                    25168,
                    25183,
                    25198,
                    25213,
                    25228
                ],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25139,
                    24810,
                    4427,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609,
                    10695,
                    11575
                ],
                "name": "MockHyperdrive",
                "nameLocation": "9473:14:135",
                "scope": 25229,
                "usedErrors": [
                    10371,
                    10383,
                    10413,
                    10457,
                    10463,
                    10466,
                    10469,
                    10475,
                    71510
                ],
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
            },
            {
                "id": 25168,
                "nodeType": "ContractDefinition",
                "src": "13802:327:135",
                "nodes": [
                    {
                        "id": 25153,
                        "nodeType": "FunctionDefinition",
                        "src": "13880:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25152,
                            "nodeType": "Block",
                            "src": "13972:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25149,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25146,
                                        "src": "13963:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25150,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25148,
                                    "name": "HyperdriveTarget0",
                                    "nameLocations": [
                                        "13945:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5242,
                                    "src": "13945:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "13945:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25147,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25146,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "13931:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25153,
                                    "src": "13901:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25145,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25144,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "13901:11:135",
                                                "13913:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "13901:22:135"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "13901:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13891:53:135"
                        },
                        "returnParameters": {
                            "id": 25151,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13972:0:135"
                        },
                        "scope": 25168,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 25167,
                        "nodeType": "FunctionDefinition",
                        "src": "13999:128:135",
                        "nodes": [],
                        "body": {
                            "id": 25166,
                            "nodeType": "Block",
                            "src": "14067:60:135",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 25162,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17751,
                                                        "src": "14096:22:135",
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
                                                    "expression": {
                                                        "id": 25160,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "14085:3:135",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 25161,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14089:6:135",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "14085:10:135",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 25163,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14085:34:135",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 25159,
                                            "name": "_revert",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5241,
                                            "src": "14077:7:135",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (bytes memory) pure"
                                            }
                                        },
                                        "id": 25164,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14077:43:135",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 25165,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14077:43:135"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 25154,
                            "nodeType": "StructuredDocumentation",
                            "src": "13980:14:135",
                            "text": "Mocks ///"
                        },
                        "functionSelector": "8e67f87e",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getGovernanceFeesAccrued",
                        "nameLocation": "14008:24:135",
                        "parameters": {
                            "id": 25155,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14032:2:135"
                        },
                        "returnParameters": {
                            "id": 25158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25157,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25167,
                                    "src": "14058:7:135",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 25156,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14058:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14057:9:135"
                        },
                        "scope": 25168,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25140,
                            "name": "HyperdriveTarget0",
                            "nameLocations": [
                                "13836:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5242,
                            "src": "13836:17:135"
                        },
                        "id": 25141,
                        "nodeType": "InheritanceSpecifier",
                        "src": "13836:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25142,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "13855:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24810,
                            "src": "13855:18:135"
                        },
                        "id": 25143,
                        "nodeType": "InheritanceSpecifier",
                        "src": "13855:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget0",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25168,
                    24810,
                    5242,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609,
                    11357,
                    11697
                ],
                "name": "MockHyperdriveTarget0",
                "nameLocation": "13811:21:135",
                "scope": 25229,
                "usedErrors": [
                    10365,
                    10371,
                    10374,
                    10392,
                    10395,
                    10404,
                    10407,
                    10410,
                    10413,
                    10437,
                    10442,
                    10445,
                    10451,
                    10454,
                    10469,
                    70940,
                    71221,
                    71226,
                    71229,
                    71510
                ],
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
            },
            {
                "id": 25183,
                "nodeType": "ContractDefinition",
                "src": "14131:174:135",
                "nodes": [
                    {
                        "id": 25182,
                        "nodeType": "FunctionDefinition",
                        "src": "14209:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25181,
                            "nodeType": "Block",
                            "src": "14301:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25178,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25175,
                                        "src": "14292:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25179,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25177,
                                    "name": "HyperdriveTarget1",
                                    "nameLocations": [
                                        "14274:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5355,
                                    "src": "14274:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14274:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25176,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25175,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14260:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25182,
                                    "src": "14230:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25174,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25173,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14230:11:135",
                                                "14242:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "14230:22:135"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "14230:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14220:53:135"
                        },
                        "returnParameters": {
                            "id": 25180,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14301:0:135"
                        },
                        "scope": 25183,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25169,
                            "name": "HyperdriveTarget1",
                            "nameLocations": [
                                "14165:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5355,
                            "src": "14165:17:135"
                        },
                        "id": 25170,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14165:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25171,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "14184:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24810,
                            "src": "14184:18:135"
                        },
                        "id": 25172,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14184:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget1",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25183,
                    24810,
                    5355,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609
                ],
                "name": "MockHyperdriveTarget1",
                "nameLocation": "14140:21:135",
                "scope": 25229,
                "usedErrors": [
                    10371,
                    10377,
                    10383,
                    10386,
                    10404,
                    10410,
                    10413,
                    10419,
                    10422,
                    10425,
                    10428,
                    10434,
                    10437,
                    10448,
                    10451,
                    10460,
                    10463,
                    10466,
                    10469,
                    10475,
                    71510
                ],
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
            },
            {
                "id": 25198,
                "nodeType": "ContractDefinition",
                "src": "14307:174:135",
                "nodes": [
                    {
                        "id": 25197,
                        "nodeType": "FunctionDefinition",
                        "src": "14385:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25196,
                            "nodeType": "Block",
                            "src": "14477:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25193,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25190,
                                        "src": "14468:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25194,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25192,
                                    "name": "HyperdriveTarget2",
                                    "nameLocations": [
                                        "14450:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5444,
                                    "src": "14450:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14450:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25191,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25190,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14436:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25197,
                                    "src": "14406:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25189,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25188,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14406:11:135",
                                                "14418:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "14406:22:135"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "14406:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14396:53:135"
                        },
                        "returnParameters": {
                            "id": 25195,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14477:0:135"
                        },
                        "scope": 25198,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25184,
                            "name": "HyperdriveTarget2",
                            "nameLocations": [
                                "14341:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5444,
                            "src": "14341:17:135"
                        },
                        "id": 25185,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14341:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25186,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "14360:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24810,
                            "src": "14360:18:135"
                        },
                        "id": 25187,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14360:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget2",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25198,
                    24810,
                    5444,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609
                ],
                "name": "MockHyperdriveTarget2",
                "nameLocation": "14316:21:135",
                "scope": 25229,
                "usedErrors": [
                    10371,
                    10377,
                    10383,
                    10410,
                    10413,
                    10419,
                    10428,
                    10437,
                    10448,
                    10451,
                    10460,
                    10463,
                    10466,
                    10469,
                    71510
                ],
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
            },
            {
                "id": 25213,
                "nodeType": "ContractDefinition",
                "src": "14483:174:135",
                "nodes": [
                    {
                        "id": 25212,
                        "nodeType": "FunctionDefinition",
                        "src": "14561:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25211,
                            "nodeType": "Block",
                            "src": "14653:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25208,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25205,
                                        "src": "14644:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25209,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25207,
                                    "name": "HyperdriveTarget3",
                                    "nameLocations": [
                                        "14626:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5532,
                                    "src": "14626:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14626:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25206,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25205,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14612:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25212,
                                    "src": "14582:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25204,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25203,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14582:11:135",
                                                "14594:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "14582:22:135"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "14582:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14572:53:135"
                        },
                        "returnParameters": {
                            "id": 25210,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14653:0:135"
                        },
                        "scope": 25213,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25199,
                            "name": "HyperdriveTarget3",
                            "nameLocations": [
                                "14517:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5532,
                            "src": "14517:17:135"
                        },
                        "id": 25200,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14517:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25201,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "14536:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24810,
                            "src": "14536:18:135"
                        },
                        "id": 25202,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14536:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget3",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25213,
                    24810,
                    5532,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609
                ],
                "name": "MockHyperdriveTarget3",
                "nameLocation": "14492:21:135",
                "scope": 25229,
                "usedErrors": [
                    10368,
                    10371,
                    10383,
                    10410,
                    10413,
                    10416,
                    10419,
                    10425,
                    10428,
                    10431,
                    10434,
                    10437,
                    10448,
                    10451,
                    10460,
                    10463,
                    10466,
                    10469,
                    71510
                ],
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
            },
            {
                "id": 25228,
                "nodeType": "ContractDefinition",
                "src": "14659:174:135",
                "nodes": [
                    {
                        "id": 25227,
                        "nodeType": "FunctionDefinition",
                        "src": "14737:94:135",
                        "nodes": [],
                        "body": {
                            "id": 25226,
                            "nodeType": "Block",
                            "src": "14829:2:135",
                            "nodes": [],
                            "statements": []
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25223,
                                        "name": "_config",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25220,
                                        "src": "14820:7:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig memory"
                                        }
                                    }
                                ],
                                "id": 25224,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 25222,
                                    "name": "HyperdriveTarget4",
                                    "nameLocations": [
                                        "14802:17:135"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 5611,
                                    "src": "14802:17:135"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "14802:26:135"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 25221,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 25220,
                                    "mutability": "mutable",
                                    "name": "_config",
                                    "nameLocation": "14788:7:135",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 25227,
                                    "src": "14758:37:135",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PoolConfig_$10300_memory_ptr",
                                        "typeString": "struct IHyperdrive.PoolConfig"
                                    },
                                    "typeName": {
                                        "id": 25219,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 25218,
                                            "name": "IHyperdrive.PoolConfig",
                                            "nameLocations": [
                                                "14758:11:135",
                                                "14770:10:135"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10300,
                                            "src": "14758:22:135"
                                        },
                                        "referencedDeclaration": 10300,
                                        "src": "14758:22:135",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PoolConfig_$10300_storage_ptr",
                                            "typeString": "struct IHyperdrive.PoolConfig"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14748:53:135"
                        },
                        "returnParameters": {
                            "id": 25225,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14829:0:135"
                        },
                        "scope": 25228,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 25214,
                            "name": "HyperdriveTarget4",
                            "nameLocations": [
                                "14693:17:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5611,
                            "src": "14693:17:135"
                        },
                        "id": 25215,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14693:17:135"
                    },
                    {
                        "baseName": {
                            "id": 25216,
                            "name": "MockHyperdriveBase",
                            "nameLocations": [
                                "14712:18:135"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 24810,
                            "src": "14712:18:135"
                        },
                        "id": 25217,
                        "nodeType": "InheritanceSpecifier",
                        "src": "14712:18:135"
                    }
                ],
                "canonicalName": "MockHyperdriveTarget4",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    25228,
                    24810,
                    5611,
                    14324,
                    17668,
                    16198,
                    15264,
                    16682,
                    12659,
                    13835,
                    17893,
                    71565,
                    11037,
                    11609
                ],
                "name": "MockHyperdriveTarget4",
                "nameLocation": "14668:21:135",
                "scope": 25229,
                "usedErrors": [
                    10371,
                    10383,
                    10389,
                    10410,
                    10413,
                    10416,
                    10419,
                    10425,
                    10428,
                    10434,
                    10437,
                    10448,
                    10451,
                    10460,
                    10463,
                    10466,
                    10469,
                    71510
                ],
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
    "id": 135
};
