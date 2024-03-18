export const HyperdriveLP = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveLP\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"Implements the LP accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveLP.sol\":\"HyperdriveLP\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x72410851e77940e66681e23b9d10f3c3de0e8c9a3e5b1cca627e93bba431775d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://82a9292f388b16572cc5c5e873d1ead666ddcc3e436cf5d7fb036fd6c63ee9a2\",\"dweb:/ipfs/Qmauzxkn46ACS4XV43m2MbDF91KYP4ExYwSxL3cm1SDL6j\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195\",\"dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x5b3c0d159b1945a14227028d835e011bf740e007f664cba049ece1b6ab963067\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d8f4fef22462dabc799b2f8124440a7cc57076f7ceecb46219c69b09f50baf5f\",\"dweb:/ipfs/Qmcw9iC1RZt4Nh7dGH1yR7vUi6qZHJf6ReAvF2uLFHESqZ\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "contracts/src/internal/HyperdriveLP.sol": "HyperdriveLP"
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
                "keccak256": "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952",
                "urls": [
                    "bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf",
                    "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"
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
            "contracts/src/internal/HyperdriveMultiToken.sol": {
                "keccak256": "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373",
                "urls": [
                    "bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d",
                    "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveStorage.sol": {
                "keccak256": "0xf13ba4bcf41673bc04e4ae32a29c31b62514d66cfedee70b0d3bff574efc0e4a",
                "urls": [
                    "bzz-raw://e505639a656cf7c908e7c64cfd5cae6f4174a679de19d17a3f12f6e3fc4b2195",
                    "dweb:/ipfs/QmNmcmz9nV9uDyeouo8yWAKMoMqEVx6JMTfZwCRa9QU83N"
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
        "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
        "id": 15700,
        "exportedSymbols": {
            "AssetId": [
                18594
            ],
            "FixedPointMath": [
                19394
            ],
            "HyperdriveBase": [
                14333
            ],
            "HyperdriveLP": [
                15699
            ],
            "HyperdriveMath": [
                20142
            ],
            "HyperdriveMultiToken": [
                17117
            ],
            "IHyperdrive": [
                11028
            ],
            "IHyperdriveEvents": [
                11551
            ],
            "LPMath": [
                22086
            ],
            "SafeCast": [
                22265
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:24371:116",
        "nodes": [
            {
                "id": 14799,
                "nodeType": "PragmaDirective",
                "src": "39:23:116",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 14801,
                "nodeType": "ImportDirective",
                "src": "64:60:116",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 11029,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14800,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11028,
                            "src": "73:11:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14803,
                "nodeType": "ImportDirective",
                "src": "125:72:116",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
                "file": "../interfaces/IHyperdriveEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 11552,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14802,
                            "name": "IHyperdriveEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11551,
                            "src": "134:17:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14805,
                "nodeType": "ImportDirective",
                "src": "198:51:116",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 18595,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14804,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18594,
                            "src": "207:7:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14807,
                "nodeType": "ImportDirective",
                "src": "250:65:116",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 19395,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14806,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19394,
                            "src": "259:14:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14809,
                "nodeType": "ImportDirective",
                "src": "316:65:116",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 20143,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14808,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20142,
                            "src": "325:14:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14811,
                "nodeType": "ImportDirective",
                "src": "382:49:116",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 22087,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14810,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22086,
                            "src": "391:6:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14813,
                "nodeType": "ImportDirective",
                "src": "432:53:116",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "../libraries/SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 22266,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14812,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22265,
                            "src": "441:8:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14815,
                "nodeType": "ImportDirective",
                "src": "486:54:116",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
                "file": "./HyperdriveBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 14334,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14814,
                            "name": "HyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14333,
                            "src": "495:14:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 14817,
                "nodeType": "ImportDirective",
                "src": "541:66:116",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
                "file": "./HyperdriveMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 15700,
                "sourceUnit": 17118,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 14816,
                            "name": "HyperdriveMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17117,
                            "src": "550:20:116",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15699,
                "nodeType": "ContractDefinition",
                "src": "931:23478:116",
                "nodes": [
                    {
                        "id": 14827,
                        "nodeType": "UsingForDirective",
                        "src": "1039:33:116",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 14825,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1045:14:116"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 19394,
                            "src": "1045:14:116"
                        },
                        "typeName": {
                            "id": 14826,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1064:7:116",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 14830,
                        "nodeType": "UsingForDirective",
                        "src": "1077:26:116",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 14828,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1083:8:116"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 22265,
                            "src": "1083:8:116"
                        },
                        "typeName": {
                            "id": 14829,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1096:6:116",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 14833,
                        "nodeType": "UsingForDirective",
                        "src": "1108:27:116",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 14831,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1114:8:116"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 22265,
                            "src": "1114:8:116"
                        },
                        "typeName": {
                            "id": 14832,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1127:7:116",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 14969,
                        "nodeType": "FunctionDefinition",
                        "src": "1598:3704:116",
                        "nodes": [],
                        "body": {
                            "id": 14968,
                            "nodeType": "Block",
                            "src": "1774:3528:116",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 14848,
                                            "name": "_checkMessageValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13398,
                                            "src": "1851:18:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$__$",
                                                "typeString": "function () view"
                                            }
                                        },
                                        "id": 14849,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1851:20:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14850,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1851:20:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 14852,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14841,
                                                "src": "1950:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 14851,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13420,
                                            "src": "1936:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10875_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 14853,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1936:23:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14854,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1936:23:116"
                                },
                                {
                                    "condition": {
                                        "expression": {
                                            "id": 14855,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18160,
                                            "src": "2035:12:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 14856,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "2048:13:116",
                                        "memberName": "isInitialized",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10704,
                                        "src": "2035:26:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14863,
                                    "nodeType": "IfStatement",
                                    "src": "2031:100:116",
                                    "trueBody": {
                                        "id": 14862,
                                        "nodeType": "Block",
                                        "src": "2063:68:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 14857,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "2084:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 14859,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2096:22:116",
                                                        "memberName": "PoolAlreadyInitialized",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10953,
                                                        "src": "2084:34:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 14860,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2084:36:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 14861,
                                                "nodeType": "RevertStatement",
                                                "src": "2077:43:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        14865,
                                        14867
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14865,
                                            "mutability": "mutable",
                                            "name": "shareContribution",
                                            "nameLocation": "2267:17:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14968,
                                            "src": "2259:25:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14864,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2259:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 14867,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "2294:15:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14968,
                                            "src": "2286:23:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14866,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2286:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14872,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 14869,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14836,
                                                "src": "2335:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14870,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14841,
                                                "src": "2362:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 14868,
                                            "name": "_deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13278,
                                            "src": "2313:8:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 14871,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2313:67:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2258:122:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 14877,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 14873,
                                            "name": "shareContribution",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14865,
                                            "src": "3291:17:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 14876,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "hexValue": "32",
                                                "id": 14874,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3311:1:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_2_by_1",
                                                    "typeString": "int_const 2"
                                                },
                                                "value": "2"
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                                "id": 14875,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18153,
                                                "src": "3315:21:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3311:25:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3291:45:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14884,
                                    "nodeType": "IfStatement",
                                    "src": "3287:121:116",
                                    "trueBody": {
                                        "id": 14883,
                                        "nodeType": "Block",
                                        "src": "3338:70:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 14878,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "3359:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 14880,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3371:24:116",
                                                        "memberName": "BelowMinimumContribution",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10887,
                                                        "src": "3359:36:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 14881,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3359:38:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 14882,
                                                "nodeType": "RevertStatement",
                                                "src": "3352:45:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 14893,
                                    "nodeType": "UncheckedBlock",
                                    "src": "3417:91:116",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 14891,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 14885,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14846,
                                                    "src": "3441:8:116",
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
                                                    "id": 14890,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 14886,
                                                        "name": "shareContribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14865,
                                                        "src": "3452:17:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 14889,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "32",
                                                            "id": 14887,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3472:1:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_2_by_1",
                                                                "typeString": "int_const 2"
                                                            },
                                                            "value": "2"
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "*",
                                                        "rightExpression": {
                                                            "id": 14888,
                                                            "name": "_minimumShareReserves",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18153,
                                                            "src": "3476:21:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3472:25:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3452:45:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3441:56:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 14892,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3441:56:116"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 14898,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 14894,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18160,
                                                "src": "3564:12:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 14896,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "3577:13:116",
                                            "memberName": "isInitialized",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10704,
                                            "src": "3564:26:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 14897,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3593:4:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "3564:33:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 14899,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3564:33:116"
                                },
                                {
                                    "expression": {
                                        "id": 14906,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 14900,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18160,
                                                "src": "3737:12:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 14902,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "3750:13:116",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10680,
                                            "src": "3737:26:116",
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
                                                    "id": 14903,
                                                    "name": "shareContribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14865,
                                                    "src": "3766:17:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14904,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3784:9:116",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 22151,
                                                "src": "3766:27:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 14905,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3766:29:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "3737:58:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 14907,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3737:58:116"
                                },
                                {
                                    "expression": {
                                        "id": 14921,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 14908,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18160,
                                                "src": "3805:12:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 14910,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "3818:12:116",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10683,
                                            "src": "3805:25:116",
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
                                                            "id": 14913,
                                                            "name": "shareContribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14865,
                                                            "src": "3907:17:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14914,
                                                            "name": "_initialVaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18150,
                                                            "src": "3942:23:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14915,
                                                            "name": "_apr",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14838,
                                                            "src": "3983:4:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14916,
                                                            "name": "_positionDuration",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18132,
                                                            "src": "4005:17:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 14917,
                                                            "name": "_timeStretch",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18135,
                                                            "src": "4040:12:116",
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
                                                        "expression": {
                                                            "id": 14911,
                                                            "name": "HyperdriveMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 20142,
                                                            "src": "3833:14:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$20142_$",
                                                                "typeString": "type(library HyperdriveMath)"
                                                            }
                                                        },
                                                        "id": 14912,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3861:28:116",
                                                        "memberName": "calculateInitialBondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 19689,
                                                        "src": "3833:56:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 14918,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3833:233:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 14919,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4080:9:116",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 22151,
                                                "src": "3833:256:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 14920,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3833:258:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "3805:286:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 14922,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3805:286:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 14924,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "4602:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 14925,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "4610:12:116",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18327,
                                                "src": "4602:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 14928,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4632:1:116",
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
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 14927,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4624:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 14926,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4624:7:116",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 14929,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4624:10:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 14930,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18153,
                                                "src": "4636:21:116",
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
                                            "id": 14923,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16907,
                                            "src": "4596:5:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 14931,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4596:62:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14932,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4596:62:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 14934,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "4674:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 14935,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "4682:12:116",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18327,
                                                "src": "4674:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 14936,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14841,
                                                    "src": "4696:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 14937,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4705:11:116",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10868,
                                                "src": "4696:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 14938,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14846,
                                                "src": "4718:8:116",
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
                                            "id": 14933,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16907,
                                            "src": "4668:5:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 14939,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4668:59:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14940,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4668:59:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 14942,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13558,
                                                    "src": "4796:17:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 14943,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4796:19:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14944,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14867,
                                                "src": "4817:15:116",
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
                                            "id": 14941,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13472,
                                            "src": "4779:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 14945,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4779:54:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 14946,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4779:54:116"
                                },
                                {
                                    "assignments": [
                                        14948
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 14948,
                                            "mutability": "mutable",
                                            "name": "baseContribution",
                                            "nameLocation": "4889:16:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 14968,
                                            "src": "4881:24:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 14947,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4881:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 14954,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 14950,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14836,
                                                "src": "4946:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14951,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14867,
                                                "src": "4973:15:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14952,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14841,
                                                "src": "5002:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 14949,
                                            "name": "_convertToBaseFromOption",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14280,
                                            "src": "4908:24:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                            }
                                        },
                                        "id": 14953,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4908:112:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4881:139:116"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 14956,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14841,
                                                    "src": "5059:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 14957,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5068:11:116",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10868,
                                                "src": "5059:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 14958,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14846,
                                                "src": "5093:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14959,
                                                "name": "baseContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14948,
                                                "src": "5115:16:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 14960,
                                                "name": "shareContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14865,
                                                "src": "5166:17:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 14961,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14841,
                                                    "src": "5226:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 14962,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5235:6:116",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10871,
                                                "src": "5226:15:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 14963,
                                                "name": "_apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14838,
                                                "src": "5255:4:116",
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 14955,
                                            "name": "Initialize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11371,
                                            "src": "5035:10:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,bool,uint256)"
                                            }
                                        },
                                        "id": 14964,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5035:234:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14965,
                                    "nodeType": "EmitStatement",
                                    "src": "5030:239:116"
                                },
                                {
                                    "expression": {
                                        "id": 14966,
                                        "name": "lpShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14846,
                                        "src": "5287:8:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 14847,
                                    "id": 14967,
                                    "nodeType": "Return",
                                    "src": "5280:15:116"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 14834,
                            "nodeType": "StructuredDocumentation",
                            "src": "1141:452:116",
                            "text": "@dev Allows the first LP to initialize the market with a target APR.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the operation is settled.\n @return lpShares The initial number of LP shares created."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 14844,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 14843,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "1734:12:116"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71959,
                                    "src": "1734:12:116"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1734:12:116"
                            }
                        ],
                        "name": "_initialize",
                        "nameLocation": "1607:11:116",
                        "parameters": {
                            "id": 14842,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14836,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "1636:13:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14969,
                                    "src": "1628:21:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14835,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1628:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14838,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "1667:4:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14969,
                                    "src": "1659:12:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14837,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1659:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14841,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "1710:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14969,
                                    "src": "1681:37:116",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 14840,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 14839,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "1681:11:116",
                                                "1693:7:116"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10875,
                                            "src": "1681:19:116"
                                        },
                                        "referencedDeclaration": 10875,
                                        "src": "1681:19:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10875_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1618:106:116"
                        },
                        "returnParameters": {
                            "id": 14847,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14846,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "1764:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 14969,
                                    "src": "1756:16:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14845,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1756:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1755:18:116"
                        },
                        "scope": 15699,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15235,
                        "nodeType": "FunctionDefinition",
                        "src": "6311:5546:116",
                        "nodes": [],
                        "body": {
                            "id": 15234,
                            "nodeType": "Block",
                            "src": "6563:5294:116",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 14990,
                                            "name": "_checkMessageValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13398,
                                            "src": "6623:18:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$__$",
                                                "typeString": "function () view"
                                            }
                                        },
                                        "id": 14991,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6623:20:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14992,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6623:20:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 14994,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14981,
                                                "src": "6722:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 14993,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13420,
                                            "src": "6708:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10875_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 14995,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6708:23:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 14996,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6708:23:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 14999,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 14997,
                                            "name": "_contribution",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14972,
                                            "src": "6857:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 14998,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18156,
                                            "src": "6873:25:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6857:41:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15006,
                                    "nodeType": "IfStatement",
                                    "src": "6853:117:116",
                                    "trueBody": {
                                        "id": 15005,
                                        "nodeType": "Block",
                                        "src": "6900:70:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15000,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "6921:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15002,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6933:24:116",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10941,
                                                        "src": "6921:36:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15003,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6921:38:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15004,
                                                "nodeType": "RevertStatement",
                                                "src": "6914:45:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15008
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15008,
                                            "mutability": "mutable",
                                            "name": "apr",
                                            "nameLocation": "7027:3:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "7019:11:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15007,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7019:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15019,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 15011,
                                                    "name": "_effectiveShareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13573,
                                                    "src": "7078:23:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 15012,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7078:25:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15013,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18160,
                                                    "src": "7117:12:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 15014,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7130:12:116",
                                                "memberName": "bondReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10683,
                                                "src": "7117:25:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 15015,
                                                "name": "_initialVaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18150,
                                                "src": "7156:23:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15016,
                                                "name": "_positionDuration",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18132,
                                                "src": "7193:17:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15017,
                                                "name": "_timeStretch",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18135,
                                                "src": "7224:12:116",
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
                                                }
                                            ],
                                            "expression": {
                                                "id": 15009,
                                                "name": "HyperdriveMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20142,
                                                "src": "7033:14:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$20142_$",
                                                    "typeString": "type(library HyperdriveMath)"
                                                }
                                            },
                                            "id": 15010,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7048:16:116",
                                            "memberName": "calculateSpotAPR",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 19550,
                                            "src": "7033:31:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 15018,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7033:213:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7019:227:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 15026,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 15022,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15020,
                                                "name": "apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15008,
                                                "src": "7260:3:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 15021,
                                                "name": "_minApr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14976,
                                                "src": "7266:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "7260:13:116",
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
                                            "id": 15025,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15023,
                                                "name": "apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15008,
                                                "src": "7277:3:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 15024,
                                                "name": "_maxApr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14978,
                                                "src": "7283:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "7277:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "7260:30:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15033,
                                    "nodeType": "IfStatement",
                                    "src": "7256:92:116",
                                    "trueBody": {
                                        "id": 15032,
                                        "nodeType": "Block",
                                        "src": "7292:56:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15027,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "7313:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15029,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7325:10:116",
                                                        "memberName": "InvalidApr",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10905,
                                                        "src": "7313:22:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15030,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7313:24:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15031,
                                                "nodeType": "RevertStatement",
                                                "src": "7306:31:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15035,
                                        15037
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15035,
                                            "mutability": "mutable",
                                            "name": "shareContribution",
                                            "nameLocation": "7435:17:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "7427:25:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15034,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7427:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15037,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "7462:15:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "7454:23:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15036,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7454:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15042,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15039,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14972,
                                                "src": "7503:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15040,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14981,
                                                "src": "7530:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15038,
                                            "name": "_deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13278,
                                            "src": "7481:8:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 15041,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7481:67:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7426:122:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 15044,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13558,
                                                    "src": "7609:17:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 15045,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7609:19:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15046,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15037,
                                                "src": "7630:15:116",
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
                                            "id": 15043,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13472,
                                            "src": "7592:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 15047,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7592:54:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15048,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7592:54:116"
                                },
                                {
                                    "assignments": [
                                        15050
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15050,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesOutstanding",
                                            "nameLocation": "8072:27:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "8064:35:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15049,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8064:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15058,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15057,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "baseExpression": {
                                                "id": 15051,
                                                "name": "_totalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18205,
                                                "src": "8102:12:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 15054,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 15052,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "8128:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 15053,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "8136:26:116",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18336,
                                                "src": "8128:34:116",
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
                                            "src": "8102:70:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 15055,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18164,
                                                "src": "8175:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 15056,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "8189:15:116",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10721,
                                            "src": "8175:29:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "8102:102:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8064:140:116"
                                },
                                {
                                    "assignments": [
                                        15060
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15060,
                                            "mutability": "mutable",
                                            "name": "lpTotalSupply",
                                            "nameLocation": "8222:13:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "8214:21:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15059,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8214:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15067,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15066,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "baseExpression": {
                                                "id": 15061,
                                                "name": "_totalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18205,
                                                "src": "8238:12:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 15064,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 15062,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "8251:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 15063,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "8259:12:116",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18327,
                                                "src": "8251:20:116",
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
                                            "src": "8238:34:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 15065,
                                            "name": "withdrawalSharesOutstanding",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15050,
                                            "src": "8287:27:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8238:76:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8214:100:116"
                                },
                                {
                                    "assignments": [
                                        15069
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15069,
                                            "mutability": "mutable",
                                            "name": "endingPresentValue",
                                            "nameLocation": "8387:18:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "8379:26:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15068,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8379:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15070,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8379:26:116"
                                },
                                {
                                    "assignments": [
                                        15072
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15072,
                                            "mutability": "mutable",
                                            "name": "startingPresentValue",
                                            "nameLocation": "8423:20:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "8415:28:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15071,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8415:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15073,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8415:28:116"
                                },
                                {
                                    "id": 15155,
                                    "nodeType": "Block",
                                    "src": "8453:1798:116",
                                    "statements": [
                                        {
                                            "assignments": [
                                                15078
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 15078,
                                                    "mutability": "mutable",
                                                    "name": "params",
                                                    "nameLocation": "8573:6:116",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 15155,
                                                    "src": "8540:39:116",
                                                    "stateVariable": false,
                                                    "storageLocation": "memory",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                        "typeString": "struct LPMath.PresentValueParams"
                                                    },
                                                    "typeName": {
                                                        "id": 15077,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 15076,
                                                            "name": "LPMath.PresentValueParams",
                                                            "nameLocations": [
                                                                "8540:6:116",
                                                                "8547:18:116"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 20394,
                                                            "src": "8540:25:116"
                                                        },
                                                        "referencedDeclaration": 20394,
                                                        "src": "8540:25:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$20394_storage_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 15082,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "id": 15080,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15037,
                                                        "src": "8622:15:116",
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
                                                    "id": 15079,
                                                    "name": "_getPresentValueParams",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13735,
                                                    "src": "8582:22:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$20394_memory_ptr_$",
                                                        "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                                    }
                                                },
                                                "id": 15081,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8582:69:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "8540:111:116"
                                        },
                                        {
                                            "expression": {
                                                "id": 15088,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 15083,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15072,
                                                    "src": "8665:20:116",
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
                                                            "id": 15086,
                                                            "name": "params",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15078,
                                                            "src": "8717:6:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 15084,
                                                            "name": "LPMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22086,
                                                            "src": "8688:6:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_LPMath_$22086_$",
                                                                "typeString": "type(library LPMath)"
                                                            }
                                                        },
                                                        "id": 15085,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8695:21:116",
                                                        "memberName": "calculatePresentValue",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 20423,
                                                        "src": "8688:28:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$20394_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15087,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8688:36:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "8665:59:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15089,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8665:59:116"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "id": 15091,
                                                                "name": "shareContribution",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15035,
                                                                "src": "8864:17:116",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 15092,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8882:8:116",
                                                            "memberName": "toInt256",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 22264,
                                                            "src": "8864:26:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (int256)"
                                                            }
                                                        },
                                                        "id": 15093,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8864:28:116",
                                                        "tryCall": false,
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
                                                    "id": 15090,
                                                    "name": "_updateLiquidity",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15698,
                                                    "src": "8847:16:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                                                        "typeString": "function (int256)"
                                                    }
                                                },
                                                "id": 15094,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8847:46:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 15095,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8847:46:116"
                                        },
                                        {
                                            "expression": {
                                                "id": 15101,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "expression": {
                                                        "id": 15096,
                                                        "name": "params",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15078,
                                                        "src": "8907:6:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 15098,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "memberLocation": "8914:13:116",
                                                    "memberName": "shareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 20371,
                                                    "src": "8907:20:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "expression": {
                                                        "id": 15099,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18160,
                                                        "src": "8930:12:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 15100,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8943:13:116",
                                                    "memberName": "shareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10680,
                                                    "src": "8930:26:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "src": "8907:49:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15102,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8907:49:116"
                                        },
                                        {
                                            "expression": {
                                                "id": 15108,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "expression": {
                                                        "id": 15103,
                                                        "name": "params",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15078,
                                                        "src": "8970:6:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 15105,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "memberLocation": "8977:15:116",
                                                    "memberName": "shareAdjustment",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 20373,
                                                    "src": "8970:22:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "expression": {
                                                        "id": 15106,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18160,
                                                        "src": "8995:12:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 15107,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9008:15:116",
                                                    "memberName": "shareAdjustment",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10692,
                                                    "src": "8995:28:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int128",
                                                        "typeString": "int128"
                                                    }
                                                },
                                                "src": "8970:53:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 15109,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8970:53:116"
                                        },
                                        {
                                            "expression": {
                                                "id": 15115,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "expression": {
                                                        "id": 15110,
                                                        "name": "params",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15078,
                                                        "src": "9037:6:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 15112,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "memberLocation": "9044:12:116",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 20375,
                                                    "src": "9037:19:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "expression": {
                                                        "id": 15113,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18160,
                                                        "src": "9059:12:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 15114,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9072:12:116",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10683,
                                                    "src": "9059:25:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "src": "9037:47:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15116,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9037:47:116"
                                        },
                                        {
                                            "expression": {
                                                "id": 15122,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 15117,
                                                    "name": "endingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15069,
                                                    "src": "9098:18:116",
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
                                                            "id": 15120,
                                                            "name": "params",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15078,
                                                            "src": "9148:6:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$20394_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 15118,
                                                            "name": "LPMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 22086,
                                                            "src": "9119:6:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_LPMath_$22086_$",
                                                                "typeString": "type(library LPMath)"
                                                            }
                                                        },
                                                        "id": 15119,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9126:21:116",
                                                        "memberName": "calculatePresentValue",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 20423,
                                                        "src": "9119:28:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$20394_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15121,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9119:36:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9098:57:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15123,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9098:57:116"
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 15126,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 15124,
                                                    "name": "endingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15069,
                                                    "src": "9251:18:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 15125,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15072,
                                                    "src": "9272:20:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9251:41:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 15133,
                                            "nodeType": "IfStatement",
                                            "src": "9247:141:116",
                                            "trueBody": {
                                                "id": 15132,
                                                "nodeType": "Block",
                                                "src": "9294:94:116",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "expression": {
                                                                    "id": 15127,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "9319:11:116",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 15129,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "9331:40:116",
                                                                "memberName": "DecreasedPresentValueWhenAddingLiquidity",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10944,
                                                                "src": "9319:52:116",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 15130,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "9319:54:116",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 15131,
                                                        "nodeType": "RevertStatement",
                                                        "src": "9312:61:116"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "expression": {
                                                "id": 15143,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 15134,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14988,
                                                    "src": "9873:8:116",
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
                                                            "id": 15140,
                                                            "name": "lpTotalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15060,
                                                            "src": "9956:13:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15141,
                                                            "name": "startingPresentValue",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15072,
                                                            "src": "9987:20:116",
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
                                                            "components": [
                                                                {
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "id": 15137,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "id": 15135,
                                                                        "name": "endingPresentValue",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 15069,
                                                                        "src": "9885:18:116",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "-",
                                                                    "rightExpression": {
                                                                        "id": 15136,
                                                                        "name": "startingPresentValue",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 15072,
                                                                        "src": "9906:20:116",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "src": "9885:41:116",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "id": 15138,
                                                            "isConstant": false,
                                                            "isInlineArray": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "TupleExpression",
                                                            "src": "9884:43:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15139,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9928:10:116",
                                                        "memberName": "mulDivDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18656,
                                                        "src": "9884:54:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15142,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9884:137:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9873:148:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15144,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9873:148:116"
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 15147,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 15145,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14988,
                                                    "src": "10125:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 15146,
                                                    "name": "_minimumTransactionAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18156,
                                                    "src": "10136:25:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "10125:36:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 15154,
                                            "nodeType": "IfStatement",
                                            "src": "10121:120:116",
                                            "trueBody": {
                                                "id": 15153,
                                                "nodeType": "Block",
                                                "src": "10163:78:116",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "expression": {
                                                                    "id": 15148,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 11028,
                                                                    "src": "10188:11:116",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 15150,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "10200:24:116",
                                                                "memberName": "MinimumTransactionAmount",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 10941,
                                                                "src": "10188:36:116",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 15151,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10188:38:116",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 15152,
                                                        "nodeType": "RevertStatement",
                                                        "src": "10181:45:116"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15161,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 15158,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14988,
                                                    "src": "10425:8:116",
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
                                                    "id": 15156,
                                                    "name": "_contribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14972,
                                                    "src": "10403:13:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15157,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10417:7:116",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18692,
                                                "src": "10403:21:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 15159,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "10403:31:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15160,
                                            "name": "_minLpSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14974,
                                            "src": "10437:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "10403:50:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15168,
                                    "nodeType": "IfStatement",
                                    "src": "10399:113:116",
                                    "trueBody": {
                                        "id": 15167,
                                        "nodeType": "Block",
                                        "src": "10455:57:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15162,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "10476:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15164,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10488:11:116",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10950,
                                                        "src": "10476:23:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15165,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10476:25:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15166,
                                                "nodeType": "RevertStatement",
                                                "src": "10469:32:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15170,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "10571:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 15171,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "10579:12:116",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18327,
                                                "src": "10571:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15172,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14981,
                                                    "src": "10593:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15173,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10602:11:116",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10868,
                                                "src": "10593:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15174,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14988,
                                                "src": "10615:8:116",
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
                                            "id": 15169,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16907,
                                            "src": "10565:5:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15175,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10565:59:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15176,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10565:59:116"
                                },
                                {
                                    "assignments": [
                                        15178
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15178,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "10916:7:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "10911:12:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 15177,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10911:4:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15182,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15180,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15037,
                                                "src": "10952:15:116",
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
                                            "id": 15179,
                                            "name": "_distributeExcessIdleSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15622,
                                            "src": "10926:25:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256) returns (bool)"
                                            }
                                        },
                                        "id": 15181,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10926:42:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10911:57:116"
                                },
                                {
                                    "condition": {
                                        "id": 15184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "10982:8:116",
                                        "subExpression": {
                                            "id": 15183,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15178,
                                            "src": "10983:7:116",
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
                                    "id": 15191,
                                    "nodeType": "IfStatement",
                                    "src": "10978:86:116",
                                    "trueBody": {
                                        "id": 15190,
                                        "nodeType": "Block",
                                        "src": "10992:72:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15185,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "11013:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15187,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11025:26:116",
                                                        "memberName": "DistributeExcessIdleFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10970,
                                                        "src": "11013:38:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15188,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11013:40:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15189,
                                                "nodeType": "RevertStatement",
                                                "src": "11006:47:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15193
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15193,
                                            "mutability": "mutable",
                                            "name": "lpSharePrice",
                                            "nameLocation": "11121:12:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "11113:20:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15192,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11113:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15203,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 15196,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15194,
                                                "name": "lpTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15060,
                                                "src": "11136:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 15195,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "11153:1:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "11136:18:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "arguments": [
                                                {
                                                    "id": 15200,
                                                    "name": "lpTotalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15060,
                                                    "src": "11280:13:116",
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
                                                    "id": 15198,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15072,
                                                    "src": "11251:20:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15199,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11272:7:116",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18692,
                                                "src": "11251:28:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 15201,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11251:43:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 15202,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "11136:158:116",
                                        "trueExpression": {
                                            "hexValue": "30",
                                            "id": 15197,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "11169:1:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11113:181:116"
                                },
                                {
                                    "assignments": [
                                        15205
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15205,
                                            "mutability": "mutable",
                                            "name": "contribution",
                                            "nameLocation": "11312:12:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "11304:20:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15204,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11304:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15207,
                                    "initialValue": {
                                        "id": 15206,
                                        "name": "_contribution",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14972,
                                        "src": "11327:13:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11304:36:116"
                                },
                                {
                                    "assignments": [
                                        15209
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15209,
                                            "mutability": "mutable",
                                            "name": "baseContribution",
                                            "nameLocation": "11382:16:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "11374:24:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15208,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11374:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15215,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15211,
                                                "name": "contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15205,
                                                "src": "11439:12:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15212,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15037,
                                                "src": "11465:15:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15213,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14981,
                                                "src": "11494:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15210,
                                            "name": "_convertToBaseFromOption",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14280,
                                            "src": "11401:24:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                            }
                                        },
                                        "id": 15214,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11401:111:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11374:138:116"
                                },
                                {
                                    "assignments": [
                                        15220
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15220,
                                            "mutability": "mutable",
                                            "name": "options",
                                            "nameLocation": "11551:7:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15234,
                                            "src": "11522:36:116",
                                            "stateVariable": false,
                                            "storageLocation": "calldata",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options"
                                            },
                                            "typeName": {
                                                "id": 15219,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 15218,
                                                    "name": "IHyperdrive.Options",
                                                    "nameLocations": [
                                                        "11522:11:116",
                                                        "11534:7:116"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10875,
                                                    "src": "11522:19:116"
                                                },
                                                "referencedDeclaration": 10875,
                                                "src": "11522:19:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Options"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15222,
                                    "initialValue": {
                                        "id": 15221,
                                        "name": "_options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14981,
                                        "src": "11561:8:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                            "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11522:47:116"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15224,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15220,
                                                    "src": "11634:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15225,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11642:11:116",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10868,
                                                "src": "11634:19:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15226,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14988,
                                                "src": "11667:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15227,
                                                "name": "baseContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15209,
                                                "src": "11689:16:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15228,
                                                "name": "shareContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15035,
                                                "src": "11740:17:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15229,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15220,
                                                    "src": "11800:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15230,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11808:6:116",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10871,
                                                "src": "11800:14:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 15231,
                                                "name": "lpSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15193,
                                                "src": "11828:12:116",
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 15223,
                                            "name": "AddLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11386,
                                            "src": "11608:12:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,bool,uint256)"
                                            }
                                        },
                                        "id": 15232,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11608:242:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15233,
                                    "nodeType": "EmitStatement",
                                    "src": "11603:247:116"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 14970,
                            "nodeType": "StructuredDocumentation",
                            "src": "5308:998:116",
                            "text": "@dev Allows LPs to supply liquidity for LP shares.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _minLpSharePrice The minimum LP share price the LP is willing\n        to accept for their shares. LPs incur negative slippage when\n        adding liquidity if there is a net curve position in the market,\n        so this allows LPs to protect themselves from high levels of\n        slippage. The units of this quantity are either base or vault\n        shares, depending on the value of `_options.asBase`.\n @param _minApr The minimum APR at which the LP is willing to supply.\n @param _maxApr The maximum APR at which the LP is willing to supply.\n @param _options The options that configure how the operation is settled.\n @return lpShares The number of LP tokens created."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 14984,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 14983,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "6511:12:116"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71959,
                                    "src": "6511:12:116"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6511:12:116"
                            },
                            {
                                "id": 14986,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 14985,
                                    "name": "isNotPaused",
                                    "nameLocations": [
                                        "6524:11:116"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 13462,
                                    "src": "6524:11:116"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6524:11:116"
                            }
                        ],
                        "name": "_addLiquidity",
                        "nameLocation": "6320:13:116",
                        "parameters": {
                            "id": 14982,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14972,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "6351:13:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15235,
                                    "src": "6343:21:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14971,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6343:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14974,
                                    "mutability": "mutable",
                                    "name": "_minLpSharePrice",
                                    "nameLocation": "6382:16:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15235,
                                    "src": "6374:24:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14973,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6374:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14976,
                                    "mutability": "mutable",
                                    "name": "_minApr",
                                    "nameLocation": "6416:7:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15235,
                                    "src": "6408:15:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14975,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6408:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14978,
                                    "mutability": "mutable",
                                    "name": "_maxApr",
                                    "nameLocation": "6441:7:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15235,
                                    "src": "6433:15:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14977,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6433:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 14981,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "6487:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15235,
                                    "src": "6458:37:116",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 14980,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 14979,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "6458:11:116",
                                                "6470:7:116"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10875,
                                            "src": "6458:19:116"
                                        },
                                        "referencedDeclaration": 10875,
                                        "src": "6458:19:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10875_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6333:168:116"
                        },
                        "returnParameters": {
                            "id": 14989,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 14988,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "6553:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15235,
                                    "src": "6545:16:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 14987,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6545:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6544:18:116"
                        },
                        "scope": 15699,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15351,
                        "nodeType": "FunctionDefinition",
                        "src": "12925:2366:116",
                        "nodes": [],
                        "body": {
                            "id": 15350,
                            "nodeType": "Block",
                            "src": "13170:2121:116",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15253,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15243,
                                                "src": "13248:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15252,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13420,
                                            "src": "13234:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10875_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 15254,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13234:23:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15255,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13234:23:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15258,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15256,
                                            "name": "_lpShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15238,
                                            "src": "13400:9:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15257,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18156,
                                            "src": "13412:25:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "13400:37:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15265,
                                    "nodeType": "IfStatement",
                                    "src": "13396:113:116",
                                    "trueBody": {
                                        "id": 15264,
                                        "nodeType": "Block",
                                        "src": "13439:70:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15259,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "13460:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15261,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13472:24:116",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10941,
                                                        "src": "13460:36:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15262,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13460:38:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15263,
                                                "nodeType": "RevertStatement",
                                                "src": "13453:45:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15267
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15267,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "13560:15:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15350,
                                            "src": "13552:23:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15266,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "13552:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15270,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15268,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13352,
                                            "src": "13578:19:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 15269,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13578:21:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13552:47:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 15272,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13558,
                                                    "src": "13626:17:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 15273,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13626:19:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15274,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15267,
                                                "src": "13647:15:116",
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
                                            "id": 15271,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13472,
                                            "src": "13609:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 15275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13609:54:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13609:54:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15278,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "13713:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 15279,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "13721:12:116",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18327,
                                                "src": "13713:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15280,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "13735:3:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 15281,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13739:6:116",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "13735:10:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15282,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15238,
                                                "src": "13747:9:116",
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
                                            "id": 15277,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16959,
                                            "src": "13707:5:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15283,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13707:50:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15284,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13707:50:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15286,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "13846:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 15287,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "13854:26:116",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18336,
                                                "src": "13846:34:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15288,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15243,
                                                    "src": "13894:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15289,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13903:11:116",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10868,
                                                "src": "13894:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15290,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15238,
                                                "src": "13928:9:116",
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
                                            "id": 15285,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16907,
                                            "src": "13827:5:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15291,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13827:120:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15292,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13827:120:116"
                                },
                                {
                                    "assignments": [
                                        15294
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15294,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesRedeemed",
                                            "nameLocation": "14030:24:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15350,
                                            "src": "14022:32:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15293,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14022:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15295,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14022:32:116"
                                },
                                {
                                    "expression": {
                                        "id": 15307,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 15296,
                                                    "name": "proceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15248,
                                                    "src": "14065:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15297,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15294,
                                                    "src": "14075:24:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 15298,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "14064:36:116",
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
                                                    "expression": {
                                                        "id": 15300,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15243,
                                                        "src": "14148:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    },
                                                    "id": 15301,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14157:11:116",
                                                    "memberName": "destination",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10868,
                                                    "src": "14148:20:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                {
                                                    "id": 15302,
                                                    "name": "_lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15238,
                                                    "src": "14182:9:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15303,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15267,
                                                    "src": "14205:15:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15304,
                                                    "name": "_minOutputPerShare",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15240,
                                                    "src": "14234:18:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15305,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15243,
                                                    "src": "14266:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
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
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                ],
                                                "id": 15299,
                                                "name": "_redeemWithdrawalSharesInternal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15530,
                                                "src": "14103:31:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (address,uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                                }
                                            },
                                            "id": 15306,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "14103:181:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "src": "14064:220:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15308,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14064:220:116"
                                },
                                {
                                    "expression": {
                                        "id": 15313,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15309,
                                            "name": "withdrawalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15250,
                                            "src": "14294:16:116",
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
                                            "id": 15312,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15310,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15238,
                                                "src": "14313:9:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 15311,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15294,
                                                "src": "14325:24:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "14313:36:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "14294:55:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15314,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14294:55:116"
                                },
                                {
                                    "assignments": [
                                        15316,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15316,
                                            "mutability": "mutable",
                                            "name": "lpSharePrice",
                                            "nameLocation": "14674:12:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15350,
                                            "src": "14666:20:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15315,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14666:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 15320,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15318,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15267,
                                                "src": "14719:15:116",
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
                                            "id": 15317,
                                            "name": "_calculateLPSharePriceSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14143,
                                            "src": "14692:26:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                                                "typeString": "function (uint256) view returns (uint256,bool)"
                                            }
                                        },
                                        "id": 15319,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14692:43:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14665:70:116"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15322,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "14779:3:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 15323,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "14783:6:116",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "14779:10:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15324,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15243,
                                                    "src": "14815:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15325,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "14824:11:116",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10868,
                                                "src": "14815:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15326,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15238,
                                                "src": "14864:9:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15328,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15248,
                                                        "src": "14912:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15329,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15267,
                                                        "src": "14922:15:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15330,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15243,
                                                        "src": "14939:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15327,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14280,
                                                    "src": "14887:24:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15331,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14887:61:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15333,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15248,
                                                        "src": "15028:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15334,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15267,
                                                        "src": "15054:15:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15335,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15243,
                                                        "src": "15087:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15332,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14306,
                                                    "src": "14979:31:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15336,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14979:130:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15337,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15243,
                                                    "src": "15148:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15338,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15157:6:116",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10871,
                                                "src": "15148:15:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15341,
                                                        "name": "withdrawalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15250,
                                                        "src": "15185:16:116",
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
                                                    "id": 15340,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "15177:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": {
                                                        "id": 15339,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "15177:7:116",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 15342,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15177:25:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15343,
                                                "name": "lpSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15316,
                                                "src": "15216:12:116",
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                            "id": 15321,
                                            "name": "RemoveLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11405,
                                            "src": "14750:15:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256,uint256,uint256,bool,uint256,uint256)"
                                            }
                                        },
                                        "id": 15344,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14750:488:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15345,
                                    "nodeType": "EmitStatement",
                                    "src": "14745:493:116"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 15346,
                                                "name": "proceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15248,
                                                "src": "15257:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15347,
                                                "name": "withdrawalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15250,
                                                "src": "15267:16:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 15348,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "15256:28:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 15251,
                                    "id": 15349,
                                    "nodeType": "Return",
                                    "src": "15249:35:116"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15236,
                            "nodeType": "StructuredDocumentation",
                            "src": "11863:1057:116",
                            "text": "@dev Allows an LP to burn shares and withdraw from the pool.\n @param _lpShares The LP shares to burn.\n @param _minOutputPerShare The minimum amount the LP expects to receive\n        for each withdrawal share that is burned. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP removing liquidity receives. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @return withdrawalShares The base that the LP receives buys out some of\n         their LP shares, but it may not be sufficient to fully buy the\n         LP out. In this case, the LP receives withdrawal shares equal\n         in value to the present value they are owed. As idle capital\n         becomes available, the pool will buy back these shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 15246,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 15245,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "13092:12:116"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71959,
                                    "src": "13092:12:116"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "13092:12:116"
                            }
                        ],
                        "name": "_removeLiquidity",
                        "nameLocation": "12934:16:116",
                        "parameters": {
                            "id": 15244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15238,
                                    "mutability": "mutable",
                                    "name": "_lpShares",
                                    "nameLocation": "12968:9:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15351,
                                    "src": "12960:17:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15237,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12960:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15240,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "12995:18:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15351,
                                    "src": "12987:26:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15239,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12987:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15243,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "13052:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15351,
                                    "src": "13023:37:116",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 15242,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 15241,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "13023:11:116",
                                                "13035:7:116"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10875,
                                            "src": "13023:19:116"
                                        },
                                        "referencedDeclaration": 10875,
                                        "src": "13023:19:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10875_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12950:116:116"
                        },
                        "returnParameters": {
                            "id": 15251,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15248,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "13130:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15351,
                                    "src": "13122:16:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15247,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13122:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15250,
                                    "mutability": "mutable",
                                    "name": "withdrawalShares",
                                    "nameLocation": "13148:16:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15351,
                                    "src": "13140:24:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15249,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13140:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13121:44:116"
                        },
                        "scope": 15699,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15421,
                        "nodeType": "FunctionDefinition",
                        "src": "16295:1373:116",
                        "nodes": [],
                        "body": {
                            "id": 15420,
                            "nodeType": "Block",
                            "src": "16563:1105:116",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15369,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15359,
                                                "src": "16641:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15368,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13420,
                                            "src": "16627:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10875_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 15370,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16627:23:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15371,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16627:23:116"
                                },
                                {
                                    "assignments": [
                                        15373
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15373,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "16702:15:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15420,
                                            "src": "16694:23:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15372,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "16694:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15376,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15374,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13352,
                                            "src": "16720:19:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 15375,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16720:21:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "16694:47:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 15378,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13558,
                                                    "src": "16768:17:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 15379,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16768:19:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15380,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15373,
                                                "src": "16789:15:116",
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
                                            "id": 15377,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13472,
                                            "src": "16751:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 15381,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16751:54:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15382,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16751:54:116"
                                },
                                {
                                    "expression": {
                                        "id": 15394,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 15383,
                                                    "name": "proceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15364,
                                                    "src": "16881:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15384,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15366,
                                                    "src": "16891:24:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 15385,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "16880:36:116",
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
                                                    "expression": {
                                                        "id": 15387,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "16964:3:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 15388,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16968:6:116",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16964:10:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                {
                                                    "id": 15389,
                                                    "name": "_withdrawalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15354,
                                                    "src": "16988:17:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15390,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15373,
                                                    "src": "17019:15:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15391,
                                                    "name": "_minOutputPerShare",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15356,
                                                    "src": "17048:18:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15392,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15359,
                                                    "src": "17080:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
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
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                ],
                                                "id": 15386,
                                                "name": "_redeemWithdrawalSharesInternal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15530,
                                                "src": "16919:31:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (address,uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                                }
                                            },
                                            "id": 15393,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16919:179:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "src": "16880:218:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15395,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16880:218:116"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15397,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "17198:3:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 15398,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17202:6:116",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "17198:10:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15399,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15359,
                                                    "src": "17234:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15400,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17243:11:116",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10868,
                                                "src": "17234:20:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15401,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15366,
                                                "src": "17283:24:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15403,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15364,
                                                        "src": "17346:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15404,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15373,
                                                        "src": "17356:15:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15405,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15359,
                                                        "src": "17373:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15402,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14280,
                                                    "src": "17321:24:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15406,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "17321:61:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15408,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15364,
                                                        "src": "17462:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15409,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15373,
                                                        "src": "17488:15:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15410,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15359,
                                                        "src": "17521:8:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15407,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14306,
                                                    "src": "17413:31:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15411,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "17413:130:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15412,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15359,
                                                    "src": "17582:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15413,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17591:6:116",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10871,
                                                "src": "17582:15:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 15396,
                                            "name": "RedeemWithdrawalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11420,
                                            "src": "17162:22:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$__$",
                                                "typeString": "function (address,address,uint256,uint256,uint256,bool)"
                                            }
                                        },
                                        "id": 15414,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "17162:445:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15415,
                                    "nodeType": "EmitStatement",
                                    "src": "17157:450:116"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 15416,
                                                "name": "proceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15364,
                                                "src": "17626:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15417,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15366,
                                                "src": "17636:24:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 15418,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "17625:36:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 15367,
                                    "id": 15419,
                                    "nodeType": "Return",
                                    "src": "17618:43:116"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15352,
                            "nodeType": "StructuredDocumentation",
                            "src": "15297:993:116",
                            "text": "@dev Redeems withdrawal shares by giving the LP a pro-rata amount of the\n      withdrawal pool's proceeds. This function redeems the maximum\n      amount of the specified withdrawal shares given the amount of\n      withdrawal shares ready to withdraw.\n @param _withdrawalShares The withdrawal shares to redeem.\n @param _minOutputPerShare The minimum amount the LP expects to\n        receive for each withdrawal share that is burned. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP received. The units of this quantity\n         are either base or vault shares, depending on the value of\n         `_options.asBase`.\n @return withdrawalSharesRedeemed The amount of withdrawal shares that\n         were redeemed."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 15362,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 15361,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "16477:12:116"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71959,
                                    "src": "16477:12:116"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "16477:12:116"
                            }
                        ],
                        "name": "_redeemWithdrawalShares",
                        "nameLocation": "16304:23:116",
                        "parameters": {
                            "id": 15360,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15354,
                                    "mutability": "mutable",
                                    "name": "_withdrawalShares",
                                    "nameLocation": "16345:17:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15421,
                                    "src": "16337:25:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15353,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16337:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15356,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "16380:18:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15421,
                                    "src": "16372:26:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15355,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16372:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15359,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "16437:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15421,
                                    "src": "16408:37:116",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 15358,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 15357,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "16408:11:116",
                                                "16420:7:116"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10875,
                                            "src": "16408:19:116"
                                        },
                                        "referencedDeclaration": 10875,
                                        "src": "16408:19:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10875_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16327:124:116"
                        },
                        "returnParameters": {
                            "id": 15367,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15364,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "16515:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15421,
                                    "src": "16507:16:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15363,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16507:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15366,
                                    "mutability": "mutable",
                                    "name": "withdrawalSharesRedeemed",
                                    "nameLocation": "16533:24:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15421,
                                    "src": "16525:32:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15365,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16525:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16506:52:116"
                        },
                        "scope": 15699,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15530,
                        "nodeType": "FunctionDefinition",
                        "src": "18805:2333:116",
                        "nodes": [],
                        "body": {
                            "id": 15529,
                            "nodeType": "Block",
                            "src": "19099:2039:116",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15441,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15428,
                                                "src": "19470:16:116",
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
                                            "id": 15440,
                                            "name": "_distributeExcessIdleSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15622,
                                            "src": "19444:25:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256) returns (bool)"
                                            }
                                        },
                                        "id": 15442,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19444:43:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15443,
                                    "nodeType": "ExpressionStatement",
                                    "src": "19444:43:116"
                                },
                                {
                                    "expression": {
                                        "id": 15446,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15444,
                                            "name": "withdrawalSharesRedeemed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15438,
                                            "src": "19690:24:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 15445,
                                            "name": "_withdrawalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15426,
                                            "src": "19717:17:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "19690:44:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15447,
                                    "nodeType": "ExpressionStatement",
                                    "src": "19690:44:116"
                                },
                                {
                                    "assignments": [
                                        15449
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15449,
                                            "mutability": "mutable",
                                            "name": "readyToWithdraw_",
                                            "nameLocation": "19752:16:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15529,
                                            "src": "19744:24:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            },
                                            "typeName": {
                                                "id": 15448,
                                                "name": "uint128",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "19744:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15452,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15450,
                                            "name": "_withdrawPool",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18164,
                                            "src": "19771:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                            }
                                        },
                                        "id": 15451,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "19785:15:116",
                                        "memberName": "readyToWithdraw",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10721,
                                        "src": "19771:29:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "19744:56:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15455,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15453,
                                            "name": "withdrawalSharesRedeemed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15438,
                                            "src": "19814:24:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 15454,
                                            "name": "readyToWithdraw_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15449,
                                            "src": "19841:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "19814:43:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15461,
                                    "nodeType": "IfStatement",
                                    "src": "19810:117:116",
                                    "trueBody": {
                                        "id": 15460,
                                        "nodeType": "Block",
                                        "src": "19859:68:116",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15458,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 15456,
                                                        "name": "withdrawalSharesRedeemed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15438,
                                                        "src": "19873:24:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 15457,
                                                        "name": "readyToWithdraw_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15449,
                                                        "src": "19900:16:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "19873:43:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15459,
                                                "nodeType": "ExpressionStatement",
                                                "src": "19873:43:116"
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
                                        "id": 15464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15462,
                                            "name": "withdrawalSharesRedeemed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15438,
                                            "src": "19940:24:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 15463,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "19968:1:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "19940:29:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15469,
                                    "nodeType": "IfStatement",
                                    "src": "19936:48:116",
                                    "trueBody": {
                                        "expression": {
                                            "components": [
                                                {
                                                    "hexValue": "30",
                                                    "id": 15465,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "19979:1:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                {
                                                    "hexValue": "30",
                                                    "id": 15466,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "19982:1:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                }
                                            ],
                                            "id": 15467,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "19978:6:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_rational_0_by_1_$",
                                                "typeString": "tuple(int_const 0,int_const 0)"
                                            }
                                        },
                                        "functionReturnParameters": 15439,
                                        "id": 15468,
                                        "nodeType": "Return",
                                        "src": "19971:13:116"
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15471,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "20059:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 15472,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "20067:26:116",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18336,
                                                "src": "20059:34:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15473,
                                                "name": "_source",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15424,
                                                "src": "20107:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15474,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15438,
                                                "src": "20128:24:116",
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
                                            "id": 15470,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16959,
                                            "src": "20040:5:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15475,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "20040:122:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15476,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20040:122:116"
                                },
                                {
                                    "assignments": [
                                        15478
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15478,
                                            "mutability": "mutable",
                                            "name": "shareProceeds",
                                            "nameLocation": "20327:13:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15529,
                                            "src": "20319:21:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15477,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "20319:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15485,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15481,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18164,
                                                    "src": "20392:13:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 15482,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20406:8:116",
                                                "memberName": "proceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10724,
                                                "src": "20392:22:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 15483,
                                                "name": "readyToWithdraw_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15449,
                                                "src": "20428:16:116",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            ],
                                            "expression": {
                                                "id": 15479,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15438,
                                                "src": "20343:24:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15480,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20368:10:116",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18656,
                                            "src": "20343:35:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
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
                                        "src": "20343:111:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "20319:135:116"
                                },
                                {
                                    "expression": {
                                        "id": 15494,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15486,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18164,
                                                "src": "20517:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 15488,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20531:15:116",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10721,
                                            "src": "20517:29:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            },
                                            "id": 15493,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15489,
                                                "name": "readyToWithdraw_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15449,
                                                "src": "20561:16:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "expression": {
                                                        "id": 15490,
                                                        "name": "withdrawalSharesRedeemed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15438,
                                                        "src": "20592:24:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 15491,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "20617:9:116",
                                                    "memberName": "toUint128",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 22151,
                                                    "src": "20592:34:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256) pure returns (uint128)"
                                                    }
                                                },
                                                "id": 15492,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "20592:36:116",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "src": "20561:67:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "20517:111:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15495,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20517:111:116"
                                },
                                {
                                    "expression": {
                                        "id": 15502,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15496,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18164,
                                                "src": "20638:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 15498,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20652:8:116",
                                            "memberName": "proceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10724,
                                            "src": "20638:22:116",
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
                                                    "id": 15499,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15478,
                                                    "src": "20664:13:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15500,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20678:9:116",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 22151,
                                                "src": "20664:23:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15501,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20664:25:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "20638:51:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15503,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20638:51:116"
                                },
                                {
                                    "expression": {
                                        "id": 15510,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15504,
                                            "name": "proceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15436,
                                            "src": "20752:8:116",
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
                                                    "id": 15506,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15478,
                                                    "src": "20773:13:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15507,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15428,
                                                    "src": "20788:16:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15508,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15433,
                                                    "src": "20806:8:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
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
                                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                ],
                                                "id": 15505,
                                                "name": "_withdraw",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13341,
                                                "src": "20763:9:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10875_calldata_ptr_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                                                }
                                            },
                                            "id": 15509,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20763:52:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20752:63:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15511,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20752:63:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15517,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15512,
                                            "name": "proceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15436,
                                            "src": "20958:8:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "arguments": [
                                                {
                                                    "id": 15515,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15438,
                                                    "src": "20994:24:116",
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
                                                    "id": 15513,
                                                    "name": "_minOutputPerShare",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15430,
                                                    "src": "20969:18:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15514,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20988:5:116",
                                                "memberName": "mulUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18724,
                                                "src": "20969:24:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 15516,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20969:50:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20958:61:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15524,
                                    "nodeType": "IfStatement",
                                    "src": "20954:124:116",
                                    "trueBody": {
                                        "id": 15523,
                                        "nodeType": "Block",
                                        "src": "21021:57:116",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15518,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11028,
                                                            "src": "21042:11:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$11028_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15520,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "21054:11:116",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10950,
                                                        "src": "21042:23:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15521,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "21042:25:116",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15522,
                                                "nodeType": "RevertStatement",
                                                "src": "21035:32:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 15525,
                                                "name": "proceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15436,
                                                "src": "21096:8:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15526,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15438,
                                                "src": "21106:24:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 15527,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "21095:36:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 15439,
                                    "id": 15528,
                                    "nodeType": "Return",
                                    "src": "21088:43:116"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15422,
                            "nodeType": "StructuredDocumentation",
                            "src": "17674:1126:116",
                            "text": "@dev Redeems withdrawal shares by giving the LP a pro-rata amount of the\n      withdrawal pool's proceeds. This function redeems the maximum\n      amount of the specified withdrawal shares given the amount of\n      withdrawal shares ready to withdraw.\n @param _source The address that owns the withdrawal shares to redeem.\n @param _withdrawalShares The withdrawal shares to redeem.\n @param _vaultSharePrice The vault share price.\n @param _minOutputPerShare The minimum amount the LP expects to\n        receive for each withdrawal share that is burned. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP received. The units of this quantity\n         are either base or vault shares, depending on the value of\n         `_options.asBase`.\n @return withdrawalSharesRedeemed The amount of withdrawal shares that\n         were redeemed."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_redeemWithdrawalSharesInternal",
                        "nameLocation": "18814:31:116",
                        "parameters": {
                            "id": 15434,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15424,
                                    "mutability": "mutable",
                                    "name": "_source",
                                    "nameLocation": "18863:7:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15530,
                                    "src": "18855:15:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 15423,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18855:7:116",
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
                                    "id": 15426,
                                    "mutability": "mutable",
                                    "name": "_withdrawalShares",
                                    "nameLocation": "18888:17:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15530,
                                    "src": "18880:25:116",
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
                                        "src": "18880:7:116",
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
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "18923:16:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15530,
                                    "src": "18915:24:116",
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
                                        "src": "18915:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15430,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "18957:18:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15530,
                                    "src": "18949:26:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15429,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18949:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15433,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "19014:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15530,
                                    "src": "18985:37:116",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10875_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 15432,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 15431,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "18985:11:116",
                                                "18997:7:116"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10875,
                                            "src": "18985:19:116"
                                        },
                                        "referencedDeclaration": 10875,
                                        "src": "18985:19:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10875_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18845:183:116"
                        },
                        "returnParameters": {
                            "id": 15439,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15436,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "19055:8:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15530,
                                    "src": "19047:16:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15435,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "19047:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15438,
                                    "mutability": "mutable",
                                    "name": "withdrawalSharesRedeemed",
                                    "nameLocation": "19073:24:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15530,
                                    "src": "19065:32:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15437,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "19065:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "19046:52:116"
                        },
                        "scope": 15699,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15622,
                        "nodeType": "FunctionDefinition",
                        "src": "21421:1688:116",
                        "nodes": [],
                        "body": {
                            "id": 15621,
                            "nodeType": "Block",
                            "src": "21520:1589:116",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        15539
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15539,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesTotalSupply",
                                            "nameLocation": "21632:27:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15621,
                                            "src": "21624:35:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15538,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "21624:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15547,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15546,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "baseExpression": {
                                                "id": 15540,
                                                "name": "_totalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18205,
                                                "src": "21662:12:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 15543,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 15541,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 18594,
                                                    "src": "21688:7:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$18594_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 15542,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "21696:26:116",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18336,
                                                "src": "21688:34:116",
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
                                            "src": "21662:70:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 15544,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18164,
                                                "src": "21735:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 15545,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "21749:15:116",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10721,
                                            "src": "21735:29:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "21662:102:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "21624:140:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15550,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15548,
                                            "name": "withdrawalSharesTotalSupply",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15539,
                                            "src": "21778:27:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 15549,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "21809:1:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "21778:32:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15554,
                                    "nodeType": "IfStatement",
                                    "src": "21774:74:116",
                                    "trueBody": {
                                        "id": 15553,
                                        "nodeType": "Block",
                                        "src": "21812:36:116",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "74727565",
                                                    "id": 15551,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "21833:4:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "true"
                                                },
                                                "functionReturnParameters": 15537,
                                                "id": 15552,
                                                "nodeType": "Return",
                                                "src": "21826:11:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15556
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15556,
                                            "mutability": "mutable",
                                            "name": "idle",
                                            "nameLocation": "21942:4:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15621,
                                            "src": "21934:12:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15555,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "21934:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15560,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15558,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15533,
                                                "src": "21977:16:116",
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
                                            "id": 15557,
                                            "name": "_calculateIdleShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14066,
                                            "src": "21949:27:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 15559,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "21949:45:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "21934:60:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15563,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15561,
                                            "name": "idle",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15556,
                                            "src": "22008:4:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 15562,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "22016:1:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "22008:9:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15567,
                                    "nodeType": "IfStatement",
                                    "src": "22004:51:116",
                                    "trueBody": {
                                        "id": 15566,
                                        "nodeType": "Block",
                                        "src": "22019:36:116",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "74727565",
                                                    "id": 15564,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "22040:4:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "true"
                                                },
                                                "functionReturnParameters": 15537,
                                                "id": 15565,
                                                "nodeType": "Return",
                                                "src": "22033:11:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15572,
                                        15574
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15572,
                                            "mutability": "mutable",
                                            "name": "params",
                                            "nameLocation": "22276:6:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15621,
                                            "src": "22235:47:116",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20882_memory_ptr",
                                                "typeString": "struct LPMath.DistributeExcessIdleParams"
                                            },
                                            "typeName": {
                                                "id": 15571,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 15570,
                                                    "name": "LPMath.DistributeExcessIdleParams",
                                                    "nameLocations": [
                                                        "22235:6:116",
                                                        "22242:26:116"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 20882,
                                                    "src": "22235:33:116"
                                                },
                                                "referencedDeclaration": 20882,
                                                "src": "22235:33:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20882_storage_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15574,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "22301:7:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15621,
                                            "src": "22296:12:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 15573,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "22296:4:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15580,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15576,
                                                "name": "idle",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15556,
                                                "src": "22373:4:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15577,
                                                "name": "withdrawalSharesTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15539,
                                                "src": "22395:27:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15578,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15533,
                                                "src": "22440:16:116",
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
                                            "id": 15575,
                                            "name": "_getDistributeExcessIdleParamsSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13696,
                                            "src": "22321:34:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_struct$_DistributeExcessIdleParams_$20882_memory_ptr_$_t_bool_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (struct LPMath.DistributeExcessIdleParams memory,bool)"
                                            }
                                        },
                                        "id": 15579,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "22321:149:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_struct$_DistributeExcessIdleParams_$20882_memory_ptr_$_t_bool_$",
                                            "typeString": "tuple(struct LPMath.DistributeExcessIdleParams memory,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "22221:249:116"
                                },
                                {
                                    "condition": {
                                        "id": 15582,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "22484:8:116",
                                        "subExpression": {
                                            "id": 15581,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15574,
                                            "src": "22485:7:116",
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
                                    "id": 15586,
                                    "nodeType": "IfStatement",
                                    "src": "22480:51:116",
                                    "trueBody": {
                                        "id": 15585,
                                        "nodeType": "Block",
                                        "src": "22494:37:116",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "66616c7365",
                                                    "id": 15583,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "22515:5:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "false"
                                                },
                                                "functionReturnParameters": 15537,
                                                "id": 15584,
                                                "nodeType": "Return",
                                                "src": "22508:12:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15588,
                                        15590
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15588,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesRedeemed",
                                            "nameLocation": "22664:24:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15621,
                                            "src": "22656:32:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15587,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "22656:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15590,
                                            "mutability": "mutable",
                                            "name": "shareProceeds",
                                            "nameLocation": "22698:13:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15621,
                                            "src": "22690:21:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15589,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "22690:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15595,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15593,
                                                "name": "params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15572,
                                                "src": "22765:6:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20882_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$20882_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 15591,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22086,
                                                "src": "22715:6:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$22086_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 15592,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "22735:29:116",
                                            "memberName": "calculateDistributeExcessIdle",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 21000,
                                            "src": "22715:49:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$20882_memory_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory) pure returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 15594,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "22715:57:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "22655:117:116"
                                },
                                {
                                    "expression": {
                                        "id": 15602,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15596,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18164,
                                                "src": "22830:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 15598,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "22844:15:116",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10721,
                                            "src": "22830:29:116",
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
                                                    "id": 15599,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15588,
                                                    "src": "22863:24:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15600,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "22888:9:116",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 22151,
                                                "src": "22863:34:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15601,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "22863:36:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "22830:69:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15603,
                                    "nodeType": "ExpressionStatement",
                                    "src": "22830:69:116"
                                },
                                {
                                    "expression": {
                                        "id": 15610,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15604,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18164,
                                                "src": "22909:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$10725_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 15606,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "22923:8:116",
                                            "memberName": "proceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10724,
                                            "src": "22909:22:116",
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
                                                    "id": 15607,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15590,
                                                    "src": "22935:13:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15608,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "22949:9:116",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 22151,
                                                "src": "22935:23:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15609,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "22935:25:116",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "22909:51:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15611,
                                    "nodeType": "ExpressionStatement",
                                    "src": "22909:51:116"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15616,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "-",
                                                "prefix": true,
                                                "src": "23054:25:116",
                                                "subExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15613,
                                                            "name": "shareProceeds",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15590,
                                                            "src": "23055:13:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15614,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "23069:8:116",
                                                        "memberName": "toInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 22264,
                                                        "src": "23055:22:116",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256) pure returns (int256)"
                                                        }
                                                    },
                                                    "id": 15615,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "23055:24:116",
                                                    "tryCall": false,
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
                                            "id": 15612,
                                            "name": "_updateLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15698,
                                            "src": "23037:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                                                "typeString": "function (int256)"
                                            }
                                        },
                                        "id": 15617,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "23037:43:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15618,
                                    "nodeType": "ExpressionStatement",
                                    "src": "23037:43:116"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 15619,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "23098:4:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 15537,
                                    "id": 15620,
                                    "nodeType": "Return",
                                    "src": "23091:11:116"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15531,
                            "nodeType": "StructuredDocumentation",
                            "src": "21144:272:116",
                            "text": "@dev Distribute as much of the excess idle as possible to the withdrawal\n      pool while holding the LP share price constant.\n @param _vaultSharePrice The current vault share price.\n @return A failure flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_distributeExcessIdleSafe",
                        "nameLocation": "21430:25:116",
                        "parameters": {
                            "id": 15534,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15533,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "21473:16:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15622,
                                    "src": "21465:24:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15532,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "21465:7:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "21455:40:116"
                        },
                        "returnParameters": {
                            "id": 15537,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15536,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15622,
                                    "src": "21514:4:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 15535,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "21514:4:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "21513:6:116"
                        },
                        "scope": 15699,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15698,
                        "nodeType": "FunctionDefinition",
                        "src": "23286:1121:116",
                        "nodes": [],
                        "body": {
                            "id": 15697,
                            "nodeType": "Block",
                            "src": "23349:1058:116",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        15629
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15629,
                                            "mutability": "mutable",
                                            "name": "shareReserves_",
                                            "nameLocation": "23410:14:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15697,
                                            "src": "23402:22:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15628,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23402:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15632,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15630,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18160,
                                            "src": "23427:12:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15631,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "23440:13:116",
                                        "memberName": "shareReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10680,
                                        "src": "23427:26:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23402:51:116"
                                },
                                {
                                    "assignments": [
                                        15634
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15634,
                                            "mutability": "mutable",
                                            "name": "shareAdjustment_",
                                            "nameLocation": "23470:16:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15697,
                                            "src": "23463:23:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15633,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23463:6:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15637,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15635,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18160,
                                            "src": "23489:12:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15636,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "23502:15:116",
                                        "memberName": "shareAdjustment",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10692,
                                        "src": "23489:28:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23463:54:116"
                                },
                                {
                                    "assignments": [
                                        15639
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15639,
                                            "mutability": "mutable",
                                            "name": "bondReserves_",
                                            "nameLocation": "23535:13:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15697,
                                            "src": "23527:21:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15638,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23527:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15642,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15640,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18160,
                                            "src": "23551:12:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15641,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "23564:12:116",
                                        "memberName": "bondReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10683,
                                        "src": "23551:25:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23527:49:116"
                                },
                                {
                                    "assignments": [
                                        15644,
                                        15646,
                                        15648
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15644,
                                            "mutability": "mutable",
                                            "name": "updatedShareReserves",
                                            "nameLocation": "23608:20:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15697,
                                            "src": "23600:28:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15643,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23600:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15646,
                                            "mutability": "mutable",
                                            "name": "updatedShareAdjustment",
                                            "nameLocation": "23649:22:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15697,
                                            "src": "23642:29:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15645,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23642:6:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15648,
                                            "mutability": "mutable",
                                            "name": "updatedBondReserves",
                                            "nameLocation": "23693:19:116",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15697,
                                            "src": "23685:27:116",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15647,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23685:7:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15657,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15651,
                                                "name": "shareReserves_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15629,
                                                "src": "23774:14:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15652,
                                                "name": "shareAdjustment_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15634,
                                                "src": "23806:16:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 15653,
                                                "name": "bondReserves_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15639,
                                                "src": "23840:13:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15654,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18153,
                                                "src": "23871:21:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15655,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15625,
                                                "src": "23910:19:116",
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
                                                }
                                            ],
                                            "expression": {
                                                "id": 15649,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22086,
                                                "src": "23725:6:116",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$22086_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 15650,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "23732:24:116",
                                            "memberName": "calculateUpdateLiquidity",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 20216,
                                            "src": "23725:31:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "function (uint256,int256,uint256,uint256,int256) pure returns (uint256,int256,uint256)"
                                            }
                                        },
                                        "id": 15656,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "23725:218:116",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,int256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23586:357:116"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15660,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15658,
                                            "name": "updatedShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15644,
                                            "src": "23994:20:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 15659,
                                            "name": "shareReserves_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15629,
                                            "src": "24018:14:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "23994:38:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15670,
                                    "nodeType": "IfStatement",
                                    "src": "23990:130:116",
                                    "trueBody": {
                                        "id": 15669,
                                        "nodeType": "Block",
                                        "src": "24034:86:116",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15667,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 15661,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18160,
                                                            "src": "24048:12:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 15663,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "24061:13:116",
                                                        "memberName": "shareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10680,
                                                        "src": "24048:26:116",
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
                                                                "id": 15664,
                                                                "name": "updatedShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15644,
                                                                "src": "24077:20:116",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 15665,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "24098:9:116",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 22151,
                                                            "src": "24077:30:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
                                                            }
                                                        },
                                                        "id": 15666,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "24077:32:116",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "24048:61:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 15668,
                                                "nodeType": "ExpressionStatement",
                                                "src": "24048:61:116"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 15673,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15671,
                                            "name": "updatedShareAdjustment",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15646,
                                            "src": "24133:22:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 15672,
                                            "name": "shareAdjustment_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15634,
                                            "src": "24159:16:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "24133:42:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15683,
                                    "nodeType": "IfStatement",
                                    "src": "24129:137:116",
                                    "trueBody": {
                                        "id": 15682,
                                        "nodeType": "Block",
                                        "src": "24177:89:116",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15680,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 15674,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18160,
                                                            "src": "24191:12:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 15676,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "24204:15:116",
                                                        "memberName": "shareAdjustment",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10692,
                                                        "src": "24191:28:116",
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
                                                                "id": 15677,
                                                                "name": "updatedShareAdjustment",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15646,
                                                                "src": "24222:22:116",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "id": 15678,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "24245:8:116",
                                                            "memberName": "toInt128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 22229,
                                                            "src": "24222:31:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                                                "typeString": "function (int256) pure returns (int128)"
                                                            }
                                                        },
                                                        "id": 15679,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "24222:33:116",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int128",
                                                            "typeString": "int128"
                                                        }
                                                    },
                                                    "src": "24191:64:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int128",
                                                        "typeString": "int128"
                                                    }
                                                },
                                                "id": 15681,
                                                "nodeType": "ExpressionStatement",
                                                "src": "24191:64:116"
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
                                        "id": 15686,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15684,
                                            "name": "updatedBondReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15648,
                                            "src": "24279:19:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 15685,
                                            "name": "bondReserves_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15639,
                                            "src": "24302:13:116",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "24279:36:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15696,
                                    "nodeType": "IfStatement",
                                    "src": "24275:126:116",
                                    "trueBody": {
                                        "id": 15695,
                                        "nodeType": "Block",
                                        "src": "24317:84:116",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15693,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 15687,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18160,
                                                            "src": "24331:12:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10714_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 15689,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "24344:12:116",
                                                        "memberName": "bondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10683,
                                                        "src": "24331:25:116",
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
                                                                "id": 15690,
                                                                "name": "updatedBondReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15648,
                                                                "src": "24359:19:116",
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
                                                            "memberLocation": "24379:9:116",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 22151,
                                                            "src": "24359:29:116",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
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
                                                        "src": "24359:31:116",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "24331:59:116",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 15694,
                                                "nodeType": "ExpressionStatement",
                                                "src": "24331:59:116"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15623,
                            "nodeType": "StructuredDocumentation",
                            "src": "23115:166:116",
                            "text": "@dev Updates the pool's liquidity and holds the pool's spot price constant.\n @param _shareReservesDelta The delta that should be applied to share reserves."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_updateLiquidity",
                        "nameLocation": "23295:16:116",
                        "parameters": {
                            "id": 15626,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15625,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "23319:19:116",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15698,
                                    "src": "23312:26:116",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 15624,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "23312:6:116",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "23311:28:116"
                        },
                        "returnParameters": {
                            "id": 15627,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "23349:0:116"
                        },
                        "scope": 15699,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 14819,
                            "name": "IHyperdriveEvents",
                            "nameLocations": [
                                "969:17:116"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11551,
                            "src": "969:17:116"
                        },
                        "id": 14820,
                        "nodeType": "InheritanceSpecifier",
                        "src": "969:17:116"
                    },
                    {
                        "baseName": {
                            "id": 14821,
                            "name": "HyperdriveBase",
                            "nameLocations": [
                                "992:14:116"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14333,
                            "src": "992:14:116"
                        },
                        "id": 14822,
                        "nodeType": "InheritanceSpecifier",
                        "src": "992:14:116"
                    },
                    {
                        "baseName": {
                            "id": 14823,
                            "name": "HyperdriveMultiToken",
                            "nameLocations": [
                                "1012:20:116"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17117,
                            "src": "1012:20:116"
                        },
                        "id": 14824,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1012:20:116"
                    }
                ],
                "canonicalName": "HyperdriveLP",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 14818,
                    "nodeType": "StructuredDocumentation",
                    "src": "609:322:116",
                    "text": "@author DELV\n @title HyperdriveLP\n @notice Implements the LP accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    15699,
                    17117,
                    14333,
                    18319,
                    71995,
                    11551,
                    12117
                ],
                "name": "HyperdriveLP",
                "nameLocation": "949:12:116",
                "scope": 15700,
                "usedErrors": [
                    71940
                ],
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
    "id": 116
};
