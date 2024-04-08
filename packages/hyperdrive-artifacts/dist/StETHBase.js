export const StETHBase = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"Lido has it's own notion of shares to account for the accrual of      interest on the ether pooled in the Lido protocol. Instead of      maintaining a balance of shares, this integration can simply use Lido      shares directly.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"StethHyperdrive\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"The base contract for the stETH Hyperdrive implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/steth/StETHBase.sol\":\"StETHBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/instances/steth/StETHBase.sol\":{\"keccak256\":\"0x2fc26304b7a0e02aa3c93a119f48a598ac04417dd5e73321e0f15dd791560212\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://730f17826f29d2aafb5333fa2c38a5bca365b7eee3cecd3a428e8eec797cdc99\",\"dweb:/ipfs/QmSMKy3GzRJqNhTngswFSy48sasUgLCupz2SzxvR7XBpZB\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x8b726cbf87e5dbec80207d47b64bb20e35a9fb42667b9d1612a87ad8b2d361b5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2015112addc7b4ba33c0626a14c963294164906afce52296f3dc209737a7339\",\"dweb:/ipfs/QmZYR6qwGspufCtiofdvYbaHhxSrguNnP52rd3y3zXWiDz\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xa48349cf2fcd27ce3aafcffeba25647d289e17653dc1a4e643c3de0b47e5c75f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4dee6d2061cc68e3bc52acfa0d35c973785e49170f49d2e09efd50ead85e2a19\",\"dweb:/ipfs/QmX6tpGgXTnVGt1CdD796N5kn8YrZWFX1FcRLqtBBhB5qk\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3\",\"dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x6d10a1d7e62a374bd1c6cd1f41e16a8702ef2b25b1dac34479ef8e3b31abd2f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a60f3227d4de9ab8163bc0625e5e66f1ea17b3b2901ae40547289d5ca6b82186\",\"dweb:/ipfs/QmWF4mUXAAYaTko7pWjje2Jc9XumnaAYURUNuvwSRoS28E\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xde163699e55f6d6bd660fa7a1cf25927d2e895e16663a7c47fa45d6bc4878c2e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9908cf875ad59413154825ea59e2635b16f0020a0e3368ec85b6c7379ab3f19\",\"dweb:/ipfs/QmeX22wqHYurD9J6WTxrQjtqUoh21bFmLm7E1SzCkgQV7d\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x015be7b5e24373828e26b4af217ecbf074c7f4dcab839703d97d7bc560aa40eb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3584c205f552b20d01dc902a687f346e10bde5f1a23f887f97e03b2fbff8e75c\",\"dweb:/ipfs/QmaVzjYr18cZueNaboBeyVb6CtgY2qMxtvNcn6nXzCgM2c\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x44e018888d5a9fe0c3e44d9d814879d8f0c3adb78154edc98ba07da86b976f5a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e3990bc86aaa8b4eb4b948ed3a26f0b018f1422c6470a00d146aa69e599a90d\",\"dweb:/ipfs/QmWg9hKoQK1po8ZxRC4xrSWePtoJhgndkHXmwLCpCtwAUu\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x391c141a11e995c912f55247d461c44bcd7d7c70de4c2d98ff9c81e89acd4424\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4d80a70106debf9f2d4980e38572daeea11bfc398a1258e3b5dc344e9ce646a\",\"dweb:/ipfs/QmbdckkGQcuok6NDZPiUVAQhpG9HvigMwozFZRLe9YcL2n\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x78ca3ee7c212a513f45a44ef42d362c4ab3cc59e246191c57011b86232967189\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://610b23be1ed7decae671a7cc8ae76298b5d3b10bbea532d3c10623462f899786\",\"dweb:/ipfs/QmV6i6JaY8EKYHUAq6r5267eMbQtfA43F3YNSvvxktW6hE\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xa15878749f26b198b59e039cf814143b141698064d341cd8b88cb4a04491551c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b3fdd810b779630fce33fa7d2bfc17d6cca1bd3d646e5c702d09fd277167fde4\",\"dweb:/ipfs/QmW8C19uY5WLkVQfqFRsSU5NtuQDgoqt4jBoMhvuJ7kMn2\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x407ff362f1486784581f506ffd22cbcb74f638deed9e5c086d3639ea8e64025e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e0092121a10538a07f814b1fafdb2f8923ee35c4d0f18af595f65ce36849a797\",\"dweb:/ipfs/QmTVKGwXU2FyywANhcBnutWSu38QaaVqgG9eTYatfjGYGL\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "contracts/src/instances/steth/StETHBase.sol": "StETHBase"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/instances/steth/StETHBase.sol": {
                "keccak256": "0x2fc26304b7a0e02aa3c93a119f48a598ac04417dd5e73321e0f15dd791560212",
                "urls": [
                    "bzz-raw://730f17826f29d2aafb5333fa2c38a5bca365b7eee3cecd3a428e8eec797cdc99",
                    "dweb:/ipfs/QmSMKy3GzRJqNhTngswFSy48sasUgLCupz2SzxvR7XBpZB"
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
            "contracts/src/interfaces/ILido.sol": {
                "keccak256": "0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6",
                "urls": [
                    "bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3",
                    "dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE"
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
        "absolutePath": "contracts/src/instances/steth/StETHBase.sol",
        "id": 9389,
        "exportedSymbols": {
            "FixedPointMath": [
                18822
            ],
            "HyperdriveBase": [
                13667
            ],
            "IHyperdrive": [
                10351
            ],
            "ILido": [
                11315
            ],
            "StETHBase": [
                9388
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:4979:72",
        "nodes": [
            {
                "id": 9187,
                "nodeType": "PragmaDirective",
                "src": "39:23:72",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 9189,
                "nodeType": "ImportDirective",
                "src": "64:63:72",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9389,
                "sourceUnit": 10352,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9188,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10351,
                            "src": "73:11:72",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9191,
                "nodeType": "ImportDirective",
                "src": "128:51:72",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/ILido.sol",
                "file": "../../interfaces/ILido.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9389,
                "sourceUnit": 11316,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9190,
                            "name": "ILido",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11315,
                            "src": "137:5:72",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9193,
                "nodeType": "ImportDirective",
                "src": "180:67:72",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
                "file": "../../internal/HyperdriveBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9389,
                "sourceUnit": 13668,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9192,
                            "name": "HyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13667,
                            "src": "189:14:72",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9195,
                "nodeType": "ImportDirective",
                "src": "248:68:72",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9389,
                "sourceUnit": 18823,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9194,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18822,
                            "src": "257:14:72",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9388,
                "nodeType": "ContractDefinition",
                "src": "907:4110:72",
                "nodes": [
                    {
                        "id": 9201,
                        "nodeType": "UsingForDirective",
                        "src": "959:33:72",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 9199,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "965:14:72"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 18822,
                            "src": "965:14:72"
                        },
                        "typeName": {
                            "id": 9200,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "984:7:72",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 9252,
                        "nodeType": "FunctionDefinition",
                        "src": "1335:910:72",
                        "nodes": [],
                        "body": {
                            "id": 9251,
                            "nodeType": "Block",
                            "src": "1495:750:72",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9217,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 9214,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "1563:3:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 9215,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1567:5:72",
                                            "memberName": "value",
                                            "nodeType": "MemberAccess",
                                            "src": "1563:9:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 9216,
                                            "name": "_baseAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9204,
                                            "src": "1575:11:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1563:23:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 9224,
                                    "nodeType": "IfStatement",
                                    "src": "1559:89:72",
                                    "trueBody": {
                                        "id": 9223,
                                        "nodeType": "Block",
                                        "src": "1588:60:72",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 9218,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10351,
                                                            "src": "1609:11:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 9220,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1621:14:72",
                                                        "memberName": "TransferFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 10296,
                                                        "src": "1609:26:72",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 9221,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1609:28:72",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 9222,
                                                "nodeType": "RevertStatement",
                                                "src": "1602:35:72"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 9232,
                                    "nodeType": "UncheckedBlock",
                                    "src": "1760:67:72",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 9230,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 9225,
                                                    "name": "refund",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9212,
                                                    "src": "1784:6:72",
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
                                                    "id": 9229,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 9226,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1793:3:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 9227,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1797:5:72",
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1793:9:72",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 9228,
                                                        "name": "_baseAmount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9204,
                                                        "src": "1805:11:72",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1793:23:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1784:32:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 9231,
                                            "nodeType": "ExpressionStatement",
                                            "src": "1784:32:72"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 9245,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9233,
                                            "name": "sharesMinted",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9210,
                                            "src": "2086:12:72",
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
                                                    "id": 9243,
                                                    "name": "_feeCollector",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17583,
                                                    "src": "2184:13:72",
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
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 9237,
                                                                        "name": "_vaultSharesToken",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 17536,
                                                                        "src": "2115:17:72",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                            "typeString": "contract IERC20"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                            "typeString": "contract IERC20"
                                                                        }
                                                                    ],
                                                                    "id": 9236,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "2107:7:72",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 9235,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "2107:7:72",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 9238,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "2107:26:72",
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
                                                            "id": 9234,
                                                            "name": "ILido",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11315,
                                                            "src": "2101:5:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_ILido_$11315_$",
                                                                "typeString": "type(contract ILido)"
                                                            }
                                                        },
                                                        "id": 9239,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2101:33:72",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_ILido_$11315",
                                                            "typeString": "contract ILido"
                                                        }
                                                    },
                                                    "id": 9240,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2135:6:72",
                                                    "memberName": "submit",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 11250,
                                                    "src": "2101:40:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_payable$_t_address_$returns$_t_uint256_$",
                                                        "typeString": "function (address) payable external returns (uint256)"
                                                    }
                                                },
                                                "id": 9242,
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
                                                        "id": 9241,
                                                        "name": "_baseAmount",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9204,
                                                        "src": "2162:11:72",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "src": "2101:82:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_payable$_t_address_$returns$_t_uint256_$value",
                                                    "typeString": "function (address) payable external returns (uint256)"
                                                }
                                            },
                                            "id": 9244,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2101:97:72",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2086:112:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9246,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2086:112:72"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 9247,
                                                "name": "sharesMinted",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9210,
                                                "src": "2217:12:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 9248,
                                                "name": "refund",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9212,
                                                "src": "2231:6:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 9249,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "2216:22:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 9213,
                                    "id": 9250,
                                    "nodeType": "Return",
                                    "src": "2209:29:72"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12702
                        ],
                        "documentation": {
                            "id": 9202,
                            "nodeType": "StructuredDocumentation",
                            "src": "1024:306:72",
                            "text": "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @return sharesMinted The shares that were minted in the deposit.\n @return refund The amount of ETH to refund. This should be zero for\n         yield sources that don't accept ETH."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_depositWithBase",
                        "nameLocation": "1344:16:72",
                        "overrides": {
                            "id": 9208,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "1439:8:72"
                        },
                        "parameters": {
                            "id": 9207,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9204,
                                    "mutability": "mutable",
                                    "name": "_baseAmount",
                                    "nameLocation": "1378:11:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9252,
                                    "src": "1370:19:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9203,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1370:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9206,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9252,
                                    "src": "1399:14:72",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 9205,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1399:5:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1360:69:72"
                        },
                        "returnParameters": {
                            "id": 9213,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9210,
                                    "mutability": "mutable",
                                    "name": "sharesMinted",
                                    "nameLocation": "1465:12:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9252,
                                    "src": "1457:20:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9209,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1457:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9212,
                                    "mutability": "mutable",
                                    "name": "refund",
                                    "nameLocation": "1487:6:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9252,
                                    "src": "1479:14:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9211,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1479:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1456:38:72"
                        },
                        "scope": 9388,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9278,
                        "nodeType": "FunctionDefinition",
                        "src": "2363:324:72",
                        "nodes": [],
                        "body": {
                            "id": 9277,
                            "nodeType": "Block",
                            "src": "2479:208:72",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 9268,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2607:3:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 9269,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2611:6:72",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2607:10:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 9272,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "2639:4:72",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_StETHBase_$9388",
                                                            "typeString": "contract StETHBase"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_StETHBase_$9388",
                                                            "typeString": "contract StETHBase"
                                                        }
                                                    ],
                                                    "id": 9271,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2631:7:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 9270,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2631:7:72",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 9273,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2631:13:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 9274,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9255,
                                                "src": "2658:12:72",
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
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 9264,
                                                                "name": "_vaultSharesToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17536,
                                                                "src": "2555:17:72",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 9263,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "2547:7:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 9262,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2547:7:72",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 9265,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "2547:26:72",
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
                                                    "id": 9261,
                                                    "name": "ILido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11315,
                                                    "src": "2541:5:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ILido_$11315_$",
                                                        "typeString": "type(contract ILido)"
                                                    }
                                                },
                                                "id": 9266,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2541:33:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ILido_$11315",
                                                    "typeString": "contract ILido"
                                                }
                                            },
                                            "id": 9267,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2575:18:72",
                                            "memberName": "transferSharesFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 11272,
                                            "src": "2541:52:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (address,address,uint256) external returns (uint256)"
                                            }
                                        },
                                        "id": 9275,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2541:139:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9276,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2541:139:72"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12710
                        ],
                        "documentation": {
                            "id": 9253,
                            "nodeType": "StructuredDocumentation",
                            "src": "2251:107:72",
                            "text": "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_depositWithShares",
                        "nameLocation": "2372:18:72",
                        "overrides": {
                            "id": 9259,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "2470:8:72"
                        },
                        "parameters": {
                            "id": 9258,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9255,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "2408:12:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9278,
                                    "src": "2400:20:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9254,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2400:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9257,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9278,
                                    "src": "2430:14:72",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 9256,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2430:5:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2390:70:72"
                        },
                        "returnParameters": {
                            "id": 9260,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2479:0:72"
                        },
                        "scope": 9388,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9297,
                        "nodeType": "FunctionDefinition",
                        "src": "2790:358:72",
                        "nodes": [],
                        "body": {
                            "id": 9296,
                            "nodeType": "Block",
                            "src": "2952:196:72",
                            "nodes": [],
                            "statements": [
                                {
                                    "errorCall": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "id": 9291,
                                                "name": "IHyperdrive",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10351,
                                                "src": "3111:11:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$10351_$",
                                                    "typeString": "type(contract IHyperdrive)"
                                                }
                                            },
                                            "id": 9293,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3123:16:72",
                                            "memberName": "UnsupportedToken",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 10317,
                                            "src": "3111:28:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                "typeString": "function () pure"
                                            }
                                        },
                                        "id": 9294,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3111:30:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 9295,
                                    "nodeType": "RevertStatement",
                                    "src": "3104:37:72"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12722
                        ],
                        "documentation": {
                            "id": 9279,
                            "nodeType": "StructuredDocumentation",
                            "src": "2693:92:72",
                            "text": "@dev Process a withdrawal in base and send the proceeds to the\n      destination."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_withdrawWithBase",
                        "nameLocation": "2799:17:72",
                        "overrides": {
                            "id": 9287,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "2925:8:72"
                        },
                        "parameters": {
                            "id": 9286,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9281,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9297,
                                    "src": "2826:7:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9280,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2826:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9283,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9297,
                                    "src": "2853:7:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9282,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2853:7:72",
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
                                    "id": 9285,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9297,
                                    "src": "2880:14:72",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 9284,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2880:5:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2816:94:72"
                        },
                        "returnParameters": {
                            "id": 9290,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9289,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9297,
                                    "src": "2943:7:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9288,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2943:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2942:9:72"
                        },
                        "scope": 9388,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9320,
                        "nodeType": "FunctionDefinition",
                        "src": "3390:331:72",
                        "nodes": [],
                        "body": {
                            "id": 9319,
                            "nodeType": "Block",
                            "src": "3537:184:72",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 9315,
                                                "name": "_destination",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9302,
                                                "src": "3666:12:72",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 9316,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9300,
                                                "src": "3692:12:72",
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
                                                                "id": 9311,
                                                                "name": "_vaultSharesToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17536,
                                                                "src": "3618:17:72",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 9310,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3610:7:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 9309,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3610:7:72",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 9312,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3610:26:72",
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
                                                    "id": 9308,
                                                    "name": "ILido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11315,
                                                    "src": "3604:5:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ILido_$11315_$",
                                                        "typeString": "type(contract ILido)"
                                                    }
                                                },
                                                "id": 9313,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3604:33:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ILido_$11315",
                                                    "typeString": "contract ILido"
                                                }
                                            },
                                            "id": 9314,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3638:14:72",
                                            "memberName": "transferShares",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 11260,
                                            "src": "3604:48:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (address,uint256) external returns (uint256)"
                                            }
                                        },
                                        "id": 9317,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3604:110:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9318,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3604:110:72"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12732
                        ],
                        "documentation": {
                            "id": 9298,
                            "nodeType": "StructuredDocumentation",
                            "src": "3154:231:72",
                            "text": "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_withdrawWithShares",
                        "nameLocation": "3399:19:72",
                        "overrides": {
                            "id": 9306,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3528:8:72"
                        },
                        "parameters": {
                            "id": 9305,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9300,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "3436:12:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9320,
                                    "src": "3428:20:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9299,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3428:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9302,
                                    "mutability": "mutable",
                                    "name": "_destination",
                                    "nameLocation": "3466:12:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9320,
                                    "src": "3458:20:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9301,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3458:7:72",
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
                                    "id": 9304,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9320,
                                    "src": "3488:14:72",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 9303,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3488:5:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3418:100:72"
                        },
                        "returnParameters": {
                            "id": 9307,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3537:0:72"
                        },
                        "scope": 9388,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9326,
                        "nodeType": "FunctionDefinition",
                        "src": "3824:55:72",
                        "nodes": [],
                        "body": {
                            "id": 9325,
                            "nodeType": "Block",
                            "src": "3877:2:72",
                            "nodes": [],
                            "statements": []
                        },
                        "baseFunctions": [
                            12736
                        ],
                        "documentation": {
                            "id": 9321,
                            "nodeType": "StructuredDocumentation",
                            "src": "3727:92:72",
                            "text": "@dev We override the message value check since this integration is\n      payable."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkMessageValue",
                        "nameLocation": "3833:18:72",
                        "overrides": {
                            "id": 9323,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "3868:8:72"
                        },
                        "parameters": {
                            "id": 9322,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3851:2:72"
                        },
                        "returnParameters": {
                            "id": 9324,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3877:0:72"
                        },
                        "scope": 9388,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9346,
                        "nodeType": "FunctionDefinition",
                        "src": "4051:235:72",
                        "nodes": [],
                        "body": {
                            "id": 9345,
                            "nodeType": "Block",
                            "src": "4152:134:72",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 9342,
                                                "name": "_shareAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9329,
                                                "src": "4253:12:72",
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
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 9338,
                                                                "name": "_vaultSharesToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17536,
                                                                "src": "4195:17:72",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 9337,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "4187:7:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 9336,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4187:7:72",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 9339,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4187:26:72",
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
                                                    "id": 9335,
                                                    "name": "ILido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11315,
                                                    "src": "4181:5:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ILido_$11315_$",
                                                        "typeString": "type(contract ILido)"
                                                    }
                                                },
                                                "id": 9340,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4181:33:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ILido_$11315",
                                                    "typeString": "contract ILido"
                                                }
                                            },
                                            "id": 9341,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4215:20:72",
                                            "memberName": "getPooledEthByShares",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 11288,
                                            "src": "4181:54:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view external returns (uint256)"
                                            }
                                        },
                                        "id": 9343,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4181:98:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 9334,
                                    "id": 9344,
                                    "nodeType": "Return",
                                    "src": "4162:117:72"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12766
                        ],
                        "documentation": {
                            "id": 9327,
                            "nodeType": "StructuredDocumentation",
                            "src": "3885:161:72",
                            "text": "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return baseAmount The base amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToBase",
                        "nameLocation": "4060:14:72",
                        "overrides": {
                            "id": 9331,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "4125:8:72"
                        },
                        "parameters": {
                            "id": 9330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9329,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "4092:12:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9346,
                                    "src": "4084:20:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9328,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4084:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4074:36:72"
                        },
                        "returnParameters": {
                            "id": 9334,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9333,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9346,
                                    "src": "4143:7:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9332,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4143:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4142:9:72"
                        },
                        "scope": 9388,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9366,
                        "nodeType": "FunctionDefinition",
                        "src": "4458:205:72",
                        "nodes": [],
                        "body": {
                            "id": 9365,
                            "nodeType": "Block",
                            "src": "4560:103:72",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 9362,
                                                "name": "_baseAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9349,
                                                "src": "4644:11:72",
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
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 9358,
                                                                "name": "_vaultSharesToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17536,
                                                                "src": "4603:17:72",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 9357,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "4595:7:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 9356,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4595:7:72",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 9359,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4595:26:72",
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
                                                    "id": 9355,
                                                    "name": "ILido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11315,
                                                    "src": "4589:5:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ILido_$11315_$",
                                                        "typeString": "type(contract ILido)"
                                                    }
                                                },
                                                "id": 9360,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4589:33:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ILido_$11315",
                                                    "typeString": "contract ILido"
                                                }
                                            },
                                            "id": 9361,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4623:20:72",
                                            "memberName": "getSharesByPooledEth",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 11280,
                                            "src": "4589:54:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view external returns (uint256)"
                                            }
                                        },
                                        "id": 9363,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4589:67:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 9354,
                                    "id": 9364,
                                    "nodeType": "Return",
                                    "src": "4570:86:72"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12774
                        ],
                        "documentation": {
                            "id": 9347,
                            "nodeType": "StructuredDocumentation",
                            "src": "4292:161:72",
                            "text": "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return shareAmount The vault shares amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToShares",
                        "nameLocation": "4467:16:72",
                        "overrides": {
                            "id": 9351,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "4533:8:72"
                        },
                        "parameters": {
                            "id": 9350,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9349,
                                    "mutability": "mutable",
                                    "name": "_baseAmount",
                                    "nameLocation": "4501:11:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9366,
                                    "src": "4493:19:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9348,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4493:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4483:35:72"
                        },
                        "returnParameters": {
                            "id": 9354,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9353,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9366,
                                    "src": "4551:7:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9352,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4551:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4550:9:72"
                        },
                        "scope": 9388,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9387,
                        "nodeType": "FunctionDefinition",
                        "src": "4821:194:72",
                        "nodes": [],
                        "body": {
                            "id": 9386,
                            "nodeType": "Block",
                            "src": "4934:81:72",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 9382,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -28,
                                                        "src": "5002:4:72",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_StETHBase_$9388",
                                                            "typeString": "contract StETHBase"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_StETHBase_$9388",
                                                            "typeString": "contract StETHBase"
                                                        }
                                                    ],
                                                    "id": 9381,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4994:7:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 9380,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4994:7:72",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 9383,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4994:13:72",
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
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 9376,
                                                                "name": "_vaultSharesToken",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 17536,
                                                                "src": "4965:17:72",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_IERC20_$9666",
                                                                    "typeString": "contract IERC20"
                                                                }
                                                            ],
                                                            "id": 9375,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "4957:7:72",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 9374,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4957:7:72",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 9377,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4957:26:72",
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
                                                    "id": 9373,
                                                    "name": "ILido",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11315,
                                                    "src": "4951:5:72",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_ILido_$11315_$",
                                                        "typeString": "type(contract ILido)"
                                                    }
                                                },
                                                "id": 9378,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4951:33:72",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_ILido_$11315",
                                                    "typeString": "contract ILido"
                                                }
                                            },
                                            "id": 9379,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4985:8:72",
                                            "memberName": "sharesOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 11314,
                                            "src": "4951:42:72",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 9384,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4951:57:72",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 9372,
                                    "id": 9385,
                                    "nodeType": "Return",
                                    "src": "4944:64:72"
                                }
                            ]
                        },
                        "baseFunctions": [
                            12780
                        ],
                        "documentation": {
                            "id": 9367,
                            "nodeType": "StructuredDocumentation",
                            "src": "4669:147:72",
                            "text": "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_totalShares",
                        "nameLocation": "4830:12:72",
                        "overrides": {
                            "id": 9369,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "4883:8:72"
                        },
                        "parameters": {
                            "id": 9368,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4842:2:72"
                        },
                        "returnParameters": {
                            "id": 9372,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9371,
                                    "mutability": "mutable",
                                    "name": "shareAmount",
                                    "nameLocation": "4917:11:72",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9387,
                                    "src": "4909:19:72",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9370,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4909:7:72",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4908:21:72"
                        },
                        "scope": 9388,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 9197,
                            "name": "HyperdriveBase",
                            "nameLocations": [
                                "938:14:72"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13667,
                            "src": "938:14:72"
                        },
                        "id": 9198,
                        "nodeType": "InheritanceSpecifier",
                        "src": "938:14:72"
                    }
                ],
                "canonicalName": "StETHBase",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 9196,
                    "nodeType": "StructuredDocumentation",
                    "src": "318:589:72",
                    "text": "@author DELV\n @title StethHyperdrive\n @notice The base contract for the stETH Hyperdrive implementation.\n @dev Lido has it's own notion of shares to account for the accrual of\n      interest on the ether pooled in the Lido protocol. Instead of\n      maintaining a balance of shares, this integration can simply use Lido\n      shares directly.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    9388,
                    13667,
                    17734,
                    71639,
                    10887,
                    11459
                ],
                "name": "StETHBase",
                "nameLocation": "925:9:72",
                "scope": 9389,
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
    "id": 72
};
