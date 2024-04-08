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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveLong\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"Implements the long accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveLong.sol\":\"HyperdriveLong\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4\",\"dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4\",\"dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "keccak256": "0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5",
                "urls": [
                    "bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339",
                    "dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f",
                "urls": [
                    "bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19",
                    "dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk"
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
            "contracts/src/internal/HyperdriveBase.sol": {
                "keccak256": "0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3",
                "urls": [
                    "bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186",
                    "dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x13a94b5343886983c874d8fb5cd4c9e7aa3f9e52d607a0fcfcbdfeeb64577488",
                "urls": [
                    "bzz-raw://a7574afd3d91c62cae7a79e17c2cb7e93700aaebc74322f6fe119c61fbdcb4e4",
                    "dweb:/ipfs/QmdWHYcuCoZNdQ2jMUg9zkbhsi25UVH5JXxoFm379Va4qF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLong.sol": {
                "keccak256": "0x02cd58cabac084c23a5abdd3d18e23bbf31629a9f847da7f738ffa83ac4627cc",
                "urls": [
                    "bzz-raw://553b6fbe3f08078ca31a6ad1e15088a1724474a2d66abbfaaf4962b52a3572c4",
                    "dweb:/ipfs/QmQpVa9HEJmaFKh4tANJXk9UBWzmmAsqVZ8RsfAN1rzVbZ"
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
                "keccak256": "0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e",
                "urls": [
                    "bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19",
                    "dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d"
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
                "keccak256": "0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb",
                "urls": [
                    "bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c",
                    "dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/FixedPointMath.sol": {
                "keccak256": "0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a",
                "urls": [
                    "bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d",
                    "dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/HyperdriveMath.sol": {
                "keccak256": "0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424",
                "urls": [
                    "bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a",
                    "dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189",
                "urls": [
                    "bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786",
                    "dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/SafeCast.sol": {
                "keccak256": "0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c",
                "urls": [
                    "bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4",
                    "dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/YieldSpaceMath.sol": {
                "keccak256": "0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e",
                "urls": [
                    "bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797",
                    "dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL"
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
        "id": 16055,
        "exportedSymbols": {
            "AssetId": [
                18009
            ],
            "Errors": [
                18030
            ],
            "FixedPointMath": [
                18822
            ],
            "HyperdriveLP": [
                15127
            ],
            "HyperdriveLong": [
                16054
            ],
            "HyperdriveMath": [
                19567
            ],
            "IHyperdrive": [
                10351
            ],
            "IHyperdriveEvents": [
                10887
            ],
            "LPMath": [
                21642
            ],
            "ONE": [
                18039
            ],
            "SafeCast": [
                21815
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:27424:115",
        "nodes": [
            {
                "id": 15129,
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
                "id": 15131,
                "nodeType": "ImportDirective",
                "src": "64:60:115",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15130,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "73:11:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15133,
                "nodeType": "ImportDirective",
                "src": "125:72:115",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
                "file": "../interfaces/IHyperdriveEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 10888,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15132,
                            "name": "IHyperdriveEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10887,
                            "src": "134:17:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15135,
                "nodeType": "ImportDirective",
                "src": "198:51:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 18010,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15134,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18009,
                            "src": "207:7:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15137,
                "nodeType": "ImportDirective",
                "src": "250:49:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/Errors.sol",
                "file": "../libraries/Errors.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 18031,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15136,
                            "name": "Errors",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18030,
                            "src": "259:6:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15140,
                "nodeType": "ImportDirective",
                "src": "300:70:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15138,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18822,
                            "src": "309:14:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 15139,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18039,
                            "src": "325:3:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15142,
                "nodeType": "ImportDirective",
                "src": "371:65:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 19568,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15141,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19567,
                            "src": "380:14:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15144,
                "nodeType": "ImportDirective",
                "src": "437:49:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 21643,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15143,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21642,
                            "src": "446:6:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15146,
                "nodeType": "ImportDirective",
                "src": "487:53:115",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "../libraries/SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 21816,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15145,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21815,
                            "src": "496:8:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 15148,
                "nodeType": "ImportDirective",
                "src": "541:50:115",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
                "file": "./HyperdriveLP.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 16055,
                "sourceUnit": 15128,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 15147,
                            "name": "HyperdriveLP",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15127,
                            "src": "550:12:115",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 16054,
                "nodeType": "ContractDefinition",
                "src": "919:26543:115",
                "nodes": [
                    {
                        "id": 15156,
                        "nodeType": "UsingForDirective",
                        "src": "993:33:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15154,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "999:14:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "999:14:115"
                        },
                        "typeName": {
                            "id": 15155,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1018:7:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 15159,
                        "nodeType": "UsingForDirective",
                        "src": "1031:32:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15157,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1037:14:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "1037:14:115"
                        },
                        "typeName": {
                            "id": 15158,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1056:6:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 15162,
                        "nodeType": "UsingForDirective",
                        "src": "1068:27:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15160,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1074:8:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 21815,
                            "src": "1074:8:115"
                        },
                        "typeName": {
                            "id": 15161,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1087:7:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 15165,
                        "nodeType": "UsingForDirective",
                        "src": "1100:26:115",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 15163,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1106:8:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 21815,
                            "src": "1106:8:115"
                        },
                        "typeName": {
                            "id": 15164,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1119:6:115",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 15349,
                        "nodeType": "FunctionDefinition",
                        "src": "1899:3798:115",
                        "nodes": [],
                        "body": {
                            "id": 15348,
                            "nodeType": "Block",
                            "src": "2184:3513:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15186,
                                            "name": "_checkMessageValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12736,
                                            "src": "2244:18:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$__$",
                                                "typeString": "function () view"
                                            }
                                        },
                                        "id": 15187,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2244:20:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15188,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2244:20:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15190,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15175,
                                                "src": "2343:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15189,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12758,
                                            "src": "2329:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10210_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 15191,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2329:23:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15192,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2329:23:115"
                                },
                                {
                                    "assignments": [
                                        15194,
                                        15196
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15194,
                                            "mutability": "mutable",
                                            "name": "sharesDeposited",
                                            "nameLocation": "2416:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "2408:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15193,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2408:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15196,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "2441:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "2433:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15195,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2433:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15201,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15198,
                                                "name": "_amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15168,
                                                "src": "2482:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15199,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15175,
                                                "src": "2503:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15197,
                                            "name": "_deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12616,
                                            "src": "2460:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 15200,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2460:61:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2407:114:115"
                                },
                                {
                                    "assignments": [
                                        15203
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15203,
                                            "mutability": "mutable",
                                            "name": "baseDeposited",
                                            "nameLocation": "3082:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "3074:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15202,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3074:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15208,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15206,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15196,
                                                "src": "3122:15:115",
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
                                                "id": 15204,
                                                "name": "sharesDeposited",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15194,
                                                "src": "3098:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15205,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3114:7:115",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18085,
                                            "src": "3098:23:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 15207,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3098:40:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3074:64:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15211,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15209,
                                            "name": "baseDeposited",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15203,
                                            "src": "3152:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15210,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17566,
                                            "src": "3168:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3152:41:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15218,
                                    "nodeType": "IfStatement",
                                    "src": "3148:117:115",
                                    "trueBody": {
                                        "id": 15217,
                                        "nodeType": "Block",
                                        "src": "3195:70:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15212,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "3216:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15214,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3228:24:115",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10264,
                                                        "src": "3216:36:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15215,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3216:38:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15216,
                                                "nodeType": "RevertStatement",
                                                "src": "3209:45:115"
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
                                        "id": 15221,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15219,
                                            "name": "vaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15196,
                                            "src": "3278:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15220,
                                            "name": "_minVaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15172,
                                            "src": "3296:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3278:37:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15228,
                                    "nodeType": "IfStatement",
                                    "src": "3274:106:115",
                                    "trueBody": {
                                        "id": 15227,
                                        "nodeType": "Block",
                                        "src": "3317:63:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15222,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "3338:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15224,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3350:17:115",
                                                        "memberName": "MinimumSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10261,
                                                        "src": "3338:29:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15225,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3338:31:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15226,
                                                "nodeType": "RevertStatement",
                                                "src": "3331:38:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15230
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15230,
                                            "mutability": "mutable",
                                            "name": "latestCheckpoint",
                                            "nameLocation": "3431:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "3423:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15229,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3423:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15233,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15231,
                                            "name": "_latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12892,
                                            "src": "3450:17:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
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
                                        "src": "3450:19:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3423:46:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15235,
                                                "name": "latestCheckpoint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15230,
                                                "src": "3509:16:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15236,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15196,
                                                "src": "3539:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15237,
                                                    "name": "LPMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 21642,
                                                    "src": "3568:6:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                        "typeString": "type(library LPMath)"
                                                    }
                                                },
                                                "id": 15238,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "3575:29:115",
                                                "memberName": "SHARE_PROCEEDS_MAX_ITERATIONS",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19590,
                                                "src": "3568:36:115",
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
                                            "id": 15234,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12806,
                                            "src": "3479:16:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 15239,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3479:135:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15240,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3479:135:115"
                                },
                                {
                                    "assignments": [
                                        15242
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15242,
                                            "mutability": "mutable",
                                            "name": "shareReservesDelta",
                                            "nameLocation": "3884:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "3876:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15241,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3876:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15243,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3876:26:115"
                                },
                                {
                                    "assignments": [
                                        15245
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15245,
                                            "mutability": "mutable",
                                            "name": "totalGovernanceFee",
                                            "nameLocation": "3920:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "3912:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15244,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3912:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15246,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3912:26:115"
                                },
                                {
                                    "expression": {
                                        "id": 15255,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 15247,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15242,
                                                    "src": "3962:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15248,
                                                    "name": "bondProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15184,
                                                    "src": "3994:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15249,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15245,
                                                    "src": "4020:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 15250,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "3948:100:115",
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
                                                    "id": 15252,
                                                    "name": "sharesDeposited",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15194,
                                                    "src": "4070:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15253,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15196,
                                                    "src": "4087:15:115",
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
                                                "id": 15251,
                                                "name": "_calculateOpenLong",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15915,
                                                "src": "4051:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) view returns (uint256,uint256,uint256)"
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
                                            "src": "4051:52:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256)"
                                            }
                                        },
                                        "src": "3948:155:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15256,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3948:155:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15259,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15257,
                                            "name": "bondProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15184,
                                            "src": "4163:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15258,
                                            "name": "_minOutput",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15170,
                                            "src": "4178:10:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4163:25:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15266,
                                    "nodeType": "IfStatement",
                                    "src": "4159:88:115",
                                    "trueBody": {
                                        "id": 15265,
                                        "nodeType": "Block",
                                        "src": "4190:57:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15260,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "4211:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15262,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4223:11:115",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10273,
                                                        "src": "4211:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15263,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4211:25:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15264,
                                                "nodeType": "RevertStatement",
                                                "src": "4204:32:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 15269,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15267,
                                            "name": "_governanceFeesAccrued",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17592,
                                            "src": "4298:22:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 15268,
                                            "name": "totalGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15245,
                                            "src": "4324:18:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4298:44:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15270,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4298:44:115"
                                },
                                {
                                    "expression": {
                                        "id": 15275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15271,
                                            "name": "maturityTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15182,
                                            "src": "4398:12:115",
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
                                            "id": 15274,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15272,
                                                "name": "latestCheckpoint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15230,
                                                "src": "4413:16:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "id": 15273,
                                                "name": "_positionDuration",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17542,
                                                "src": "4432:17:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "4413:36:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4398:51:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4398:51:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15278,
                                                "name": "shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15242,
                                                "src": "4487:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15279,
                                                "name": "bondProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15184,
                                                "src": "4519:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15280,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15196,
                                                "src": "4545:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15281,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15182,
                                                "src": "4574:12:115",
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
                                            "id": 15277,
                                            "name": "_applyOpenLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15671,
                                            "src": "4459:14:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,uint256,uint256,uint256)"
                                            }
                                        },
                                        "id": 15282,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4459:137:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15283,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4459:137:115"
                                },
                                {
                                    "assignments": [
                                        15285
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15285,
                                            "mutability": "mutable",
                                            "name": "assetId",
                                            "nameLocation": "4688:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "4680:15:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15284,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4680:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15293,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "expression": {
                                                        "id": 15288,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18009,
                                                        "src": "4733:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 15289,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4741:13:115",
                                                    "memberName": "AssetIdPrefix",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 17756,
                                                    "src": "4733:21:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$17756_$",
                                                        "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                    }
                                                },
                                                "id": 15290,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "4755:4:115",
                                                "memberName": "Long",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17753,
                                                "src": "4733:26:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                }
                                            },
                                            {
                                                "id": 15291,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15182,
                                                "src": "4773:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 15286,
                                                "name": "AssetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18009,
                                                "src": "4698:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                    "typeString": "type(library AssetId)"
                                                }
                                            },
                                            "id": 15287,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4706:13:115",
                                            "memberName": "encodeAssetId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17779,
                                            "src": "4698:21:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 15292,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4698:97:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4680:115:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15295,
                                                "name": "assetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15285,
                                                "src": "4811:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15296,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15175,
                                                    "src": "4820:8:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15297,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4829:11:115",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10203,
                                                "src": "4820:20:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15298,
                                                "name": "bondProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15184,
                                                "src": "4842:12:115",
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
                                            "id": 15294,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16328,
                                            "src": "4805:5:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15299,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4805:50:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15300,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4805:50:115"
                                },
                                {
                                    "assignments": [
                                        15302
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15302,
                                            "mutability": "mutable",
                                            "name": "amount",
                                            "nameLocation": "4909:6:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "4901:14:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15301,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4901:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15304,
                                    "initialValue": {
                                        "id": 15303,
                                        "name": "_amount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15168,
                                        "src": "4918:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4901:24:115"
                                },
                                {
                                    "assignments": [
                                        15306
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15306,
                                            "mutability": "mutable",
                                            "name": "maturityTime_",
                                            "nameLocation": "4974:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "4966:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15305,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4966:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15308,
                                    "initialValue": {
                                        "id": 15307,
                                        "name": "maturityTime",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15182,
                                        "src": "4990:12:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4966:36:115"
                                },
                                {
                                    "assignments": [
                                        15310
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15310,
                                            "mutability": "mutable",
                                            "name": "bondProceeds_",
                                            "nameLocation": "5051:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "5043:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15309,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5043:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15312,
                                    "initialValue": {
                                        "id": 15311,
                                        "name": "bondProceeds",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15184,
                                        "src": "5067:12:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5043:36:115"
                                },
                                {
                                    "assignments": [
                                        15314
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15314,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice_",
                                            "nameLocation": "5128:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "5120:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15313,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5120:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15316,
                                    "initialValue": {
                                        "id": 15315,
                                        "name": "vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15196,
                                        "src": "5147:15:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5120:42:115"
                                },
                                {
                                    "assignments": [
                                        15321
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15321,
                                            "mutability": "mutable",
                                            "name": "options",
                                            "nameLocation": "5232:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15348,
                                            "src": "5203:36:115",
                                            "stateVariable": false,
                                            "storageLocation": "calldata",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options"
                                            },
                                            "typeName": {
                                                "id": 15320,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 15319,
                                                    "name": "IHyperdrive.Options",
                                                    "nameLocations": [
                                                        "5203:11:115",
                                                        "5215:7:115"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10210,
                                                    "src": "5203:19:115"
                                                },
                                                "referencedDeclaration": 10210,
                                                "src": "5203:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Options"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15323,
                                    "initialValue": {
                                        "id": 15322,
                                        "name": "_options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15175,
                                        "src": "5242:8:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                            "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5203:47:115"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15325,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15321,
                                                    "src": "5318:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15326,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5326:11:115",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10203,
                                                "src": "5318:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15327,
                                                "name": "assetId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15285,
                                                "src": "5351:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15328,
                                                "name": "maturityTime_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15306,
                                                "src": "5372:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15330,
                                                        "name": "amount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15302,
                                                        "src": "5424:6:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15331,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15314,
                                                        "src": "5432:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15332,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15321,
                                                        "src": "5450:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15329,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13614,
                                                    "src": "5399:24:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15333,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5399:59:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15335,
                                                        "name": "amount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15302,
                                                        "src": "5520:6:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15336,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15314,
                                                        "src": "5528:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15337,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15321,
                                                        "src": "5546:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15334,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13640,
                                                    "src": "5488:31:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15338,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5488:66:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15339,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15321,
                                                    "src": "5592:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15340,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5600:6:115",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10206,
                                                "src": "5592:14:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 15341,
                                                "name": "bondProceeds_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15310,
                                                "src": "5620:13:115",
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
                                            "id": 15324,
                                            "name": "OpenLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10771,
                                            "src": "5296:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,uint256,bool,uint256)"
                                            }
                                        },
                                        "id": 15342,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5296:347:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15343,
                                    "nodeType": "EmitStatement",
                                    "src": "5291:352:115"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 15344,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15182,
                                                "src": "5662:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15345,
                                                "name": "bondProceeds_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15310,
                                                "src": "5676:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 15346,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "5661:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 15185,
                                    "id": 15347,
                                    "nodeType": "Return",
                                    "src": "5654:36:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15166,
                            "nodeType": "StructuredDocumentation",
                            "src": "1132:762:115",
                            "text": "@dev Opens a long position.\n @param _amount The amount of capital provided to open the long. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @param _minOutput The minimum number of bonds to receive.\n @param _minVaultSharePrice The minimum vault share price at which to\n        open the long. This allows traders to protect themselves from\n        opening a long in a checkpoint where negative interest has\n        accrued.\n @param _options The options that configure how the trade is settled.\n @return maturityTime The maturity time of the bonds.\n @return bondProceeds The amount of bonds the user received."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 15178,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 15177,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "2086:12:115"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71603,
                                    "src": "2086:12:115"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2086:12:115"
                            },
                            {
                                "id": 15180,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 15179,
                                    "name": "isNotPaused",
                                    "nameLocations": [
                                        "2107:11:115"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 12794,
                                    "src": "2107:11:115"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2107:11:115"
                            }
                        ],
                        "name": "_openLong",
                        "nameLocation": "1908:9:115",
                        "parameters": {
                            "id": 15176,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15168,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "1935:7:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15349,
                                    "src": "1927:15:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15167,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1927:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15170,
                                    "mutability": "mutable",
                                    "name": "_minOutput",
                                    "nameLocation": "1960:10:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15349,
                                    "src": "1952:18:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15169,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1952:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15172,
                                    "mutability": "mutable",
                                    "name": "_minVaultSharePrice",
                                    "nameLocation": "1988:19:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15349,
                                    "src": "1980:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15171,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1980:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15175,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "2046:8:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15349,
                                    "src": "2017:37:115",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 15174,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 15173,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "2017:11:115",
                                                "2029:7:115"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10210,
                                            "src": "2017:19:115"
                                        },
                                        "referencedDeclaration": 10210,
                                        "src": "2017:19:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1917:143:115"
                        },
                        "returnParameters": {
                            "id": 15185,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15182,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2144:12:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15349,
                                    "src": "2136:20:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15181,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2136:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15184,
                                    "mutability": "mutable",
                                    "name": "bondProceeds",
                                    "nameLocation": "2166:12:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15349,
                                    "src": "2158:20:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15183,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2158:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2135:44:115"
                        },
                        "scope": 16054,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15564,
                        "nodeType": "FunctionDefinition",
                        "src": "6356:5326:115",
                        "nodes": [],
                        "body": {
                            "id": 15563,
                            "nodeType": "Block",
                            "src": "6557:5125:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15367,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15359,
                                                "src": "6635:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15366,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12758,
                                            "src": "6621:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$10210_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 15368,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6621:23:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15369,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6621:23:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15372,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15370,
                                            "name": "_bondAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15354,
                                            "src": "6769:11:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15371,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17566,
                                            "src": "6783:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6769:39:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15379,
                                    "nodeType": "IfStatement",
                                    "src": "6765:115:115",
                                    "trueBody": {
                                        "id": 15378,
                                        "nodeType": "Block",
                                        "src": "6810:70:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15373,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "6831:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15375,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6843:24:115",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10264,
                                                        "src": "6831:36:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15376,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6831:38:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15377,
                                                "nodeType": "RevertStatement",
                                                "src": "6824:45:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15381
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15381,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "7155:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "7147:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15380,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7147:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15384,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 15382,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12690,
                                            "src": "7173:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 15383,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7173:21:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7147:47:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15388,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 15385,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "7208:5:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 15386,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7214:9:115",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "7208:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15387,
                                            "name": "_maturityTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15352,
                                            "src": "7226:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7208:31:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 15405,
                                        "nodeType": "Block",
                                        "src": "7426:173:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 15399,
                                                            "name": "_maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15352,
                                                            "src": "7474:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15400,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15381,
                                                            "src": "7505:15:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 15401,
                                                                "name": "LPMath",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 21642,
                                                                "src": "7538:6:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                                    "typeString": "type(library LPMath)"
                                                                }
                                                            },
                                                            "id": 15402,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7545:29:115",
                                                            "memberName": "SHARE_PROCEEDS_MAX_ITERATIONS",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 19590,
                                                            "src": "7538:36:115",
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
                                                        "id": 15398,
                                                        "name": "_applyCheckpoint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 12806,
                                                        "src": "7440:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15403,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7440:148:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15404,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7440:148:115"
                                            }
                                        ]
                                    },
                                    "id": 15406,
                                    "nodeType": "IfStatement",
                                    "src": "7204:395:115",
                                    "trueBody": {
                                        "id": 15397,
                                        "nodeType": "Block",
                                        "src": "7241:179:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "id": 15390,
                                                                "name": "_latestCheckpoint",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 12892,
                                                                "src": "7289:17:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                    "typeString": "function () view returns (uint256)"
                                                                }
                                                            },
                                                            "id": 15391,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "7289:19:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15392,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15381,
                                                            "src": "7326:15:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 15393,
                                                                "name": "LPMath",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 21642,
                                                                "src": "7359:6:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$21642_$",
                                                                    "typeString": "type(library LPMath)"
                                                                }
                                                            },
                                                            "id": 15394,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7366:29:115",
                                                            "memberName": "SHARE_PROCEEDS_MAX_ITERATIONS",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 19590,
                                                            "src": "7359:36:115",
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
                                                        "id": 15389,
                                                        "name": "_applyCheckpoint",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 12806,
                                                        "src": "7255:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256) returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15395,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7255:154:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15396,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7255:154:115"
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
                                                                "id": 15410,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18009,
                                                                "src": "7699:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 15411,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7707:13:115",
                                                            "memberName": "AssetIdPrefix",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17756,
                                                            "src": "7699:21:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$17756_$",
                                                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                            }
                                                        },
                                                        "id": 15412,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7721:4:115",
                                                        "memberName": "Long",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 17753,
                                                        "src": "7699:26:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                            "typeString": "enum AssetId.AssetIdPrefix"
                                                        }
                                                    },
                                                    {
                                                        "id": 15413,
                                                        "name": "_maturityTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15352,
                                                        "src": "7727:13:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                            "typeString": "enum AssetId.AssetIdPrefix"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 15408,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18009,
                                                        "src": "7677:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 15409,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7685:13:115",
                                                    "memberName": "encodeAssetId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 17779,
                                                    "src": "7677:21:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
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
                                                "src": "7677:64:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15415,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "7755:3:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 15416,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7759:6:115",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "7755:10:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 15417,
                                                "name": "_bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15354,
                                                "src": "7779:11:115",
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
                                            "id": 15407,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16380,
                                            "src": "7658:5:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 15418,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7658:142:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15419,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7658:142:115"
                                },
                                {
                                    "assignments": [
                                        15421,
                                        15423,
                                        15425,
                                        15427,
                                        15429
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15421,
                                            "mutability": "mutable",
                                            "name": "bondReservesDelta",
                                            "nameLocation": "7984:17:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "7976:25:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15420,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7976:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15423,
                                            "mutability": "mutable",
                                            "name": "shareProceeds",
                                            "nameLocation": "8023:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "8015:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15422,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8015:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15425,
                                            "mutability": "mutable",
                                            "name": "shareReservesDelta",
                                            "nameLocation": "8058:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "8050:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15424,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8050:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15427,
                                            "mutability": "mutable",
                                            "name": "shareAdjustmentDelta",
                                            "nameLocation": "8097:20:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "8090:27:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15426,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8090:6:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15429,
                                            "mutability": "mutable",
                                            "name": "totalGovernanceFee",
                                            "nameLocation": "8139:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "8131:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15428,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8131:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15435,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15431,
                                                "name": "_bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15354,
                                                "src": "8190:11:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15432,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15381,
                                                "src": "8203:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15433,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15352,
                                                "src": "8220:13:115",
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
                                            "id": 15430,
                                            "name": "_calculateCloseLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16053,
                                            "src": "8170:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256,uint256,int256,uint256)"
                                            }
                                        },
                                        "id": 15434,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8170:64:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7962:272:115"
                                },
                                {
                                    "assignments": [
                                        15437
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15437,
                                            "mutability": "mutable",
                                            "name": "maturityTime",
                                            "nameLocation": "8443:12:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "8435:20:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15436,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8435:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15439,
                                    "initialValue": {
                                        "id": 15438,
                                        "name": "_maturityTime",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15352,
                                        "src": "8458:13:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8435:36:115"
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
                                            "expression": {
                                                "id": 15440,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "8516:5:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 15441,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "8522:9:115",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "8516:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15442,
                                            "name": "_maturityTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15352,
                                            "src": "8534:13:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8516:31:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 15498,
                                        "nodeType": "Block",
                                        "src": "9665:652:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15492,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 15487,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15423,
                                                        "src": "9877:13:115",
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
                                                                "id": 15489,
                                                                "name": "shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15423,
                                                                "src": "9911:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 15490,
                                                                "name": "vaultSharePrice",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15381,
                                                                "src": "9926:15:115",
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
                                                            "id": 15488,
                                                            "name": "_applyZombieClose",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13273,
                                                            "src": "9893:17:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                                            }
                                                        },
                                                        "id": 15491,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9893:49:115",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9877:65:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15493,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9877:65:115"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 15495,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15381,
                                                            "src": "10290:15:115",
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
                                                        "id": 15494,
                                                        "name": "_distributeExcessIdleSafe",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            14917,
                                                            15020
                                                        ],
                                                        "referencedDeclaration": 14917,
                                                        "src": "10264:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (uint256) returns (bool)"
                                                        }
                                                    },
                                                    "id": 15496,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10264:42:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 15497,
                                                "nodeType": "ExpressionStatement",
                                                "src": "10264:42:115"
                                            }
                                        ]
                                    },
                                    "id": 15499,
                                    "nodeType": "IfStatement",
                                    "src": "8512:1805:115",
                                    "trueBody": {
                                        "id": 15486,
                                        "nodeType": "Block",
                                        "src": "8549:1110:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 15446,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 15444,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17592,
                                                        "src": "8608:22:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 15445,
                                                        "name": "totalGovernanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15429,
                                                        "src": "8634:18:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "8608:44:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15447,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8608:44:115"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 15449,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15354,
                                                            "src": "8699:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15450,
                                                            "name": "bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15421,
                                                            "src": "8728:17:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15451,
                                                            "name": "shareReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15425,
                                                            "src": "8763:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15452,
                                                            "name": "shareAdjustmentDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15427,
                                                            "src": "8799:20:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15453,
                                                            "name": "maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15437,
                                                            "src": "8837:12:115",
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
                                                        "id": 15448,
                                                        "name": "_applyCloseLong",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15802,
                                                        "src": "8666:15:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                                                            "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                                                        }
                                                    },
                                                    "id": 15454,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8666:197:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15455,
                                                "nodeType": "ExpressionStatement",
                                                "src": "8666:197:115"
                                            },
                                            {
                                                "assignments": [
                                                    15457
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 15457,
                                                        "mutability": "mutable",
                                                        "name": "nonNettedLongs",
                                                        "nameLocation": "9037:14:115",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 15486,
                                                        "src": "9030:21:115",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "typeName": {
                                                            "id": 15456,
                                                            "name": "int256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9030:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 15461,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 15459,
                                                            "name": "maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15437,
                                                            "src": "9070:12:115",
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
                                                        "id": 15458,
                                                        "name": "_nonNettedLongs",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 12940,
                                                        "src": "9054:15:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$",
                                                            "typeString": "function (uint256) view returns (int256)"
                                                        }
                                                    },
                                                    "id": 15460,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9054:29:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9030:53:115"
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "commonType": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            },
                                                            "id": 15467,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 15463,
                                                                "name": "nonNettedLongs",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15457,
                                                                "src": "9134:14:115",
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
                                                                        "id": 15464,
                                                                        "name": "_bondAmount",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 15354,
                                                                        "src": "9151:11:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 15465,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9163:8:115",
                                                                    "memberName": "toInt256",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 21814,
                                                                    "src": "9151:20:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256) pure returns (int256)"
                                                                    }
                                                                },
                                                                "id": 15466,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9151:22:115",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "src": "9134:39:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15468,
                                                            "name": "nonNettedLongs",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15457,
                                                            "src": "9191:14:115",
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
                                                        "id": 15462,
                                                        "name": "_updateLongExposure",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13181,
                                                        "src": "9097:19:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                                                            "typeString": "function (int256,int256)"
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
                                                    "src": "9097:122:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15470,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9097:122:115"
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
                                                        "name": "success",
                                                        "nameLocation": "9489:7:115",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 15486,
                                                        "src": "9484:12:115",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "typeName": {
                                                            "id": 15471,
                                                            "name": "bool",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "9484:4:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 15476,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 15474,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15381,
                                                            "src": "9525:15:115",
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
                                                        "id": 15473,
                                                        "name": "_distributeExcessIdleSafe",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [
                                                            14917,
                                                            15020
                                                        ],
                                                        "referencedDeclaration": 14917,
                                                        "src": "9499:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (uint256) returns (bool)"
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
                                                    "src": "9499:42:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "9484:57:115"
                                            },
                                            {
                                                "condition": {
                                                    "id": 15478,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "UnaryOperation",
                                                    "operator": "!",
                                                    "prefix": true,
                                                    "src": "9559:8:115",
                                                    "subExpression": {
                                                        "id": 15477,
                                                        "name": "success",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15472,
                                                        "src": "9560:7:115",
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
                                                "id": 15485,
                                                "nodeType": "IfStatement",
                                                "src": "9555:94:115",
                                                "trueBody": {
                                                    "id": 15484,
                                                    "nodeType": "Block",
                                                    "src": "9569:80:115",
                                                    "statements": [
                                                        {
                                                            "errorCall": {
                                                                "arguments": [],
                                                                "expression": {
                                                                    "argumentTypes": [],
                                                                    "expression": {
                                                                        "id": 15479,
                                                                        "name": "IHyperdrive",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10351,
                                                                        "src": "9594:11:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                            "typeString": "type(contract IHyperdrive)"
                                                                        }
                                                                    },
                                                                    "id": 15481,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9606:26:115",
                                                                    "memberName": "DistributeExcessIdleFailed",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10293,
                                                                    "src": "9594:38:115",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                        "typeString": "function () pure"
                                                                    }
                                                                },
                                                                "id": 15482,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9594:40:115",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 15483,
                                                            "nodeType": "RevertStatement",
                                                            "src": "9587:47:115"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15501
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15501,
                                            "mutability": "mutable",
                                            "name": "proceeds",
                                            "nameLocation": "10381:8:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "10373:16:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15500,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10373:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15507,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15503,
                                                "name": "shareProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15423,
                                                "src": "10402:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15504,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15381,
                                                "src": "10417:15:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15505,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15359,
                                                "src": "10434:8:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 15502,
                                            "name": "_withdraw",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12679,
                                            "src": "10392:9:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                                            }
                                        },
                                        "id": 15506,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10392:51:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10373:70:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15510,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 15508,
                                            "name": "proceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15501,
                                            "src": "10734:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 15509,
                                            "name": "_minOutput",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15356,
                                            "src": "10745:10:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "10734:21:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15517,
                                    "nodeType": "IfStatement",
                                    "src": "10730:84:115",
                                    "trueBody": {
                                        "id": 15516,
                                        "nodeType": "Block",
                                        "src": "10757:57:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15511,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "10778:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15513,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10790:11:115",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10273,
                                                        "src": "10778:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15514,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10778:25:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15515,
                                                "nodeType": "RevertStatement",
                                                "src": "10771:32:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15519
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15519,
                                            "mutability": "mutable",
                                            "name": "bondAmount",
                                            "nameLocation": "10867:10:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "10859:18:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15518,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10859:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15521,
                                    "initialValue": {
                                        "id": 15520,
                                        "name": "_bondAmount",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15354,
                                        "src": "10880:11:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10859:32:115"
                                },
                                {
                                    "assignments": [
                                        15523
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15523,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice_",
                                            "nameLocation": "10940:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "10932:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15522,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10932:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15525,
                                    "initialValue": {
                                        "id": 15524,
                                        "name": "vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15381,
                                        "src": "10959:15:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10932:42:115"
                                },
                                {
                                    "assignments": [
                                        15530
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15530,
                                            "mutability": "mutable",
                                            "name": "options",
                                            "nameLocation": "11044:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15563,
                                            "src": "11015:36:115",
                                            "stateVariable": false,
                                            "storageLocation": "calldata",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options"
                                            },
                                            "typeName": {
                                                "id": 15529,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 15528,
                                                    "name": "IHyperdrive.Options",
                                                    "nameLocations": [
                                                        "11015:11:115",
                                                        "11027:7:115"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 10210,
                                                    "src": "11015:19:115"
                                                },
                                                "referencedDeclaration": 10210,
                                                "src": "11015:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Options"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15532,
                                    "initialValue": {
                                        "id": 15531,
                                        "name": "_options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15359,
                                        "src": "11054:8:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                            "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11015:47:115"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 15534,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "11131:3:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 15535,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11135:6:115",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "11131:10:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15536,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15530,
                                                    "src": "11165:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15537,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11173:11:115",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10203,
                                                "src": "11165:19:115",
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
                                                                "id": 15540,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18009,
                                                                "src": "11235:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 15541,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "11243:13:115",
                                                            "memberName": "AssetIdPrefix",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17756,
                                                            "src": "11235:21:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$17756_$",
                                                                "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                            }
                                                        },
                                                        "id": 15542,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11257:4:115",
                                                        "memberName": "Long",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 17753,
                                                        "src": "11235:26:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                            "typeString": "enum AssetId.AssetIdPrefix"
                                                        }
                                                    },
                                                    {
                                                        "id": 15543,
                                                        "name": "maturityTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15437,
                                                        "src": "11263:12:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_enum$_AssetIdPrefix_$17756",
                                                            "typeString": "enum AssetId.AssetIdPrefix"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 15538,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18009,
                                                        "src": "11213:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$18009_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 15539,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "11221:13:115",
                                                    "memberName": "encodeAssetId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 17779,
                                                    "src": "11213:21:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$17756_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15544,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "11213:63:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15545,
                                                "name": "maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15437,
                                                "src": "11290:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15547,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15501,
                                                        "src": "11370:8:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15548,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15523,
                                                        "src": "11380:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15549,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15530,
                                                        "src": "11398:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15546,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13614,
                                                    "src": "11345:24:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15550,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "11345:61:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15552,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15501,
                                                        "src": "11506:8:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15553,
                                                        "name": "vaultSharePrice_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15523,
                                                        "src": "11532:16:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15554,
                                                        "name": "options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15530,
                                                        "src": "11566:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 15551,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13640,
                                                    "src": "11457:31:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$10210_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15555,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "11457:130:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15556,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15530,
                                                    "src": "11601:7:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 15557,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11609:6:115",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10206,
                                                "src": "11601:14:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 15558,
                                                "name": "bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15519,
                                                "src": "11629:10:115",
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
                                            "id": 15533,
                                            "name": "CloseLong",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10809,
                                            "src": "11108:9:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256,uint256,uint256,uint256,bool,uint256)"
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
                                        "src": "11108:541:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15560,
                                    "nodeType": "EmitStatement",
                                    "src": "11103:546:115"
                                },
                                {
                                    "expression": {
                                        "id": 15561,
                                        "name": "proceeds",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 15501,
                                        "src": "11667:8:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 15365,
                                    "id": 15562,
                                    "nodeType": "Return",
                                    "src": "11660:15:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15350,
                            "nodeType": "StructuredDocumentation",
                            "src": "5703:648:115",
                            "text": "@dev Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the long.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum proceeds the trader will accept. The units\n        of this quantity are either base or vault shares, depending on\n        the value of `_options.asBase`.\n @param _options The options that configure how the trade is settled.\n @return The proceeds the user receives. The units of this quantity are\n         either base or vault shares, depending on the value of\n         `_options.asBase`."
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
                                        "6526:12:115"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71603,
                                    "src": "6526:12:115"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6526:12:115"
                            }
                        ],
                        "name": "_closeLong",
                        "nameLocation": "6365:10:115",
                        "parameters": {
                            "id": 15360,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15352,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "6393:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15564,
                                    "src": "6385:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15351,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6385:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15354,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "6424:11:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15564,
                                    "src": "6416:19:115",
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
                                        "src": "6416:7:115",
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
                                    "name": "_minOutput",
                                    "nameLocation": "6453:10:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15564,
                                    "src": "6445:18:115",
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
                                        "src": "6445:7:115",
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
                                    "nameLocation": "6502:8:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15564,
                                    "src": "6473:37:115",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$10210_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 15358,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 15357,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "6473:11:115",
                                                "6485:7:115"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10210,
                                            "src": "6473:19:115"
                                        },
                                        "referencedDeclaration": 10210,
                                        "src": "6473:19:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$10210_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6375:141:115"
                        },
                        "returnParameters": {
                            "id": 15365,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15364,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15564,
                                    "src": "6548:7:115",
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
                                        "src": "6548:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6547:9:115"
                        },
                        "scope": 16054,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15671,
                        "nodeType": "FunctionDefinition",
                        "src": "12096:1951:115",
                        "nodes": [],
                        "body": {
                            "id": 15670,
                            "nodeType": "Block",
                            "src": "12273:1774:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        15577
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15577,
                                            "mutability": "mutable",
                                            "name": "longsOutstanding_",
                                            "nameLocation": "12354:17:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15670,
                                            "src": "12346:25:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            },
                                            "typeName": {
                                                "id": 15576,
                                                "name": "uint128",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12346:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15580,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15578,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17570,
                                            "src": "12374:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15579,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "12387:16:115",
                                        "memberName": "longsOutstanding",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10016,
                                        "src": "12374:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12346:57:115"
                                },
                                {
                                    "expression": {
                                        "id": 15599,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15581,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "12413:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15583,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12426:23:115",
                                            "memberName": "longAverageMaturityTime",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10025,
                                            "src": "12413:36:115",
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
                                                            "id": 15590,
                                                            "name": "longsOutstanding_",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15577,
                                                            "src": "12572:17:115",
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
                                                            "id": 15593,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 15591,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15573,
                                                                "src": "12607:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "*",
                                                            "rightExpression": {
                                                                "id": 15592,
                                                                "name": "ONE",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18039,
                                                                "src": "12623:3:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "12607:19:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15594,
                                                            "name": "_bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15569,
                                                            "src": "12677:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "74727565",
                                                            "id": 15595,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "12713:4:115",
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
                                                                        "id": 15586,
                                                                        "name": "_marketState",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17570,
                                                                        "src": "12473:12:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                        }
                                                                    },
                                                                    "id": 15587,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "12486:23:115",
                                                                    "memberName": "longAverageMaturityTime",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10025,
                                                                    "src": "12473:36:115",
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
                                                                "id": 15585,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "12452:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 15584,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "12452:7:115",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 15588,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "12452:67:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15589,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "12533:21:115",
                                                        "memberName": "updateWeightedAverage",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18732,
                                                        "src": "12452:102:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15596,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "12452:279:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15597,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12745:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "12452:302:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
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
                                            "src": "12452:304:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12413:343:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15600,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12413:343:115"
                                },
                                {
                                    "expression": {
                                        "id": 15607,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15601,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "12874:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15603,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12887:13:115",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10007,
                                            "src": "12874:26:115",
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
                                                    "id": 15604,
                                                    "name": "_shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15567,
                                                    "src": "12904:19:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15605,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12924:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "12904:29:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
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
                                            "src": "12904:31:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12874:61:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15608,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12874:61:115"
                                },
                                {
                                    "expression": {
                                        "id": 15615,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15609,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "12945:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15611,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "12958:12:115",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10010,
                                            "src": "12945:25:115",
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
                                                    "id": 15612,
                                                    "name": "_bondReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15569,
                                                    "src": "12974:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15613,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "12993:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "12974:28:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15614,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "12974:30:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "12945:59:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15616,
                                    "nodeType": "ExpressionStatement",
                                    "src": "12945:59:115"
                                },
                                {
                                    "expression": {
                                        "id": 15621,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15617,
                                            "name": "longsOutstanding_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15577,
                                            "src": "13014:17:115",
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
                                                    "id": 15618,
                                                    "name": "_bondReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15569,
                                                    "src": "13035:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15619,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13054:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "13035:28:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15620,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "13035:30:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13014:51:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15622,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13014:51:115"
                                },
                                {
                                    "expression": {
                                        "id": 15627,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15623,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "13075:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15625,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "13088:16:115",
                                            "memberName": "longsOutstanding",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10016,
                                            "src": "13075:29:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 15626,
                                            "name": "longsOutstanding_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15577,
                                            "src": "13107:17:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "13075:49:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15628,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13075:49:115"
                                },
                                {
                                    "assignments": [
                                        15630
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15630,
                                            "mutability": "mutable",
                                            "name": "nonNettedLongs",
                                            "nameLocation": "13286:14:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15670,
                                            "src": "13279:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15629,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "13279:6:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15634,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15632,
                                                "name": "_maturityTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15573,
                                                "src": "13319:13:115",
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
                                            "id": 15631,
                                            "name": "_nonNettedLongs",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12940,
                                            "src": "13303:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$",
                                                "typeString": "function (uint256) view returns (int256)"
                                            }
                                        },
                                        "id": 15633,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13303:30:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13279:54:115"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 15636,
                                                "name": "nonNettedLongs",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15630,
                                                "src": "13376:14:115",
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
                                                "id": 15641,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 15637,
                                                    "name": "nonNettedLongs",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15630,
                                                    "src": "13404:14:115",
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
                                                            "id": 15638,
                                                            "name": "_bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15569,
                                                            "src": "13421:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15639,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13440:8:115",
                                                        "memberName": "toInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 21814,
                                                        "src": "13421:27:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256) pure returns (int256)"
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
                                                    "src": "13421:29:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "13404:46:115",
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
                                            "id": 15635,
                                            "name": "_updateLongExposure",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13181,
                                            "src": "13343:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                                                "typeString": "function (int256,int256)"
                                            }
                                        },
                                        "id": 15642,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13343:117:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 15643,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13343:117:115"
                                },
                                {
                                    "condition": {
                                        "id": 15647,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "13558:29:115",
                                        "subExpression": {
                                            "arguments": [
                                                {
                                                    "id": 15645,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15571,
                                                    "src": "13570:16:115",
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
                                                "id": 15644,
                                                "name": "_isSolvent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13128,
                                                "src": "13559:10:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                                                    "typeString": "function (uint256) view returns (bool)"
                                                }
                                            },
                                            "id": 15646,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "13559:28:115",
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
                                    "id": 15654,
                                    "nodeType": "IfStatement",
                                    "src": "13554:100:115",
                                    "trueBody": {
                                        "id": 15653,
                                        "nodeType": "Block",
                                        "src": "13589:65:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15648,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18030,
                                                            "src": "13603:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18030_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15650,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13610:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18029,
                                                        "src": "13603:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15651,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13603:40:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15652,
                                                "nodeType": "ExpressionStatement",
                                                "src": "13603:40:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15656
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15656,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "13892:7:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15670,
                                            "src": "13887:12:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 15655,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "13887:4:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15660,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15658,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15571,
                                                "src": "13928:16:115",
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
                                            "id": 15657,
                                            "name": "_distributeExcessIdleSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                14917,
                                                15020
                                            ],
                                            "referencedDeclaration": 14917,
                                            "src": "13902:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256) returns (bool)"
                                            }
                                        },
                                        "id": 15659,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13902:43:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13887:58:115"
                                },
                                {
                                    "condition": {
                                        "id": 15662,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "13959:8:115",
                                        "subExpression": {
                                            "id": 15661,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15656,
                                            "src": "13960:7:115",
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
                                    "id": 15669,
                                    "nodeType": "IfStatement",
                                    "src": "13955:86:115",
                                    "trueBody": {
                                        "id": 15668,
                                        "nodeType": "Block",
                                        "src": "13969:72:115",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15663,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "13990:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 15665,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "14002:26:115",
                                                        "memberName": "DistributeExcessIdleFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10293,
                                                        "src": "13990:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
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
                                                    "src": "13990:40:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15667,
                                                "nodeType": "RevertStatement",
                                                "src": "13983:47:115"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15565,
                            "nodeType": "StructuredDocumentation",
                            "src": "11688:403:115",
                            "text": "@dev Applies an open long to the state. This includes updating the\n      reserves and maintaining the reserve invariants.\n @param _shareReservesDelta The amount of shares paid to the curve.\n @param _bondReservesDelta The amount of bonds sold by the curve.\n @param _vaultSharePrice The current vault share price.\n @param _maturityTime The maturity time of the long."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyOpenLong",
                        "nameLocation": "12105:14:115",
                        "parameters": {
                            "id": 15574,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15567,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "12137:19:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15671,
                                    "src": "12129:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15566,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12129:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15569,
                                    "mutability": "mutable",
                                    "name": "_bondReservesDelta",
                                    "nameLocation": "12174:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15671,
                                    "src": "12166:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15568,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12166:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15571,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "12210:16:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15671,
                                    "src": "12202:24:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15570,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12202:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15573,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "12244:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15671,
                                    "src": "12236:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15572,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12236:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12119:144:115"
                        },
                        "returnParameters": {
                            "id": 15575,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "12273:0:115"
                        },
                        "scope": 16054,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15802,
                        "nodeType": "FunctionDefinition",
                        "src": "14516:2940:115",
                        "nodes": [],
                        "body": {
                            "id": 15801,
                            "nodeType": "Block",
                            "src": "14727:2729:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        15686
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15686,
                                            "mutability": "mutable",
                                            "name": "shareReserves",
                                            "nameLocation": "14884:13:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15801,
                                            "src": "14876:21:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15685,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14876:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15689,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15687,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17570,
                                            "src": "14900:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15688,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14913:13:115",
                                        "memberName": "shareReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10007,
                                        "src": "14900:26:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14876:50:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 15698,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 15692,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15690,
                                                "name": "shareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15686,
                                                "src": "14953:13:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 15691,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15678,
                                                "src": "14969:19:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "14953:35:115",
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
                                            "id": 15697,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 15695,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 15693,
                                                    "name": "shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15686,
                                                    "src": "15004:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 15694,
                                                    "name": "_shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15678,
                                                    "src": "15020:19:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "15004:35:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 15696,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17563,
                                                "src": "15042:21:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "15004:59:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "14953:110:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15705,
                                    "nodeType": "IfStatement",
                                    "src": "14936:203:115",
                                    "trueBody": {
                                        "id": 15704,
                                        "nodeType": "Block",
                                        "src": "15074:65:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15699,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18030,
                                                            "src": "15088:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18030_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15701,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "15095:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18029,
                                                        "src": "15088:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15702,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "15088:40:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15703,
                                                "nodeType": "ExpressionStatement",
                                                "src": "15088:40:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 15710,
                                    "nodeType": "UncheckedBlock",
                                    "src": "15148:71:115",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 15708,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 15706,
                                                    "name": "shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15686,
                                                    "src": "15172:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "-=",
                                                "rightHandSide": {
                                                    "id": 15707,
                                                    "name": "_shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15678,
                                                    "src": "15189:19:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "15172:36:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 15709,
                                            "nodeType": "ExpressionStatement",
                                            "src": "15172:36:115"
                                        }
                                    ]
                                },
                                {
                                    "assignments": [
                                        15712
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15712,
                                            "mutability": "mutable",
                                            "name": "shareAdjustment",
                                            "nameLocation": "15683:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15801,
                                            "src": "15676:22:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 15711,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "15676:6:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15715,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15713,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17570,
                                            "src": "15701:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15714,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "15714:15:115",
                                        "memberName": "shareAdjustment",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10019,
                                        "src": "15701:28:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "15676:53:115"
                                },
                                {
                                    "expression": {
                                        "id": 15718,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15716,
                                            "name": "shareAdjustment",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15712,
                                            "src": "15739:15:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 15717,
                                            "name": "_shareAdjustmentDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15680,
                                            "src": "15758:21:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "15739:40:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 15719,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15739:40:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 15732,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 15724,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "expression": {
                                                        "id": 15720,
                                                        "name": "_shareReservesDelta",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15678,
                                                        "src": "15806:19:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 15721,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15826:8:115",
                                                    "memberName": "toInt256",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 21814,
                                                    "src": "15806:28:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256) pure returns (int256)"
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
                                                "src": "15806:30:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 15723,
                                                "name": "_shareAdjustmentDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15680,
                                                "src": "15839:21:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "src": "15806:54:115",
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
                                            "id": 15731,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 15727,
                                                        "name": "shareReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15686,
                                                        "src": "15940:13:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15728,
                                                        "name": "shareAdjustment",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15712,
                                                        "src": "15971:15:115",
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
                                                        "id": 15725,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 19567,
                                                        "src": "15876:14:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 15726,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "15891:31:115",
                                                    "memberName": "calculateEffectiveShareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 19010,
                                                    "src": "15876:46:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,int256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15729,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15876:124:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 15730,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17563,
                                                "src": "16015:21:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "15876:160:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "15806:230:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15739,
                                    "nodeType": "IfStatement",
                                    "src": "15789:323:115",
                                    "trueBody": {
                                        "id": 15738,
                                        "nodeType": "Block",
                                        "src": "16047:65:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15733,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18030,
                                                            "src": "16061:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18030_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15735,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "16068:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18029,
                                                        "src": "16061:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15736,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "16061:40:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15737,
                                                "nodeType": "ExpressionStatement",
                                                "src": "16061:40:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15741
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15741,
                                            "mutability": "mutable",
                                            "name": "longsOutstanding",
                                            "nameLocation": "16180:16:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15801,
                                            "src": "16172:24:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15740,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "16172:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15744,
                                    "initialValue": {
                                        "expression": {
                                            "id": 15742,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 17570,
                                            "src": "16199:12:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 15743,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "16212:16:115",
                                        "memberName": "longsOutstanding",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 10016,
                                        "src": "16199:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "16172:56:115"
                                },
                                {
                                    "expression": {
                                        "id": 15763,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15745,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "16238:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15747,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16251:23:115",
                                            "memberName": "longAverageMaturityTime",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10025,
                                            "src": "16238:36:115",
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
                                                            "id": 15754,
                                                            "name": "longsOutstanding",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15741,
                                                            "src": "16397:16:115",
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
                                                            "id": 15757,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 15755,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15682,
                                                                "src": "16431:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "*",
                                                            "rightExpression": {
                                                                "id": 15756,
                                                                "name": "ONE",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 18039,
                                                                "src": "16447:3:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "16431:19:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15758,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15674,
                                                            "src": "16501:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 15759,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "16530:5:115",
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
                                                                        "id": 15750,
                                                                        "name": "_marketState",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17570,
                                                                        "src": "16298:12:115",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                        }
                                                                    },
                                                                    "id": 15751,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "16311:23:115",
                                                                    "memberName": "longAverageMaturityTime",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 10025,
                                                                    "src": "16298:36:115",
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
                                                                "id": 15749,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "16277:7:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                },
                                                                "typeName": {
                                                                    "id": 15748,
                                                                    "name": "uint256",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "16277:7:115",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 15752,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "16277:67:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 15753,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "16358:21:115",
                                                        "memberName": "updateWeightedAverage",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18732,
                                                        "src": "16277:102:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,bool) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15760,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "16277:272:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15761,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "16563:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "16277:295:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15762,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16277:297:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "16238:336:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15764,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16238:336:115"
                                },
                                {
                                    "expression": {
                                        "id": 15767,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15765,
                                            "name": "longsOutstanding",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15741,
                                            "src": "16636:16:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 15766,
                                            "name": "_bondAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15674,
                                            "src": "16656:11:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16636:31:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15768,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16636:31:115"
                                },
                                {
                                    "expression": {
                                        "id": 15775,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15769,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "16677:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15771,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "16690:16:115",
                                            "memberName": "longsOutstanding",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10016,
                                            "src": "16677:29:115",
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
                                                    "id": 15772,
                                                    "name": "longsOutstanding",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15741,
                                                    "src": "16709:16:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15773,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "16726:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "16709:26:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15774,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16709:28:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "16677:60:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15776,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16677:60:115"
                                },
                                {
                                    "expression": {
                                        "id": 15783,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15777,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "17259:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15779,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17272:13:115",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10007,
                                            "src": "17259:26:115",
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
                                                    "id": 15780,
                                                    "name": "shareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15686,
                                                    "src": "17288:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15781,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17302:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "17288:23:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15782,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "17288:25:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "17259:54:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15784,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17259:54:115"
                                },
                                {
                                    "expression": {
                                        "id": 15791,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15785,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "17323:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15787,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17336:15:115",
                                            "memberName": "shareAdjustment",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10019,
                                            "src": "17323:28:115",
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
                                                    "id": 15788,
                                                    "name": "shareAdjustment",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15712,
                                                    "src": "17354:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "id": 15789,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17370:8:115",
                                                "memberName": "toInt128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21781,
                                                "src": "17354:24:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                                    "typeString": "function (int256) pure returns (int128)"
                                                }
                                            },
                                            "id": 15790,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "17354:26:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "src": "17323:57:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "id": 15792,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17323:57:115"
                                },
                                {
                                    "expression": {
                                        "id": 15799,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 15793,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17570,
                                                "src": "17390:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 15795,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "17403:12:115",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10010,
                                            "src": "17390:25:115",
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
                                                    "id": 15796,
                                                    "name": "_bondReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15676,
                                                    "src": "17419:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15797,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17438:9:115",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 21707,
                                                "src": "17419:28:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 15798,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "17419:30:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "17390:59:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 15800,
                                    "nodeType": "ExpressionStatement",
                                    "src": "17390:59:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15672,
                            "nodeType": "StructuredDocumentation",
                            "src": "14053:458:115",
                            "text": "@dev Applies the trading deltas from a closed long to the reserves and\n      the withdrawal pool.\n @param _bondAmount The amount of longs that were closed.\n @param _bondReservesDelta The bonds to add to the reserves.\n @param _shareReservesDelta The shares to remove from the reserves.\n @param _shareAdjustmentDelta The amount to decrease the share adjustment.\n @param _maturityTime The maturity time of the long."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyCloseLong",
                        "nameLocation": "14525:15:115",
                        "parameters": {
                            "id": 15683,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15674,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "14558:11:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15802,
                                    "src": "14550:19:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15673,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14550:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15676,
                                    "mutability": "mutable",
                                    "name": "_bondReservesDelta",
                                    "nameLocation": "14587:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15802,
                                    "src": "14579:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15675,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14579:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15678,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "14623:19:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15802,
                                    "src": "14615:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15677,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14615:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15680,
                                    "mutability": "mutable",
                                    "name": "_shareAdjustmentDelta",
                                    "nameLocation": "14659:21:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15802,
                                    "src": "14652:28:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 15679,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14652:6:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15682,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "14698:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15802,
                                    "src": "14690:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15681,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14690:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14540:177:115"
                        },
                        "returnParameters": {
                            "id": 15684,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "14727:0:115"
                        },
                        "scope": 16054,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 15915,
                        "nodeType": "FunctionDefinition",
                        "src": "17948:3698:115",
                        "nodes": [],
                        "body": {
                            "id": 15914,
                            "nodeType": "Block",
                            "src": "18226:3420:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 15828,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15816,
                                            "name": "bondReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15812,
                                            "src": "18387:17:115",
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
                                                        "id": 15819,
                                                        "name": "_effectiveShareReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 12907,
                                                        "src": "18453:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 15820,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "18453:25:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 15821,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17570,
                                                        "src": "18492:12:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 15822,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "18505:12:115",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10010,
                                                    "src": "18492:25:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                {
                                                    "id": 15823,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15805,
                                                    "src": "18531:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15824,
                                                    "name": "_timeStretch",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17545,
                                                    "src": "18569:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15825,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15807,
                                                    "src": "18595:16:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15826,
                                                    "name": "_initialVaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17560,
                                                    "src": "18625:23:115",
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
                                                    "id": 15817,
                                                    "name": "HyperdriveMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19567,
                                                    "src": "18407:14:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                        "typeString": "type(library HyperdriveMath)"
                                                    }
                                                },
                                                "id": 15818,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "18422:17:115",
                                                "memberName": "calculateOpenLong",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19305,
                                                "src": "18407:32:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 15827,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "18407:251:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "18387:271:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15829,
                                    "nodeType": "ExpressionStatement",
                                    "src": "18387:271:115"
                                },
                                {
                                    "assignments": [
                                        15831
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15831,
                                            "mutability": "mutable",
                                            "name": "spotPrice",
                                            "nameLocation": "18799:9:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15914,
                                            "src": "18791:17:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15830,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "18791:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15841,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 15834,
                                                    "name": "_effectiveShareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 12907,
                                                    "src": "18858:23:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 15835,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "18858:25:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 15836,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17570,
                                                    "src": "18897:12:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 15837,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "18910:12:115",
                                                "memberName": "bondReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 10010,
                                                "src": "18897:25:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 15838,
                                                "name": "_initialVaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17560,
                                                "src": "18936:23:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15839,
                                                "name": "_timeStretch",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17545,
                                                "src": "18973:12:115",
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
                                                "id": 15832,
                                                "name": "HyperdriveMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 19567,
                                                "src": "18811:14:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                    "typeString": "type(library HyperdriveMath)"
                                                }
                                            },
                                            "id": 15833,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "18826:18:115",
                                            "memberName": "calculateSpotPrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 18940,
                                            "src": "18811:33:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
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
                                        "src": "18811:184:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "18791:204:115"
                                },
                                {
                                    "condition": {
                                        "arguments": [
                                            {
                                                "id": 15843,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15805,
                                                "src": "19059:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15844,
                                                "name": "bondReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15812,
                                                "src": "19089:17:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 15847,
                                                        "name": "spotPrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15831,
                                                        "src": "19190:9:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15848,
                                                        "name": "_curveFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17548,
                                                        "src": "19221:9:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15849,
                                                        "name": "_flatFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17551,
                                                        "src": "19252:8:115",
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
                                                        "id": 15845,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 19567,
                                                        "src": "19124:14:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 15846,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "19139:29:115",
                                                    "memberName": "calculateOpenLongMaxSpotPrice",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 19254,
                                                    "src": "19124:44:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15850,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "19124:154:115",
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
                                            "id": 15842,
                                            "name": "_isNegativeInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13102,
                                            "src": "19022:19:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (bool)"
                                            }
                                        },
                                        "id": 15851,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19022:270:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15858,
                                    "nodeType": "IfStatement",
                                    "src": "19005:363:115",
                                    "trueBody": {
                                        "id": 15857,
                                        "nodeType": "Block",
                                        "src": "19303:65:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15852,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18030,
                                                            "src": "19317:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18030_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15854,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "19324:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18029,
                                                        "src": "19317:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15855,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "19317:40:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15856,
                                                "nodeType": "ExpressionStatement",
                                                "src": "19317:40:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        15860,
                                        15862
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15860,
                                            "mutability": "mutable",
                                            "name": "curveFee",
                                            "nameLocation": "19552:8:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15914,
                                            "src": "19544:16:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15859,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "19544:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 15862,
                                            "mutability": "mutable",
                                            "name": "governanceCurveFee",
                                            "nameLocation": "19591:18:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 15914,
                                            "src": "19583:26:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15861,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "19583:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15868,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 15864,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15805,
                                                "src": "19674:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15865,
                                                "name": "spotPrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15831,
                                                "src": "19704:9:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15866,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15807,
                                                "src": "19731:16:115",
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
                                            "id": 15863,
                                            "name": "_calculateFeesGivenShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13518,
                                            "src": "19631:25:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 15867,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19631:130:115",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "19530:231:115"
                                },
                                {
                                    "expression": {
                                        "id": 15871,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15869,
                                            "name": "bondReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15812,
                                            "src": "19957:17:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 15870,
                                            "name": "curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15860,
                                            "src": "19978:8:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "19957:29:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15872,
                                    "nodeType": "ExpressionStatement",
                                    "src": "19957:29:115"
                                },
                                {
                                    "expression": {
                                        "id": 15879,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15873,
                                            "name": "totalGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15814,
                                            "src": "20510:18:115",
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
                                                    "id": 15876,
                                                    "name": "spotPrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15831,
                                                    "src": "20574:9:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15877,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15807,
                                                    "src": "20597:16:115",
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
                                                    "id": 15874,
                                                    "name": "governanceCurveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15862,
                                                    "src": "20531:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 15875,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20550:10:115",
                                                "memberName": "mulDivDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18067,
                                                "src": "20531:29:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 15878,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20531:92:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20510:113:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15880,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20510:113:115"
                                },
                                {
                                    "expression": {
                                        "id": 15885,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 15881,
                                            "name": "shareReservesDelta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15810,
                                            "src": "20861:18:115",
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
                                            "id": 15884,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 15882,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15805,
                                                "src": "20882:12:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 15883,
                                                "name": "totalGovernanceFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15814,
                                                "src": "20897:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "20882:33:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20861:54:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 15886,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20861:54:115"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 15901,
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
                                                    "id": 15892,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 15889,
                                                            "name": "_effectiveShareReserves",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 12907,
                                                            "src": "21287:23:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view returns (uint256)"
                                                            }
                                                        },
                                                        "id": 15890,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "21287:25:115",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 15891,
                                                        "name": "shareReservesDelta",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15810,
                                                        "src": "21315:18:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "21287:46:115",
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
                                                    "id": 15896,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 15893,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17570,
                                                            "src": "21351:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 15894,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "21364:12:115",
                                                        "memberName": "bondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10010,
                                                        "src": "21351:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 15895,
                                                        "name": "bondReservesDelta",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15812,
                                                        "src": "21379:17:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "21351:45:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15897,
                                                    "name": "_initialVaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17560,
                                                    "src": "21414:23:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 15898,
                                                    "name": "_timeStretch",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17545,
                                                    "src": "21455:12:115",
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
                                                    "id": 15887,
                                                    "name": "HyperdriveMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19567,
                                                    "src": "21236:14:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                        "typeString": "type(library HyperdriveMath)"
                                                    }
                                                },
                                                "id": 15888,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "21251:18:115",
                                                "memberName": "calculateSpotPrice",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 18940,
                                                "src": "21236:33:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 15899,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "21236:245:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 15900,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18039,
                                            "src": "21484:3:115",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "21236:251:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 15908,
                                    "nodeType": "IfStatement",
                                    "src": "21219:344:115",
                                    "trueBody": {
                                        "id": 15907,
                                        "nodeType": "Block",
                                        "src": "21498:65:115",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 15902,
                                                            "name": "Errors",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 18030,
                                                            "src": "21512:6:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_Errors_$18030_$",
                                                                "typeString": "type(library Errors)"
                                                            }
                                                        },
                                                        "id": 15904,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "21519:31:115",
                                                        "memberName": "throwInsufficientLiquidityError",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 18029,
                                                        "src": "21512:38:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 15905,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "21512:40:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 15906,
                                                "nodeType": "ExpressionStatement",
                                                "src": "21512:40:115"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 15909,
                                                "name": "shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15810,
                                                "src": "21581:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15910,
                                                "name": "bondReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15812,
                                                "src": "21601:17:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 15911,
                                                "name": "totalGovernanceFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15814,
                                                "src": "21620:18:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 15912,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "21580:59:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 15815,
                                    "id": 15913,
                                    "nodeType": "Return",
                                    "src": "21573:66:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15803,
                            "nodeType": "StructuredDocumentation",
                            "src": "17462:481:115",
                            "text": "@dev Calculate the pool reserve and trader deltas that result from\n      opening a long. This calculation includes trading fees.\n @param _shareAmount The amount of shares being paid to open the long.\n @param _vaultSharePrice The current vault share price.\n @return shareReservesDelta The change in the share reserves.\n @return bondReservesDelta The change in the bond reserves.\n @return totalGovernanceFee The governance fee in shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateOpenLong",
                        "nameLocation": "17957:18:115",
                        "parameters": {
                            "id": 15808,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15805,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "17993:12:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15915,
                                    "src": "17985:20:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15804,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "17985:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15807,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "18023:16:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15915,
                                    "src": "18015:24:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15806,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18015:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "17975:70:115"
                        },
                        "returnParameters": {
                            "id": 15815,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15810,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "18114:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15915,
                                    "src": "18106:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15809,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18106:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15812,
                                    "mutability": "mutable",
                                    "name": "bondReservesDelta",
                                    "nameLocation": "18154:17:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15915,
                                    "src": "18146:25:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15811,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18146:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15814,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "18193:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 15915,
                                    "src": "18185:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15813,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18185:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18092:129:115"
                        },
                        "scope": 16054,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 16053,
                        "nodeType": "FunctionDefinition",
                        "src": "22365:5095:115",
                        "nodes": [],
                        "body": {
                            "id": 16052,
                            "nodeType": "Block",
                            "src": "22750:4710:115",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        15936
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 15936,
                                            "mutability": "mutable",
                                            "name": "shareCurveDelta",
                                            "nameLocation": "22956:15:115",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 16052,
                                            "src": "22948:23:115",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 15935,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "22948:7:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 15937,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "22948:23:115"
                                },
                                {
                                    "id": 16019,
                                    "nodeType": "Block",
                                    "src": "22981:3079:115",
                                    "statements": [
                                        {
                                            "assignments": [
                                                15939
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 15939,
                                                    "mutability": "mutable",
                                                    "name": "timeRemaining",
                                                    "nameLocation": "23424:13:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16019,
                                                    "src": "23416:21:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 15938,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "23416:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 15943,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "id": 15941,
                                                        "name": "_maturityTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15922,
                                                        "src": "23464:13:115",
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
                                                    "id": 15940,
                                                    "name": "_calculateTimeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 12838,
                                                    "src": "23440:23:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256) view returns (uint256)"
                                                    }
                                                },
                                                "id": 15942,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "23440:38:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "23416:62:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 15960,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "components": [
                                                        {
                                                            "id": 15944,
                                                            "name": "shareCurveDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15936,
                                                            "src": "23493:15:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15945,
                                                            "name": "bondReservesDelta",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15925,
                                                            "src": "23510:17:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15946,
                                                            "name": "shareProceeds",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15927,
                                                            "src": "23529:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 15947,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "TupleExpression",
                                                    "src": "23492:51:115",
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
                                                                "id": 15950,
                                                                "name": "_effectiveShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 12907,
                                                                "src": "23618:23:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                    "typeString": "function () view returns (uint256)"
                                                                }
                                                            },
                                                            "id": 15951,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "23618:25:115",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 15952,
                                                                "name": "_marketState",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17570,
                                                                "src": "23665:12:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                }
                                                            },
                                                            "id": 15953,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "23678:12:115",
                                                            "memberName": "bondReserves",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 10010,
                                                            "src": "23665:25:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint128",
                                                                "typeString": "uint128"
                                                            }
                                                        },
                                                        {
                                                            "id": 15954,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15918,
                                                            "src": "23712:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15955,
                                                            "name": "timeRemaining",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15939,
                                                            "src": "23745:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15956,
                                                            "name": "_timeStretch",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17545,
                                                            "src": "23780:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15957,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15920,
                                                            "src": "23814:16:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15958,
                                                            "name": "_initialVaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17560,
                                                            "src": "23852:23:115",
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
                                                            "id": 15948,
                                                            "name": "HyperdriveMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 19567,
                                                            "src": "23546:14:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                                "typeString": "type(library HyperdriveMath)"
                                                            }
                                                        },
                                                        "id": 15949,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "23578:18:115",
                                                        "memberName": "calculateCloseLong",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 19370,
                                                        "src": "23546:50:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256,uint256,uint256)"
                                                        }
                                                    },
                                                    "id": 15959,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "23546:347:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256,uint256)"
                                                    }
                                                },
                                                "src": "23492:401:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 15961,
                                            "nodeType": "ExpressionStatement",
                                            "src": "23492:401:115"
                                        },
                                        {
                                            "assignments": [
                                                15963
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 15963,
                                                    "mutability": "mutable",
                                                    "name": "curveFee",
                                                    "nameLocation": "24142:8:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16019,
                                                    "src": "24134:16:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 15962,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24134:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 15964,
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24134:16:115"
                                        },
                                        {
                                            "assignments": [
                                                15966
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 15966,
                                                    "mutability": "mutable",
                                                    "name": "governanceCurveFee",
                                                    "nameLocation": "24172:18:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16019,
                                                    "src": "24164:26:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 15965,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24164:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 15967,
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24164:26:115"
                                        },
                                        {
                                            "assignments": [
                                                15969
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 15969,
                                                    "mutability": "mutable",
                                                    "name": "flatFee",
                                                    "nameLocation": "24212:7:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16019,
                                                    "src": "24204:15:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 15968,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24204:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 15970,
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24204:15:115"
                                        },
                                        {
                                            "assignments": [
                                                15972
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 15972,
                                                    "mutability": "mutable",
                                                    "name": "spotPrice",
                                                    "nameLocation": "24241:9:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16019,
                                                    "src": "24233:17:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 15971,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24233:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 15982,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "id": 15975,
                                                            "name": "_effectiveShareReserves",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 12907,
                                                            "src": "24304:23:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                                "typeString": "function () view returns (uint256)"
                                                            }
                                                        },
                                                        "id": 15976,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "24304:25:115",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 15977,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17570,
                                                            "src": "24347:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$10041_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 15978,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "24360:12:115",
                                                        "memberName": "bondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10010,
                                                        "src": "24347:25:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    {
                                                        "id": 15979,
                                                        "name": "_initialVaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17560,
                                                        "src": "24390:23:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 15980,
                                                        "name": "_timeStretch",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 17545,
                                                        "src": "24431:12:115",
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
                                                        "id": 15973,
                                                        "name": "HyperdriveMath",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 19567,
                                                        "src": "24253:14:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                            "typeString": "type(library HyperdriveMath)"
                                                        }
                                                    },
                                                    "id": 15974,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "24268:18:115",
                                                    "memberName": "calculateSpotPrice",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 18940,
                                                    "src": "24253:33:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 15981,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "24253:204:115",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24233:224:115"
                                        },
                                        {
                                            "assignments": [
                                                15984
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 15984,
                                                    "mutability": "mutable",
                                                    "name": "vaultSharePrice",
                                                    "nameLocation": "24479:15:115",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 16019,
                                                    "src": "24471:23:115",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "typeName": {
                                                        "id": 15983,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "24471:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 15986,
                                            "initialValue": {
                                                "id": 15985,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15920,
                                                "src": "24497:16:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "24471:42:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 15998,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "components": [
                                                        {
                                                            "id": 15987,
                                                            "name": "curveFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15963,
                                                            "src": "24569:8:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15988,
                                                            "name": "flatFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15969,
                                                            "src": "24605:7:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15989,
                                                            "name": "governanceCurveFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15966,
                                                            "src": "24640:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15990,
                                                            "name": "totalGovernanceFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15933,
                                                            "src": "24686:18:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 15991,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "TupleExpression",
                                                    "src": "24551:177:115",
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
                                                            "id": 15993,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15918,
                                                            "src": "24773:11:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15994,
                                                            "name": "timeRemaining",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15939,
                                                            "src": "24802:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15995,
                                                            "name": "spotPrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15972,
                                                            "src": "24833:9:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 15996,
                                                            "name": "vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15984,
                                                            "src": "24860:15:115",
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
                                                        "id": 15992,
                                                        "name": "_calculateFeesGivenBonds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13588,
                                                        "src": "24731:24:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)"
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
                                                    "src": "24731:158:115",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                                                        "typeString": "tuple(uint256,uint256,uint256,uint256)"
                                                    }
                                                },
                                                "src": "24551:338:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 15999,
                                            "nodeType": "ExpressionStatement",
                                            "src": "24551:338:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16005,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 16000,
                                                    "name": "shareCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15936,
                                                    "src": "25352:15:115",
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
                                                            "id": 16003,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 16001,
                                                                "name": "curveFee",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15963,
                                                                "src": "25372:8:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 16002,
                                                                "name": "governanceCurveFee",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15966,
                                                                "src": "25383:18:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "25372:29:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "id": 16004,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "25371:31:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "25352:50:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 16006,
                                            "nodeType": "ExpressionStatement",
                                            "src": "25352:50:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16011,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 16007,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15927,
                                                    "src": "25596:13:115",
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
                                                    "id": 16010,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 16008,
                                                        "name": "curveFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15963,
                                                        "src": "25613:8:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 16009,
                                                        "name": "flatFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15969,
                                                        "src": "25624:7:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "25613:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "25596:35:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 16012,
                                            "nodeType": "ExpressionStatement",
                                            "src": "25596:35:115"
                                        },
                                        {
                                            "expression": {
                                                "id": 16017,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 16013,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15929,
                                                    "src": "25994:18:115",
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
                                                    "id": 16016,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 16014,
                                                        "name": "shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15927,
                                                        "src": "26015:13:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 16015,
                                                        "name": "totalGovernanceFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15933,
                                                        "src": "26031:18:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "26015:34:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "25994:55:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 16018,
                                            "nodeType": "ExpressionStatement",
                                            "src": "25994:55:115"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 16050,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 16020,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15927,
                                                    "src": "26354:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16021,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15929,
                                                    "src": "26381:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16022,
                                                    "name": "shareCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15936,
                                                    "src": "26413:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16023,
                                                    "name": "shareAdjustmentDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15931,
                                                    "src": "26442:20:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "id": 16024,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15933,
                                                    "src": "26476:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 16025,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "26340:164:115",
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
                                                    "id": 16028,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15927,
                                                    "src": "26568:13:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16029,
                                                    "name": "shareReservesDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15929,
                                                    "src": "26595:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16030,
                                                    "name": "shareCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15936,
                                                    "src": "26627:15:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 16031,
                                                    "name": "totalGovernanceFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15933,
                                                    "src": "26656:18:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 16032,
                                                            "name": "_checkpoints",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17580,
                                                            "src": "27167:12:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10045_storage_$",
                                                                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                            }
                                                        },
                                                        "id": 16036,
                                                        "indexExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 16035,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 16033,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15922,
                                                                "src": "27180:13:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 16034,
                                                                "name": "_positionDuration",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17542,
                                                                "src": "27196:17:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "27180:33:115",
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
                                                        "src": "27167:47:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Checkpoint_$10045_storage",
                                                            "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                        }
                                                    },
                                                    "id": 16037,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "27215:15:115",
                                                    "memberName": "vaultSharePrice",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 10044,
                                                    "src": "27167:63:115",
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
                                                        "id": 16041,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 16038,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "27270:5:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 16039,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "27276:9:115",
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "src": "27270:15:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<",
                                                        "rightExpression": {
                                                            "id": 16040,
                                                            "name": "_maturityTime",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15922,
                                                            "src": "27288:13:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "27270:31:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "falseExpression": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "id": 16043,
                                                                "name": "_checkpoints",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17580,
                                                                "src": "27355:12:115",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$10045_storage_$",
                                                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                                                }
                                                            },
                                                            "id": 16045,
                                                            "indexExpression": {
                                                                "id": 16044,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 15922,
                                                                "src": "27368:13:115",
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
                                                            "src": "27355:27:115",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Checkpoint_$10045_storage",
                                                                "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                                            }
                                                        },
                                                        "id": 16046,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "27383:15:115",
                                                        "memberName": "vaultSharePrice",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10044,
                                                        "src": "27355:43:115",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "id": 16047,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "Conditional",
                                                    "src": "27270:128:115",
                                                    "trueExpression": {
                                                        "id": 16042,
                                                        "name": "_vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15920,
                                                        "src": "27320:16:115",
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
                                                    "id": 16048,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "27439:4:115",
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
                                                    "id": 16026,
                                                    "name": "HyperdriveMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 19567,
                                                    "src": "26507:14:115",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$19567_$",
                                                        "typeString": "type(library HyperdriveMath)"
                                                    }
                                                },
                                                "id": 16027,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "26522:32:115",
                                                "memberName": "calculateNegativeInterestOnClose",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 19566,
                                                "src": "26507:47:115",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256,bool) pure returns (uint256,uint256,uint256,int256,uint256)"
                                                }
                                            },
                                            "id": 16049,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "26507:946:115",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                                            }
                                        },
                                        "src": "26340:1113:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 16051,
                                    "nodeType": "ExpressionStatement",
                                    "src": "26340:1113:115"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 15916,
                            "nodeType": "StructuredDocumentation",
                            "src": "21652:708:115",
                            "text": "@dev Calculate the pool reserve and trader deltas that result from\n      closing a long. This calculation includes trading fees.\n @param _bondAmount The amount of bonds being purchased to close the short.\n @param _vaultSharePrice The current vault share price.\n @param _maturityTime The maturity time of the short position.\n @return bondReservesDelta The bonds added to the reserves.\n @return shareProceeds The proceeds in shares of selling the bonds.\n @return shareReservesDelta The shares removed from the reserves.\n @return shareAdjustmentDelta The change in the share adjustment.\n @return totalGovernanceFee The governance fee in shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateCloseLong",
                        "nameLocation": "22374:19:115",
                        "parameters": {
                            "id": 15923,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15918,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "22411:11:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22403:19:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15917,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22403:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15920,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "22440:16:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22432:24:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15919,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22432:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15922,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "22474:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22466:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15921,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22466:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "22393:100:115"
                        },
                        "returnParameters": {
                            "id": 15934,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15925,
                                    "mutability": "mutable",
                                    "name": "bondReservesDelta",
                                    "nameLocation": "22562:17:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22554:25:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15924,
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
                                    "id": 15927,
                                    "mutability": "mutable",
                                    "name": "shareProceeds",
                                    "nameLocation": "22601:13:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22593:21:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15926,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22593:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15929,
                                    "mutability": "mutable",
                                    "name": "shareReservesDelta",
                                    "nameLocation": "22636:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22628:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15928,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22628:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15931,
                                    "mutability": "mutable",
                                    "name": "shareAdjustmentDelta",
                                    "nameLocation": "22675:20:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22668:27:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 15930,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22668:6:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15933,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "22717:18:115",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 16053,
                                    "src": "22709:26:115",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 15932,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22709:7:115",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "22540:205:115"
                        },
                        "scope": 16054,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 15150,
                            "name": "IHyperdriveEvents",
                            "nameLocations": [
                                "955:17:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10887,
                            "src": "955:17:115"
                        },
                        "id": 15151,
                        "nodeType": "InheritanceSpecifier",
                        "src": "955:17:115"
                    },
                    {
                        "baseName": {
                            "id": 15152,
                            "name": "HyperdriveLP",
                            "nameLocations": [
                                "974:12:115"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 15127,
                            "src": "974:12:115"
                        },
                        "id": 15153,
                        "nodeType": "InheritanceSpecifier",
                        "src": "974:12:115"
                    }
                ],
                "canonicalName": "HyperdriveLong",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 15149,
                    "nodeType": "StructuredDocumentation",
                    "src": "593:326:115",
                    "text": "@author DELV\n @title HyperdriveLong\n @notice Implements the long accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    16054,
                    15127,
                    16538,
                    13667,
                    17734,
                    71639,
                    10887,
                    11459
                ],
                "name": "HyperdriveLong",
                "nameLocation": "937:14:115",
                "scope": 16055,
                "usedErrors": [
                    71584
                ],
                "usedEvents": [
                    10705,
                    10720,
                    10739,
                    10754,
                    10771,
                    10790,
                    10809,
                    10830,
                    10845,
                    10852,
                    10857,
                    10862,
                    10867,
                    10874,
                    10879,
                    10886,
                    11440,
                    11449,
                    11458
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 115
};
