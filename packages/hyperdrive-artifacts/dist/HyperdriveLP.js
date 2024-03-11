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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveLP\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"Implements the LP accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveLP.sol\":\"HyperdriveLP\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba\",\"dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "keccak256": "0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317",
                "urls": [
                    "bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213",
                    "dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveCore.sol": {
                "keccak256": "0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76",
                "urls": [
                    "bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb",
                    "dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56",
                "urls": [
                    "bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8",
                    "dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR"
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
                "keccak256": "0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc",
                "urls": [
                    "bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa",
                    "dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/internal/HyperdriveLP.sol": {
                "keccak256": "0x800d540f89ed4f6f40376e0e586246ab48b79a78f1fb4b7ff979b350fafb8a12",
                "urls": [
                    "bzz-raw://4aa17285692fa2872fe544d4f4b8fa2b29d68be5380806c804465788e2bdb1ba",
                    "dweb:/ipfs/Qmag8aW8ADj9grs9vSL33mpM2F3kbFjh6ePKGGv7pXAGdV"
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
                "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
                "urls": [
                    "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
                    "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
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
                "keccak256": "0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e",
                "urls": [
                    "bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534",
                    "dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/libraries/LPMath.sol": {
                "keccak256": "0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785",
                "urls": [
                    "bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263",
                    "dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5"
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
        "id": 11280,
        "exportedSymbols": {
            "AssetId": [
                14117
            ],
            "FixedPointMath": [
                14917
            ],
            "HyperdriveBase": [
                9917
            ],
            "HyperdriveLP": [
                11279
            ],
            "HyperdriveMath": [
                15630
            ],
            "HyperdriveMultiToken": [
                12682
            ],
            "IHyperdrive": [
                7616
            ],
            "IHyperdriveEvents": [
                8062
            ],
            "LPMath": [
                17396
            ],
            "SafeCast": [
                17575
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:24269:66",
        "nodes": [
            {
                "id": 10383,
                "nodeType": "PragmaDirective",
                "src": "39:23:66",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 10385,
                "nodeType": "ImportDirective",
                "src": "64:60:66",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10384,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "73:11:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10387,
                "nodeType": "ImportDirective",
                "src": "125:72:66",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
                "file": "../interfaces/IHyperdriveEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 8063,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10386,
                            "name": "IHyperdriveEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8062,
                            "src": "134:17:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10389,
                "nodeType": "ImportDirective",
                "src": "198:51:66",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 14118,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10388,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14117,
                            "src": "207:7:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10391,
                "nodeType": "ImportDirective",
                "src": "250:65:66",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 14918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10390,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14917,
                            "src": "259:14:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10393,
                "nodeType": "ImportDirective",
                "src": "316:65:66",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 15631,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10392,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15630,
                            "src": "325:14:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10395,
                "nodeType": "ImportDirective",
                "src": "382:49:66",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 17397,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10394,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17396,
                            "src": "391:6:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10397,
                "nodeType": "ImportDirective",
                "src": "432:53:66",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "../libraries/SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 17576,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10396,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17575,
                            "src": "441:8:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10399,
                "nodeType": "ImportDirective",
                "src": "486:54:66",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
                "file": "./HyperdriveBase.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 9918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10398,
                            "name": "HyperdriveBase",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9917,
                            "src": "495:14:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10401,
                "nodeType": "ImportDirective",
                "src": "541:66:66",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
                "file": "./HyperdriveMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11280,
                "sourceUnit": 12683,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10400,
                            "name": "HyperdriveMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12682,
                            "src": "550:20:66",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11279,
                "nodeType": "ContractDefinition",
                "src": "931:23376:66",
                "nodes": [
                    {
                        "id": 10411,
                        "nodeType": "UsingForDirective",
                        "src": "1039:33:66",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 10409,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1045:14:66"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14917,
                            "src": "1045:14:66"
                        },
                        "typeName": {
                            "id": 10410,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1064:7:66",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 10414,
                        "nodeType": "UsingForDirective",
                        "src": "1077:26:66",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 10412,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1083:8:66"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17575,
                            "src": "1083:8:66"
                        },
                        "typeName": {
                            "id": 10413,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1096:6:66",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 10417,
                        "nodeType": "UsingForDirective",
                        "src": "1108:27:66",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 10415,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1114:8:66"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17575,
                            "src": "1114:8:66"
                        },
                        "typeName": {
                            "id": 10416,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1127:7:66",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 10553,
                        "nodeType": "FunctionDefinition",
                        "src": "1598:3704:66",
                        "nodes": [],
                        "body": {
                            "id": 10552,
                            "nodeType": "Block",
                            "src": "1774:3528:66",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 10432,
                                            "name": "_checkMessageValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8978,
                                            "src": "1851:18:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$__$",
                                                "typeString": "function () view"
                                            }
                                        },
                                        "id": 10433,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1851:20:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10434,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1851:20:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 10436,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10425,
                                                "src": "1950:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10435,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9000,
                                            "src": "1936:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$7463_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 10437,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1936:23:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10438,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1936:23:66"
                                },
                                {
                                    "condition": {
                                        "expression": {
                                            "id": 10439,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13691,
                                            "src": "2035:12:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 10440,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "2048:13:66",
                                        "memberName": "isInitialized",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7298,
                                        "src": "2035:26:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 10447,
                                    "nodeType": "IfStatement",
                                    "src": "2031:100:66",
                                    "trueBody": {
                                        "id": 10446,
                                        "nodeType": "Block",
                                        "src": "2063:68:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 10441,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "2084:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 10443,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2096:22:66",
                                                        "memberName": "PoolAlreadyInitialized",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7544,
                                                        "src": "2084:34:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 10444,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2084:36:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 10445,
                                                "nodeType": "RevertStatement",
                                                "src": "2077:43:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        10449,
                                        10451
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10449,
                                            "mutability": "mutable",
                                            "name": "shareContribution",
                                            "nameLocation": "2267:17:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10552,
                                            "src": "2259:25:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10448,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2259:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 10451,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "2294:15:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10552,
                                            "src": "2286:23:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10450,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2286:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10456,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 10453,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10420,
                                                "src": "2335:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10454,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10425,
                                                "src": "2362:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10452,
                                            "name": "_deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9013,
                                            "src": "2313:8:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 10455,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2313:67:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2258:122:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 10461,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 10457,
                                            "name": "shareContribution",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10449,
                                            "src": "3291:17:66",
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
                                            "id": 10460,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "hexValue": "32",
                                                "id": 10458,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3311:1:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_2_by_1",
                                                    "typeString": "int_const 2"
                                                },
                                                "value": "2"
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "*",
                                            "rightExpression": {
                                                "id": 10459,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13684,
                                                "src": "3315:21:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3311:25:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3291:45:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 10468,
                                    "nodeType": "IfStatement",
                                    "src": "3287:121:66",
                                    "trueBody": {
                                        "id": 10467,
                                        "nodeType": "Block",
                                        "src": "3338:70:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 10462,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "3359:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 10464,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3371:24:66",
                                                        "memberName": "BelowMinimumContribution",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7475,
                                                        "src": "3359:36:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 10465,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3359:38:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 10466,
                                                "nodeType": "RevertStatement",
                                                "src": "3352:45:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 10477,
                                    "nodeType": "UncheckedBlock",
                                    "src": "3417:91:66",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 10475,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 10469,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10430,
                                                    "src": "3441:8:66",
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
                                                    "id": 10474,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 10470,
                                                        "name": "shareContribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10449,
                                                        "src": "3452:17:66",
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
                                                        "id": 10473,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "hexValue": "32",
                                                            "id": 10471,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "3472:1:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_2_by_1",
                                                                "typeString": "int_const 2"
                                                            },
                                                            "value": "2"
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "*",
                                                        "rightExpression": {
                                                            "id": 10472,
                                                            "name": "_minimumShareReserves",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13684,
                                                            "src": "3476:21:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "3472:25:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3452:45:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3441:56:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 10476,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3441:56:66"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "id": 10482,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 10478,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13691,
                                                "src": "3564:12:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 10480,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "3577:13:66",
                                            "memberName": "isInitialized",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7298,
                                            "src": "3564:26:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 10481,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3593:4:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "3564:33:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 10483,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3564:33:66"
                                },
                                {
                                    "expression": {
                                        "id": 10490,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 10484,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13691,
                                                "src": "3737:12:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 10486,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "3750:13:66",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7274,
                                            "src": "3737:26:66",
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
                                                    "id": 10487,
                                                    "name": "shareContribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10449,
                                                    "src": "3766:17:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 10488,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3784:9:66",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17461,
                                                "src": "3766:27:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 10489,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3766:29:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "3737:58:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 10491,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3737:58:66"
                                },
                                {
                                    "expression": {
                                        "id": 10505,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 10492,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13691,
                                                "src": "3805:12:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 10494,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "3818:12:66",
                                            "memberName": "bondReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7277,
                                            "src": "3805:25:66",
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
                                                            "id": 10497,
                                                            "name": "shareContribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10449,
                                                            "src": "3907:17:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 10498,
                                                            "name": "_initialVaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13681,
                                                            "src": "3942:23:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 10499,
                                                            "name": "_apr",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10422,
                                                            "src": "3983:4:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 10500,
                                                            "name": "_positionDuration",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13663,
                                                            "src": "4005:17:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 10501,
                                                            "name": "_timeStretch",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13666,
                                                            "src": "4040:12:66",
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
                                                            "id": 10495,
                                                            "name": "HyperdriveMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15630,
                                                            "src": "3833:14:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15630_$",
                                                                "typeString": "type(library HyperdriveMath)"
                                                            }
                                                        },
                                                        "id": 10496,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3861:28:66",
                                                        "memberName": "calculateInitialBondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 15177,
                                                        "src": "3833:56:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 10502,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "3833:233:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 10503,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4080:9:66",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17461,
                                                "src": "3833:256:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 10504,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3833:258:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "3805:286:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 10506,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3805:286:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10508,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "4602:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 10509,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "4610:12:66",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13850,
                                                "src": "4602:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 10512,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4632:1:66",
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
                                                    "id": 10511,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4624:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 10510,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4624:7:66",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 10513,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4624:10:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10514,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13684,
                                                "src": "4636:21:66",
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
                                            "id": 10507,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12472,
                                            "src": "4596:5:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 10515,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4596:62:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10516,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4596:62:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10518,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "4674:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 10519,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "4682:12:66",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13850,
                                                "src": "4674:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10520,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10425,
                                                    "src": "4696:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10521,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4705:11:66",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7456,
                                                "src": "4696:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10522,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10430,
                                                "src": "4718:8:66",
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
                                            "id": 10517,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12472,
                                            "src": "4668:5:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 10523,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4668:59:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10524,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4668:59:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 10526,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9142,
                                                    "src": "4796:17:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 10527,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4796:19:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10528,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10451,
                                                "src": "4817:15:66",
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
                                            "id": 10525,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9056,
                                            "src": "4779:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 10529,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4779:54:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 10530,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4779:54:66"
                                },
                                {
                                    "assignments": [
                                        10532
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10532,
                                            "mutability": "mutable",
                                            "name": "baseContribution",
                                            "nameLocation": "4889:16:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10552,
                                            "src": "4881:24:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10531,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4881:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10538,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 10534,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10420,
                                                "src": "4946:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10535,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10451,
                                                "src": "4973:15:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10536,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10425,
                                                "src": "5002:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10533,
                                            "name": "_convertToBaseFromOption",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9864,
                                            "src": "4908:24:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                            }
                                        },
                                        "id": 10537,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4908:112:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4881:139:66"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10540,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10425,
                                                    "src": "5059:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10541,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5068:11:66",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7456,
                                                "src": "5059:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10542,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10430,
                                                "src": "5093:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10543,
                                                "name": "baseContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10532,
                                                "src": "5115:16:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10544,
                                                "name": "shareContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10449,
                                                "src": "5166:17:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10545,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10425,
                                                    "src": "5226:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10546,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5235:6:66",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7459,
                                                "src": "5226:15:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 10547,
                                                "name": "_apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10422,
                                                "src": "5255:4:66",
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
                                            "id": 10539,
                                            "name": "Initialize",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7909,
                                            "src": "5035:10:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,bool,uint256)"
                                            }
                                        },
                                        "id": 10548,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5035:234:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10549,
                                    "nodeType": "EmitStatement",
                                    "src": "5030:239:66"
                                },
                                {
                                    "expression": {
                                        "id": 10550,
                                        "name": "lpShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10430,
                                        "src": "5287:8:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 10431,
                                    "id": 10551,
                                    "nodeType": "Return",
                                    "src": "5280:15:66"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 10418,
                            "nodeType": "StructuredDocumentation",
                            "src": "1141:452:66",
                            "text": "@dev Allows the first LP to initialize the market with a target APR.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _apr The target APR.\n @param _options The options that configure how the operation is settled.\n @return lpShares The initial number of LP shares created."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 10428,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 10427,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "1734:12:66"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 67022,
                                    "src": "1734:12:66"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1734:12:66"
                            }
                        ],
                        "name": "_initialize",
                        "nameLocation": "1607:11:66",
                        "parameters": {
                            "id": 10426,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10420,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "1636:13:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10553,
                                    "src": "1628:21:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10419,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1628:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10422,
                                    "mutability": "mutable",
                                    "name": "_apr",
                                    "nameLocation": "1667:4:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10553,
                                    "src": "1659:12:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10421,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1659:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10425,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "1710:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10553,
                                    "src": "1681:37:66",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10424,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10423,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "1681:11:66",
                                                "1693:7:66"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "1681:19:66"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "1681:19:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1618:106:66"
                        },
                        "returnParameters": {
                            "id": 10431,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10430,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "1764:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10553,
                                    "src": "1756:16:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10429,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1756:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1755:18:66"
                        },
                        "scope": 11279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 10819,
                        "nodeType": "FunctionDefinition",
                        "src": "6311:5546:66",
                        "nodes": [],
                        "body": {
                            "id": 10818,
                            "nodeType": "Block",
                            "src": "6563:5294:66",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 10574,
                                            "name": "_checkMessageValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 8978,
                                            "src": "6623:18:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$__$",
                                                "typeString": "function () view"
                                            }
                                        },
                                        "id": 10575,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6623:20:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10576,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6623:20:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 10578,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10565,
                                                "src": "6722:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10577,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9000,
                                            "src": "6708:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$7463_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 10579,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6708:23:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10580,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6708:23:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 10583,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 10581,
                                            "name": "_contribution",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10556,
                                            "src": "6857:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 10582,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13687,
                                            "src": "6873:25:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6857:41:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 10590,
                                    "nodeType": "IfStatement",
                                    "src": "6853:117:66",
                                    "trueBody": {
                                        "id": 10589,
                                        "nodeType": "Block",
                                        "src": "6900:70:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 10584,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "6921:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 10586,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6933:24:66",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7532,
                                                        "src": "6921:36:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 10587,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6921:38:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 10588,
                                                "nodeType": "RevertStatement",
                                                "src": "6914:45:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        10592
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10592,
                                            "mutability": "mutable",
                                            "name": "apr",
                                            "nameLocation": "7027:3:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "7019:11:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10591,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7019:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10603,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 10595,
                                                    "name": "_effectiveShareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9157,
                                                    "src": "7078:23:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 10596,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7078:25:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10597,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "7117:12:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 10598,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7130:12:66",
                                                "memberName": "bondReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7277,
                                                "src": "7117:25:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 10599,
                                                "name": "_initialVaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13681,
                                                "src": "7156:23:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10600,
                                                "name": "_positionDuration",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13663,
                                                "src": "7193:17:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10601,
                                                "name": "_timeStretch",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13666,
                                                "src": "7224:12:66",
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
                                                "id": 10593,
                                                "name": "HyperdriveMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15630,
                                                "src": "7033:14:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15630_$",
                                                    "typeString": "type(library HyperdriveMath)"
                                                }
                                            },
                                            "id": 10594,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "7048:16:66",
                                            "memberName": "calculateSpotAPR",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15073,
                                            "src": "7033:31:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 10602,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7033:213:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7019:227:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 10610,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 10606,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 10604,
                                                "name": "apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10592,
                                                "src": "7260:3:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 10605,
                                                "name": "_minApr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10560,
                                                "src": "7266:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "7260:13:66",
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
                                            "id": 10609,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 10607,
                                                "name": "apr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10592,
                                                "src": "7277:3:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 10608,
                                                "name": "_maxApr",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10562,
                                                "src": "7283:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "7277:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "7260:30:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 10617,
                                    "nodeType": "IfStatement",
                                    "src": "7256:92:66",
                                    "trueBody": {
                                        "id": 10616,
                                        "nodeType": "Block",
                                        "src": "7292:56:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 10611,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "7313:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 10613,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7325:10:66",
                                                        "memberName": "InvalidApr",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7493,
                                                        "src": "7313:22:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 10614,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7313:24:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 10615,
                                                "nodeType": "RevertStatement",
                                                "src": "7306:31:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        10619,
                                        10621
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10619,
                                            "mutability": "mutable",
                                            "name": "shareContribution",
                                            "nameLocation": "7435:17:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "7427:25:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10618,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7427:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 10621,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "7462:15:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "7454:23:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10620,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7454:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10626,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 10623,
                                                "name": "_contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10556,
                                                "src": "7503:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10624,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10565,
                                                "src": "7530:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10622,
                                            "name": "_deposit",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9013,
                                            "src": "7481:8:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 10625,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7481:67:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7426:122:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 10628,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9142,
                                                    "src": "7609:17:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 10629,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7609:19:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10630,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10621,
                                                "src": "7630:15:66",
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
                                            "id": 10627,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9056,
                                            "src": "7592:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 10631,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7592:54:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 10632,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7592:54:66"
                                },
                                {
                                    "assignments": [
                                        10634
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10634,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesOutstanding",
                                            "nameLocation": "8072:27:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "8064:35:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10633,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8064:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10642,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 10641,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "baseExpression": {
                                                "id": 10635,
                                                "name": "_totalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13733,
                                                "src": "8102:12:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 10638,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 10636,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "8128:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 10637,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "8136:26:66",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13859,
                                                "src": "8128:34:66",
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
                                            "src": "8102:70:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 10639,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "8175:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 10640,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "8189:15:66",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7315,
                                            "src": "8175:29:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "8102:102:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8064:140:66"
                                },
                                {
                                    "assignments": [
                                        10644
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10644,
                                            "mutability": "mutable",
                                            "name": "lpTotalSupply",
                                            "nameLocation": "8222:13:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "8214:21:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10643,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8214:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10651,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 10650,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "baseExpression": {
                                                "id": 10645,
                                                "name": "_totalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13733,
                                                "src": "8238:12:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 10648,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 10646,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "8251:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 10647,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "8259:12:66",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13850,
                                                "src": "8251:20:66",
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
                                            "src": "8238:34:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "id": 10649,
                                            "name": "withdrawalSharesOutstanding",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10634,
                                            "src": "8287:27:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "8238:76:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8214:100:66"
                                },
                                {
                                    "assignments": [
                                        10653
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10653,
                                            "mutability": "mutable",
                                            "name": "endingPresentValue",
                                            "nameLocation": "8387:18:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "8379:26:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10652,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8379:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10654,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8379:26:66"
                                },
                                {
                                    "assignments": [
                                        10656
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10656,
                                            "mutability": "mutable",
                                            "name": "startingPresentValue",
                                            "nameLocation": "8423:20:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "8415:28:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10655,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8415:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10657,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8415:28:66"
                                },
                                {
                                    "id": 10739,
                                    "nodeType": "Block",
                                    "src": "8453:1798:66",
                                    "statements": [
                                        {
                                            "assignments": [
                                                10662
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 10662,
                                                    "mutability": "mutable",
                                                    "name": "params",
                                                    "nameLocation": "8573:6:66",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 10739,
                                                    "src": "8540:39:66",
                                                    "stateVariable": false,
                                                    "storageLocation": "memory",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                        "typeString": "struct LPMath.PresentValueParams"
                                                    },
                                                    "typeName": {
                                                        "id": 10661,
                                                        "nodeType": "UserDefinedTypeName",
                                                        "pathNode": {
                                                            "id": 10660,
                                                            "name": "LPMath.PresentValueParams",
                                                            "nameLocations": [
                                                                "8540:6:66",
                                                                "8547:18:66"
                                                            ],
                                                            "nodeType": "IdentifierPath",
                                                            "referencedDeclaration": 15790,
                                                            "src": "8540:25:66"
                                                        },
                                                        "referencedDeclaration": 15790,
                                                        "src": "8540:25:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_storage_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 10666,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "id": 10664,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10621,
                                                        "src": "8622:15:66",
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
                                                    "id": 10663,
                                                    "name": "_getPresentValueParams",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9319,
                                                    "src": "8582:22:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15790_memory_ptr_$",
                                                        "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                                    }
                                                },
                                                "id": 10665,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8582:69:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "8540:111:66"
                                        },
                                        {
                                            "expression": {
                                                "id": 10672,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 10667,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10656,
                                                    "src": "8665:20:66",
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
                                                            "id": 10670,
                                                            "name": "params",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10662,
                                                            "src": "8717:6:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 10668,
                                                            "name": "LPMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17396,
                                                            "src": "8688:6:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                                "typeString": "type(library LPMath)"
                                                            }
                                                        },
                                                        "id": 10669,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "8695:21:66",
                                                        "memberName": "calculatePresentValue",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 15819,
                                                        "src": "8688:28:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 10671,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "8688:36:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "8665:59:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 10673,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8665:59:66"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "id": 10675,
                                                                "name": "shareContribution",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 10619,
                                                                "src": "8864:17:66",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 10676,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "8882:8:66",
                                                            "memberName": "toInt256",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17574,
                                                            "src": "8864:26:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (int256)"
                                                            }
                                                        },
                                                        "id": 10677,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "8864:28:66",
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
                                                    "id": 10674,
                                                    "name": "_updateLiquidity",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11278,
                                                    "src": "8847:16:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                                                        "typeString": "function (int256)"
                                                    }
                                                },
                                                "id": 10678,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8847:46:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 10679,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8847:46:66"
                                        },
                                        {
                                            "expression": {
                                                "id": 10685,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "expression": {
                                                        "id": 10680,
                                                        "name": "params",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10662,
                                                        "src": "8907:6:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 10682,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "memberLocation": "8914:13:66",
                                                    "memberName": "shareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 15767,
                                                    "src": "8907:20:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "expression": {
                                                        "id": 10683,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "8930:12:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 10684,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8943:13:66",
                                                    "memberName": "shareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7274,
                                                    "src": "8930:26:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "src": "8907:49:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 10686,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8907:49:66"
                                        },
                                        {
                                            "expression": {
                                                "id": 10692,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "expression": {
                                                        "id": 10687,
                                                        "name": "params",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10662,
                                                        "src": "8970:6:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 10689,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "memberLocation": "8977:15:66",
                                                    "memberName": "shareAdjustment",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 15769,
                                                    "src": "8970:22:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "expression": {
                                                        "id": 10690,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "8995:12:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 10691,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9008:15:66",
                                                    "memberName": "shareAdjustment",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7286,
                                                    "src": "8995:28:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int128",
                                                        "typeString": "int128"
                                                    }
                                                },
                                                "src": "8970:53:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 10693,
                                            "nodeType": "ExpressionStatement",
                                            "src": "8970:53:66"
                                        },
                                        {
                                            "expression": {
                                                "id": 10699,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "expression": {
                                                        "id": 10694,
                                                        "name": "params",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10662,
                                                        "src": "9037:6:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 10696,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "memberLocation": "9044:12:66",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 15771,
                                                    "src": "9037:19:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "expression": {
                                                        "id": 10697,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "9059:12:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 10698,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9072:12:66",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7277,
                                                    "src": "9059:25:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "src": "9037:47:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 10700,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9037:47:66"
                                        },
                                        {
                                            "expression": {
                                                "id": 10706,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 10701,
                                                    "name": "endingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10653,
                                                    "src": "9098:18:66",
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
                                                            "id": 10704,
                                                            "name": "params",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10662,
                                                            "src": "9148:6:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                "typeString": "struct LPMath.PresentValueParams memory"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 10702,
                                                            "name": "LPMath",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 17396,
                                                            "src": "9119:6:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                                "typeString": "type(library LPMath)"
                                                            }
                                                        },
                                                        "id": 10703,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9126:21:66",
                                                        "memberName": "calculatePresentValue",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 15819,
                                                        "src": "9119:28:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$",
                                                            "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 10705,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9119:36:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9098:57:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 10707,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9098:57:66"
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 10710,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 10708,
                                                    "name": "endingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10653,
                                                    "src": "9251:18:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 10709,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10656,
                                                    "src": "9272:20:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9251:41:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 10717,
                                            "nodeType": "IfStatement",
                                            "src": "9247:141:66",
                                            "trueBody": {
                                                "id": 10716,
                                                "nodeType": "Block",
                                                "src": "9294:94:66",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "expression": {
                                                                    "id": 10711,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 7616,
                                                                    "src": "9319:11:66",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 10713,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "9331:40:66",
                                                                "memberName": "DecreasedPresentValueWhenAddingLiquidity",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 7535,
                                                                "src": "9319:52:66",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 10714,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "9319:54:66",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 10715,
                                                        "nodeType": "RevertStatement",
                                                        "src": "9312:61:66"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "expression": {
                                                "id": 10727,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 10718,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10572,
                                                    "src": "9873:8:66",
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
                                                            "id": 10724,
                                                            "name": "lpTotalSupply",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10644,
                                                            "src": "9956:13:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        {
                                                            "id": 10725,
                                                            "name": "startingPresentValue",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 10656,
                                                            "src": "9987:20:66",
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
                                                                    "id": 10721,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "id": 10719,
                                                                        "name": "endingPresentValue",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10653,
                                                                        "src": "9885:18:66",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "-",
                                                                    "rightExpression": {
                                                                        "id": 10720,
                                                                        "name": "startingPresentValue",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 10656,
                                                                        "src": "9906:20:66",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "src": "9885:41:66",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "id": 10722,
                                                            "isConstant": false,
                                                            "isInlineArray": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "TupleExpression",
                                                            "src": "9884:43:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 10723,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9928:10:66",
                                                        "memberName": "mulDivDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14179,
                                                        "src": "9884:54:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 10726,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9884:137:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "9873:148:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 10728,
                                            "nodeType": "ExpressionStatement",
                                            "src": "9873:148:66"
                                        },
                                        {
                                            "condition": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 10731,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 10729,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10572,
                                                    "src": "10125:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 10730,
                                                    "name": "_minimumTransactionAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13687,
                                                    "src": "10136:25:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "10125:36:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "id": 10738,
                                            "nodeType": "IfStatement",
                                            "src": "10121:120:66",
                                            "trueBody": {
                                                "id": 10737,
                                                "nodeType": "Block",
                                                "src": "10163:78:66",
                                                "statements": [
                                                    {
                                                        "errorCall": {
                                                            "arguments": [],
                                                            "expression": {
                                                                "argumentTypes": [],
                                                                "expression": {
                                                                    "id": 10732,
                                                                    "name": "IHyperdrive",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 7616,
                                                                    "src": "10188:11:66",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                        "typeString": "type(contract IHyperdrive)"
                                                                    }
                                                                },
                                                                "id": 10734,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "10200:24:66",
                                                                "memberName": "MinimumTransactionAmount",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 7532,
                                                                "src": "10188:36:66",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                                    "typeString": "function () pure"
                                                                }
                                                            },
                                                            "id": 10735,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "10188:38:66",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_tuple$__$",
                                                                "typeString": "tuple()"
                                                            }
                                                        },
                                                        "id": 10736,
                                                        "nodeType": "RevertStatement",
                                                        "src": "10181:45:66"
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
                                        "id": 10745,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 10742,
                                                    "name": "lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10572,
                                                    "src": "10425:8:66",
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
                                                    "id": 10740,
                                                    "name": "_contribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10556,
                                                    "src": "10403:13:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 10741,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10417:7:66",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14215,
                                                "src": "10403:21:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 10743,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "10403:31:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 10744,
                                            "name": "_minLpSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10558,
                                            "src": "10437:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "10403:50:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 10752,
                                    "nodeType": "IfStatement",
                                    "src": "10399:113:66",
                                    "trueBody": {
                                        "id": 10751,
                                        "nodeType": "Block",
                                        "src": "10455:57:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 10746,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "10476:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 10748,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "10488:11:66",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7541,
                                                        "src": "10476:23:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 10749,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "10476:25:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 10750,
                                                "nodeType": "RevertStatement",
                                                "src": "10469:32:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10754,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "10571:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 10755,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "10579:12:66",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13850,
                                                "src": "10571:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10756,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10565,
                                                    "src": "10593:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10757,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10602:11:66",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7456,
                                                "src": "10593:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10758,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10572,
                                                "src": "10615:8:66",
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
                                            "id": 10753,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12472,
                                            "src": "10565:5:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 10759,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10565:59:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10760,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10565:59:66"
                                },
                                {
                                    "assignments": [
                                        10762
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10762,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "10916:7:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "10911:12:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 10761,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10911:4:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10766,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 10764,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10621,
                                                "src": "10952:15:66",
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
                                            "id": 10763,
                                            "name": "_distributeExcessIdleSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11202,
                                            "src": "10926:25:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256) returns (bool)"
                                            }
                                        },
                                        "id": 10765,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10926:42:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10911:57:66"
                                },
                                {
                                    "condition": {
                                        "id": 10768,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "10982:8:66",
                                        "subExpression": {
                                            "id": 10767,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10762,
                                            "src": "10983:7:66",
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
                                    "id": 10775,
                                    "nodeType": "IfStatement",
                                    "src": "10978:86:66",
                                    "trueBody": {
                                        "id": 10774,
                                        "nodeType": "Block",
                                        "src": "10992:72:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 10769,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "11013:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 10771,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "11025:26:66",
                                                        "memberName": "DistributeExcessIdleFailed",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7561,
                                                        "src": "11013:38:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 10772,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11013:40:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 10773,
                                                "nodeType": "RevertStatement",
                                                "src": "11006:47:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        10777
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10777,
                                            "mutability": "mutable",
                                            "name": "lpSharePrice",
                                            "nameLocation": "11121:12:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "11113:20:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10776,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11113:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10787,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 10780,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 10778,
                                                "name": "lpTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10644,
                                                "src": "11136:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 10779,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "11153:1:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "11136:18:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "arguments": [
                                                {
                                                    "id": 10784,
                                                    "name": "lpTotalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10644,
                                                    "src": "11280:13:66",
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
                                                    "id": 10782,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10656,
                                                    "src": "11251:20:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 10783,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11272:7:66",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14215,
                                                "src": "11251:28:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 10785,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "11251:43:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 10786,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "11136:158:66",
                                        "trueExpression": {
                                            "hexValue": "30",
                                            "id": 10781,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "11169:1:66",
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
                                    "src": "11113:181:66"
                                },
                                {
                                    "assignments": [
                                        10789
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10789,
                                            "mutability": "mutable",
                                            "name": "contribution",
                                            "nameLocation": "11312:12:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "11304:20:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10788,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "11304:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10791,
                                    "initialValue": {
                                        "id": 10790,
                                        "name": "_contribution",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10556,
                                        "src": "11327:13:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11304:36:66"
                                },
                                {
                                    "assignments": [
                                        10793
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10793,
                                            "mutability": "mutable",
                                            "name": "baseContribution",
                                            "nameLocation": "11382:16:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "11374:24:66",
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
                                                "src": "11374:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10799,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 10795,
                                                "name": "contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10789,
                                                "src": "11439:12:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10796,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10621,
                                                "src": "11465:15:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10797,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10565,
                                                "src": "11494:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10794,
                                            "name": "_convertToBaseFromOption",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9864,
                                            "src": "11401:24:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                            }
                                        },
                                        "id": 10798,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11401:111:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11374:138:66"
                                },
                                {
                                    "assignments": [
                                        10804
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10804,
                                            "mutability": "mutable",
                                            "name": "options",
                                            "nameLocation": "11551:7:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10818,
                                            "src": "11522:36:66",
                                            "stateVariable": false,
                                            "storageLocation": "calldata",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options"
                                            },
                                            "typeName": {
                                                "id": 10803,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 10802,
                                                    "name": "IHyperdrive.Options",
                                                    "nameLocations": [
                                                        "11522:11:66",
                                                        "11534:7:66"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 7463,
                                                    "src": "11522:19:66"
                                                },
                                                "referencedDeclaration": 7463,
                                                "src": "11522:19:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                                    "typeString": "struct IHyperdrive.Options"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10806,
                                    "initialValue": {
                                        "id": 10805,
                                        "name": "_options",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10565,
                                        "src": "11561:8:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                            "typeString": "struct IHyperdrive.Options calldata"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "11522:47:66"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10808,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10804,
                                                    "src": "11634:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10809,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11642:11:66",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7456,
                                                "src": "11634:19:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10810,
                                                "name": "lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10572,
                                                "src": "11667:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10811,
                                                "name": "baseContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10793,
                                                "src": "11689:16:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10812,
                                                "name": "shareContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10619,
                                                "src": "11740:17:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10813,
                                                    "name": "options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10804,
                                                    "src": "11800:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10814,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "11808:6:66",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7459,
                                                "src": "11800:14:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "id": 10815,
                                                "name": "lpSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10777,
                                                "src": "11828:12:66",
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
                                            "id": 10807,
                                            "name": "AddLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7924,
                                            "src": "11608:12:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,bool,uint256)"
                                            }
                                        },
                                        "id": 10816,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "11608:242:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10817,
                                    "nodeType": "EmitStatement",
                                    "src": "11603:247:66"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 10554,
                            "nodeType": "StructuredDocumentation",
                            "src": "5308:998:66",
                            "text": "@dev Allows LPs to supply liquidity for LP shares.\n @param _contribution The amount of capital to supply. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _minLpSharePrice The minimum LP share price the LP is willing\n        to accept for their shares. LPs incur negative slippage when\n        adding liquidity if there is a net curve position in the market,\n        so this allows LPs to protect themselves from high levels of\n        slippage. The units of this quantity are either base or vault\n        shares, depending on the value of `_options.asBase`.\n @param _minApr The minimum APR at which the LP is willing to supply.\n @param _maxApr The maximum APR at which the LP is willing to supply.\n @param _options The options that configure how the operation is settled.\n @return lpShares The number of LP tokens created."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 10568,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 10567,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "6511:12:66"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 67022,
                                    "src": "6511:12:66"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6511:12:66"
                            },
                            {
                                "id": 10570,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 10569,
                                    "name": "isNotPaused",
                                    "nameLocations": [
                                        "6524:11:66"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 9046,
                                    "src": "6524:11:66"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6524:11:66"
                            }
                        ],
                        "name": "_addLiquidity",
                        "nameLocation": "6320:13:66",
                        "parameters": {
                            "id": 10566,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10556,
                                    "mutability": "mutable",
                                    "name": "_contribution",
                                    "nameLocation": "6351:13:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10819,
                                    "src": "6343:21:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10555,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6343:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10558,
                                    "mutability": "mutable",
                                    "name": "_minLpSharePrice",
                                    "nameLocation": "6382:16:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10819,
                                    "src": "6374:24:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10557,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6374:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10560,
                                    "mutability": "mutable",
                                    "name": "_minApr",
                                    "nameLocation": "6416:7:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10819,
                                    "src": "6408:15:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10559,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6408:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10562,
                                    "mutability": "mutable",
                                    "name": "_maxApr",
                                    "nameLocation": "6441:7:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10819,
                                    "src": "6433:15:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10561,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6433:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10565,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "6487:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10819,
                                    "src": "6458:37:66",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10564,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10563,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "6458:11:66",
                                                "6470:7:66"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "6458:19:66"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "6458:19:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6333:168:66"
                        },
                        "returnParameters": {
                            "id": 10573,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10572,
                                    "mutability": "mutable",
                                    "name": "lpShares",
                                    "nameLocation": "6553:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10819,
                                    "src": "6545:16:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10571,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6545:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6544:18:66"
                        },
                        "scope": 11279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 10933,
                        "nodeType": "FunctionDefinition",
                        "src": "12925:2315:66",
                        "nodes": [],
                        "body": {
                            "id": 10932,
                            "nodeType": "Block",
                            "src": "13170:2070:66",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 10837,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10827,
                                                "src": "13248:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10836,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9000,
                                            "src": "13234:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$7463_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 10838,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13234:23:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10839,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13234:23:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 10842,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 10840,
                                            "name": "_lpShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10822,
                                            "src": "13400:9:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 10841,
                                            "name": "_minimumTransactionAmount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13687,
                                            "src": "13412:25:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "13400:37:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 10849,
                                    "nodeType": "IfStatement",
                                    "src": "13396:113:66",
                                    "trueBody": {
                                        "id": 10848,
                                        "nodeType": "Block",
                                        "src": "13439:70:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 10843,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "13460:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 10845,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "13472:24:66",
                                                        "memberName": "MinimumTransactionAmount",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7532,
                                                        "src": "13460:36:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 10846,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13460:38:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 10847,
                                                "nodeType": "RevertStatement",
                                                "src": "13453:45:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        10851
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10851,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "13560:15:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10932,
                                            "src": "13552:23:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10850,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "13552:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10854,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 10852,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9032,
                                            "src": "13578:19:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 10853,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13578:21:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13552:47:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 10856,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9142,
                                                    "src": "13626:17:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 10857,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13626:19:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10858,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10851,
                                                "src": "13647:15:66",
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
                                            "id": 10855,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9056,
                                            "src": "13609:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 10859,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13609:54:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 10860,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13609:54:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10862,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "13713:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 10863,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "13721:12:66",
                                                "memberName": "_LP_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13850,
                                                "src": "13713:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10864,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "13735:3:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 10865,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13739:6:66",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "13735:10:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10866,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10822,
                                                "src": "13747:9:66",
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
                                            "id": 10861,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12524,
                                            "src": "13707:5:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 10867,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13707:50:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10868,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13707:50:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10870,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "13846:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 10871,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "13854:26:66",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13859,
                                                "src": "13846:34:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10872,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10827,
                                                    "src": "13894:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10873,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13903:11:66",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7456,
                                                "src": "13894:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10874,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10822,
                                                "src": "13928:9:66",
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
                                            "id": 10869,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12472,
                                            "src": "13827:5:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 10875,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13827:120:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10876,
                                    "nodeType": "ExpressionStatement",
                                    "src": "13827:120:66"
                                },
                                {
                                    "assignments": [
                                        10878
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10878,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesRedeemed",
                                            "nameLocation": "14030:24:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10932,
                                            "src": "14022:32:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10877,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14022:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10879,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14022:32:66"
                                },
                                {
                                    "expression": {
                                        "id": 10891,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 10880,
                                                    "name": "proceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10832,
                                                    "src": "14065:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10881,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10878,
                                                    "src": "14075:24:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 10882,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "14064:36:66",
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
                                                        "id": 10884,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10827,
                                                        "src": "14148:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    },
                                                    "id": 10885,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "14157:11:66",
                                                    "memberName": "destination",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7456,
                                                    "src": "14148:20:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                {
                                                    "id": 10886,
                                                    "name": "_lpShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10822,
                                                    "src": "14182:9:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10887,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10851,
                                                    "src": "14205:15:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10888,
                                                    "name": "_minOutputPerShare",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10824,
                                                    "src": "14234:18:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10889,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10827,
                                                    "src": "14266:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                ],
                                                "id": 10883,
                                                "name": "_redeemWithdrawalSharesInternal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11110,
                                                "src": "14103:31:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (address,uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                                }
                                            },
                                            "id": 10890,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "14103:181:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "src": "14064:220:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10892,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14064:220:66"
                                },
                                {
                                    "expression": {
                                        "id": 10897,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 10893,
                                            "name": "withdrawalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10834,
                                            "src": "14294:16:66",
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
                                            "id": 10896,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 10894,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10822,
                                                "src": "14313:9:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 10895,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10878,
                                                "src": "14325:24:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "14313:36:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "14294:55:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 10898,
                                    "nodeType": "ExpressionStatement",
                                    "src": "14294:55:66"
                                },
                                {
                                    "assignments": [
                                        10900,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10900,
                                            "mutability": "mutable",
                                            "name": "lpSharePrice",
                                            "nameLocation": "14674:12:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 10932,
                                            "src": "14666:20:66",
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
                                                "src": "14666:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 10904,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 10902,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10851,
                                                "src": "14719:15:66",
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
                                            "id": 10901,
                                            "name": "_calculateLPSharePriceSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9727,
                                            "src": "14692:26:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$_t_bool_$",
                                                "typeString": "function (uint256) view returns (uint256,bool)"
                                            }
                                        },
                                        "id": 10903,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14692:43:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14665:70:66"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10906,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10827,
                                                    "src": "14779:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10907,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "14788:11:66",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7456,
                                                "src": "14779:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10908,
                                                "name": "_lpShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10822,
                                                "src": "14813:9:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 10910,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10832,
                                                        "src": "14861:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10911,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10851,
                                                        "src": "14871:15:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10912,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10827,
                                                        "src": "14888:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 10909,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9864,
                                                    "src": "14836:24:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 10913,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14836:61:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 10915,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10832,
                                                        "src": "14977:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10916,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10851,
                                                        "src": "15003:15:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10917,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10827,
                                                        "src": "15036:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 10914,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9890,
                                                    "src": "14928:31:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 10918,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "14928:130:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10919,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10827,
                                                    "src": "15097:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10920,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15106:6:66",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7459,
                                                "src": "15097:15:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 10923,
                                                        "name": "withdrawalShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10834,
                                                        "src": "15134:16:66",
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
                                                    "id": 10922,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "15126:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": {
                                                        "id": 10921,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "15126:7:66",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 10924,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "15126:25:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10925,
                                                "name": "lpSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10900,
                                                "src": "15165:12:66",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 10905,
                                            "name": "RemoveLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7941,
                                            "src": "14750:15:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,bool,uint256,uint256)"
                                            }
                                        },
                                        "id": 10926,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14750:437:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10927,
                                    "nodeType": "EmitStatement",
                                    "src": "14745:442:66"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 10928,
                                                "name": "proceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10832,
                                                "src": "15206:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10929,
                                                "name": "withdrawalShares",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10834,
                                                "src": "15216:16:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 10930,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "15205:28:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 10835,
                                    "id": 10931,
                                    "nodeType": "Return",
                                    "src": "15198:35:66"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 10820,
                            "nodeType": "StructuredDocumentation",
                            "src": "11863:1057:66",
                            "text": "@dev Allows an LP to burn shares and withdraw from the pool.\n @param _lpShares The LP shares to burn.\n @param _minOutputPerShare The minimum amount the LP expects to receive\n        for each withdrawal share that is burned. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP removing liquidity receives. The\n        units of this quantity are either base or vault shares, depending\n        on the value of `_options.asBase`.\n @return withdrawalShares The base that the LP receives buys out some of\n         their LP shares, but it may not be sufficient to fully buy the\n         LP out. In this case, the LP receives withdrawal shares equal\n         in value to the present value they are owed. As idle capital\n         becomes available, the pool will buy back these shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 10830,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 10829,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "13092:12:66"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 67022,
                                    "src": "13092:12:66"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "13092:12:66"
                            }
                        ],
                        "name": "_removeLiquidity",
                        "nameLocation": "12934:16:66",
                        "parameters": {
                            "id": 10828,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10822,
                                    "mutability": "mutable",
                                    "name": "_lpShares",
                                    "nameLocation": "12968:9:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10933,
                                    "src": "12960:17:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10821,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12960:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10824,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "12995:18:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10933,
                                    "src": "12987:26:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10823,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12987:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10827,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "13052:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10933,
                                    "src": "13023:37:66",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10826,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10825,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "13023:11:66",
                                                "13035:7:66"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "13023:19:66"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "13023:19:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12950:116:66"
                        },
                        "returnParameters": {
                            "id": 10835,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10832,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "13130:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10933,
                                    "src": "13122:16:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10831,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13122:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10834,
                                    "mutability": "mutable",
                                    "name": "withdrawalShares",
                                    "nameLocation": "13148:16:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10933,
                                    "src": "13140:24:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10833,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13140:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13121:44:66"
                        },
                        "scope": 11279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 11001,
                        "nodeType": "FunctionDefinition",
                        "src": "16244:1322:66",
                        "nodes": [],
                        "body": {
                            "id": 11000,
                            "nodeType": "Block",
                            "src": "16512:1054:66",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 10951,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10941,
                                                "src": "16590:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            ],
                                            "id": 10950,
                                            "name": "_checkOptions",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9000,
                                            "src": "16576:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Options_$7463_calldata_ptr_$returns$__$",
                                                "typeString": "function (struct IHyperdrive.Options calldata) pure"
                                            }
                                        },
                                        "id": 10952,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16576:23:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10953,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16576:23:66"
                                },
                                {
                                    "assignments": [
                                        10955
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 10955,
                                            "mutability": "mutable",
                                            "name": "vaultSharePrice",
                                            "nameLocation": "16651:15:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11000,
                                            "src": "16643:23:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 10954,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "16643:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 10958,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 10956,
                                            "name": "_pricePerVaultShare",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9032,
                                            "src": "16669:19:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 10957,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16669:21:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "16643:47:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 10960,
                                                    "name": "_latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9142,
                                                    "src": "16717:17:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 10961,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "16717:19:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10962,
                                                "name": "vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10955,
                                                "src": "16738:15:66",
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
                                            "id": 10959,
                                            "name": "_applyCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9056,
                                            "src": "16700:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) returns (uint256)"
                                            }
                                        },
                                        "id": 10963,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "16700:54:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 10964,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16700:54:66"
                                },
                                {
                                    "expression": {
                                        "id": 10976,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 10965,
                                                    "name": "proceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10946,
                                                    "src": "16830:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10966,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10948,
                                                    "src": "16840:24:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 10967,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "16829:36:66",
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
                                                        "id": 10969,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "16913:3:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 10970,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16917:6:66",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "16913:10:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                {
                                                    "id": 10971,
                                                    "name": "_withdrawalShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10936,
                                                    "src": "16937:17:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10972,
                                                    "name": "vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10955,
                                                    "src": "16968:15:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10973,
                                                    "name": "_minOutputPerShare",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10938,
                                                    "src": "16997:18:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 10974,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10941,
                                                    "src": "17029:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                ],
                                                "id": 10968,
                                                "name": "_redeemWithdrawalSharesInternal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11110,
                                                "src": "16868:31:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                    "typeString": "function (address,uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                                                }
                                            },
                                            "id": 10975,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16868:179:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                                "typeString": "tuple(uint256,uint256)"
                                            }
                                        },
                                        "src": "16829:218:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10977,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16829:218:66"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 10979,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10941,
                                                    "src": "17147:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10980,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17156:11:66",
                                                "memberName": "destination",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7456,
                                                "src": "17147:20:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 10981,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10948,
                                                "src": "17181:24:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 10983,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10946,
                                                        "src": "17244:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10984,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10955,
                                                        "src": "17254:15:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10985,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10941,
                                                        "src": "17271:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 10982,
                                                    "name": "_convertToBaseFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9864,
                                                    "src": "17219:24:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 10986,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "17219:61:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 10988,
                                                        "name": "proceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10946,
                                                        "src": "17360:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10989,
                                                        "name": "vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10955,
                                                        "src": "17386:15:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 10990,
                                                        "name": "_options",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 10941,
                                                        "src": "17419:8:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                            "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                            "typeString": "struct IHyperdrive.Options calldata"
                                                        }
                                                    ],
                                                    "id": 10987,
                                                    "name": "_convertToVaultSharesFromOption",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9890,
                                                    "src": "17311:31:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 10991,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "17311:130:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 10992,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 10941,
                                                    "src": "17480:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                },
                                                "id": 10993,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "17489:6:66",
                                                "memberName": "asBase",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7459,
                                                "src": "17480:15:66",
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
                                            "id": 10978,
                                            "name": "RedeemWithdrawalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7954,
                                            "src": "17111:22:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$__$",
                                                "typeString": "function (address,uint256,uint256,uint256,bool)"
                                            }
                                        },
                                        "id": 10994,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "17111:394:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 10995,
                                    "nodeType": "EmitStatement",
                                    "src": "17106:399:66"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 10996,
                                                "name": "proceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10946,
                                                "src": "17524:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 10997,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 10948,
                                                "src": "17534:24:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 10998,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "17523:36:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 10949,
                                    "id": 10999,
                                    "nodeType": "Return",
                                    "src": "17516:43:66"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 10934,
                            "nodeType": "StructuredDocumentation",
                            "src": "15246:993:66",
                            "text": "@dev Redeems withdrawal shares by giving the LP a pro-rata amount of the\n      withdrawal pool's proceeds. This function redeems the maximum\n      amount of the specified withdrawal shares given the amount of\n      withdrawal shares ready to withdraw.\n @param _withdrawalShares The withdrawal shares to redeem.\n @param _minOutputPerShare The minimum amount the LP expects to\n        receive for each withdrawal share that is burned. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP received. The units of this quantity\n         are either base or vault shares, depending on the value of\n         `_options.asBase`.\n @return withdrawalSharesRedeemed The amount of withdrawal shares that\n         were redeemed."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 10944,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 10943,
                                    "name": "nonReentrant",
                                    "nameLocations": [
                                        "16426:12:66"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 67022,
                                    "src": "16426:12:66"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "16426:12:66"
                            }
                        ],
                        "name": "_redeemWithdrawalShares",
                        "nameLocation": "16253:23:66",
                        "parameters": {
                            "id": 10942,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10936,
                                    "mutability": "mutable",
                                    "name": "_withdrawalShares",
                                    "nameLocation": "16294:17:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11001,
                                    "src": "16286:25:66",
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
                                        "src": "16286:7:66",
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
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "16329:18:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11001,
                                    "src": "16321:26:66",
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
                                        "src": "16321:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10941,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "16386:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11001,
                                    "src": "16357:37:66",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 10940,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10939,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "16357:11:66",
                                                "16369:7:66"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "16357:19:66"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "16357:19:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16276:124:66"
                        },
                        "returnParameters": {
                            "id": 10949,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10946,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "16464:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11001,
                                    "src": "16456:16:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10945,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16456:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10948,
                                    "mutability": "mutable",
                                    "name": "withdrawalSharesRedeemed",
                                    "nameLocation": "16482:24:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11001,
                                    "src": "16474:32:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10947,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16474:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16455:52:66"
                        },
                        "scope": 11279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 11110,
                        "nodeType": "FunctionDefinition",
                        "src": "18703:2333:66",
                        "nodes": [],
                        "body": {
                            "id": 11109,
                            "nodeType": "Block",
                            "src": "18997:2039:66",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 11021,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11008,
                                                "src": "19368:16:66",
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
                                            "id": 11020,
                                            "name": "_distributeExcessIdleSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11202,
                                            "src": "19342:25:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (uint256) returns (bool)"
                                            }
                                        },
                                        "id": 11022,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19342:43:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11023,
                                    "nodeType": "ExpressionStatement",
                                    "src": "19342:43:66"
                                },
                                {
                                    "expression": {
                                        "id": 11026,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 11024,
                                            "name": "withdrawalSharesRedeemed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11018,
                                            "src": "19588:24:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 11025,
                                            "name": "_withdrawalShares",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11006,
                                            "src": "19615:17:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "19588:44:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 11027,
                                    "nodeType": "ExpressionStatement",
                                    "src": "19588:44:66"
                                },
                                {
                                    "assignments": [
                                        11029
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11029,
                                            "mutability": "mutable",
                                            "name": "readyToWithdraw_",
                                            "nameLocation": "19650:16:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11109,
                                            "src": "19642:24:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            },
                                            "typeName": {
                                                "id": 11028,
                                                "name": "uint128",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "19642:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11032,
                                    "initialValue": {
                                        "expression": {
                                            "id": 11030,
                                            "name": "_withdrawPool",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13695,
                                            "src": "19669:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                            }
                                        },
                                        "id": 11031,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "19683:15:66",
                                        "memberName": "readyToWithdraw",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7315,
                                        "src": "19669:29:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "19642:56:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 11035,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11033,
                                            "name": "withdrawalSharesRedeemed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11018,
                                            "src": "19712:24:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 11034,
                                            "name": "readyToWithdraw_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11029,
                                            "src": "19739:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "19712:43:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11041,
                                    "nodeType": "IfStatement",
                                    "src": "19708:117:66",
                                    "trueBody": {
                                        "id": 11040,
                                        "nodeType": "Block",
                                        "src": "19757:68:66",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 11038,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 11036,
                                                        "name": "withdrawalSharesRedeemed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 11018,
                                                        "src": "19771:24:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 11037,
                                                        "name": "readyToWithdraw_",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 11029,
                                                        "src": "19798:16:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "19771:43:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 11039,
                                                "nodeType": "ExpressionStatement",
                                                "src": "19771:43:66"
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
                                        "id": 11044,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11042,
                                            "name": "withdrawalSharesRedeemed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11018,
                                            "src": "19838:24:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 11043,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "19866:1:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "19838:29:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11049,
                                    "nodeType": "IfStatement",
                                    "src": "19834:48:66",
                                    "trueBody": {
                                        "expression": {
                                            "components": [
                                                {
                                                    "hexValue": "30",
                                                    "id": 11045,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "19877:1:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                {
                                                    "hexValue": "30",
                                                    "id": 11046,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "19880:1:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                }
                                            ],
                                            "id": 11047,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "19876:6:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_rational_0_by_1_$",
                                                "typeString": "tuple(int_const 0,int_const 0)"
                                            }
                                        },
                                        "functionReturnParameters": 11019,
                                        "id": 11048,
                                        "nodeType": "Return",
                                        "src": "19869:13:66"
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 11051,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "19957:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 11052,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "19965:26:66",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13859,
                                                "src": "19957:34:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 11053,
                                                "name": "_source",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11004,
                                                "src": "20005:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 11054,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11018,
                                                "src": "20026:24:66",
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
                                            "id": 11050,
                                            "name": "_burn",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 12524,
                                            "src": "19938:5:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256,address,uint256)"
                                            }
                                        },
                                        "id": 11055,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19938:122:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 11056,
                                    "nodeType": "ExpressionStatement",
                                    "src": "19938:122:66"
                                },
                                {
                                    "assignments": [
                                        11058
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11058,
                                            "mutability": "mutable",
                                            "name": "shareProceeds",
                                            "nameLocation": "20225:13:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11109,
                                            "src": "20217:21:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 11057,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "20217:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11065,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 11061,
                                                    "name": "_withdrawPool",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13695,
                                                    "src": "20290:13:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                        "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                    }
                                                },
                                                "id": 11062,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20304:8:66",
                                                "memberName": "proceeds",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7318,
                                                "src": "20290:22:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "id": 11063,
                                                "name": "readyToWithdraw_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11029,
                                                "src": "20326:16:66",
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
                                                "id": 11059,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11018,
                                                "src": "20241:24:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 11060,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20266:10:66",
                                            "memberName": "mulDivDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14179,
                                            "src": "20241:35:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 11064,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "20241:111:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "20217:135:66"
                                },
                                {
                                    "expression": {
                                        "id": 11074,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 11066,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "20415:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 11068,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20429:15:66",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7315,
                                            "src": "20415:29:66",
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
                                            "id": 11073,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 11069,
                                                "name": "readyToWithdraw_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11029,
                                                "src": "20459:16:66",
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
                                                        "id": 11070,
                                                        "name": "withdrawalSharesRedeemed",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 11018,
                                                        "src": "20490:24:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 11071,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "20515:9:66",
                                                    "memberName": "toUint128",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 17461,
                                                    "src": "20490:34:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256) pure returns (uint128)"
                                                    }
                                                },
                                                "id": 11072,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "20490:36:66",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "src": "20459:67:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "20415:111:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 11075,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20415:111:66"
                                },
                                {
                                    "expression": {
                                        "id": 11082,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 11076,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "20536:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 11078,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "20550:8:66",
                                            "memberName": "proceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7318,
                                            "src": "20536:22:66",
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
                                                    "id": 11079,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11058,
                                                    "src": "20562:13:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 11080,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20576:9:66",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17461,
                                                "src": "20562:23:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 11081,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20562:25:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "20536:51:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 11083,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20536:51:66"
                                },
                                {
                                    "expression": {
                                        "id": 11090,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 11084,
                                            "name": "proceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11016,
                                            "src": "20650:8:66",
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
                                                    "id": 11086,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11058,
                                                    "src": "20671:13:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 11087,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11008,
                                                    "src": "20686:16:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 11088,
                                                    "name": "_options",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11013,
                                                    "src": "20704:8:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
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
                                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                        "typeString": "struct IHyperdrive.Options calldata"
                                                    }
                                                ],
                                                "id": 11085,
                                                "name": "_withdraw",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9026,
                                                "src": "20661:9:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$7463_calldata_ptr_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                                                }
                                            },
                                            "id": 11089,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20661:52:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20650:63:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 11091,
                                    "nodeType": "ExpressionStatement",
                                    "src": "20650:63:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 11097,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11092,
                                            "name": "proceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11016,
                                            "src": "20856:8:66",
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
                                                    "id": 11095,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11018,
                                                    "src": "20892:24:66",
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
                                                    "id": 11093,
                                                    "name": "_minOutputPerShare",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11010,
                                                    "src": "20867:18:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 11094,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20886:5:66",
                                                "memberName": "mulUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14247,
                                                "src": "20867:24:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 11096,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20867:50:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "20856:61:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11104,
                                    "nodeType": "IfStatement",
                                    "src": "20852:124:66",
                                    "trueBody": {
                                        "id": 11103,
                                        "nodeType": "Block",
                                        "src": "20919:57:66",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 11098,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "20940:11:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 11100,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "20952:11:66",
                                                        "memberName": "OutputLimit",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7541,
                                                        "src": "20940:23:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 11101,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "20940:25:66",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 11102,
                                                "nodeType": "RevertStatement",
                                                "src": "20933:32:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 11105,
                                                "name": "proceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11016,
                                                "src": "20994:8:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 11106,
                                                "name": "withdrawalSharesRedeemed",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11018,
                                                "src": "21004:24:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 11107,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "20993:36:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 11019,
                                    "id": 11108,
                                    "nodeType": "Return",
                                    "src": "20986:43:66"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 11002,
                            "nodeType": "StructuredDocumentation",
                            "src": "17572:1126:66",
                            "text": "@dev Redeems withdrawal shares by giving the LP a pro-rata amount of the\n      withdrawal pool's proceeds. This function redeems the maximum\n      amount of the specified withdrawal shares given the amount of\n      withdrawal shares ready to withdraw.\n @param _source The address that owns the withdrawal shares to redeem.\n @param _withdrawalShares The withdrawal shares to redeem.\n @param _vaultSharePrice The vault share price.\n @param _minOutputPerShare The minimum amount the LP expects to\n        receive for each withdrawal share that is burned. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`.\n @param _options The options that configure how the operation is settled.\n @return proceeds The amount the LP received. The units of this quantity\n         are either base or vault shares, depending on the value of\n         `_options.asBase`.\n @return withdrawalSharesRedeemed The amount of withdrawal shares that\n         were redeemed."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_redeemWithdrawalSharesInternal",
                        "nameLocation": "18712:31:66",
                        "parameters": {
                            "id": 11014,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11004,
                                    "mutability": "mutable",
                                    "name": "_source",
                                    "nameLocation": "18761:7:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "18753:15:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11003,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18753:7:66",
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
                                    "id": 11006,
                                    "mutability": "mutable",
                                    "name": "_withdrawalShares",
                                    "nameLocation": "18786:17:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "18778:25:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11005,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18778:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11008,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "18821:16:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "18813:24:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11007,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18813:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11010,
                                    "mutability": "mutable",
                                    "name": "_minOutputPerShare",
                                    "nameLocation": "18855:18:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "18847:26:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11009,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18847:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11013,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "18912:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "18883:37:66",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 11012,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11011,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "18883:11:66",
                                                "18895:7:66"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "18883:19:66"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "18883:19:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18743:183:66"
                        },
                        "returnParameters": {
                            "id": 11019,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11016,
                                    "mutability": "mutable",
                                    "name": "proceeds",
                                    "nameLocation": "18953:8:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "18945:16:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11015,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18945:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11018,
                                    "mutability": "mutable",
                                    "name": "withdrawalSharesRedeemed",
                                    "nameLocation": "18971:24:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11110,
                                    "src": "18963:32:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11017,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "18963:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "18944:52:66"
                        },
                        "scope": 11279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 11202,
                        "nodeType": "FunctionDefinition",
                        "src": "21319:1688:66",
                        "nodes": [],
                        "body": {
                            "id": 11201,
                            "nodeType": "Block",
                            "src": "21418:1589:66",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        11119
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11119,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesTotalSupply",
                                            "nameLocation": "21530:27:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11201,
                                            "src": "21522:35:66",
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
                                                "src": "21522:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11127,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 11126,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "baseExpression": {
                                                "id": 11120,
                                                "name": "_totalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13733,
                                                "src": "21560:12:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                    "typeString": "mapping(uint256 => uint256)"
                                                }
                                            },
                                            "id": 11123,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 11121,
                                                    "name": "AssetId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14117,
                                                    "src": "21586:7:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                        "typeString": "type(library AssetId)"
                                                    }
                                                },
                                                "id": 11122,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "memberLocation": "21594:26:66",
                                                "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 13859,
                                                "src": "21586:34:66",
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
                                            "src": "21560:70:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 11124,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "21633:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 11125,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "21647:15:66",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7315,
                                            "src": "21633:29:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "21560:102:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "21522:140:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 11130,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11128,
                                            "name": "withdrawalSharesTotalSupply",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11119,
                                            "src": "21676:27:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 11129,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "21707:1:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "21676:32:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11134,
                                    "nodeType": "IfStatement",
                                    "src": "21672:74:66",
                                    "trueBody": {
                                        "id": 11133,
                                        "nodeType": "Block",
                                        "src": "21710:36:66",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "74727565",
                                                    "id": 11131,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "21731:4:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "true"
                                                },
                                                "functionReturnParameters": 11117,
                                                "id": 11132,
                                                "nodeType": "Return",
                                                "src": "21724:11:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        11136
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11136,
                                            "mutability": "mutable",
                                            "name": "idle",
                                            "nameLocation": "21840:4:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11201,
                                            "src": "21832:12:66",
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
                                                "src": "21832:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11140,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 11138,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11113,
                                                "src": "21875:16:66",
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
                                            "id": 11137,
                                            "name": "_calculateIdleShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9650,
                                            "src": "21847:27:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256) view returns (uint256)"
                                            }
                                        },
                                        "id": 11139,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "21847:45:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "21832:60:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 11143,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11141,
                                            "name": "idle",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11136,
                                            "src": "21906:4:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 11142,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "21914:1:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "21906:9:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11147,
                                    "nodeType": "IfStatement",
                                    "src": "21902:51:66",
                                    "trueBody": {
                                        "id": 11146,
                                        "nodeType": "Block",
                                        "src": "21917:36:66",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "74727565",
                                                    "id": 11144,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "21938:4:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "true"
                                                },
                                                "functionReturnParameters": 11117,
                                                "id": 11145,
                                                "nodeType": "Return",
                                                "src": "21931:11:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        11152,
                                        11154
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11152,
                                            "mutability": "mutable",
                                            "name": "params",
                                            "nameLocation": "22174:6:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11201,
                                            "src": "22133:47:66",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                "typeString": "struct LPMath.DistributeExcessIdleParams"
                                            },
                                            "typeName": {
                                                "id": 11151,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 11150,
                                                    "name": "LPMath.DistributeExcessIdleParams",
                                                    "nameLocations": [
                                                        "22133:6:66",
                                                        "22140:26:66"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 16262,
                                                    "src": "22133:33:66"
                                                },
                                                "referencedDeclaration": 16262,
                                                "src": "22133:33:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_storage_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 11154,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "22199:7:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11201,
                                            "src": "22194:12:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 11153,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "22194:4:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11160,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 11156,
                                                "name": "idle",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11136,
                                                "src": "22271:4:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 11157,
                                                "name": "withdrawalSharesTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11119,
                                                "src": "22293:27:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 11158,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11113,
                                                "src": "22338:16:66",
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
                                            "id": 11155,
                                            "name": "_getDistributeExcessIdleParamsSafe",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9280,
                                            "src": "22219:34:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$_t_bool_$",
                                                "typeString": "function (uint256,uint256,uint256) view returns (struct LPMath.DistributeExcessIdleParams memory,bool)"
                                            }
                                        },
                                        "id": 11159,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "22219:149:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$_t_bool_$",
                                            "typeString": "tuple(struct LPMath.DistributeExcessIdleParams memory,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "22119:249:66"
                                },
                                {
                                    "condition": {
                                        "id": 11162,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "22382:8:66",
                                        "subExpression": {
                                            "id": 11161,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11154,
                                            "src": "22383:7:66",
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
                                    "id": 11166,
                                    "nodeType": "IfStatement",
                                    "src": "22378:51:66",
                                    "trueBody": {
                                        "id": 11165,
                                        "nodeType": "Block",
                                        "src": "22392:37:66",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "hexValue": "66616c7365",
                                                    "id": 11163,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "22413:5:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "false"
                                                },
                                                "functionReturnParameters": 11117,
                                                "id": 11164,
                                                "nodeType": "Return",
                                                "src": "22406:12:66"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        11168,
                                        11170
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11168,
                                            "mutability": "mutable",
                                            "name": "withdrawalSharesRedeemed",
                                            "nameLocation": "22562:24:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11201,
                                            "src": "22554:32:66",
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
                                                "src": "22554:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 11170,
                                            "mutability": "mutable",
                                            "name": "shareProceeds",
                                            "nameLocation": "22596:13:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11201,
                                            "src": "22588:21:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 11169,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "22588:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11175,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 11173,
                                                "name": "params",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11152,
                                                "src": "22663:6:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                    "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 11171,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "22613:6:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 11172,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "22633:29:66",
                                            "memberName": "calculateDistributeExcessIdle",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 16363,
                                            "src": "22613:49:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (struct LPMath.DistributeExcessIdleParams memory) pure returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 11174,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "22613:57:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "22553:117:66"
                                },
                                {
                                    "expression": {
                                        "id": 11182,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 11176,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "22728:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 11178,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "22742:15:66",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7315,
                                            "src": "22728:29:66",
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
                                                    "id": 11179,
                                                    "name": "withdrawalSharesRedeemed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11168,
                                                    "src": "22761:24:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 11180,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "22786:9:66",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17461,
                                                "src": "22761:34:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 11181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "22761:36:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "22728:69:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 11183,
                                    "nodeType": "ExpressionStatement",
                                    "src": "22728:69:66"
                                },
                                {
                                    "expression": {
                                        "id": 11190,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 11184,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "22807:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 11186,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "22821:8:66",
                                            "memberName": "proceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7318,
                                            "src": "22807:22:66",
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
                                                    "id": 11187,
                                                    "name": "shareProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 11170,
                                                    "src": "22833:13:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 11188,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "22847:9:66",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17461,
                                                "src": "22833:23:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 11189,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "22833:25:66",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "22807:51:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 11191,
                                    "nodeType": "ExpressionStatement",
                                    "src": "22807:51:66"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 11196,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "-",
                                                "prefix": true,
                                                "src": "22952:25:66",
                                                "subExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 11193,
                                                            "name": "shareProceeds",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11170,
                                                            "src": "22953:13:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 11194,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "22967:8:66",
                                                        "memberName": "toInt256",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 17574,
                                                        "src": "22953:22:66",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256) pure returns (int256)"
                                                        }
                                                    },
                                                    "id": 11195,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "22953:24:66",
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
                                            "id": 11192,
                                            "name": "_updateLiquidity",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11278,
                                            "src": "22935:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$returns$__$",
                                                "typeString": "function (int256)"
                                            }
                                        },
                                        "id": 11197,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "22935:43:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 11198,
                                    "nodeType": "ExpressionStatement",
                                    "src": "22935:43:66"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 11199,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "22996:4:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 11117,
                                    "id": 11200,
                                    "nodeType": "Return",
                                    "src": "22989:11:66"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 11111,
                            "nodeType": "StructuredDocumentation",
                            "src": "21042:272:66",
                            "text": "@dev Distribute as much of the excess idle as possible to the withdrawal\n      pool while holding the LP share price constant.\n @param _vaultSharePrice The current vault share price.\n @return A failure flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_distributeExcessIdleSafe",
                        "nameLocation": "21328:25:66",
                        "parameters": {
                            "id": 11114,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11113,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "21371:16:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11202,
                                    "src": "21363:24:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11112,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "21363:7:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "21353:40:66"
                        },
                        "returnParameters": {
                            "id": 11117,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11116,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11202,
                                    "src": "21412:4:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11115,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "21412:4:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "21411:6:66"
                        },
                        "scope": 11279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 11278,
                        "nodeType": "FunctionDefinition",
                        "src": "23184:1121:66",
                        "nodes": [],
                        "body": {
                            "id": 11277,
                            "nodeType": "Block",
                            "src": "23247:1058:66",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        11209
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11209,
                                            "mutability": "mutable",
                                            "name": "shareReserves_",
                                            "nameLocation": "23308:14:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11277,
                                            "src": "23300:22:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 11208,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23300:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11212,
                                    "initialValue": {
                                        "expression": {
                                            "id": 11210,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13691,
                                            "src": "23325:12:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 11211,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "23338:13:66",
                                        "memberName": "shareReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7274,
                                        "src": "23325:26:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23300:51:66"
                                },
                                {
                                    "assignments": [
                                        11214
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11214,
                                            "mutability": "mutable",
                                            "name": "shareAdjustment_",
                                            "nameLocation": "23368:16:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11277,
                                            "src": "23361:23:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 11213,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23361:6:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11217,
                                    "initialValue": {
                                        "expression": {
                                            "id": 11215,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13691,
                                            "src": "23387:12:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 11216,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "23400:15:66",
                                        "memberName": "shareAdjustment",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7286,
                                        "src": "23387:28:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23361:54:66"
                                },
                                {
                                    "assignments": [
                                        11219
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11219,
                                            "mutability": "mutable",
                                            "name": "bondReserves_",
                                            "nameLocation": "23433:13:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11277,
                                            "src": "23425:21:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 11218,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23425:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11222,
                                    "initialValue": {
                                        "expression": {
                                            "id": 11220,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13691,
                                            "src": "23449:12:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 11221,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "23462:12:66",
                                        "memberName": "bondReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7277,
                                        "src": "23449:25:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23425:49:66"
                                },
                                {
                                    "assignments": [
                                        11224,
                                        11226,
                                        11228
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 11224,
                                            "mutability": "mutable",
                                            "name": "updatedShareReserves",
                                            "nameLocation": "23506:20:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11277,
                                            "src": "23498:28:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 11223,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23498:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 11226,
                                            "mutability": "mutable",
                                            "name": "updatedShareAdjustment",
                                            "nameLocation": "23547:22:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11277,
                                            "src": "23540:29:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 11225,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23540:6:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 11228,
                                            "mutability": "mutable",
                                            "name": "updatedBondReserves",
                                            "nameLocation": "23591:19:66",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 11277,
                                            "src": "23583:27:66",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 11227,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "23583:7:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 11237,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 11231,
                                                "name": "shareReserves_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11209,
                                                "src": "23672:14:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 11232,
                                                "name": "shareAdjustment_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11214,
                                                "src": "23704:16:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            {
                                                "id": 11233,
                                                "name": "bondReserves_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11219,
                                                "src": "23738:13:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 11234,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13684,
                                                "src": "23769:21:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 11235,
                                                "name": "_shareReservesDelta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 11205,
                                                "src": "23808:19:66",
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
                                                "id": 11229,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "23623:6:66",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 11230,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "23630:24:66",
                                            "memberName": "calculateUpdateLiquidity",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15765,
                                            "src": "23623:31:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$_t_uint256_$_t_int256_$returns$_t_uint256_$_t_int256_$_t_uint256_$",
                                                "typeString": "function (uint256,int256,uint256,uint256,int256) pure returns (uint256,int256,uint256)"
                                            }
                                        },
                                        "id": 11236,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "23623:218:66",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_int256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,int256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "23484:357:66"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 11240,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11238,
                                            "name": "updatedShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11224,
                                            "src": "23892:20:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 11239,
                                            "name": "shareReserves_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11209,
                                            "src": "23916:14:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "23892:38:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11250,
                                    "nodeType": "IfStatement",
                                    "src": "23888:130:66",
                                    "trueBody": {
                                        "id": 11249,
                                        "nodeType": "Block",
                                        "src": "23932:86:66",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 11247,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 11241,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "23946:12:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 11243,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "23959:13:66",
                                                        "memberName": "shareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7274,
                                                        "src": "23946:26:66",
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
                                                                "id": 11244,
                                                                "name": "updatedShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 11224,
                                                                "src": "23975:20:66",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 11245,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "23996:9:66",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17461,
                                                            "src": "23975:30:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
                                                            }
                                                        },
                                                        "id": 11246,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "23975:32:66",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "23946:61:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 11248,
                                                "nodeType": "ExpressionStatement",
                                                "src": "23946:61:66"
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
                                        "id": 11253,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11251,
                                            "name": "updatedShareAdjustment",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11226,
                                            "src": "24031:22:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 11252,
                                            "name": "shareAdjustment_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11214,
                                            "src": "24057:16:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "24031:42:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11263,
                                    "nodeType": "IfStatement",
                                    "src": "24027:137:66",
                                    "trueBody": {
                                        "id": 11262,
                                        "nodeType": "Block",
                                        "src": "24075:89:66",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 11260,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 11254,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "24089:12:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 11256,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "24102:15:66",
                                                        "memberName": "shareAdjustment",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7286,
                                                        "src": "24089:28:66",
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
                                                                "id": 11257,
                                                                "name": "updatedShareAdjustment",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 11226,
                                                                "src": "24120:22:66",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int256",
                                                                    "typeString": "int256"
                                                                }
                                                            },
                                                            "id": 11258,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "24143:8:66",
                                                            "memberName": "toInt128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17539,
                                                            "src": "24120:31:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                                                "typeString": "function (int256) pure returns (int128)"
                                                            }
                                                        },
                                                        "id": 11259,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "24120:33:66",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int128",
                                                            "typeString": "int128"
                                                        }
                                                    },
                                                    "src": "24089:64:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int128",
                                                        "typeString": "int128"
                                                    }
                                                },
                                                "id": 11261,
                                                "nodeType": "ExpressionStatement",
                                                "src": "24089:64:66"
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
                                        "id": 11266,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 11264,
                                            "name": "updatedBondReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11228,
                                            "src": "24177:19:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 11265,
                                            "name": "bondReserves_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11219,
                                            "src": "24200:13:66",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "24177:36:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 11276,
                                    "nodeType": "IfStatement",
                                    "src": "24173:126:66",
                                    "trueBody": {
                                        "id": 11275,
                                        "nodeType": "Block",
                                        "src": "24215:84:66",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 11273,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 11267,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "24229:12:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 11269,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "24242:12:66",
                                                        "memberName": "bondReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7277,
                                                        "src": "24229:25:66",
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
                                                                "id": 11270,
                                                                "name": "updatedBondReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 11228,
                                                                "src": "24257:19:66",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 11271,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "24277:9:66",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17461,
                                                            "src": "24257:29:66",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
                                                            }
                                                        },
                                                        "id": 11272,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "24257:31:66",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "24229:59:66",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 11274,
                                                "nodeType": "ExpressionStatement",
                                                "src": "24229:59:66"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 11203,
                            "nodeType": "StructuredDocumentation",
                            "src": "23013:166:66",
                            "text": "@dev Updates the pool's liquidity and holds the pool's spot price constant.\n @param _shareReservesDelta The delta that should be applied to share reserves."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_updateLiquidity",
                        "nameLocation": "23193:16:66",
                        "parameters": {
                            "id": 11206,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11205,
                                    "mutability": "mutable",
                                    "name": "_shareReservesDelta",
                                    "nameLocation": "23217:19:66",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11278,
                                    "src": "23210:26:66",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 11204,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "23210:6:66",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "23209:28:66"
                        },
                        "returnParameters": {
                            "id": 11207,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "23247:0:66"
                        },
                        "scope": 11279,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 10403,
                            "name": "IHyperdriveEvents",
                            "nameLocations": [
                                "969:17:66"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8062,
                            "src": "969:17:66"
                        },
                        "id": 10404,
                        "nodeType": "InheritanceSpecifier",
                        "src": "969:17:66"
                    },
                    {
                        "baseName": {
                            "id": 10405,
                            "name": "HyperdriveBase",
                            "nameLocations": [
                                "992:14:66"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9917,
                            "src": "992:14:66"
                        },
                        "id": 10406,
                        "nodeType": "InheritanceSpecifier",
                        "src": "992:14:66"
                    },
                    {
                        "baseName": {
                            "id": 10407,
                            "name": "HyperdriveMultiToken",
                            "nameLocations": [
                                "1012:20:66"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 12682,
                            "src": "1012:20:66"
                        },
                        "id": 10408,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1012:20:66"
                    }
                ],
                "canonicalName": "HyperdriveLP",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 10402,
                    "nodeType": "StructuredDocumentation",
                    "src": "609:322:66",
                    "text": "@author DELV\n @title HyperdriveLP\n @notice Implements the LP accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11279,
                    12682,
                    9917,
                    13842,
                    67058,
                    8062,
                    8623
                ],
                "name": "HyperdriveLP",
                "nameLocation": "949:12:66",
                "scope": 11280,
                "usedErrors": [
                    67003
                ],
                "usedEvents": [
                    7909,
                    7924,
                    7941,
                    7954,
                    7971,
                    7990,
                    8007,
                    8024,
                    8037,
                    8044,
                    8049,
                    8056,
                    8061,
                    8604,
                    8613,
                    8622
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 66
};
