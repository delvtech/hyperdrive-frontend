export const HyperdriveCheckpoint = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"Implements the checkpoint accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveCheckpoint.sol\":\"HyperdriveCheckpoint\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7\",\"dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "contracts/src/internal/HyperdriveCheckpoint.sol": "HyperdriveCheckpoint"
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
                "keccak256": "0x3514b829c99e0015385ff08dd1479e452529a6283e8b6800946542ff21dc9649",
                "urls": [
                    "bzz-raw://37ffd17baea5080f4184372ac835bf60694760499756235a61e41a480f4ab3c7",
                    "dweb:/ipfs/QmUzEnJhRhpW18MH7GyXsug9u5FLehNfgjR7RAhZizLLVd"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d",
                "urls": [
                    "bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2",
                    "dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j"
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
                "keccak256": "0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067",
                "urls": [
                    "bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f",
                    "dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ"
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
                "keccak256": "0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891",
                "urls": [
                    "bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c",
                    "dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy"
                ],
                "license": "Apache-2.0"
            },
            "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
                "urls": [
                    "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
                    "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
        "id": 14460,
        "exportedSymbols": {
            "AssetId": [
                18265
            ],
            "FixedPointMath": [
                19065
            ],
            "HyperdriveBase": [
                13995
            ],
            "HyperdriveCheckpoint": [
                14459
            ],
            "HyperdriveLong": [
                16295
            ],
            "HyperdriveMath": [
                19813
            ],
            "HyperdriveShort": [
                17765
            ],
            "IHyperdrive": [
                10676
            ],
            "IHyperdriveEvents": [
                11205
            ],
            "LPMath": [
                21757
            ],
            "SafeCast": [
                21936
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:13449:113",
        "nodes": [
            {
                "id": 13997,
                "nodeType": "PragmaDirective",
                "src": "39:23:113",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 13999,
                "nodeType": "ImportDirective",
                "src": "64:60:113",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 13998,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "73:11:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14001,
                "nodeType": "ImportDirective",
                "src": "125:72:113",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
                "file": "../interfaces/IHyperdriveEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 11206,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14000,
                            "name": "IHyperdriveEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11205,
                            "src": "134:17:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14003,
                "nodeType": "ImportDirective",
                "src": "198:51:113",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 18266,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14002,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18265,
                            "src": "207:7:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14005,
                "nodeType": "ImportDirective",
                "src": "250:65:113",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 19066,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14004,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19065,
                            "src": "259:14:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14007,
                "nodeType": "ImportDirective",
                "src": "316:65:113",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 19814,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14006,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19813,
                            "src": "325:14:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14009,
                "nodeType": "ImportDirective",
                "src": "382:49:113",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 21758,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14008,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21757,
                            "src": "391:6:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14011,
                "nodeType": "ImportDirective",
                "src": "432:53:113",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "../libraries/SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 21937,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14010,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21936,
                            "src": "441:8:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14013,
                "nodeType": "ImportDirective",
                "src": "486:54:113",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
                "file": "./HyperdriveBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 13996,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14012,
                            "name": "HyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13995,
                            "src": "495:14:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14015,
                "nodeType": "ImportDirective",
                "src": "541:54:113",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
                "file": "./HyperdriveLong.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 16296,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14014,
                            "name": "HyperdriveLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16295,
                            "src": "550:14:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14017,
                "nodeType": "ImportDirective",
                "src": "596:56:113",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
                "file": "./HyperdriveShort.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 14460,
                "sourceUnit": 17766,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14016,
                            "name": "HyperdriveShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17765,
                            "src": "605:15:113",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14459,
                "nodeType": "ContractDefinition",
                "src": "960:12527:113",
                "nodes": [
                    {
                        "id": 14029,
                        "nodeType": "UsingForDirective",
                        "src": "1091:33:113",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 14027,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1097:14:113"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19065,
                            "src": "1097:14:113"
                        },
                        "typeName": {
                            "id": 14028,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1116:7:113",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 14032,
                        "nodeType": "UsingForDirective",
                        "src": "1129:32:113",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 14030,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1135:14:113"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19065,
                            "src": "1135:14:113"
                        },
                        "typeName": {
                            "id": 14031,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1154:6:113",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 14035,
                        "nodeType": "UsingForDirective",
                        "src": "1166:27:113",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 14033,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1172:8:113"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 21936,
                            "src": "1172:8:113"
                        },
                        "typeName": {
                            "id": 14034,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1185:7:113",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 14128,
                        "nodeType": "FunctionDefinition",
                        "src": "1347:1644:113",
                        "nodes": [],
                        "body": {
                            "id": 14127,
                            "nodeType": "Block",
                            "src": "1415:1576:113",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        },
                                        "id": 14048,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 14043,
                                                    "name": "_checkpoints",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17836,
                                                    "src": "1494:12:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                                        "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                    }
                                                },
                                                "id": 14045,
                                                "indexExpression": {
                                                    "id": 14044,
                                                    "name": "_checkpointTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14038,
                                                    "src": "1507:15:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "1494:29:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                                    "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                }
                                            },
                                            "id": 14046,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1524:15:113",
                                            "memberName": "vaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10360,
                                            "src": "1494:45:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 14047,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1543:1:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "1494:50:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14051,
                                    "nodeType": "IfStatement",
                                    "src": "1490:87:113",
                                    "trueBody": {
                                        "id": 14050,
                                        "nodeType": "Block",
                                        "src": "1546:31:113",
                                        "statements": [
                                            {
                                                "functionReturnParameters": 14042,
                                                "id": 14049,
                                                "nodeType": "Return",
                                                "src": "1560:7:113"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        14053
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14053,
                                            "mutability": "mutable",
                                            "name": "latestCheckpoint",
                                            "nameLocation": "1764:16:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14127,
                                            "src": "1756:24:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14052,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1756:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14056,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 14054,
                                            "name": "_latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13220,
                                            "src": "1783:17:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 14055,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1783:19:113",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1756:46:113"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 14065,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 14061,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 14059,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 14057,
                                                    "name": "_checkpointTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14038,
                                                    "src": "1829:15:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "%",
                                                "rightExpression": {
                                                    "id": 14058,
                                                    "name": "_checkpointDuration",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17795,
                                                    "src": "1847:19:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1829:37:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 14060,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1870:1:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "1829:42:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 14064,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 14062,
                                                "name": "latestCheckpoint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14053,
                                                "src": "1887:16:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 14063,
                                                "name": "_checkpointTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14038,
                                                "src": "1906:15:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1887:34:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1829:92:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14072,
                                    "nodeType": "IfStatement",
                                    "src": "1812:187:113",
                                    "trueBody": {
                                        "id": 14071,
                                        "nodeType": "Block",
                                        "src": "1932:67:113",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 14066,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "1953:11:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 14068,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1965:21:113",
                                                        "memberName": "InvalidCheckpointTime",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10559,
                                                        "src": "1953:33:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 14069,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1953:35:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 14070,
                                                "nodeType": "RevertStatement",
                                                "src": "1946:42:113"
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
                                        "id": 14075,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 14073,
                                            "name": "_checkpointTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14038,
                                            "src": "2245:15:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "id": 14074,
                                            "name": "latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14053,
                                            "src": "2264:16:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2245:35:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 14125,
                                        "nodeType": "Block",
                                        "src": "2370:615:113",
                                        "statements": [
                                            {
                                                "body": {
                                                    "id": 14123,
                                                    "nodeType": "Block",
                                                    "src": "2514:461:113",
                                                    "statements": [
                                                        {
                                                            "assignments": [
                                                                14092
                                                            ],
                                                            "declarations": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 14092,
                                                                    "mutability": "mutable",
                                                                    "name": "closestVaultSharePrice",
                                                                    "nameLocation": "2540:22:113",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 14123,
                                                                    "src": "2532:30:113",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "default",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 14091,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "2532:7:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "id": 14097,
                                                            "initialValue": {
                                                                "expression": {
                                                                    "baseExpression": {
                                                                        "id": 14093,
                                                                        "name": "_checkpoints",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17836,
                                                                        "src": "2565:12:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                                                            "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                                        }
                                                                    },
                                                                    "id": 14095,
                                                                    "indexExpression": {
                                                                        "id": 14094,
                                                                        "name": "time",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14084,
                                                                        "src": "2578:4:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "2565:18:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                                                        "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                                    }
                                                                },
                                                                "id": 14096,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "2605:15:113",
                                                                "memberName": "vaultSharePrice",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10360,
                                                                "src": "2565:55:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            },
                                                            "nodeType": "VariableDeclarationStatement",
                                                            "src": "2532:88:113"
                                                        },
                                                        {
                                                            "condition": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                "id": 14104,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "id": 14100,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "id": 14098,
                                                                        "name": "time",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14084,
                                                                        "src": "2642:4:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "==",
                                                                    "rightExpression": {
                                                                        "id": 14099,
                                                                        "name": "latestCheckpoint",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14053,
                                                                        "src": "2650:16:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "src": "2642:24:113",
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
                                                                    "id": 14103,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "id": 14101,
                                                                        "name": "closestVaultSharePrice",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14092,
                                                                        "src": "2670:22:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "==",
                                                                    "rightExpression": {
                                                                        "hexValue": "30",
                                                                        "id": 14102,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "2696:1:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        },
                                                                        "value": "0"
                                                                    },
                                                                    "src": "2670:27:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "src": "2642:55:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 14111,
                                                            "nodeType": "IfStatement",
                                                            "src": "2638:148:113",
                                                            "trueBody": {
                                                                "id": 14110,
                                                                "nodeType": "Block",
                                                                "src": "2699:87:113",
                                                                "statements": [
                                                                    {
                                                                        "expression": {
                                                                            "id": 14108,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftHandSide": {
                                                                                "id": 14105,
                                                                                "name": "closestVaultSharePrice",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 14092,
                                                                                "src": "2721:22:113",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "Assignment",
                                                                            "operator": "=",
                                                                            "rightHandSide": {
                                                                                "arguments": [],
                                                                                "expression": {
                                                                                    "argumentTypes": [],
                                                                                    "id": 14106,
                                                                                    "name": "_pricePerVaultShare",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 13014,
                                                                                    "src": "2746:19:113",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                                        "typeString": "function () view returns (uint256)"
                                                                                    }
                                                                                },
                                                                                "id": 14107,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "2746:21:113",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "2721:46:113",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "id": 14109,
                                                                        "nodeType": "ExpressionStatement",
                                                                        "src": "2721:46:113"
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
                                                                "id": 14114,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 14112,
                                                                    "name": "closestVaultSharePrice",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 14092,
                                                                    "src": "2807:22:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "!=",
                                                                "rightExpression": {
                                                                    "hexValue": "30",
                                                                    "id": 14113,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "2833:1:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_0_by_1",
                                                                        "typeString": "int_const 0"
                                                                    },
                                                                    "value": "0"
                                                                },
                                                                "src": "2807:27:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 14122,
                                                            "nodeType": "IfStatement",
                                                            "src": "2803:158:113",
                                                            "trueBody": {
                                                                "id": 14121,
                                                                "nodeType": "Block",
                                                                "src": "2836:125:113",
                                                                "statements": [
                                                                    {
                                                                        "expression": {
                                                                            "arguments": [
                                                                                {
                                                                                    "id": 14116,
                                                                                    "name": "_checkpointTime",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 14038,
                                                                                    "src": "2875:15:113",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_uint256",
                                                                                        "typeString": "uint256"
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "id": 14117,
                                                                                    "name": "closestVaultSharePrice",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 14092,
                                                                                    "src": "2892:22:113",
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
                                                                                "id": 14115,
                                                                                "name": "_applyCheckpoint",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [
                                                                                    14383
                                                                                ],
                                                                                "referencedDeclaration": 14383,
                                                                                "src": "2858:16:113",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                                                    "typeString": "function (uint256,uint256) returns (uint256)"
                                                                                }
                                                                            },
                                                                            "id": 14118,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "kind": "functionCall",
                                                                            "lValueRequested": false,
                                                                            "nameLocations": [],
                                                                            "names": [],
                                                                            "nodeType": "FunctionCall",
                                                                            "src": "2858:57:113",
                                                                            "tryCall": false,
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "id": 14119,
                                                                        "nodeType": "ExpressionStatement",
                                                                        "src": "2858:57:113"
                                                                    },
                                                                    {
                                                                        "id": 14120,
                                                                        "nodeType": "Break",
                                                                        "src": "2937:5:113"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                "id": 14124,
                                                "initializationExpression": {
                                                    "assignments": [
                                                        14084
                                                    ],
                                                    "declarations": [
                                                        {
                                                            "constant": false,
                                                            "id": 14084,
                                                            "mutability": "mutable",
                                                            "name": "time",
                                                            "nameLocation": "2414:4:113",
                                                            "nodeType": "VariableDeclaration",
                                                            "scope": 14124,
                                                            "src": "2406:12:113",
                                                            "stateVariable": false,
                                                            "storageLocation": "default",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "typeName": {
                                                                "id": 14083,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2406:7:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "visibility": "internal"
                                                        }
                                                    ],
                                                    "id": 14086,
                                                    "initialValue": {
                                                        "id": 14085,
                                                        "name": "_checkpointTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14038,
                                                        "src": "2421:15:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "VariableDeclarationStatement",
                                                    "src": "2406:30:113"
                                                },
                                                "loopExpression": {
                                                    "expression": {
                                                        "id": 14089,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "id": 14087,
                                                            "name": "time",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14084,
                                                            "src": "2472:4:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "+=",
                                                        "rightHandSide": {
                                                            "id": 14088,
                                                            "name": "_checkpointDuration",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17795,
                                                            "src": "2480:19:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2472:27:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 14090,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2472:27:113"
                                                },
                                                "nodeType": "ForStatement",
                                                "src": "2384:591:113"
                                            }
                                        ]
                                    },
                                    "id": 14126,
                                    "nodeType": "IfStatement",
                                    "src": "2241:744:113",
                                    "trueBody": {
                                        "id": 14082,
                                        "nodeType": "Block",
                                        "src": "2282:82:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 14077,
                                                            "name": "latestCheckpoint",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14053,
                                                            "src": "2313:16:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "id": 14078,
                                                                "name": "_pricePerVaultShare",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13014,
                                                                "src": "2331:19:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                    "typeString": "function () view returns (uint256)"
                                                                }
                                                            },
                                                            "id": 14079,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "2331:21:113",
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
                                                        "id": 14076,
                                                        "name": "_applyCheckpoint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            14383
                                                        ],
                                                        "referencedDeclaration": 14383,
                                                        "src": "2296:16:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 14080,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2296:57:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14081,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2296:57:113"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 14036,
                            "nodeType": "StructuredDocumentation",
                            "src": "1199:143:113",
                            "text": "@dev Attempts to mint a checkpoint with the specified checkpoint time.\n @param _checkpointTime The time of the checkpoint to create."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 14041,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 14040,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "1402:12:113"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71638,
                                    "src": "1402:12:113"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1402:12:113"
                            }
                        ],
                        "name": "_checkpoint",
                        "nameLocation": "1356:11:113",
                        "parameters": {
                            "id": 14039,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14038,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "1376:15:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14128,
                                    "src": "1368:23:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14037,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1368:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1367:25:113"
                        },
                        "returnParameters": {
                            "id": 14042,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1415:0:113"
                        },
                        "scope": 14459,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 14383,
                        "nodeType": "FunctionDefinition",
                        "src": "3253:7270:113",
                        "nodes": [],
                        "body": {
                            "id": 14382,
                            "nodeType": "Block",
                            "src": "3388:7135:113",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        14143
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14143,
                                            "mutability": "mutable",
                                            "name": "checkpoint_",
                                            "nameLocation": "3497:11:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "3466:42:113",
                                            "stateVariable": false,
                                            "storageLocation": "storage",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Checkpoint_$10361_storage_ptr",
                                                "typeString": "struct IHyperdrive.Checkpoint"
                                            },
                                            "typeName": {
                                                "id": 14142,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 14141,
                                                    "name": "IHyperdrive.Checkpoint",
                                                    "nameLocations": [
                                                        "3466:11:113",
                                                        "3478:10:113"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10361,
                                                    "src": "3466:22:113"
                                                },
                                                "referencedDeclaration": 10361,
                                                "src": "3466:22:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Checkpoint_$10361_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Checkpoint"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14147,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 14144,
                                            "name": "_checkpoints",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17836,
                                            "src": "3511:12:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                            }
                                        },
                                        "id": 14146,
                                        "indexExpression": {
                                            "id": 14145,
                                            "name": "_checkpointTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14131,
                                            "src": "3537:15:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "3511:51:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3466:96:113"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 14156,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            },
                                            "id": 14151,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 14148,
                                                    "name": "checkpoint_",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14143,
                                                    "src": "3589:11:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Checkpoint_$10361_storage_ptr",
                                                        "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                                                    }
                                                },
                                                "id": 14149,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3601:15:113",
                                                "memberName": "vaultSharePrice",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10360,
                                                "src": "3589:27:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 14150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3620:1:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3589:32:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 14155,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 14152,
                                                "name": "_checkpointTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14131,
                                                "src": "3637:15:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "expression": {
                                                    "id": 14153,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "3655:5:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 14154,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3661:9:113",
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "src": "3655:15:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3637:33:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "3589:81:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14161,
                                    "nodeType": "IfStatement",
                                    "src": "3572:168:113",
                                    "trueBody": {
                                        "id": 14160,
                                        "nodeType": "Block",
                                        "src": "3681:59:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 14157,
                                                        "name": "checkpoint_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14143,
                                                        "src": "3702:11:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$10361_storage_ptr",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                                                        }
                                                    },
                                                    "id": 14158,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3714:15:113",
                                                    "memberName": "vaultSharePrice",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10360,
                                                    "src": "3702:27:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "functionReturnParameters": 14138,
                                                "id": 14159,
                                                "nodeType": "Return",
                                                "src": "3695:34:113"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 14168,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 14162,
                                                "name": "checkpoint_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14143,
                                                "src": "3802:11:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Checkpoint_$10361_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                                                }
                                            },
                                            "id": 14164,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "3814:15:113",
                                            "memberName": "vaultSharePrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10360,
                                            "src": "3802:27:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "id": 14165,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14133,
                                                    "src": "3832:16:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14166,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3849:9:113",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "3832:26:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 14167,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3832:28:113",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "3802:58:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 14169,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3802:58:113"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 14171,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14133,
                                                "src": "3970:16:113",
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
                                            "id": 14170,
                                            "name": "_collectZombieInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13689,
                                            "src": "3947:22:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 14172,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3947:40:113",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "id": 14173,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3947:40:113"
                                },
                                {
                                    "assignments": [
                                        14175
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14175,
                                            "mutability": "mutable",
                                            "name": "openVaultSharePrice",
                                            "nameLocation": "4459:19:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "4451:27:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14174,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4451:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14182,
                                    "initialValue": {
                                        "expression": {
                                            "baseExpression": {
                                                "id": 14176,
                                                "name": "_checkpoints",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17836,
                                                "src": "4481:12:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                }
                                            },
                                            "id": 14180,
                                            "indexExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 14179,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 14177,
                                                    "name": "_checkpointTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14131,
                                                    "src": "4507:15:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 14178,
                                                    "name": "_positionDuration",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17798,
                                                    "src": "4525:17:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "4507:35:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "4481:71:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                                "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                            }
                                        },
                                        "id": 14181,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "4553:15:113",
                                        "memberName": "vaultSharePrice",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10360,
                                        "src": "4481:87:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4451:117:113"
                                },
                                {
                                    "assignments": [
                                        14184
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14184,
                                            "mutability": "mutable",
                                            "name": "shortAssetId",
                                            "nameLocation": "4586:12:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "4578:20:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14183,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4578:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14192,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 14187,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18265,
                                                        "src": "4636:7:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 14188,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4644:13:113",
                                                    "memberName": "AssetIdPrefix",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18012,
                                                    "src": "4636:21:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$18012_$",
                                                        "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                    }
                                                },
                                                "id": 14189,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "4658:5:113",
                                                "memberName": "Short",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18010,
                                                "src": "4636:27:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$18012",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                }
                                            },
                                            {
                                                "id": 14190,
                                                "name": "_checkpointTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14131,
                                                "src": "4677:15:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$18012",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 14185,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18265,
                                                "src": "4601:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 14186,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4609:13:113",
                                            "memberName": "encodeAssetId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18035,
                                            "src": "4601:21:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18012_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 14191,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4601:101:113",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4578:124:113"
                                },
                                {
                                    "assignments": [
                                        14194
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14194,
                                            "mutability": "mutable",
                                            "name": "maturedShortsAmount",
                                            "nameLocation": "4720:19:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "4712:27:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14193,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4712:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14198,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 14195,
                                            "name": "_totalSupply",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17871,
                                            "src": "4742:12:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                "typeString": "mapping(uint256 => uint256)"
                                            }
                                        },
                                        "id": 14197,
                                        "indexExpression": {
                                            "id": 14196,
                                            "name": "shortAssetId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14184,
                                            "src": "4755:12:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "4742:26:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4712:56:113"
                                },
                                {
                                    "assignments": [
                                        14200
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14200,
                                            "mutability": "mutable",
                                            "name": "positionsClosed",
                                            "nameLocation": "4783:15:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "4778:20:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 14199,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4778:4:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14201,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4778:20:113"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 14204,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 14202,
                                            "name": "maturedShortsAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14194,
                                            "src": "4812:19:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 14203,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "4834:1:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "4812:23:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14270,
                                    "nodeType": "IfStatement",
                                    "src": "4808:2275:113",
                                    "trueBody": {
                                        "id": 14269,
                                        "nodeType": "Block",
                                        "src": "4837:2246:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 14207,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14205,
                                                        "name": "positionsClosed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14200,
                                                        "src": "5008:15:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "74727565",
                                                        "id": 14206,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5026:4:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    },
                                                    "src": "5008:22:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 14208,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5008:22:113"
                                            },
                                            {
                                                "assignments": [
                                                    14210,
                                                    14212
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 14210,
                                                        "mutability": "mutable",
                                                        "name": "shareProceeds",
                                                        "nameLocation": "5197:13:113",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 14269,
                                                        "src": "5189:21:113",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 14209,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5189:7:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    },
                                                    {
                                                        "constant": false,
                                                        "id": 14212,
                                                        "mutability": "mutable",
                                                        "name": "governanceFee",
                                                        "nameLocation": "5236:13:113",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 14269,
                                                        "src": "5228:21:113",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 14211,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "5228:7:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 14219,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 14214,
                                                            "name": "maturedShortsAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14194,
                                                            "src": "5313:19:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14215,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14133,
                                                            "src": "5354:16:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14216,
                                                            "name": "openVaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14175,
                                                            "src": "5392:19:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 14217,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5433:5:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
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
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        ],
                                                        "id": 14213,
                                                        "name": "_calculateMaturedProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14458,
                                                        "src": "5266:25:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,bool) view returns (uint256,uint256)"
                                                        }
                                                    },
                                                    "id": 14218,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5266:190:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256)"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "5171:285:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14222,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14220,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17848,
                                                        "src": "5470:22:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 14221,
                                                        "name": "governanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14212,
                                                        "src": "5496:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "5470:39:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14223,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5470:39:113"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 14225,
                                                            "name": "maturedShortsAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14194,
                                                            "src": "5557:19:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "30",
                                                            "id": 14226,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "5594:1:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "id": 14227,
                                                            "name": "shareProceeds",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14210,
                                                            "src": "5613:13:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "expression": {
                                                                    "id": 14228,
                                                                    "name": "shareProceeds",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 14210,
                                                                    "src": "5644:13:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 14229,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5658:8:113",
                                                                "memberName": "toInt256",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 21935,
                                                                "src": "5644:22:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                    "typeString": "function (uint256) pure returns (int256)"
                                                                }
                                                            },
                                                            "id": 14230,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5644:24:113",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14231,
                                                            "name": "_checkpointTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14131,
                                                            "src": "5732:15:113",
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
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
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
                                                        "id": 14224,
                                                        "name": "_applyCloseShort",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17453,
                                                        "src": "5523:16:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                                                            "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                                                        }
                                                    },
                                                    "id": 14232,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5523:238:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 14233,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5523:238:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14236,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14234,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14210,
                                                        "src": "5995:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 14235,
                                                        "name": "governanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14212,
                                                        "src": "6012:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "5995:30:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14237,
                                                "nodeType": "ExpressionStatement",
                                                "src": "5995:30:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14248,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14238,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14210,
                                                        "src": "6407:13:113",
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
                                                                "id": 14241,
                                                                "name": "maturedShortsAmount",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14194,
                                                                "src": "6482:19:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 14242,
                                                                "name": "shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14210,
                                                                "src": "6519:13:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 14243,
                                                                "name": "openVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14175,
                                                                "src": "6550:19:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 14244,
                                                                "name": "_vaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14133,
                                                                "src": "6587:16:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 14245,
                                                                "name": "_vaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14133,
                                                                "src": "6621:16:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 14246,
                                                                "name": "_flatFee",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17807,
                                                                "src": "6655:8:113",
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
                                                            "expression": {
                                                                "id": 14239,
                                                                "name": "HyperdriveMath",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 19813,
                                                                "src": "6423:14:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                                    "typeString": "type(library HyperdriveMath)"
                                                                }
                                                            },
                                                            "id": 14240,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6438:26:113",
                                                            "memberName": "calculateShortProceedsDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 19464,
                                                            "src": "6423:41:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 14247,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6423:254:113",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6407:270:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14249,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6407:270:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14259,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 14250,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17826,
                                                            "src": "6877:12:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 14252,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "6890:18:113",
                                                        "memberName": "zombieBaseProceeds",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10353,
                                                        "src": "6877:31:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint112",
                                                            "typeString": "uint112"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 14255,
                                                                        "name": "_vaultSharePrice",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14133,
                                                                        "src": "6951:16:113",
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
                                                                        "id": 14253,
                                                                        "name": "shareProceeds",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14210,
                                                                        "src": "6912:13:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 14254,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6943:7:113",
                                                                    "memberName": "mulDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18345,
                                                                    "src": "6912:38:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 14256,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6912:56:113",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 14257,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6986:9:113",
                                                            "memberName": "toUint112",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 21792,
                                                            "src": "6912:83:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint112)"
                                                            }
                                                        },
                                                        "id": 14258,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6912:85:113",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint112",
                                                            "typeString": "uint112"
                                                        }
                                                    },
                                                    "src": "6877:120:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint112",
                                                        "typeString": "uint112"
                                                    }
                                                },
                                                "id": 14260,
                                                "nodeType": "ExpressionStatement",
                                                "src": "6877:120:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14267,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 14261,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17826,
                                                            "src": "7011:12:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 14263,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "7024:19:113",
                                                        "memberName": "zombieShareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10356,
                                                        "src": "7011:32:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "id": 14264,
                                                                "name": "shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14210,
                                                                "src": "7047:13:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 14265,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7061:9:113",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 21822,
                                                            "src": "7047:23:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
                                                            }
                                                        },
                                                        "id": 14266,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7047:25:113",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "7011:61:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 14268,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7011:61:113"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        14272
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14272,
                                            "mutability": "mutable",
                                            "name": "longAssetId",
                                            "nameLocation": "7209:11:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "7201:19:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14271,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7201:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14280,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 14275,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18265,
                                                        "src": "7258:7:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 14276,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7266:13:113",
                                                    "memberName": "AssetIdPrefix",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18012,
                                                    "src": "7258:21:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$18012_$",
                                                        "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                    }
                                                },
                                                "id": 14277,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "7280:4:113",
                                                "memberName": "Long",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18009,
                                                "src": "7258:26:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$18012",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                }
                                            },
                                            {
                                                "id": 14278,
                                                "name": "_checkpointTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14131,
                                                "src": "7298:15:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$18012",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 14273,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18265,
                                                "src": "7223:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 14274,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7231:13:113",
                                            "memberName": "encodeAssetId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18035,
                                            "src": "7223:21:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18012_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 14279,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7223:100:113",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7201:122:113"
                                },
                                {
                                    "assignments": [
                                        14282
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14282,
                                            "mutability": "mutable",
                                            "name": "maturedLongsAmount",
                                            "nameLocation": "7341:18:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "7333:26:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14281,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7333:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14286,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 14283,
                                            "name": "_totalSupply",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17871,
                                            "src": "7362:12:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                "typeString": "mapping(uint256 => uint256)"
                                            }
                                        },
                                        "id": 14285,
                                        "indexExpression": {
                                            "id": 14284,
                                            "name": "longAssetId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14272,
                                            "src": "7375:11:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "7362:25:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7333:54:113"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 14289,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 14287,
                                            "name": "maturedLongsAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14282,
                                            "src": "7401:18:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 14288,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "7422:1:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "7401:22:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14347,
                                    "nodeType": "IfStatement",
                                    "src": "7397:1597:113",
                                    "trueBody": {
                                        "id": 14346,
                                        "nodeType": "Block",
                                        "src": "7425:1569:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 14292,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14290,
                                                        "name": "positionsClosed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14200,
                                                        "src": "7595:15:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "74727565",
                                                        "id": 14291,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "7613:4:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    },
                                                    "src": "7595:22:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 14293,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7595:22:113"
                                            },
                                            {
                                                "assignments": [
                                                    14295,
                                                    14297
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 14295,
                                                        "mutability": "mutable",
                                                        "name": "shareProceeds",
                                                        "nameLocation": "7783:13:113",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 14346,
                                                        "src": "7775:21:113",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 14294,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "7775:7:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    },
                                                    {
                                                        "constant": false,
                                                        "id": 14297,
                                                        "mutability": "mutable",
                                                        "name": "governanceFee",
                                                        "nameLocation": "7822:13:113",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 14346,
                                                        "src": "7814:21:113",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 14296,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "7814:7:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 14304,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 14299,
                                                            "name": "maturedLongsAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14282,
                                                            "src": "7899:18:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14300,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14133,
                                                            "src": "7939:16:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14301,
                                                            "name": "openVaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14175,
                                                            "src": "7977:19:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "74727565",
                                                            "id": 14302,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "8018:4:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "true"
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
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        ],
                                                        "id": 14298,
                                                        "name": "_calculateMaturedProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14458,
                                                        "src": "7852:25:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,bool) view returns (uint256,uint256)"
                                                        }
                                                    },
                                                    "id": 14303,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7852:188:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256)"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "7757:283:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14307,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14305,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17848,
                                                        "src": "8054:22:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 14306,
                                                        "name": "governanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14297,
                                                        "src": "8080:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8054:39:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14308,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8054:39:113"
                                            },
                                            {
                                                "assignments": [
                                                    14310
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 14310,
                                                        "mutability": "mutable",
                                                        "name": "checkpointTime",
                                                        "nameLocation": "8115:14:113",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 14346,
                                                        "src": "8107:22:113",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 14309,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "8107:7:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 14312,
                                                "initialValue": {
                                                    "id": 14311,
                                                    "name": "_checkpointTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14131,
                                                    "src": "8132:15:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "8107:40:113"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 14314,
                                                            "name": "maturedLongsAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14282,
                                                            "src": "8224:18:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "30",
                                                            "id": 14315,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "8260:1:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "id": 14316,
                                                            "name": "shareProceeds",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14295,
                                                            "src": "8279:13:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "expression": {
                                                                    "id": 14317,
                                                                    "name": "shareProceeds",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 14295,
                                                                    "src": "8310:13:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 14318,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "8324:8:113",
                                                                "memberName": "toInt256",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 21935,
                                                                "src": "8310:22:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                    "typeString": "function (uint256) pure returns (int256)"
                                                                }
                                                            },
                                                            "id": 14319,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "8310:24:113",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14320,
                                                            "name": "checkpointTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14310,
                                                            "src": "8398:14:113",
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
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
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
                                                        "id": 14313,
                                                        "name": "_applyCloseLong",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16037,
                                                        "src": "8191:15:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                                                            "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                                                        }
                                                    },
                                                    "id": 14321,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8191:235:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 14322,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8191:235:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14325,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14323,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14295,
                                                        "src": "8560:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "-=",
                                                    "rightHandSide": {
                                                        "id": 14324,
                                                        "name": "governanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14297,
                                                        "src": "8577:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8560:30:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14326,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8560:30:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14336,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 14327,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17826,
                                                            "src": "8788:12:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 14329,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "8801:18:113",
                                                        "memberName": "zombieBaseProceeds",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10353,
                                                        "src": "8788:31:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint112",
                                                            "typeString": "uint112"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 14332,
                                                                        "name": "_vaultSharePrice",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14133,
                                                                        "src": "8862:16:113",
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
                                                                        "id": 14330,
                                                                        "name": "shareProceeds",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14295,
                                                                        "src": "8823:13:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 14331,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "8854:7:113",
                                                                    "memberName": "mulDown",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 18345,
                                                                    "src": "8823:38:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 14333,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "8823:56:113",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 14334,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8897:9:113",
                                                            "memberName": "toUint112",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 21792,
                                                            "src": "8823:83:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint112)"
                                                            }
                                                        },
                                                        "id": 14335,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8823:85:113",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint112",
                                                            "typeString": "uint112"
                                                        }
                                                    },
                                                    "src": "8788:120:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint112",
                                                        "typeString": "uint112"
                                                    }
                                                },
                                                "id": 14337,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8788:120:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14344,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 14338,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17826,
                                                            "src": "8922:12:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 14340,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "8935:19:113",
                                                        "memberName": "zombieShareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10356,
                                                        "src": "8922:32:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "id": 14341,
                                                                "name": "shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14295,
                                                                "src": "8958:13:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 14342,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8972:9:113",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 21822,
                                                            "src": "8958:23:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
                                                            }
                                                        },
                                                        "id": 14343,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8958:25:113",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "8922:61:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 14345,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8922:61:113"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "id": 14348,
                                        "name": "positionsClosed",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14200,
                                        "src": "9145:15:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14365,
                                    "nodeType": "IfStatement",
                                    "src": "9141:701:113",
                                    "trueBody": {
                                        "id": 14364,
                                        "nodeType": "Block",
                                        "src": "9162:680:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            },
                                                            "id": 14356,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 14350,
                                                                        "name": "maturedLongsAmount",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14282,
                                                                        "src": "9402:18:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 14351,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9421:8:113",
                                                                    "memberName": "toInt256",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21935,
                                                                    "src": "9402:27:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256) pure returns (int256)"
                                                                    }
                                                                },
                                                                "id": 14352,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9402:29:113",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 14353,
                                                                        "name": "maturedShortsAmount",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14194,
                                                                        "src": "9434:19:113",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 14354,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9454:8:113",
                                                                    "memberName": "toInt256",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21935,
                                                                    "src": "9434:28:113",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256) pure returns (int256)"
                                                                    }
                                                                },
                                                                "id": 14355,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9434:30:113",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "src": "9402:62:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "30",
                                                            "id": 14357,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "9482:1:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            }
                                                        ],
                                                        "id": 14349,
                                                        "name": "_updateLongExposure",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13509,
                                                        "src": "9365:19:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                                                            "typeString": "function (int256,int256)"
                                                        }
                                                    },
                                                    "id": 14358,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9365:132:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 14359,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9365:132:113"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 14361,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14133,
                                                            "src": "9814:16:113",
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
                                                        "id": 14360,
                                                        "name": "_distributeExcessIdleSafe",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15284,
                                                        "src": "9788:25:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (uint256) returns (bool)"
                                                        }
                                                    },
                                                    "id": 14362,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9788:43:113",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 14363,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9788:43:113"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        14367,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14367,
                                            "mutability": "mutable",
                                            "name": "lpSharePrice",
                                            "nameLocation": "10229:12:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14382,
                                            "src": "10221:20:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14366,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10221:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 14371,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 14369,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14133,
                                                "src": "10274:16:113",
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
                                            "id": 14368,
                                            "name": "_calculateLPSharePriceSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13805,
                                            "src": "10247:26:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                                                "typeString": "function (uint256) view returns (uint256,bool)"
                                            }
                                        },
                                        "id": 14370,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10247:44:113",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10220:71:113"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 14373,
                                                "name": "_checkpointTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14131,
                                                "src": "10336:15:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14374,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14133,
                                                "src": "10365:16:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14375,
                                                "name": "maturedShortsAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14194,
                                                "src": "10395:19:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14376,
                                                "name": "maturedLongsAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14282,
                                                "src": "10428:18:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14377,
                                                "name": "lpSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14367,
                                                "src": "10460:12:113",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 14372,
                                            "name": "CreateCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11163,
                                            "src": "10306:16:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256)"
                                            }
                                        },
                                        "id": 14378,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10306:176:113",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14379,
                                    "nodeType": "EmitStatement",
                                    "src": "10301:181:113"
                                },
                                {
                                    "expression": {
                                        "id": 14380,
                                        "name": "_vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14133,
                                        "src": "10500:16:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 14138,
                                    "id": 14381,
                                    "nodeType": "Return",
                                    "src": "10493:23:113"
                                }
                            ]
                        },
                        "baseFunctions": [
                            13134
                        ],
                        "documentation": {
                            "id": 14129,
                            "nodeType": "StructuredDocumentation",
                            "src": "2997:251:113",
                            "text": "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _vaultSharePrice The current vault share price.\n @return The opening vault share price of the latest checkpoint."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyCheckpoint",
                        "nameLocation": "3262:16:113",
                        "overrides": {
                            "id": 14135,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3361:8:113"
                        },
                        "parameters": {
                            "id": 14134,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14131,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "3296:15:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14383,
                                    "src": "3288:23:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14130,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3288:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14133,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "3329:16:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14383,
                                    "src": "3321:24:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14132,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3321:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3278:73:113"
                        },
                        "returnParameters": {
                            "id": 14138,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14137,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14383,
                                    "src": "3379:7:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14136,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3379:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3378:9:113"
                        },
                        "scope": 14459,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 14458,
                        "nodeType": "FunctionDefinition",
                        "src": "11087:2398:113",
                        "nodes": [],
                        "body": {
                            "id": 14457,
                            "nodeType": "Block",
                            "src": "11320:2165:113",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 14404,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 14399,
                                            "name": "shareProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14395,
                                            "src": "11664:13:113",
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
                                                    "id": 14402,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14388,
                                                    "src": "11700:16:113",
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
                                                    "id": 14400,
                                                    "name": "_bondAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14386,
                                                    "src": "11680:11:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14401,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11692:7:113",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18363,
                                                "src": "11680:19:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 14403,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11680:37:113",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "11664:53:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 14405,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11664:53:113"
                                },
                                {
                                    "assignments": [
                                        14407
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14407,
                                            "mutability": "mutable",
                                            "name": "flatFee",
                                            "nameLocation": "11735:7:113",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14457,
                                            "src": "11727:15:113",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14406,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11727:7:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14412,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 14410,
                                                "name": "_flatFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17807,
                                                "src": "11767:8:113",
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
                                                "id": 14408,
                                                "name": "shareProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14395,
                                                "src": "11745:13:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 14409,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "11759:7:113",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18345,
                                            "src": "11745:21:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 14411,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11745:31:113",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11727:49:113"
                                },
                                {
                                    "expression": {
                                        "id": 14418,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 14413,
                                            "name": "governanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14397,
                                            "src": "11786:13:113",
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
                                                    "id": 14416,
                                                    "name": "_governanceLPFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17810,
                                                    "src": "11818:16:113",
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
                                                    "id": 14414,
                                                    "name": "flatFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14407,
                                                    "src": "11802:7:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14415,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11810:7:113",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18345,
                                                "src": "11802:15:113",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 14417,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11802:33:113",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "11786:49:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 14419,
                                    "nodeType": "ExpressionStatement",
                                    "src": "11786:49:113"
                                },
                                {
                                    "condition": {
                                        "id": 14420,
                                        "name": "_isLong",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14392,
                                        "src": "12262:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 14434,
                                        "nodeType": "Block",
                                        "src": "12750:65:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 14432,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14428,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14395,
                                                        "src": "12764:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 14431,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 14429,
                                                            "name": "flatFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14407,
                                                            "src": "12781:7:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 14430,
                                                            "name": "governanceFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14397,
                                                            "src": "12791:13:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "12781:23:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "12764:40:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14433,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12764:40:113"
                                            }
                                        ]
                                    },
                                    "id": 14435,
                                    "nodeType": "IfStatement",
                                    "src": "12258:557:113",
                                    "trueBody": {
                                        "id": 14427,
                                        "nodeType": "Block",
                                        "src": "12271:65:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 14425,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14421,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14395,
                                                        "src": "12285:13:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "-=",
                                                    "rightHandSide": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 14424,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 14422,
                                                            "name": "flatFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14407,
                                                            "src": "12302:7:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 14423,
                                                            "name": "governanceFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14397,
                                                            "src": "12312:13:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "12302:23:113",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "12285:40:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14426,
                                                "nodeType": "ExpressionStatement",
                                                "src": "12285:40:113"
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
                                        "id": 14438,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 14436,
                                            "name": "_vaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14388,
                                            "src": "13014:16:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 14437,
                                            "name": "_openVaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14390,
                                            "src": "13033:20:113",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "13014:39:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14456,
                                    "nodeType": "IfStatement",
                                    "src": "13010:469:113",
                                    "trueBody": {
                                        "id": 14455,
                                        "nodeType": "Block",
                                        "src": "13055:424:113",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 14445,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14439,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14395,
                                                        "src": "13132:13:113",
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
                                                                "id": 14442,
                                                                "name": "_vaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14388,
                                                                "src": "13190:16:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 14443,
                                                                "name": "_openVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14390,
                                                                "src": "13224:20:113",
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
                                                                "id": 14440,
                                                                "name": "shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14395,
                                                                "src": "13148:13:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 14441,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "13162:10:113",
                                                            "memberName": "mulDivDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18327,
                                                            "src": "13148:24:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 14444,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "13148:110:113",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "13132:126:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14446,
                                                "nodeType": "ExpressionStatement",
                                                "src": "13132:126:113"
                                            },
                                            {
                                                "expression": {
                                                    "id": 14453,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 14447,
                                                        "name": "governanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14397,
                                                        "src": "13342:13:113",
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
                                                                "id": 14450,
                                                                "name": "_vaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14388,
                                                                "src": "13400:16:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 14451,
                                                                "name": "_openVaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14390,
                                                                "src": "13434:20:113",
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
                                                                "id": 14448,
                                                                "name": "governanceFee",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14397,
                                                                "src": "13358:13:113",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 14449,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "13372:10:113",
                                                            "memberName": "mulDivDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18327,
                                                            "src": "13358:24:113",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 14452,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "13358:110:113",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "13342:126:113",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14454,
                                                "nodeType": "ExpressionStatement",
                                                "src": "13342:126:113"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 14384,
                            "nodeType": "StructuredDocumentation",
                            "src": "10529:553:113",
                            "text": "@dev Calculates the proceeds of the holders of a given position at\n      maturity.\n @param _bondAmount The bond amount of the position.\n @param _vaultSharePrice The current vault share price.\n @param _openVaultSharePrice The vault share price at the beginning of\n        the position's checkpoint.\n @param _isLong A flag indicating whether or not the position is a long.\n @return shareProceeds The proceeds of the holders in shares.\n @return governanceFee The fee paid to governance in shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateMaturedProceeds",
                        "nameLocation": "11096:25:113",
                        "parameters": {
                            "id": 14393,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14386,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "11139:11:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14458,
                                    "src": "11131:19:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14385,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11131:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14388,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "11168:16:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14458,
                                    "src": "11160:24:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14387,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11160:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14390,
                                    "mutability": "mutable",
                                    "name": "_openVaultSharePrice",
                                    "nameLocation": "11202:20:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14458,
                                    "src": "11194:28:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14389,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11194:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14392,
                                    "mutability": "mutable",
                                    "name": "_isLong",
                                    "nameLocation": "11237:7:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14458,
                                    "src": "11232:12:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 14391,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11232:4:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11121:129:113"
                        },
                        "returnParameters": {
                            "id": 14398,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14395,
                                    "mutability": "mutable",
                                    "name": "shareProceeds",
                                    "nameLocation": "11282:13:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14458,
                                    "src": "11274:21:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14394,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11274:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14397,
                                    "mutability": "mutable",
                                    "name": "governanceFee",
                                    "nameLocation": "11305:13:113",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14458,
                                    "src": "11297:21:113",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14396,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11297:7:113",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11273:46:113"
                        },
                        "scope": 14459,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 14019,
                            "name": "IHyperdriveEvents",
                            "nameLocations": [
                                "1006:17:113"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11205,
                            "src": "1006:17:113"
                        },
                        "id": 14020,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1006:17:113"
                    },
                    {
                        "baseName": {
                            "id": 14021,
                            "name": "HyperdriveBase",
                            "nameLocations": [
                                "1029:14:113"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13995,
                            "src": "1029:14:113"
                        },
                        "id": 14022,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1029:14:113"
                    },
                    {
                        "baseName": {
                            "id": 14023,
                            "name": "HyperdriveLong",
                            "nameLocations": [
                                "1049:14:113"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 16295,
                            "src": "1049:14:113"
                        },
                        "id": 14024,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1049:14:113"
                    },
                    {
                        "baseName": {
                            "id": 14025,
                            "name": "HyperdriveShort",
                            "nameLocations": [
                                "1069:15:113"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17765,
                            "src": "1069:15:113"
                        },
                        "id": 14026,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1069:15:113"
                    }
                ],
                "canonicalName": "HyperdriveCheckpoint",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 14018,
                    "nodeType": "StructuredDocumentation",
                    "src": "654:306:113",
                    "text": "@author DELV\n @notice Implements the checkpoint accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    14459,
                    17765,
                    16295,
                    15361,
                    16779,
                    13995,
                    17990,
                    71674,
                    11205,
                    11777
                ],
                "name": "HyperdriveCheckpoint",
                "nameLocation": "978:20:113",
                "scope": 14460,
                "usedErrors": [
                    71619
                ],
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
    "id": 113
};
