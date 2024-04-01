export const HyperdriveLong = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveLong\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"Implements the long accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveLong.sol\":\"HyperdriveLong\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "contracts/src/internal/HyperdriveLong.sol": "HyperdriveLong"
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
        "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
        "id": 16296,
        "exportedSymbols": {
            "AssetId": [
                18265
            ],
            "Errors": [
                18290
            ],
            "FixedPointMath": [
                19065
            ],
            "HyperdriveLP": [
                15361
            ],
            "HyperdriveLong": [
                16295
            ],
            "HyperdriveMath": [
                19813
            ],
            "IHyperdrive": [
                10676
            ],
            "IHyperdriveEvents": [
                11205
            ],
            "ONE": [
                18299
            ],
            "SafeCast": [
                21936
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:27575:115",
        "nodes": [
            {
                "id": 15363,
                "nodeType": "PragmaDirective",
                "src": "39:23:115",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 15365,
                "nodeType": "ImportDirective",
                "src": "64:60:115",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 10677,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15364,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10676,
                            "src": "73:11:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15367,
                "nodeType": "ImportDirective",
                "src": "125:72:115",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
                "file": "../interfaces/IHyperdriveEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 11206,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15366,
                            "name": "IHyperdriveEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11205,
                            "src": "134:17:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15369,
                "nodeType": "ImportDirective",
                "src": "198:51:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 18266,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15368,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18265,
                            "src": "207:7:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15371,
                "nodeType": "ImportDirective",
                "src": "250:49:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/Errors.sol",
                "file": "../libraries/Errors.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 18291,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15370,
                            "name": "Errors",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18290,
                            "src": "259:6:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15374,
                "nodeType": "ImportDirective",
                "src": "300:70:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 19066,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15372,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19065,
                            "src": "309:14:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 15373,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18299,
                            "src": "325:3:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15376,
                "nodeType": "ImportDirective",
                "src": "371:65:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 19814,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15375,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19813,
                            "src": "380:14:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15378,
                "nodeType": "ImportDirective",
                "src": "437:53:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "../libraries/SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 21937,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15377,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21936,
                            "src": "446:8:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15380,
                "nodeType": "ImportDirective",
                "src": "491:50:115",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
                "file": "./HyperdriveLP.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16296,
                "sourceUnit": 15362,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15379,
                            "name": "HyperdriveLP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15361,
                            "src": "500:12:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 16295,
                "nodeType": "ContractDefinition",
                "src": "869:26744:115",
                "nodes": [
                    {
                        "id": 15388,
                        "nodeType": "UsingForDirective",
                        "src": "943:33:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15386,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "949:14:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19065,
                            "src": "949:14:115"
                        },
                        "typeName": {
                            "id": 15387,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "968:7:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 15391,
                        "nodeType": "UsingForDirective",
                        "src": "981:32:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15389,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "987:14:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19065,
                            "src": "987:14:115"
                        },
                        "typeName": {
                            "id": 15390,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1006:6:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 15394,
                        "nodeType": "UsingForDirective",
                        "src": "1018:27:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15392,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1024:8:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 21936,
                            "src": "1024:8:115"
                        },
                        "typeName": {
                            "id": 15393,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1037:7:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 15397,
                        "nodeType": "UsingForDirective",
                        "src": "1050:26:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15395,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1056:8:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 21936,
                            "src": "1056:8:115"
                        },
                        "typeName": {
                            "id": 15396,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1069:6:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 15579,
                        "nodeType": "FunctionDefinition",
                        "src": "1849:3714:115",
                        "nodes": [],
                        "body": {
                            "id": 15578,
                            "nodeType": "Block",
                            "src": "2134:3429:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15418,
                                            "name": "_checkMessageValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13060,
                                            "src": "2194:18:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$__$",
                                                "typeString": "function () view"
                                            }
                                        },
                                        "id": 15419,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2194:20:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15420,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2194:20:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15422,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15407,
                                                "src": "2293:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15421,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13082,
                                            "src": "2279:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10526_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 15423,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2279:23:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15424,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2279:23:115"
                                },
                                {
                                    "assignments": [
                                        15426,
                                        15428
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15426,
                                            "mutability": "mutable",
                                            "name": "sharesDeposited",
                                            "nameLocation": "2366:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "2358:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15425,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2358:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15428,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "2391:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "2383:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15427,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2383:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15433,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15430,
                                                "name": "_amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15400,
                                                "src": "2432:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15431,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15407,
                                                "src": "2453:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
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
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15429,
                                            "name": "_deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12940,
                                            "src": "2410:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 15432,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2410:61:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2357:114:115"
                                },
                                {
                                    "assignments": [
                                        15435
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15435,
                                            "mutability": "mutable",
                                            "name": "baseDeposited",
                                            "nameLocation": "3032:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "3024:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15434,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3024:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15440,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15438,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15428,
                                                "src": "3072:15:115",
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
                                                "id": 15436,
                                                "name": "sharesDeposited",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15426,
                                                "src": "3048:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15437,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3064:7:115",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18345,
                                            "src": "3048:23:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 15439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3048:40:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3024:64:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15443,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15441,
                                            "name": "baseDeposited",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15435,
                                            "src": "3102:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15442,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17822,
                                            "src": "3118:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3102:41:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15450,
                                    "nodeType": "IfStatement",
                                    "src": "3098:117:115",
                                    "trueBody": {
                                        "id": 15449,
                                        "nodeType": "Block",
                                        "src": "3145:70:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15444,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "3166:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15446,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3178:24:115",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10589,
                                                        "src": "3166:36:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15447,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3166:38:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15448,
                                                "nodeType": "RevertStatement",
                                                "src": "3159:45:115"
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
                                        "id": 15453,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15451,
                                            "name": "vaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15428,
                                            "src": "3228:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15452,
                                            "name": "_minVaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15404,
                                            "src": "3246:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3228:37:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15460,
                                    "nodeType": "IfStatement",
                                    "src": "3224:106:115",
                                    "trueBody": {
                                        "id": 15459,
                                        "nodeType": "Block",
                                        "src": "3267:63:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15454,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "3288:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15456,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3300:17:115",
                                                        "memberName": "MinimumSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10586,
                                                        "src": "3288:29:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15457,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3288:31:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15458,
                                                "nodeType": "RevertStatement",
                                                "src": "3281:38:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15462
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15462,
                                            "mutability": "mutable",
                                            "name": "latestCheckpoint",
                                            "nameLocation": "3381:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "3373:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15461,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3373:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15465,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15463,
                                            "name": "_latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13220,
                                            "src": "3400:17:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 15464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3400:19:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3373:46:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15467,
                                                "name": "latestCheckpoint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15462,
                                                "src": "3446:16:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15468,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15428,
                                                "src": "3464:15:115",
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
                                            "id": 15466,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13134,
                                            "src": "3429:16:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 15469,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3429:51:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15470,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3429:51:115"
                                },
                                {
                                    "assignments": [
                                        15472
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15472,
                                            "mutability": "mutable",
                                            "name": "shareReservesDelta",
                                            "nameLocation": "3750:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "3742:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15471,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3742:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15473,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3742:26:115"
                                },
                                {
                                    "assignments": [
                                        15475
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15475,
                                            "mutability": "mutable",
                                            "name": "totalGovernanceFee",
                                            "nameLocation": "3786:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "3778:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15474,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3778:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15476,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3778:26:115"
                                },
                                {
                                    "expression": {
                                        "id": 15485,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 15477,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15472,
                                                    "src": "3828:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15478,
                                                    "name": "bondProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15416,
                                                    "src": "3860:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15479,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15475,
                                                    "src": "3886:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 15480,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "3814:100:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 15482,
                                                    "name": "sharesDeposited",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15426,
                                                    "src": "3936:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15483,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15428,
                                                    "src": "3953:15:115",
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
                                                "id": 15481,
                                                "name": "_calculateOpenLong",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16156,
                                                "src": "3917:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) view returns (uint256,uint256,uint256)"
                                                }
                                            },
                                            "id": 15484,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3917:52:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256)"
                                            }
                                        },
                                        "src": "3814:155:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15486,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3814:155:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15489,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15487,
                                            "name": "bondProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15416,
                                            "src": "4029:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15488,
                                            "name": "_minOutput",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15402,
                                            "src": "4044:10:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4029:25:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15496,
                                    "nodeType": "IfStatement",
                                    "src": "4025:88:115",
                                    "trueBody": {
                                        "id": 15495,
                                        "nodeType": "Block",
                                        "src": "4056:57:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15490,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "4077:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15492,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4089:11:115",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10598,
                                                        "src": "4077:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15493,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4077:25:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15494,
                                                "nodeType": "RevertStatement",
                                                "src": "4070:32:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 15499,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15497,
                                            "name": "_governanceFeesAccrued",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17848,
                                            "src": "4164:22:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 15498,
                                            "name": "totalGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15475,
                                            "src": "4190:18:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4164:44:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15500,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4164:44:115"
                                },
                                {
                                    "expression": {
                                        "id": 15505,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15501,
                                            "name": "maturityTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15414,
                                            "src": "4264:12:115",
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
                                            "id": 15504,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15502,
                                                "name": "latestCheckpoint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15462,
                                                "src": "4279:16:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "id": 15503,
                                                "name": "_positionDuration",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17798,
                                                "src": "4298:17:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "4279:36:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4264:51:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15506,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4264:51:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15508,
                                                "name": "shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15472,
                                                "src": "4353:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15509,
                                                "name": "bondProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15416,
                                                "src": "4385:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15510,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15428,
                                                "src": "4411:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15511,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15414,
                                                "src": "4440:12:115",
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
                                            "id": 15507,
                                            "name": "_applyOpenLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15900,
                                            "src": "4325:14:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,uint256,uint256,uint256)"
                                            }
                                        },
                                        "id": 15512,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4325:137:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15513,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4325:137:115"
                                },
                                {
                                    "assignments": [
                                        15515
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15515,
                                            "mutability": "mutable",
                                            "name": "assetId",
                                            "nameLocation": "4554:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "4546:15:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15514,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4546:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15523,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 15518,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18265,
                                                        "src": "4599:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 15519,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4607:13:115",
                                                    "memberName": "AssetIdPrefix",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18012,
                                                    "src": "4599:21:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$18012_$",
                                                        "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                    }
                                                },
                                                "id": 15520,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "4621:4:115",
                                                "memberName": "Long",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18009,
                                                "src": "4599:26:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$18012",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                }
                                            },
                                            {
                                                "id": 15521,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15414,
                                                "src": "4639:12:115",
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
                                                "id": 15516,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18265,
                                                "src": "4564:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 15517,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4572:13:115",
                                            "memberName": "encodeAssetId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18035,
                                            "src": "4564:21:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18012_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 15522,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4564:97:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4546:115:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15525,
                                                "name": "assetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15515,
                                                "src": "4677:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15526,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15407,
                                                    "src": "4686:8:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15527,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4695:11:115",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10519,
                                                "src": "4686:20:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15528,
                                                "name": "bondProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15416,
                                                "src": "4708:12:115",
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 15524,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16569,
                                            "src": "4671:5:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15529,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4671:50:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15530,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4671:50:115"
                                },
                                {
                                    "assignments": [
                                        15532
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15532,
                                            "mutability": "mutable",
                                            "name": "amount",
                                            "nameLocation": "4775:6:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "4767:14:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15531,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4767:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15534,
                                    "initialValue": {
                                        "id": 15533,
                                        "name": "_amount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15400,
                                        "src": "4784:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4767:24:115"
                                },
                                {
                                    "assignments": [
                                        15536
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15536,
                                            "mutability": "mutable",
                                            "name": "maturityTime_",
                                            "nameLocation": "4840:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "4832:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15535,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4832:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15538,
                                    "initialValue": {
                                        "id": 15537,
                                        "name": "maturityTime",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15414,
                                        "src": "4856:12:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4832:36:115"
                                },
                                {
                                    "assignments": [
                                        15540
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15540,
                                            "mutability": "mutable",
                                            "name": "bondProceeds_",
                                            "nameLocation": "4917:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "4909:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15539,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4909:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15542,
                                    "initialValue": {
                                        "id": 15541,
                                        "name": "bondProceeds",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15416,
                                        "src": "4933:12:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4909:36:115"
                                },
                                {
                                    "assignments": [
                                        15544
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15544,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice_",
                                            "nameLocation": "4994:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "4986:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15543,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4986:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15546,
                                    "initialValue": {
                                        "id": 15545,
                                        "name": "vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15428,
                                        "src": "5013:15:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4986:42:115"
                                },
                                {
                                    "assignments": [
                                        15551
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15551,
                                            "mutability": "mutable",
                                            "name": "options",
                                            "nameLocation": "5098:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15578,
                                            "src": "5069:36:115",
                                            "stateVariable": false,
                                            "storageLocation": "calldata",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options"
                                            },
                                            "typeName": {
                                                "id": 15550,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 15549,
                                                    "name": "IHyperdrive.Options",
                                                    "nameLocations": [
                                                        "5069:11:115",
                                                        "5081:7:115"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10526,
                                                    "src": "5069:19:115"
                                                },
                                                "referencedDeclaration": 10526,
                                                "src": "5069:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Options"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15553,
                                    "initialValue": {
                                        "id": 15552,
                                        "name": "_options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15407,
                                        "src": "5108:8:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                            "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5069:47:115"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15555,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15551,
                                                    "src": "5184:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15556,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5192:11:115",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10519,
                                                "src": "5184:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15557,
                                                "name": "assetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15515,
                                                "src": "5217:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15558,
                                                "name": "maturityTime_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15536,
                                                "src": "5238:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15560,
                                                        "name": "amount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15532,
                                                        "src": "5290:6:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15561,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15544,
                                                        "src": "5298:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15562,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15551,
                                                        "src": "5316:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
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
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15559,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13942,
                                                    "src": "5265:24:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15563,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5265:59:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15565,
                                                        "name": "amount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15532,
                                                        "src": "5386:6:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15566,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15544,
                                                        "src": "5394:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15567,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15551,
                                                        "src": "5412:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
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
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15564,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13968,
                                                    "src": "5354:31:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15568,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5354:66:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15569,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15551,
                                                    "src": "5458:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15570,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5466:6:115",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10522,
                                                "src": "5458:14:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 15571,
                                                "name": "bondProceeds_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15540,
                                                "src": "5486:13:115",
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 15554,
                                            "name": "OpenLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11091,
                                            "src": "5162:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,uint256,bool,uint256)"
                                            }
                                        },
                                        "id": 15572,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5162:347:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15573,
                                    "nodeType": "EmitStatement",
                                    "src": "5157:352:115"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 15574,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15414,
                                                "src": "5528:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15575,
                                                "name": "bondProceeds_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15540,
                                                "src": "5542:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 15576,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "5527:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 15417,
                                    "id": 15577,
                                    "nodeType": "Return",
                                    "src": "5520:36:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15398,
                            "nodeType": "StructuredDocumentation",
                            "src": "1082:762:115",
                            "text": "@dev Opens a long position.\n @param _amount The amount of capital provided to open the long. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @param _minOutput The minimum number of bonds to receive.\n @param _minVaultSharePrice The minimum vault share price at which to\n        open the long. This allows traders to protect themselves from\n        opening a long in a checkpoint where negative interest has\n        accrued.\n @param _options The options that configure how the trade is settled.\n @return maturityTime The maturity time of the bonds.\n @return bondProceeds The amount of bonds the user received."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 15410,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 15409,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "2036:12:115"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71638,
                                    "src": "2036:12:115"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2036:12:115"
                            },
                            {
                                "id": 15412,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 15411,
                                    "name": "isNotPaused",
                                    "nameLocations": [
                                        "2057:11:115"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 13124,
                                    "src": "2057:11:115"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2057:11:115"
                            }
                        ],
                        "name": "_openLong",
                        "nameLocation": "1858:9:115",
                        "parameters": {
                            "id": 15408,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15400,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1885:7:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15579,
                                    "src": "1877:15:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15399,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1877:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15402,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "1910:10:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15579,
                                    "src": "1902:18:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15401,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1902:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15404,
                                    "mutability": "mutable",
                                    "name": "_minVaultSharePrice",
                                    "nameLocation": "1938:19:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15579,
                                    "src": "1930:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15403,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1930:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15407,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "1996:8:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15579,
                                    "src": "1967:37:115",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 15406,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 15405,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "1967:11:115",
                                                "1979:7:115"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "1967:19:115"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "1967:19:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1867:143:115"
                        },
                        "returnParameters": {
                            "id": 15417,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15414,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2094:12:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15579,
                                    "src": "2086:20:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15413,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2086:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15416,
                                    "mutability": "mutable",
                                    "name": "bondProceeds",
                                    "nameLocation": "2116:12:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15579,
                                    "src": "2108:20:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15415,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2108:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2085:44:115"
                        },
                        "scope": 16295,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15790,
                        "nodeType": "FunctionDefinition",
                        "src": "6222:5126:115",
                        "nodes": [],
                        "body": {
                            "id": 15789,
                            "nodeType": "Block",
                            "src": "6423:4925:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15597,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15589,
                                                "src": "6501:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15596,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13082,
                                            "src": "6487:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10526_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 15598,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6487:23:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15599,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6487:23:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15602,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15600,
                                            "name": "_bondAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15584,
                                            "src": "6635:11:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15601,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17822,
                                            "src": "6649:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6635:39:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15609,
                                    "nodeType": "IfStatement",
                                    "src": "6631:115:115",
                                    "trueBody": {
                                        "id": 15608,
                                        "nodeType": "Block",
                                        "src": "6676:70:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15603,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "6697:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15605,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6709:24:115",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10589,
                                                        "src": "6697:36:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15606,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6697:38:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15607,
                                                "nodeType": "RevertStatement",
                                                "src": "6690:45:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15611
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15611,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "7021:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "7013:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15610,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7013:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15614,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15612,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13014,
                                            "src": "7039:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 15613,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7039:21:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7013:47:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15618,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 15615,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "7074:5:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 15616,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7080:9:115",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "7074:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15617,
                                            "name": "_maturityTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15582,
                                            "src": "7092:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7074:31:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 15631,
                                        "nodeType": "Block",
                                        "src": "7192:73:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 15627,
                                                            "name": "_maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15582,
                                                            "src": "7223:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15628,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15611,
                                                            "src": "7238:15:115",
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
                                                        "id": 15626,
                                                        "name": "_applyCheckpoint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13134,
                                                        "src": "7206:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15629,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7206:48:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15630,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7206:48:115"
                                            }
                                        ]
                                    },
                                    "id": 15632,
                                    "nodeType": "IfStatement",
                                    "src": "7070:195:115",
                                    "trueBody": {
                                        "id": 15625,
                                        "nodeType": "Block",
                                        "src": "7107:79:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "id": 15620,
                                                                "name": "_latestCheckpoint",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13220,
                                                                "src": "7138:17:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                    "typeString": "function () view returns (uint256)"
                                                                }
                                                            },
                                                            "id": 15621,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "7138:19:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15622,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15611,
                                                            "src": "7159:15:115",
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
                                                        "id": 15619,
                                                        "name": "_applyCheckpoint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13134,
                                                        "src": "7121:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15623,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7121:54:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15624,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7121:54:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "expression": {
                                                                "id": 15636,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18265,
                                                                "src": "7365:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 15637,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7373:13:115",
                                                            "memberName": "AssetIdPrefix",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18012,
                                                            "src": "7365:21:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$18012_$",
                                                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                            }
                                                        },
                                                        "id": 15638,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7387:4:115",
                                                        "memberName": "Long",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18009,
                                                        "src": "7365:26:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$18012",
                                                            "typeString": "enum AssetId.AssetIdPrefix"
                                                        }
                                                    },
                                                    {
                                                        "id": 15639,
                                                        "name": "_maturityTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15582,
                                                        "src": "7393:13:115",
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
                                                        "id": 15634,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18265,
                                                        "src": "7343:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 15635,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7351:13:115",
                                                    "memberName": "encodeAssetId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18035,
                                                    "src": "7343:21:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18012_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15640,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7343:64:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15641,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "7421:3:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 15642,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7425:6:115",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "7421:10:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15643,
                                                "name": "_bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15584,
                                                "src": "7445:11:115",
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 15633,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16621,
                                            "src": "7324:5:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15644,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7324:142:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15645,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7324:142:115"
                                },
                                {
                                    "assignments": [
                                        15647,
                                        15649,
                                        15651,
                                        15653,
                                        15655
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15647,
                                            "mutability": "mutable",
                                            "name": "bondReservesDelta",
                                            "nameLocation": "7650:17:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "7642:25:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15646,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7642:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15649,
                                            "mutability": "mutable",
                                            "name": "shareProceeds",
                                            "nameLocation": "7689:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "7681:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15648,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7681:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15651,
                                            "mutability": "mutable",
                                            "name": "shareReservesDelta",
                                            "nameLocation": "7724:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "7716:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15650,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7716:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15653,
                                            "mutability": "mutable",
                                            "name": "shareAdjustmentDelta",
                                            "nameLocation": "7763:20:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "7756:27:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15652,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7756:6:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15655,
                                            "mutability": "mutable",
                                            "name": "totalGovernanceFee",
                                            "nameLocation": "7805:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "7797:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15654,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7797:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15661,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15657,
                                                "name": "_bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15584,
                                                "src": "7856:11:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15658,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15611,
                                                "src": "7869:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15659,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15582,
                                                "src": "7886:13:115",
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
                                            "id": 15656,
                                            "name": "_calculateCloseLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16294,
                                            "src": "7836:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256,uint256,int256,uint256)"
                                            }
                                        },
                                        "id": 15660,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7836:64:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7628:272:115"
                                },
                                {
                                    "assignments": [
                                        15663
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15663,
                                            "mutability": "mutable",
                                            "name": "maturityTime",
                                            "nameLocation": "8109:12:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "8101:20:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15662,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8101:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15665,
                                    "initialValue": {
                                        "id": 15664,
                                        "name": "_maturityTime",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15582,
                                        "src": "8124:13:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8101:36:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15669,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 15666,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "8182:5:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 15667,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "8188:9:115",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "8182:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15668,
                                            "name": "_maturityTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15582,
                                            "src": "8200:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8182:31:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 15724,
                                        "nodeType": "Block",
                                        "src": "9331:652:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15718,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 15713,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15649,
                                                        "src": "9543:13:115",
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
                                                                "id": 15715,
                                                                "name": "shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15649,
                                                                "src": "9577:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 15716,
                                                                "name": "vaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15611,
                                                                "src": "9592:15:115",
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
                                                            "id": 15714,
                                                            "name": "_applyZombieClose",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13601,
                                                            "src": "9559:17:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                                            }
                                                        },
                                                        "id": 15717,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9559:49:115",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9543:65:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15719,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9543:65:115"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 15721,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15611,
                                                            "src": "9956:15:115",
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
                                                        "id": 15720,
                                                        "name": "_distributeExcessIdleSafe",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15284,
                                                        "src": "9930:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (uint256) returns (bool)"
                                                        }
                                                    },
                                                    "id": 15722,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9930:42:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 15723,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9930:42:115"
                                            }
                                        ]
                                    },
                                    "id": 15725,
                                    "nodeType": "IfStatement",
                                    "src": "8178:1805:115",
                                    "trueBody": {
                                        "id": 15712,
                                        "nodeType": "Block",
                                        "src": "8215:1110:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15672,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 15670,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17848,
                                                        "src": "8274:22:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 15671,
                                                        "name": "totalGovernanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15655,
                                                        "src": "8300:18:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8274:44:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15673,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8274:44:115"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 15675,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15584,
                                                            "src": "8365:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15676,
                                                            "name": "bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15647,
                                                            "src": "8394:17:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15677,
                                                            "name": "shareReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15651,
                                                            "src": "8429:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15678,
                                                            "name": "shareAdjustmentDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15653,
                                                            "src": "8465:20:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15679,
                                                            "name": "maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15663,
                                                            "src": "8503:12:115",
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
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 15674,
                                                        "name": "_applyCloseLong",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16037,
                                                        "src": "8332:15:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                                                            "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                                                        }
                                                    },
                                                    "id": 15680,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8332:197:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15681,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8332:197:115"
                                            },
                                            {
                                                "assignments": [
                                                    15683
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 15683,
                                                        "mutability": "mutable",
                                                        "name": "nonNettedLongs",
                                                        "nameLocation": "8703:14:115",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 15712,
                                                        "src": "8696:21:115",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "typeName": {
                                                            "id": 15682,
                                                            "name": "int256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "8696:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 15687,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 15685,
                                                            "name": "maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15663,
                                                            "src": "8736:12:115",
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
                                                        "id": 15684,
                                                        "name": "_nonNettedLongs",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13268,
                                                        "src": "8720:15:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$",
                                                            "typeString": "function (uint256) view returns (int256)"
                                                        }
                                                    },
                                                    "id": 15686,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8720:29:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "8696:53:115"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            },
                                                            "id": 15693,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 15689,
                                                                "name": "nonNettedLongs",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15683,
                                                                "src": "8800:14:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 15690,
                                                                        "name": "_bondAmount",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 15584,
                                                                        "src": "8817:11:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 15691,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "8829:8:115",
                                                                    "memberName": "toInt256",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21935,
                                                                    "src": "8817:20:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256) pure returns (int256)"
                                                                    }
                                                                },
                                                                "id": 15692,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "8817:22:115",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "src": "8800:39:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15694,
                                                            "name": "nonNettedLongs",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15683,
                                                            "src": "8857:14:115",
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
                                                            },
                                                            {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        ],
                                                        "id": 15688,
                                                        "name": "_updateLongExposure",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13509,
                                                        "src": "8763:19:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                                                            "typeString": "function (int256,int256)"
                                                        }
                                                    },
                                                    "id": 15695,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8763:122:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15696,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8763:122:115"
                                            },
                                            {
                                                "assignments": [
                                                    15698
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 15698,
                                                        "mutability": "mutable",
                                                        "name": "success",
                                                        "nameLocation": "9155:7:115",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 15712,
                                                        "src": "9150:12:115",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "typeName": {
                                                            "id": 15697,
                                                            "name": "bool",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9150:4:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 15702,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 15700,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15611,
                                                            "src": "9191:15:115",
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
                                                        "id": 15699,
                                                        "name": "_distributeExcessIdleSafe",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15284,
                                                        "src": "9165:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (uint256) returns (bool)"
                                                        }
                                                    },
                                                    "id": 15701,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9165:42:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9150:57:115"
                                            },
                                            {
                                                "condition": {
                                                    "id": 15704,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "!",
                                                    "prefix": true,
                                                    "src": "9225:8:115",
                                                    "subExpression": {
                                                        "id": 15703,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15698,
                                                        "src": "9226:7:115",
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
                                                "id": 15711,
                                                "nodeType": "IfStatement",
                                                "src": "9221:94:115",
                                                "trueBody": {
                                                    "id": 15710,
                                                    "nodeType": "Block",
                                                    "src": "9235:80:115",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 15705,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10676,
                                                                        "src": "9260:11:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 15707,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9272:26:115",
                                                                    "memberName": "DistributeExcessIdleFailed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10618,
                                                                    "src": "9260:38:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 15708,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9260:40:115",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 15709,
                                                            "nodeType": "RevertStatement",
                                                            "src": "9253:47:115"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15727
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15727,
                                            "mutability": "mutable",
                                            "name": "proceeds",
                                            "nameLocation": "10047:8:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "10039:16:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15726,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10039:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15733,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15729,
                                                "name": "shareProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15649,
                                                "src": "10068:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15730,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15611,
                                                "src": "10083:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15731,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15589,
                                                "src": "10100:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
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
                                                    "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15728,
                                            "name": "_withdraw",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13003,
                                            "src": "10058:9:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                                            }
                                        },
                                        "id": 15732,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10058:51:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10039:70:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15736,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15734,
                                            "name": "proceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15727,
                                            "src": "10400:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15735,
                                            "name": "_minOutput",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15586,
                                            "src": "10411:10:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "10400:21:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15743,
                                    "nodeType": "IfStatement",
                                    "src": "10396:84:115",
                                    "trueBody": {
                                        "id": 15742,
                                        "nodeType": "Block",
                                        "src": "10423:57:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15737,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "10444:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15739,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10456:11:115",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10598,
                                                        "src": "10444:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15740,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10444:25:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15741,
                                                "nodeType": "RevertStatement",
                                                "src": "10437:32:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15745
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15745,
                                            "mutability": "mutable",
                                            "name": "bondAmount",
                                            "nameLocation": "10533:10:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "10525:18:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15744,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10525:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15747,
                                    "initialValue": {
                                        "id": 15746,
                                        "name": "_bondAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15584,
                                        "src": "10546:11:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10525:32:115"
                                },
                                {
                                    "assignments": [
                                        15749
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15749,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice_",
                                            "nameLocation": "10606:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "10598:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15748,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10598:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15751,
                                    "initialValue": {
                                        "id": 15750,
                                        "name": "vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15611,
                                        "src": "10625:15:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10598:42:115"
                                },
                                {
                                    "assignments": [
                                        15756
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15756,
                                            "mutability": "mutable",
                                            "name": "options",
                                            "nameLocation": "10710:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15789,
                                            "src": "10681:36:115",
                                            "stateVariable": false,
                                            "storageLocation": "calldata",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options"
                                            },
                                            "typeName": {
                                                "id": 15755,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 15754,
                                                    "name": "IHyperdrive.Options",
                                                    "nameLocations": [
                                                        "10681:11:115",
                                                        "10693:7:115"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10526,
                                                    "src": "10681:19:115"
                                                },
                                                "referencedDeclaration": 10526,
                                                "src": "10681:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Options"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15758,
                                    "initialValue": {
                                        "id": 15757,
                                        "name": "_options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15589,
                                        "src": "10720:8:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                            "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10681:47:115"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15760,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "10797:3:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 15761,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10801:6:115",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "10797:10:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15762,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15756,
                                                    "src": "10831:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15763,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10839:11:115",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10519,
                                                "src": "10831:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "expression": {
                                                                "id": 15766,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18265,
                                                                "src": "10901:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 15767,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "10909:13:115",
                                                            "memberName": "AssetIdPrefix",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 18012,
                                                            "src": "10901:21:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$18012_$",
                                                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                            }
                                                        },
                                                        "id": 15768,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10923:4:115",
                                                        "memberName": "Long",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18009,
                                                        "src": "10901:26:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$18012",
                                                            "typeString": "enum AssetId.AssetIdPrefix"
                                                        }
                                                    },
                                                    {
                                                        "id": 15769,
                                                        "name": "maturityTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15663,
                                                        "src": "10929:12:115",
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
                                                        "id": 15764,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18265,
                                                        "src": "10879:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18265_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 15765,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10887:13:115",
                                                    "memberName": "encodeAssetId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18035,
                                                    "src": "10879:21:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$18012_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15770,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10879:63:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15771,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15663,
                                                "src": "10956:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15773,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15727,
                                                        "src": "11036:8:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15774,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15749,
                                                        "src": "11046:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15775,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15756,
                                                        "src": "11064:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
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
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15772,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13942,
                                                    "src": "11011:24:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15776,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "11011:61:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15778,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15727,
                                                        "src": "11172:8:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15779,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15749,
                                                        "src": "11198:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15780,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15756,
                                                        "src": "11232:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
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
                                                            "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15777,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13968,
                                                    "src": "11123:31:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10526_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15781,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "11123:130:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15782,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15756,
                                                    "src": "11267:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15783,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11275:6:115",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10522,
                                                "src": "11267:14:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 15784,
                                                "name": "bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15745,
                                                "src": "11295:10:115",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 15759,
                                            "name": "CloseLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11129,
                                            "src": "10774:9:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256,uint256,uint256,uint256,bool,uint256)"
                                            }
                                        },
                                        "id": 15785,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10774:541:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15786,
                                    "nodeType": "EmitStatement",
                                    "src": "10769:546:115"
                                },
                                {
                                    "expression": {
                                        "id": 15787,
                                        "name": "proceeds",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15727,
                                        "src": "11333:8:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 15595,
                                    "id": 15788,
                                    "nodeType": "Return",
                                    "src": "11326:15:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15580,
                            "nodeType": "StructuredDocumentation",
                            "src": "5569:648:115",
                            "text": "@dev Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the long.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum proceeds the trader will accept. The units\n        of this quantity are either base or vault shares, depending on\n        the value of `_options.asBase`.\n @param _options The options that configure how the trade is settled.\n @return The proceeds the user receives. The units of this quantity are\n         either base or vault shares, depending on the value of\n         `_options.asBase`."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 15592,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 15591,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "6392:12:115"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71638,
                                    "src": "6392:12:115"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6392:12:115"
                            }
                        ],
                        "name": "_closeLong",
                        "nameLocation": "6231:10:115",
                        "parameters": {
                            "id": 15590,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15582,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "6259:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15790,
                                    "src": "6251:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15581,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6251:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15584,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "6290:11:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15790,
                                    "src": "6282:19:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15583,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6282:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15586,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "6319:10:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15790,
                                    "src": "6311:18:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15585,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6311:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15589,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "6368:8:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15790,
                                    "src": "6339:37:115",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10526_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 15588,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 15587,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "6339:11:115",
                                                "6351:7:115"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10526,
                                            "src": "6339:19:115"
                                        },
                                        "referencedDeclaration": 10526,
                                        "src": "6339:19:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10526_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6241:141:115"
                        },
                        "returnParameters": {
                            "id": 15595,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15594,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15790,
                                    "src": "6414:7:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15593,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6414:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6413:9:115"
                        },
                        "scope": 16295,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15900,
                        "nodeType": "FunctionDefinition",
                        "src": "11762:2037:115",
                        "nodes": [],
                        "body": {
                            "id": 15899,
                            "nodeType": "Block",
                            "src": "11939:1860:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        15803
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15803,
                                            "mutability": "mutable",
                                            "name": "longsOutstanding_",
                                            "nameLocation": "12020:17:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15899,
                                            "src": "12012:25:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            },
                                            "typeName": {
                                                "id": 15802,
                                                "name": "uint128",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12012:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15806,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15804,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17826,
                                            "src": "12040:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15805,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "12053:16:115",
                                        "memberName": "longsOutstanding",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10332,
                                        "src": "12040:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12012:57:115"
                                },
                                {
                                    "expression": {
                                        "id": 15825,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15807,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "12079:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15809,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12092:23:115",
                                            "memberName": "longAverageMaturityTime",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10341,
                                            "src": "12079:36:115",
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
                                                    "arguments": [
                                                        {
                                                            "id": 15816,
                                                            "name": "longsOutstanding_",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15803,
                                                            "src": "12238:17:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint128",
                                                                "typeString": "uint128"
                                                            }
                                                        },
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 15819,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 15817,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15799,
                                                                "src": "12273:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "*",
                                                            "rightExpression": {
                                                                "id": 15818,
                                                                "name": "ONE",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18299,
                                                                "src": "12289:3:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "12273:19:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15820,
                                                            "name": "_bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15795,
                                                            "src": "12343:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "74727565",
                                                            "id": 15821,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "12379:4:115",
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
                                                                "typeIdentifier": "t_uint128",
                                                                "typeString": "uint128"
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
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 15812,
                                                                        "name": "_marketState",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17826,
                                                                        "src": "12139:12:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                        }
                                                                    },
                                                                    "id": 15813,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12152:23:115",
                                                                    "memberName": "longAverageMaturityTime",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10341,
                                                                    "src": "12139:36:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint128",
                                                                        "typeString": "uint128"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_uint128",
                                                                        "typeString": "uint128"
                                                                    }
                                                                ],
                                                                "id": 15811,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "12118:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 15810,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "12118:7:115",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 15814,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "12118:67:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15815,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12199:21:115",
                                                        "memberName": "updateWeightedAverage",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18992,
                                                        "src": "12118:102:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15822,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "12118:279:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15823,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12411:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "12118:302:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15824,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12118:304:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12079:343:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15826,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12079:343:115"
                                },
                                {
                                    "expression": {
                                        "id": 15833,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15827,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "12540:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15829,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12553:13:115",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10323,
                                            "src": "12540:26:115",
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
                                                    "id": 15830,
                                                    "name": "_shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15793,
                                                    "src": "12570:19:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15831,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12590:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "12570:29:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15832,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12570:31:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12540:61:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15834,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12540:61:115"
                                },
                                {
                                    "expression": {
                                        "id": 15841,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15835,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "12611:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15837,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12624:12:115",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10326,
                                            "src": "12611:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "id": 15838,
                                                    "name": "_bondReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15795,
                                                    "src": "12640:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15839,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12659:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "12640:28:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15840,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12640:30:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12611:59:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15842,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12611:59:115"
                                },
                                {
                                    "expression": {
                                        "id": 15847,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15843,
                                            "name": "longsOutstanding_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15803,
                                            "src": "12680:17:115",
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
                                                    "id": 15844,
                                                    "name": "_bondReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15795,
                                                    "src": "12701:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15845,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12720:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "12701:28:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15846,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12701:30:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12680:51:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15848,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12680:51:115"
                                },
                                {
                                    "expression": {
                                        "id": 15853,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15849,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "12741:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15851,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12754:16:115",
                                            "memberName": "longsOutstanding",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10332,
                                            "src": "12741:29:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 15852,
                                            "name": "longsOutstanding_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15803,
                                            "src": "12773:17:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12741:49:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15854,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12741:49:115"
                                },
                                {
                                    "assignments": [
                                        15856
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15856,
                                            "mutability": "mutable",
                                            "name": "nonNettedLongs",
                                            "nameLocation": "12952:14:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15899,
                                            "src": "12945:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15855,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12945:6:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15860,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15858,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15799,
                                                "src": "12985:13:115",
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
                                            "id": 15857,
                                            "name": "_nonNettedLongs",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13268,
                                            "src": "12969:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$",
                                                "typeString": "function (uint256) view returns (int256)"
                                            }
                                        },
                                        "id": 15859,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12969:30:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12945:54:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15862,
                                                "name": "nonNettedLongs",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15856,
                                                "src": "13042:14:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 15867,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 15863,
                                                    "name": "nonNettedLongs",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15856,
                                                    "src": "13070:14:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15864,
                                                            "name": "_bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15795,
                                                            "src": "13087:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15865,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13106:8:115",
                                                        "memberName": "toInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 21935,
                                                        "src": "13087:27:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256) pure returns (int256)"
                                                        }
                                                    },
                                                    "id": 15866,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13087:29:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "13070:46:115",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            ],
                                            "id": 15861,
                                            "name": "_updateLongExposure",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13509,
                                            "src": "13009:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                                                "typeString": "function (int256,int256)"
                                            }
                                        },
                                        "id": 15868,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13009:117:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15869,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13009:117:115"
                                },
                                {
                                    "condition": {
                                        "id": 15873,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "13224:29:115",
                                        "subExpression": {
                                            "arguments": [
                                                {
                                                    "id": 15871,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15797,
                                                    "src": "13236:16:115",
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
                                                "id": 15870,
                                                "name": "_isSolvent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13456,
                                                "src": "13225:10:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                                                    "typeString": "function (uint256) view returns (bool)"
                                                }
                                            },
                                            "id": 15872,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "13225:28:115",
                                            "tryCall": false,
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
                                    "id": 15883,
                                    "nodeType": "IfStatement",
                                    "src": "13220:186:115",
                                    "trueBody": {
                                        "id": 15882,
                                        "nodeType": "Block",
                                        "src": "13255:151:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 15877,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 10676,
                                                                    "src": "13325:11:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 15878,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "13337:27:115",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10532,
                                                                "src": "13325:39:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10532_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 15879,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "13365:16:115",
                                                            "memberName": "SolvencyViolated",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10531,
                                                            "src": "13325:56:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 15874,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18290,
                                                            "src": "13269:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18290_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15876,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13276:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18289,
                                                        "src": "13269:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10532_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 15880,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13269:126:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15881,
                                                "nodeType": "ExpressionStatement",
                                                "src": "13269:126:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15885
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15885,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "13644:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15899,
                                            "src": "13639:12:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 15884,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "13639:4:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15889,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15887,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15797,
                                                "src": "13680:16:115",
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
                                            "id": 15886,
                                            "name": "_distributeExcessIdleSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15284,
                                            "src": "13654:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256) returns (bool)"
                                            }
                                        },
                                        "id": 15888,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13654:43:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13639:58:115"
                                },
                                {
                                    "condition": {
                                        "id": 15891,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "13711:8:115",
                                        "subExpression": {
                                            "id": 15890,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15885,
                                            "src": "13712:7:115",
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
                                    "id": 15898,
                                    "nodeType": "IfStatement",
                                    "src": "13707:86:115",
                                    "trueBody": {
                                        "id": 15897,
                                        "nodeType": "Block",
                                        "src": "13721:72:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15892,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10676,
                                                            "src": "13742:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15894,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13754:26:115",
                                                        "memberName": "DistributeExcessIdleFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10618,
                                                        "src": "13742:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15895,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13742:40:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15896,
                                                "nodeType": "RevertStatement",
                                                "src": "13735:47:115"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15791,
                            "nodeType": "StructuredDocumentation",
                            "src": "11354:403:115",
                            "text": "@dev Applies an open long to the state. This includes updating the\n      reserves and maintaining the reserve invariants.\n @param _shareReservesDelta The amount of shares paid to the curve.\n @param _bondReservesDelta The amount of bonds sold by the curve.\n @param _vaultSharePrice The current vault share price.\n @param _maturityTime The maturity time of the long."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyOpenLong",
                        "nameLocation": "11771:14:115",
                        "parameters": {
                            "id": 15800,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15793,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "11803:19:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15900,
                                    "src": "11795:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15792,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11795:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15795,
                                    "mutability": "mutable",
                                    "name": "_bondReservesDelta",
                                    "nameLocation": "11840:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15900,
                                    "src": "11832:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15794,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11832:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15797,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "11876:16:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15900,
                                    "src": "11868:24:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15796,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11868:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15799,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "11910:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15900,
                                    "src": "11902:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15798,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11902:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11785:144:115"
                        },
                        "returnParameters": {
                            "id": 15801,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "11939:0:115"
                        },
                        "scope": 16295,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 16037,
                        "nodeType": "FunctionDefinition",
                        "src": "14268:3167:115",
                        "nodes": [],
                        "body": {
                            "id": 16036,
                            "nodeType": "Block",
                            "src": "14479:2956:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        15915
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15915,
                                            "mutability": "mutable",
                                            "name": "shareReserves",
                                            "nameLocation": "14636:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16036,
                                            "src": "14628:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15914,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14628:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15918,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15916,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17826,
                                            "src": "14652:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15917,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14665:13:115",
                                        "memberName": "shareReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10323,
                                        "src": "14652:26:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14628:50:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 15927,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 15921,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15919,
                                                "name": "shareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15915,
                                                "src": "14705:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 15920,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15907,
                                                "src": "14721:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "14705:35:115",
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
                                            "id": 15926,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 15924,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 15922,
                                                    "name": "shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15915,
                                                    "src": "14756:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 15923,
                                                    "name": "_shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15907,
                                                    "src": "14772:19:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "14756:35:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 15925,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17819,
                                                "src": "14794:21:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "14756:59:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "14705:110:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15937,
                                    "nodeType": "IfStatement",
                                    "src": "14688:289:115",
                                    "trueBody": {
                                        "id": 15936,
                                        "nodeType": "Block",
                                        "src": "14826:151:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 15931,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 10676,
                                                                    "src": "14896:11:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 15932,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "14908:27:115",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10532,
                                                                "src": "14896:39:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10532_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 15933,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "14936:16:115",
                                                            "memberName": "SolvencyViolated",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10531,
                                                            "src": "14896:56:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 15928,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18290,
                                                            "src": "14840:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18290_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15930,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "14847:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18289,
                                                        "src": "14840:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10532_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 15934,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "14840:126:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15935,
                                                "nodeType": "ExpressionStatement",
                                                "src": "14840:126:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 15942,
                                    "nodeType": "UncheckedBlock",
                                    "src": "14986:71:115",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 15940,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 15938,
                                                    "name": "shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15915,
                                                    "src": "15010:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "-=",
                                                "rightHandSide": {
                                                    "id": 15939,
                                                    "name": "_shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15907,
                                                    "src": "15027:19:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "15010:36:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15941,
                                            "nodeType": "ExpressionStatement",
                                            "src": "15010:36:115"
                                        }
                                    ]
                                },
                                {
                                    "assignments": [
                                        15944
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15944,
                                            "mutability": "mutable",
                                            "name": "shareAdjustment",
                                            "nameLocation": "15521:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16036,
                                            "src": "15514:22:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15943,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "15514:6:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15947,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15945,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17826,
                                            "src": "15539:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15946,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "15552:15:115",
                                        "memberName": "shareAdjustment",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10335,
                                        "src": "15539:28:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "15514:53:115"
                                },
                                {
                                    "expression": {
                                        "id": 15950,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15948,
                                            "name": "shareAdjustment",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15944,
                                            "src": "15577:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 15949,
                                            "name": "_shareAdjustmentDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15909,
                                            "src": "15596:21:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "15577:40:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 15951,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15577:40:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 15964,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 15956,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "expression": {
                                                        "id": 15952,
                                                        "name": "_shareReservesDelta",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15907,
                                                        "src": "15644:19:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 15953,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15664:8:115",
                                                    "memberName": "toInt256",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 21935,
                                                    "src": "15644:28:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256) pure returns (int256)"
                                                    }
                                                },
                                                "id": 15954,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15644:30:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 15955,
                                                "name": "_shareAdjustmentDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15909,
                                                "src": "15677:21:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "src": "15644:54:115",
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
                                            "id": 15963,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 15959,
                                                        "name": "shareReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15915,
                                                        "src": "15778:13:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15960,
                                                        "name": "shareAdjustment",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15944,
                                                        "src": "15809:15:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
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
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 15957,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 19813,
                                                        "src": "15714:14:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 15958,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15729:31:115",
                                                    "memberName": "calculateEffectiveShareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 19256,
                                                    "src": "15714:46:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,int256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15961,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15714:124:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 15962,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17819,
                                                "src": "15853:21:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "15714:160:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "15644:230:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15974,
                                    "nodeType": "IfStatement",
                                    "src": "15627:464:115",
                                    "trueBody": {
                                        "id": 15973,
                                        "nodeType": "Block",
                                        "src": "15885:206:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 15968,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 10676,
                                                                    "src": "15955:11:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 15969,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "15988:27:115",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10532,
                                                                "src": "15955:60:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10532_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 15970,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "16037:29:115",
                                                            "memberName": "InvalidEffectiveShareReserves",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10529,
                                                            "src": "15955:111:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 15965,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18290,
                                                            "src": "15899:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18290_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15967,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15906:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18289,
                                                        "src": "15899:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10532_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 15971,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "15899:181:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15972,
                                                "nodeType": "ExpressionStatement",
                                                "src": "15899:181:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15976
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15976,
                                            "mutability": "mutable",
                                            "name": "longsOutstanding",
                                            "nameLocation": "16159:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16036,
                                            "src": "16151:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15975,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "16151:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15979,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15977,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17826,
                                            "src": "16178:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15978,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "16191:16:115",
                                        "memberName": "longsOutstanding",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10332,
                                        "src": "16178:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "16151:56:115"
                                },
                                {
                                    "expression": {
                                        "id": 15998,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15980,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "16217:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15982,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16230:23:115",
                                            "memberName": "longAverageMaturityTime",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10341,
                                            "src": "16217:36:115",
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
                                                    "arguments": [
                                                        {
                                                            "id": 15989,
                                                            "name": "longsOutstanding",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15976,
                                                            "src": "16376:16:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 15992,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 15990,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15911,
                                                                "src": "16410:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "*",
                                                            "rightExpression": {
                                                                "id": 15991,
                                                                "name": "ONE",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18299,
                                                                "src": "16426:3:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "16410:19:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15993,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15903,
                                                            "src": "16480:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 15994,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "16509:5:115",
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
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 15985,
                                                                        "name": "_marketState",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17826,
                                                                        "src": "16277:12:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                        }
                                                                    },
                                                                    "id": 15986,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "16290:23:115",
                                                                    "memberName": "longAverageMaturityTime",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10341,
                                                                    "src": "16277:36:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint128",
                                                                        "typeString": "uint128"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_uint128",
                                                                        "typeString": "uint128"
                                                                    }
                                                                ],
                                                                "id": 15984,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "16256:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 15983,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "16256:7:115",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 15987,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "16256:67:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15988,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "16337:21:115",
                                                        "memberName": "updateWeightedAverage",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18992,
                                                        "src": "16256:102:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15995,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "16256:272:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15996,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "16542:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "16256:295:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15997,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16256:297:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "16217:336:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15999,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16217:336:115"
                                },
                                {
                                    "expression": {
                                        "id": 16002,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 16000,
                                            "name": "longsOutstanding",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15976,
                                            "src": "16615:16:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 16001,
                                            "name": "_bondAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15903,
                                            "src": "16635:11:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16615:31:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 16003,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16615:31:115"
                                },
                                {
                                    "expression": {
                                        "id": 16010,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 16004,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "16656:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 16006,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16669:16:115",
                                            "memberName": "longsOutstanding",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10332,
                                            "src": "16656:29:115",
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
                                                    "id": 16007,
                                                    "name": "longsOutstanding",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15976,
                                                    "src": "16688:16:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 16008,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "16705:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "16688:26:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 16009,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16688:28:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "16656:60:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 16011,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16656:60:115"
                                },
                                {
                                    "expression": {
                                        "id": 16018,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 16012,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "17238:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 16014,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17251:13:115",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10323,
                                            "src": "17238:26:115",
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
                                                    "id": 16015,
                                                    "name": "shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15915,
                                                    "src": "17267:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 16016,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17281:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "17267:23:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 16017,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "17267:25:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "17238:54:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 16019,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17238:54:115"
                                },
                                {
                                    "expression": {
                                        "id": 16026,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 16020,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "17302:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 16022,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17315:15:115",
                                            "memberName": "shareAdjustment",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10335,
                                            "src": "17302:28:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "id": 16023,
                                                    "name": "shareAdjustment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15944,
                                                    "src": "17333:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "id": 16024,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17349:8:115",
                                                "memberName": "toInt128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21900,
                                                "src": "17333:24:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                                    "typeString": "function (int256) pure returns (int128)"
                                                }
                                            },
                                            "id": 16025,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "17333:26:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "17302:57:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 16027,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17302:57:115"
                                },
                                {
                                    "expression": {
                                        "id": 16034,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 16028,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17826,
                                                "src": "17369:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 16030,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17382:12:115",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10326,
                                            "src": "17369:25:115",
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
                                                    "id": 16031,
                                                    "name": "_bondReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15905,
                                                    "src": "17398:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 16032,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17417:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21822,
                                                "src": "17398:28:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 16033,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "17398:30:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "17369:59:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 16035,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17369:59:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15901,
                            "nodeType": "StructuredDocumentation",
                            "src": "13805:458:115",
                            "text": "@dev Applies the trading deltas from a closed long to the reserves and\n      the withdrawal pool.\n @param _bondAmount The amount of longs that were closed.\n @param _bondReservesDelta The bonds to add to the reserves.\n @param _shareReservesDelta The shares to remove from the reserves.\n @param _shareAdjustmentDelta The amount to decrease the share adjustment.\n @param _maturityTime The maturity time of the long."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyCloseLong",
                        "nameLocation": "14277:15:115",
                        "parameters": {
                            "id": 15912,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15903,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "14310:11:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16037,
                                    "src": "14302:19:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15902,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14302:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15905,
                                    "mutability": "mutable",
                                    "name": "_bondReservesDelta",
                                    "nameLocation": "14339:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16037,
                                    "src": "14331:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15904,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14331:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15907,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "14375:19:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16037,
                                    "src": "14367:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15906,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14367:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15909,
                                    "mutability": "mutable",
                                    "name": "_shareAdjustmentDelta",
                                    "nameLocation": "14411:21:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16037,
                                    "src": "14404:28:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 15908,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14404:6:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15911,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "14450:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16037,
                                    "src": "14442:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15910,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14442:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14292:177:115"
                        },
                        "returnParameters": {
                            "id": 15913,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14479:0:115"
                        },
                        "scope": 16295,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 16156,
                        "nodeType": "FunctionDefinition",
                        "src": "17927:3870:115",
                        "nodes": [],
                        "body": {
                            "id": 16155,
                            "nodeType": "Block",
                            "src": "18205:3592:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 16063,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 16051,
                                            "name": "bondReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16047,
                                            "src": "18366:17:115",
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
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 16054,
                                                        "name": "_effectiveShareReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13235,
                                                        "src": "18432:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 16055,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "18432:25:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 16056,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17826,
                                                        "src": "18471:12:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 16057,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "18484:12:115",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10326,
                                                    "src": "18471:25:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                {
                                                    "id": 16058,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16040,
                                                    "src": "18510:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16059,
                                                    "name": "_timeStretch",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17801,
                                                    "src": "18548:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16060,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16042,
                                                    "src": "18574:16:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16061,
                                                    "name": "_initialVaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17816,
                                                    "src": "18604:23:115",
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
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
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
                                                    "id": 16052,
                                                    "name": "HyperdriveMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19813,
                                                    "src": "18386:14:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                        "typeString": "type(library HyperdriveMath)"
                                                    }
                                                },
                                                "id": 16053,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "18401:17:115",
                                                "memberName": "calculateOpenLong",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19551,
                                                "src": "18386:32:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 16062,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "18386:251:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "18366:271:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 16064,
                                    "nodeType": "ExpressionStatement",
                                    "src": "18366:271:115"
                                },
                                {
                                    "assignments": [
                                        16066
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 16066,
                                            "mutability": "mutable",
                                            "name": "spotPrice",
                                            "nameLocation": "18778:9:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16155,
                                            "src": "18770:17:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 16065,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "18770:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 16076,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 16069,
                                                    "name": "_effectiveShareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13235,
                                                    "src": "18837:23:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 16070,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "18837:25:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 16071,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17826,
                                                    "src": "18876:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 16072,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "18889:12:115",
                                                "memberName": "bondReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10326,
                                                "src": "18876:25:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 16073,
                                                "name": "_initialVaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17816,
                                                "src": "18915:23:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 16074,
                                                "name": "_timeStretch",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17801,
                                                "src": "18952:12:115",
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
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
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
                                                "id": 16067,
                                                "name": "HyperdriveMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19813,
                                                "src": "18790:14:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                    "typeString": "type(library HyperdriveMath)"
                                                }
                                            },
                                            "id": 16068,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18805:18:115",
                                            "memberName": "calculateSpotPrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19183,
                                            "src": "18790:33:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 16075,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "18790:184:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "18770:204:115"
                                },
                                {
                                    "condition": {
                                        "arguments": [
                                            {
                                                "id": 16078,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16040,
                                                "src": "19038:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 16079,
                                                "name": "bondReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16047,
                                                "src": "19068:17:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 16082,
                                                        "name": "spotPrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16066,
                                                        "src": "19169:9:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 16083,
                                                        "name": "_curveFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17804,
                                                        "src": "19200:9:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 16084,
                                                        "name": "_flatFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17807,
                                                        "src": "19231:8:115",
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
                                                    "expression": {
                                                        "id": 16080,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 19813,
                                                        "src": "19103:14:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 16081,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "19118:29:115",
                                                    "memberName": "calculateOpenLongMaxSpotPrice",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 19500,
                                                    "src": "19103:44:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 16085,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "19103:154:115",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 16077,
                                            "name": "_isNegativeInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13430,
                                            "src": "19001:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (bool)"
                                            }
                                        },
                                        "id": 16086,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19001:270:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 16096,
                                    "nodeType": "IfStatement",
                                    "src": "18984:449:115",
                                    "trueBody": {
                                        "id": 16095,
                                        "nodeType": "Block",
                                        "src": "19282:151:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 16090,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 10676,
                                                                    "src": "19352:11:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 16091,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "19364:27:115",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10532,
                                                                "src": "19352:39:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10532_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 16092,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "19392:16:115",
                                                            "memberName": "NegativeInterest",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10530,
                                                            "src": "19352:56:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 16087,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18290,
                                                            "src": "19296:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18290_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 16089,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "19303:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18289,
                                                        "src": "19296:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10532_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 16093,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "19296:126:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 16094,
                                                "nodeType": "ExpressionStatement",
                                                "src": "19296:126:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        16098,
                                        16100
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 16098,
                                            "mutability": "mutable",
                                            "name": "curveFee",
                                            "nameLocation": "19617:8:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16155,
                                            "src": "19609:16:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 16097,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "19609:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 16100,
                                            "mutability": "mutable",
                                            "name": "governanceCurveFee",
                                            "nameLocation": "19656:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16155,
                                            "src": "19648:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 16099,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "19648:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 16106,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 16102,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16040,
                                                "src": "19739:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 16103,
                                                "name": "spotPrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16066,
                                                "src": "19769:9:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 16104,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16042,
                                                "src": "19796:16:115",
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
                                            "id": 16101,
                                            "name": "_calculateFeesGivenShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13846,
                                            "src": "19696:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 16105,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19696:130:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "19595:231:115"
                                },
                                {
                                    "expression": {
                                        "id": 16109,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 16107,
                                            "name": "bondReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16047,
                                            "src": "20022:17:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 16108,
                                            "name": "curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16098,
                                            "src": "20043:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20022:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 16110,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20022:29:115"
                                },
                                {
                                    "expression": {
                                        "id": 16117,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 16111,
                                            "name": "totalGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16049,
                                            "src": "20575:18:115",
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
                                                    "id": 16114,
                                                    "name": "spotPrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16066,
                                                    "src": "20639:9:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16115,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16042,
                                                    "src": "20662:16:115",
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
                                                    "id": 16112,
                                                    "name": "governanceCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16100,
                                                    "src": "20596:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 16113,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20615:10:115",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18327,
                                                "src": "20596:29:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 16116,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20596:92:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20575:113:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 16118,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20575:113:115"
                                },
                                {
                                    "expression": {
                                        "id": 16123,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 16119,
                                            "name": "shareReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16045,
                                            "src": "20926:18:115",
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
                                            "id": 16122,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 16120,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16040,
                                                "src": "20947:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 16121,
                                                "name": "totalGovernanceFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16049,
                                                "src": "20962:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "20947:33:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20926:54:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 16124,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20926:54:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 16139,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 16130,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 16127,
                                                            "name": "_effectiveShareReserves",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13235,
                                                            "src": "21352:23:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view returns (uint256)"
                                                            }
                                                        },
                                                        "id": 16128,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "21352:25:115",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 16129,
                                                        "name": "shareReservesDelta",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16045,
                                                        "src": "21380:18:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "21352:46:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 16134,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 16131,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17826,
                                                            "src": "21416:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 16132,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "21429:12:115",
                                                        "memberName": "bondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10326,
                                                        "src": "21416:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 16133,
                                                        "name": "bondReservesDelta",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16047,
                                                        "src": "21444:17:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "21416:45:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16135,
                                                    "name": "_initialVaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17816,
                                                    "src": "21479:23:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16136,
                                                    "name": "_timeStretch",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17801,
                                                    "src": "21520:12:115",
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
                                                "expression": {
                                                    "id": 16125,
                                                    "name": "HyperdriveMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19813,
                                                    "src": "21301:14:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                        "typeString": "type(library HyperdriveMath)"
                                                    }
                                                },
                                                "id": 16126,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "21316:18:115",
                                                "memberName": "calculateSpotPrice",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19183,
                                                "src": "21301:33:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 16137,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "21301:245:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 16138,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18299,
                                            "src": "21549:3:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "21301:251:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 16149,
                                    "nodeType": "IfStatement",
                                    "src": "21284:430:115",
                                    "trueBody": {
                                        "id": 16148,
                                        "nodeType": "Block",
                                        "src": "21563:151:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "expression": {
                                                                    "id": 16143,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 10676,
                                                                    "src": "21633:11:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10676_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 16144,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "21645:27:115",
                                                                "memberName": "InsufficientLiquidityReason",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10532,
                                                                "src": "21633:39:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_enum$_InsufficientLiquidityReason_$10532_$",
                                                                    "typeString": "type(enum IHyperdrive.InsufficientLiquidityReason)"
                                                                }
                                                            },
                                                            "id": 16145,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "21673:16:115",
                                                            "memberName": "NegativeInterest",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10530,
                                                            "src": "21633:56:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_enum$_InsufficientLiquidityReason_$10532",
                                                                "typeString": "enum IHyperdrive.InsufficientLiquidityReason"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 16140,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18290,
                                                            "src": "21577:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18290_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 16142,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "21584:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18289,
                                                        "src": "21577:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_enum$_InsufficientLiquidityReason_$10532_$returns$__$",
                                                            "typeString": "function (enum IHyperdrive.InsufficientLiquidityReason) pure"
                                                        }
                                                    },
                                                    "id": 16146,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "21577:126:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 16147,
                                                "nodeType": "ExpressionStatement",
                                                "src": "21577:126:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 16150,
                                                "name": "shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16045,
                                                "src": "21732:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 16151,
                                                "name": "bondReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16047,
                                                "src": "21752:17:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 16152,
                                                "name": "totalGovernanceFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16049,
                                                "src": "21771:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 16153,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "21731:59:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 16050,
                                    "id": 16154,
                                    "nodeType": "Return",
                                    "src": "21724:66:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 16038,
                            "nodeType": "StructuredDocumentation",
                            "src": "17441:481:115",
                            "text": "@dev Calculate the pool reserve and trader deltas that result from\n      opening a long. This calculation includes trading fees.\n @param _shareAmount The amount of shares being paid to open the long.\n @param _vaultSharePrice The current vault share price.\n @return shareReservesDelta The change in the share reserves.\n @return bondReservesDelta The change in the bond reserves.\n @return totalGovernanceFee The governance fee in shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateOpenLong",
                        "nameLocation": "17936:18:115",
                        "parameters": {
                            "id": 16043,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 16040,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "17972:12:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16156,
                                    "src": "17964:20:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16039,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17964:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16042,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "18002:16:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16156,
                                    "src": "17994:24:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16041,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17994:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17954:70:115"
                        },
                        "returnParameters": {
                            "id": 16050,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 16045,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "18093:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16156,
                                    "src": "18085:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16044,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18085:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16047,
                                    "mutability": "mutable",
                                    "name": "bondReservesDelta",
                                    "nameLocation": "18133:17:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16156,
                                    "src": "18125:25:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16046,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18125:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16049,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "18172:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16156,
                                    "src": "18164:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16048,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18164:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18071:129:115"
                        },
                        "scope": 16295,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 16294,
                        "nodeType": "FunctionDefinition",
                        "src": "22516:5095:115",
                        "nodes": [],
                        "body": {
                            "id": 16293,
                            "nodeType": "Block",
                            "src": "22901:4710:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        16177
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 16177,
                                            "mutability": "mutable",
                                            "name": "shareCurveDelta",
                                            "nameLocation": "23107:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16293,
                                            "src": "23099:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 16176,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23099:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 16178,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23099:23:115"
                                },
                                {
                                    "id": 16260,
                                    "nodeType": "Block",
                                    "src": "23132:3079:115",
                                    "statements": [
                                        {
                                            "assignments": [
                                                16180
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 16180,
                                                    "mutability": "mutable",
                                                    "name": "timeRemaining",
                                                    "nameLocation": "23575:13:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16260,
                                                    "src": "23567:21:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 16179,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "23567:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 16184,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "id": 16182,
                                                        "name": "_maturityTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16163,
                                                        "src": "23615:13:115",
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
                                                    "id": 16181,
                                                    "name": "_calculateTimeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13166,
                                                    "src": "23591:23:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256) view returns (uint256)"
                                                    }
                                                },
                                                "id": 16183,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "23591:38:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "23567:62:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16201,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "components": [
                                                        {
                                                            "id": 16185,
                                                            "name": "shareCurveDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16177,
                                                            "src": "23644:15:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16186,
                                                            "name": "bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16166,
                                                            "src": "23661:17:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16187,
                                                            "name": "shareProceeds",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16168,
                                                            "src": "23680:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 16188,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "TupleExpression",
                                                    "src": "23643:51:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256,uint256)"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "id": 16191,
                                                                "name": "_effectiveShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13235,
                                                                "src": "23769:23:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                    "typeString": "function () view returns (uint256)"
                                                                }
                                                            },
                                                            "id": 16192,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "23769:25:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 16193,
                                                                "name": "_marketState",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17826,
                                                                "src": "23816:12:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                }
                                                            },
                                                            "id": 16194,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "23829:12:115",
                                                            "memberName": "bondReserves",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10326,
                                                            "src": "23816:25:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint128",
                                                                "typeString": "uint128"
                                                            }
                                                        },
                                                        {
                                                            "id": 16195,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16159,
                                                            "src": "23863:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16196,
                                                            "name": "timeRemaining",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16180,
                                                            "src": "23896:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16197,
                                                            "name": "_timeStretch",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17801,
                                                            "src": "23931:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16198,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16161,
                                                            "src": "23965:16:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16199,
                                                            "name": "_initialVaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17816,
                                                            "src": "24003:23:115",
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
                                                                "typeIdentifier": "t_uint128",
                                                                "typeString": "uint128"
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
                                                            "id": 16189,
                                                            "name": "HyperdriveMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 19813,
                                                            "src": "23697:14:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                                "typeString": "type(library HyperdriveMath)"
                                                            }
                                                        },
                                                        "id": 16190,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "23729:18:115",
                                                        "memberName": "calculateCloseLong",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 19616,
                                                        "src": "23697:50:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)"
                                                        }
                                                    },
                                                    "id": 16200,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "23697:347:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256,uint256)"
                                                    }
                                                },
                                                "src": "23643:401:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 16202,
                                            "nodeType": "ExpressionStatement",
                                            "src": "23643:401:115"
                                        },
                                        {
                                            "assignments": [
                                                16204
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 16204,
                                                    "mutability": "mutable",
                                                    "name": "curveFee",
                                                    "nameLocation": "24293:8:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16260,
                                                    "src": "24285:16:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 16203,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24285:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 16205,
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24285:16:115"
                                        },
                                        {
                                            "assignments": [
                                                16207
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 16207,
                                                    "mutability": "mutable",
                                                    "name": "governanceCurveFee",
                                                    "nameLocation": "24323:18:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16260,
                                                    "src": "24315:26:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 16206,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24315:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 16208,
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24315:26:115"
                                        },
                                        {
                                            "assignments": [
                                                16210
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 16210,
                                                    "mutability": "mutable",
                                                    "name": "flatFee",
                                                    "nameLocation": "24363:7:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16260,
                                                    "src": "24355:15:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 16209,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24355:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 16211,
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24355:15:115"
                                        },
                                        {
                                            "assignments": [
                                                16213
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 16213,
                                                    "mutability": "mutable",
                                                    "name": "spotPrice",
                                                    "nameLocation": "24392:9:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16260,
                                                    "src": "24384:17:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 16212,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24384:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 16223,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 16216,
                                                            "name": "_effectiveShareReserves",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13235,
                                                            "src": "24455:23:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view returns (uint256)"
                                                            }
                                                        },
                                                        "id": 16217,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "24455:25:115",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 16218,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17826,
                                                            "src": "24498:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10357_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 16219,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "24511:12:115",
                                                        "memberName": "bondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10326,
                                                        "src": "24498:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    {
                                                        "id": 16220,
                                                        "name": "_initialVaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17816,
                                                        "src": "24541:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 16221,
                                                        "name": "_timeStretch",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17801,
                                                        "src": "24582:12:115",
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
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
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
                                                        "id": 16214,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 19813,
                                                        "src": "24404:14:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 16215,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "24419:18:115",
                                                    "memberName": "calculateSpotPrice",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 19183,
                                                    "src": "24404:33:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 16222,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "24404:204:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24384:224:115"
                                        },
                                        {
                                            "assignments": [
                                                16225
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 16225,
                                                    "mutability": "mutable",
                                                    "name": "vaultSharePrice",
                                                    "nameLocation": "24630:15:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16260,
                                                    "src": "24622:23:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 16224,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24622:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 16227,
                                            "initialValue": {
                                                "id": 16226,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16161,
                                                "src": "24648:16:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24622:42:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16239,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "components": [
                                                        {
                                                            "id": 16228,
                                                            "name": "curveFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16204,
                                                            "src": "24720:8:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16229,
                                                            "name": "flatFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16210,
                                                            "src": "24756:7:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16230,
                                                            "name": "governanceCurveFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16207,
                                                            "src": "24791:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16231,
                                                            "name": "totalGovernanceFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16174,
                                                            "src": "24837:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 16232,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "TupleExpression",
                                                    "src": "24702:177:115",
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
                                                            "id": 16234,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16159,
                                                            "src": "24924:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16235,
                                                            "name": "timeRemaining",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16180,
                                                            "src": "24953:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16236,
                                                            "name": "spotPrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16213,
                                                            "src": "24984:9:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 16237,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16225,
                                                            "src": "25011:15:115",
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
                                                        "id": 16233,
                                                        "name": "_calculateFeesGivenBonds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13916,
                                                        "src": "24882:24:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
                                                        }
                                                    },
                                                    "id": 16238,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "24882:158:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                                    }
                                                },
                                                "src": "24702:338:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 16240,
                                            "nodeType": "ExpressionStatement",
                                            "src": "24702:338:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16246,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 16241,
                                                    "name": "shareCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16177,
                                                    "src": "25503:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "-=",
                                                "rightHandSide": {
                                                    "components": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 16244,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 16242,
                                                                "name": "curveFee",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 16204,
                                                                "src": "25523:8:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 16243,
                                                                "name": "governanceCurveFee",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 16207,
                                                                "src": "25534:18:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "25523:29:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 16245,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "25522:31:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "25503:50:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 16247,
                                            "nodeType": "ExpressionStatement",
                                            "src": "25503:50:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16252,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 16248,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16168,
                                                    "src": "25747:13:115",
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
                                                    "id": 16251,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 16249,
                                                        "name": "curveFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16204,
                                                        "src": "25764:8:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 16250,
                                                        "name": "flatFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16210,
                                                        "src": "25775:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "25764:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "25747:35:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 16253,
                                            "nodeType": "ExpressionStatement",
                                            "src": "25747:35:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16258,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 16254,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16170,
                                                    "src": "26145:18:115",
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
                                                    "id": 16257,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 16255,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16168,
                                                        "src": "26166:13:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 16256,
                                                        "name": "totalGovernanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16174,
                                                        "src": "26182:18:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "26166:34:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "26145:55:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 16259,
                                            "nodeType": "ExpressionStatement",
                                            "src": "26145:55:115"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 16291,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 16261,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16168,
                                                    "src": "26505:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16262,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16170,
                                                    "src": "26532:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16263,
                                                    "name": "shareCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16177,
                                                    "src": "26564:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16264,
                                                    "name": "shareAdjustmentDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16172,
                                                    "src": "26593:20:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "id": 16265,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16174,
                                                    "src": "26627:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 16266,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "26491:164:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 16269,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16168,
                                                    "src": "26719:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16270,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16170,
                                                    "src": "26746:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16271,
                                                    "name": "shareCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16177,
                                                    "src": "26778:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16272,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16174,
                                                    "src": "26807:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 16273,
                                                            "name": "_checkpoints",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17836,
                                                            "src": "27318:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                            }
                                                        },
                                                        "id": 16277,
                                                        "indexExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 16276,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 16274,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 16163,
                                                                "src": "27331:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 16275,
                                                                "name": "_positionDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17798,
                                                                "src": "27347:17:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "27331:33:115",
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
                                                        "src": "27318:47:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    },
                                                    "id": 16278,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "27366:15:115",
                                                    "memberName": "vaultSharePrice",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10360,
                                                    "src": "27318:63:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                {
                                                    "condition": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 16282,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 16279,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "27421:5:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 16280,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "27427:9:115",
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "src": "27421:15:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<",
                                                        "rightExpression": {
                                                            "id": 16281,
                                                            "name": "_maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 16163,
                                                            "src": "27439:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "27421:31:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "falseExpression": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "id": 16284,
                                                                "name": "_checkpoints",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17836,
                                                                "src": "27506:12:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10361_storage_$",
                                                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                                }
                                                            },
                                                            "id": 16286,
                                                            "indexExpression": {
                                                                "id": 16285,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 16163,
                                                                "src": "27519:13:115",
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
                                                            "src": "27506:27:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Checkpoint_$10361_storage",
                                                                "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                            }
                                                        },
                                                        "id": 16287,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "27534:15:115",
                                                        "memberName": "vaultSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10360,
                                                        "src": "27506:43:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "id": 16288,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "Conditional",
                                                    "src": "27421:128:115",
                                                    "trueExpression": {
                                                        "id": 16283,
                                                        "name": "_vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 16161,
                                                        "src": "27471:16:115",
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
                                                {
                                                    "hexValue": "74727565",
                                                    "id": 16289,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "27590:4:115",
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
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
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
                                                "expression": {
                                                    "id": 16267,
                                                    "name": "HyperdriveMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19813,
                                                    "src": "26658:14:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19813_$",
                                                        "typeString": "type(library HyperdriveMath)"
                                                    }
                                                },
                                                "id": 16268,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "26673:32:115",
                                                "memberName": "calculateNegativeInterestOnClose",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19812,
                                                "src": "26658:47:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)"
                                                }
                                            },
                                            "id": 16290,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "26658:946:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                                            }
                                        },
                                        "src": "26491:1113:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 16292,
                                    "nodeType": "ExpressionStatement",
                                    "src": "26491:1113:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 16157,
                            "nodeType": "StructuredDocumentation",
                            "src": "21803:708:115",
                            "text": "@dev Calculate the pool reserve and trader deltas that result from\n      closing a long. This calculation includes trading fees.\n @param _bondAmount The amount of bonds being purchased to close the short.\n @param _vaultSharePrice The current vault share price.\n @param _maturityTime The maturity time of the short position.\n @return bondReservesDelta The bonds added to the reserves.\n @return shareProceeds The proceeds in shares of selling the bonds.\n @return shareReservesDelta The shares removed from the reserves.\n @return shareAdjustmentDelta The change in the share adjustment.\n @return totalGovernanceFee The governance fee in shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateCloseLong",
                        "nameLocation": "22525:19:115",
                        "parameters": {
                            "id": 16164,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 16159,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "22562:11:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22554:19:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16158,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22554:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16161,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "22591:16:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22583:24:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16160,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22583:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16163,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "22625:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22617:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16162,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22617:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "22544:100:115"
                        },
                        "returnParameters": {
                            "id": 16175,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 16166,
                                    "mutability": "mutable",
                                    "name": "bondReservesDelta",
                                    "nameLocation": "22713:17:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22705:25:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16165,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22705:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16168,
                                    "mutability": "mutable",
                                    "name": "shareProceeds",
                                    "nameLocation": "22752:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22744:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16167,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22744:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16170,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "22787:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22779:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16169,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22779:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16172,
                                    "mutability": "mutable",
                                    "name": "shareAdjustmentDelta",
                                    "nameLocation": "22826:20:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22819:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 16171,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22819:6:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 16174,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "22868:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16294,
                                    "src": "22860:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 16173,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22860:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "22691:205:115"
                        },
                        "scope": 16295,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 15382,
                            "name": "IHyperdriveEvents",
                            "nameLocations": [
                                "905:17:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11205,
                            "src": "905:17:115"
                        },
                        "id": 15383,
                        "nodeType": "InheritanceSpecifier",
                        "src": "905:17:115"
                    },
                    {
                        "baseName": {
                            "id": 15384,
                            "name": "HyperdriveLP",
                            "nameLocations": [
                                "924:12:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 15361,
                            "src": "924:12:115"
                        },
                        "id": 15385,
                        "nodeType": "InheritanceSpecifier",
                        "src": "924:12:115"
                    }
                ],
                "canonicalName": "HyperdriveLong",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 15381,
                    "nodeType": "StructuredDocumentation",
                    "src": "543:326:115",
                    "text": "@author DELV\n @title HyperdriveLong\n @notice Implements the long accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    16295,
                    15361,
                    16779,
                    13995,
                    17990,
                    71674,
                    11205,
                    11777
                ],
                "name": "HyperdriveLong",
                "nameLocation": "887:14:115",
                "scope": 16296,
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
    "id": 115
};
