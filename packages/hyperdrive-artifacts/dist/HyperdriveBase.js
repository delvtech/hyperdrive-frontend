export const HyperdriveBase = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveBase\",\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"notice\":\"The Hyperdrive base contract that provides a set of helper methods         and defines the functions that must be overridden by implementations.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveBase.sol\":\"HyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x7cc4f7a8878cf02f9896f930882ccb6839b20f63c85efc4a66e88af46c57c317\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://de756bba0e3622e5ddaff774a989fa20b4be7c49806dd972efc11f2cef523213\",\"dweb:/ipfs/QmPWwZo7TsF8ccFYbGVXhZMo85FYjKmyTnEYGV3V936YG2\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0xd15fb3cb39e359f334b7f836f23026d162de7b5be66d9aab3ac11dede9357a76\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b6fdcb4a2a45a3dbb8a70e9451fdd6aa5e23ee75d8960e42a149e9138a32eb\",\"dweb:/ipfs/QmNQiGzu6qhssorP8UMtaRbxygqzajPg3rB4phnbfQuMzF\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1233242868a6eaeb6e6764df97cd094bfda03978bbedb04592db8ddc3ac6db56\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc50aa0bdaff888c940b004ad3a7a0c2aac4c15104419bd216ca48270c3fcb8\",\"dweb:/ipfs/QmQS6jncTRsBmZxDgR6dAofzXgTt1bXSRb8WdBNqKTCKiR\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xfc6947a6bfff9ca937fc2654ee56203dbc2ffc3c8bffe40c1334ebc9c81804bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b29d5b70c6cb40ede4e496cbeee4937c5318b43536a450d7c246166d326c85fa\",\"dweb:/ipfs/QmcDD9Bs4Gueepjs92CYJC9UFBMFYSN1QfbfqBJMQECkWj\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xe86d38d659ce3191d0423a4ee9b6592218a0e59dd72f3e0ec60cfa83809b266e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://91d15d179f83429f36db12d5eac3f575727e16f1505d4cb1b95a11d0876c7534\",\"dweb:/ipfs/QmQDHYp8pgd9maivqkaH2mZ8qtb5ZEmK34n4oDmvAo8nrh\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8fde664589dfd8a26b6d39aed585388f7c179bf508ffe7688dc6c796a68dc785\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3406b91898282977f3630976461eb344764c0f321d35588b1e31408b64f64263\",\"dweb:/ipfs/QmVGGknjaaG9wnyPHUWAMpDJZ4tANu6hmEQcUU1HnUQ5U5\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x4a9c91313bed7cda6ef503af23c9f777008b5258e9cb2176eab6acc52be79891\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://88da1f5502a12fe1024be90f6a6ea08556cc1f2660ab8cbeb5e07640abb7711c\",\"dweb:/ipfs/QmVQoG9TyrAsVYcgvgZfgA5pQk8V8wvS4BewGNP4B3Txyy\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
                "contracts/src/internal/HyperdriveBase.sol": "HyperdriveBase"
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
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "id": 9918,
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
            "HyperdriveMath": [
                15630
            ],
            "HyperdriveStorage": [
                13842
            ],
            "IERC20": [
                6920
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
            "ONE": [
                14151
            ],
            "SafeCast": [
                17575
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:29287:64",
        "nodes": [
            {
                "id": 8938,
                "nodeType": "PragmaDirective",
                "src": "39:23:64",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 8940,
                "nodeType": "ImportDirective",
                "src": "64:50:64",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../interfaces/IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 6921,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8939,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6920,
                            "src": "73:6:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8942,
                "nodeType": "ImportDirective",
                "src": "115:60:64",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
                "file": "../interfaces/IHyperdrive.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 7617,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8941,
                            "name": "IHyperdrive",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7616,
                            "src": "124:11:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8944,
                "nodeType": "ImportDirective",
                "src": "176:72:64",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
                "file": "../interfaces/IHyperdriveEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 8063,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8943,
                            "name": "IHyperdriveEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8062,
                            "src": "185:17:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8946,
                "nodeType": "ImportDirective",
                "src": "249:51:64",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/AssetId.sol",
                "file": "../libraries/AssetId.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 14118,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8945,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14117,
                            "src": "258:7:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8949,
                "nodeType": "ImportDirective",
                "src": "301:70:64",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
                "file": "../libraries/FixedPointMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 14918,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8947,
                            "name": "FixedPointMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14917,
                            "src": "310:14:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    },
                    {
                        "foreign": {
                            "id": 8948,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14151,
                            "src": "326:3:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8951,
                "nodeType": "ImportDirective",
                "src": "372:65:64",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
                "file": "../libraries/HyperdriveMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 15631,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8950,
                            "name": "HyperdriveMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15630,
                            "src": "381:14:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8953,
                "nodeType": "ImportDirective",
                "src": "438:49:64",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/LPMath.sol",
                "file": "../libraries/LPMath.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 17397,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8952,
                            "name": "LPMath",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17396,
                            "src": "447:6:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8955,
                "nodeType": "ImportDirective",
                "src": "488:53:64",
                "nodes": [],
                "absolutePath": "contracts/src/libraries/SafeCast.sol",
                "file": "../libraries/SafeCast.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 17576,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8954,
                            "name": "SafeCast",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17575,
                            "src": "497:8:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 8957,
                "nodeType": "ImportDirective",
                "src": "542:60:64",
                "nodes": [],
                "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
                "file": "./HyperdriveStorage.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9918,
                "sourceUnit": 13843,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 8956,
                            "name": "HyperdriveStorage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13842,
                            "src": "551:17:64",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9917,
                "nodeType": "ContractDefinition",
                "src": "1032:28293:64",
                "nodes": [
                    {
                        "id": 8965,
                        "nodeType": "UsingForDirective",
                        "src": "1111:33:64",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 8963,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1117:14:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14917,
                            "src": "1117:14:64"
                        },
                        "typeName": {
                            "id": 8964,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1136:7:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 8968,
                        "nodeType": "UsingForDirective",
                        "src": "1149:32:64",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 8966,
                            "name": "FixedPointMath",
                            "nameLocations": [
                                "1155:14:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14917,
                            "src": "1155:14:64"
                        },
                        "typeName": {
                            "id": 8967,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1174:6:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 8971,
                        "nodeType": "UsingForDirective",
                        "src": "1186:27:64",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 8969,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1192:8:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17575,
                            "src": "1192:8:64"
                        },
                        "typeName": {
                            "id": 8970,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1205:7:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 8974,
                        "nodeType": "UsingForDirective",
                        "src": "1218:26:64",
                        "nodes": [],
                        "global": false,
                        "libraryName": {
                            "id": 8972,
                            "name": "SafeCast",
                            "nameLocations": [
                                "1224:8:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 17575,
                            "src": "1224:8:64"
                        },
                        "typeName": {
                            "id": 8973,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1237:6:64",
                            "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                            }
                        }
                    },
                    {
                        "id": 8978,
                        "nodeType": "FunctionDefinition",
                        "src": "1428:52:64",
                        "nodes": [],
                        "documentation": {
                            "id": 8975,
                            "nodeType": "StructuredDocumentation",
                            "src": "1276:147:64",
                            "text": "@dev A yield source dependent check that prevents ether from being\n         transferred to Hyperdrive instances that don't accept ether."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkMessageValue",
                        "nameLocation": "1437:18:64",
                        "parameters": {
                            "id": 8976,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1455:2:64"
                        },
                        "returnParameters": {
                            "id": 8977,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1479:0:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 9000,
                        "nodeType": "FunctionDefinition",
                        "src": "1898:221:64",
                        "nodes": [],
                        "body": {
                            "id": 8999,
                            "nodeType": "Block",
                            "src": "1996:123:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 8991,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 8985,
                                                "name": "_options",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 8982,
                                                "src": "2010:8:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                    "typeString": "struct IHyperdrive.Options calldata"
                                                }
                                            },
                                            "id": 8986,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2019:11:64",
                                            "memberName": "destination",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7456,
                                            "src": "2010:20:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "arguments": [
                                                {
                                                    "hexValue": "30",
                                                    "id": 8989,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2042:1:64",
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
                                                "id": 8988,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "2034:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": {
                                                    "id": 8987,
                                                    "name": "address",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "2034:7:64",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 8990,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2034:10:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2010:34:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 8998,
                                    "nodeType": "IfStatement",
                                    "src": "2006:107:64",
                                    "trueBody": {
                                        "id": 8997,
                                        "nodeType": "Block",
                                        "src": "2046:67:64",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 8992,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "2067:11:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 8994,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "2079:21:64",
                                                        "memberName": "RestrictedZeroAddress",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7550,
                                                        "src": "2067:33:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 8995,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2067:35:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 8996,
                                                "nodeType": "RevertStatement",
                                                "src": "2060:42:64"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 8979,
                            "nodeType": "StructuredDocumentation",
                            "src": "1486:407:64",
                            "text": "@dev A yield source dependent check that verifies that the provided\n      options are valid. The default check is that the destination is\n      non-zero to prevent users from accidentally transferring funds\n      to the zero address. Custom integrations can override this to\n      implement additional checks.\n @param _options The provided options for the transaction."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_checkOptions",
                        "nameLocation": "1907:13:64",
                        "parameters": {
                            "id": 8983,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8982,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "1959:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9000,
                                    "src": "1930:37:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 8981,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 8980,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "1930:11:64",
                                                "1942:7:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "1930:19:64"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "1930:19:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1920:53:64"
                        },
                        "returnParameters": {
                            "id": 8984,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1996:0:64"
                        },
                        "scope": 9917,
                        "stateMutability": "pure",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 9013,
                        "nodeType": "FunctionDefinition",
                        "src": "2793:169:64",
                        "nodes": [],
                        "documentation": {
                            "id": 9001,
                            "nodeType": "StructuredDocumentation",
                            "src": "2125:663:64",
                            "text": "@dev Accepts a deposit from the user and commits it to the yield source.\n @param _amount The amount of capital to deposit. The units of this\n        quantity are either base or vault shares, depending on the value\n        of `_options.asBase`.\n @param _options The options that configure how the deposit is\n        settled. In particular, the currency used in the deposit is\n        specified here. Aside from those options, yield sources can\n        choose to implement additional options.\n @return sharesMinted The shares created by this deposit.\n @return vaultSharePrice The vault share price."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_deposit",
                        "nameLocation": "2802:8:64",
                        "parameters": {
                            "id": 9007,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9003,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "2828:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9013,
                                    "src": "2820:15:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9002,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2820:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9006,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "2874:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9013,
                                    "src": "2845:37:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 9005,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9004,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "2845:11:64",
                                                "2857:7:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "2845:19:64"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "2845:19:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2810:78:64"
                        },
                        "returnParameters": {
                            "id": 9012,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9009,
                                    "mutability": "mutable",
                                    "name": "sharesMinted",
                                    "nameLocation": "2923:12:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9013,
                                    "src": "2915:20:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9008,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2915:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9011,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "2945:15:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9013,
                                    "src": "2937:23:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9010,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2937:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2914:47:64"
                        },
                        "scope": 9917,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 9026,
                        "nodeType": "FunctionDefinition",
                        "src": "3703:182:64",
                        "nodes": [],
                        "documentation": {
                            "id": 9014,
                            "nodeType": "StructuredDocumentation",
                            "src": "2968:730:64",
                            "text": "@dev Withdraws shares from the yield source and sends the proceeds to\n      the destination.\n @param _shares The vault shares to withdraw from the yield source.\n @param _vaultSharePrice The vault share price.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the destination and currency used in the\n        withdrawal are specified here. Aside from those options, yield\n        sources can choose to implement additional options.\n @return amountWithdrawn The proceeds of the withdrawal. The units of\n        this quantity are either base or vault shares, depending on the\n        value of `_options.asBase`."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_withdraw",
                        "nameLocation": "3712:9:64",
                        "parameters": {
                            "id": 9022,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9016,
                                    "mutability": "mutable",
                                    "name": "_shares",
                                    "nameLocation": "3739:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9026,
                                    "src": "3731:15:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9015,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3731:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9018,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "3764:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9026,
                                    "src": "3756:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9017,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3756:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9021,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "3819:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9026,
                                    "src": "3790:37:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 9020,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9019,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "3790:11:64",
                                                "3802:7:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "3790:19:64"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "3790:19:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3721:112:64"
                        },
                        "returnParameters": {
                            "id": 9025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9024,
                                    "mutability": "mutable",
                                    "name": "amountWithdrawn",
                                    "nameLocation": "3868:15:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9026,
                                    "src": "3860:23:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9023,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3860:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3859:25:64"
                        },
                        "scope": 9917,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 9032,
                        "nodeType": "FunctionDefinition",
                        "src": "4012:119:64",
                        "nodes": [],
                        "documentation": {
                            "id": 9027,
                            "nodeType": "StructuredDocumentation",
                            "src": "3891:116:64",
                            "text": "@dev Loads the share price from the yield source.\n @return vaultSharePrice The current vault share price."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_pricePerVaultShare",
                        "nameLocation": "4021:19:64",
                        "parameters": {
                            "id": 9028,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4040:2:64"
                        },
                        "returnParameters": {
                            "id": 9031,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9030,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "4114:15:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9032,
                                    "src": "4106:23:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9029,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4106:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4105:25:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 9046,
                        "nodeType": "ModifierDefinition",
                        "src": "4224:135:64",
                        "nodes": [],
                        "body": {
                            "id": 9045,
                            "nodeType": "Block",
                            "src": "4247:112:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "expression": {
                                            "id": 9035,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13691,
                                            "src": "4261:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 9036,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "4274:8:64",
                                        "memberName": "isPaused",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7301,
                                        "src": "4261:21:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 9043,
                                    "nodeType": "IfStatement",
                                    "src": "4257:85:64",
                                    "trueBody": {
                                        "id": 9042,
                                        "nodeType": "Block",
                                        "src": "4284:58:64",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 9037,
                                                            "name": "IHyperdrive",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 7616,
                                                            "src": "4305:11:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7616_$",
                                                                "typeString": "type(contract IHyperdrive)"
                                                            }
                                                        },
                                                        "id": 9039,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4317:12:64",
                                                        "memberName": "PoolIsPaused",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7547,
                                                        "src": "4305:24:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 9040,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4305:26:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 9041,
                                                "nodeType": "RevertStatement",
                                                "src": "4298:33:64"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 9044,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "4351:1:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9033,
                            "nodeType": "StructuredDocumentation",
                            "src": "4156:63:64",
                            "text": "@dev Blocks a function execution if the contract is paused."
                        },
                        "name": "isNotPaused",
                        "nameLocation": "4233:11:64",
                        "parameters": {
                            "id": 9034,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4244:2:64"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9056,
                        "nodeType": "FunctionDefinition",
                        "src": "4678:154:64",
                        "nodes": [],
                        "documentation": {
                            "id": 9047,
                            "nodeType": "StructuredDocumentation",
                            "src": "4389:284:64",
                            "text": "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _vaultSharePrice The current vault share price.\n @return openVaultSharePrice The open vault share price of the latest\n         checkpoint."
                        },
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyCheckpoint",
                        "nameLocation": "4687:16:64",
                        "parameters": {
                            "id": 9052,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9049,
                                    "mutability": "mutable",
                                    "name": "_checkpointTime",
                                    "nameLocation": "4721:15:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9056,
                                    "src": "4713:23:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9048,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4713:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9051,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "4754:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9056,
                                    "src": "4746:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9050,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4746:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4703:73:64"
                        },
                        "returnParameters": {
                            "id": 9055,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9054,
                                    "mutability": "mutable",
                                    "name": "openVaultSharePrice",
                                    "nameLocation": "4811:19:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9056,
                                    "src": "4803:27:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9053,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4803:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4802:29:64"
                        },
                        "scope": 9917,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 9088,
                        "nodeType": "FunctionDefinition",
                        "src": "5065:432:64",
                        "nodes": [],
                        "body": {
                            "id": 9087,
                            "nodeType": "Block",
                            "src": "5181:316:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9065
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9065,
                                            "mutability": "mutable",
                                            "name": "latestCheckpoint",
                                            "nameLocation": "5199:16:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9087,
                                            "src": "5191:24:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9064,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5191:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9068,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 9066,
                                            "name": "_latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9142,
                                            "src": "5218:17:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                "typeString": "function () view returns (uint256)"
                                            }
                                        },
                                        "id": 9067,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5218:19:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5191:46:64"
                                },
                                {
                                    "expression": {
                                        "id": 9078,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9069,
                                            "name": "timeRemaining",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9062,
                                            "src": "5247:13:64",
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
                                                "id": 9072,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 9070,
                                                    "name": "_maturityTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9059,
                                                    "src": "5263:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 9071,
                                                    "name": "latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9065,
                                                    "src": "5279:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5263:32:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "hexValue": "30",
                                                "id": 9076,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5357:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "id": 9077,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "5263:95:64",
                                            "trueExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 9075,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 9073,
                                                    "name": "_maturityTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9059,
                                                    "src": "5310:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 9074,
                                                    "name": "latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9065,
                                                    "src": "5326:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5310:32:64",
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
                                        "src": "5247:111:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9079,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5247:111:64"
                                },
                                {
                                    "expression": {
                                        "id": 9085,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9080,
                                            "name": "timeRemaining",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9062,
                                            "src": "5434:13:64",
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
                                                    "id": 9083,
                                                    "name": "_positionDuration",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13663,
                                                    "src": "5472:17:64",
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
                                                    "id": 9081,
                                                    "name": "timeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9062,
                                                    "src": "5450:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9082,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5464:7:64",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14215,
                                                "src": "5450:21:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9084,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5450:40:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5434:56:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9086,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5434:56:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9057,
                            "nodeType": "StructuredDocumentation",
                            "src": "4859:201:64",
                            "text": "@dev Calculates the normalized time remaining of a position.\n @param _maturityTime The maturity time of the position.\n @return timeRemaining The normalized time remaining (in [0, 1])."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateTimeRemaining",
                        "nameLocation": "5074:23:64",
                        "parameters": {
                            "id": 9060,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9059,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "5115:13:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9088,
                                    "src": "5107:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9058,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5107:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5097:37:64"
                        },
                        "returnParameters": {
                            "id": 9063,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9062,
                                    "mutability": "mutable",
                                    "name": "timeRemaining",
                                    "nameLocation": "5166:13:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9088,
                                    "src": "5158:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9061,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5158:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5157:23:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9124,
                        "nodeType": "FunctionDefinition",
                        "src": "5697:450:64",
                        "nodes": [],
                        "body": {
                            "id": 9123,
                            "nodeType": "Block",
                            "src": "5819:328:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9097
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9097,
                                            "mutability": "mutable",
                                            "name": "latestCheckpoint",
                                            "nameLocation": "5837:16:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9123,
                                            "src": "5829:24:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9096,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5829:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9102,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9101,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 9098,
                                                "name": "_latestCheckpoint",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9142,
                                                "src": "5856:17:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view returns (uint256)"
                                                }
                                            },
                                            "id": 9099,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5856:19:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                            "id": 9100,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 14151,
                                            "src": "5878:3:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5856:25:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5829:52:64"
                                },
                                {
                                    "expression": {
                                        "id": 9112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9103,
                                            "name": "timeRemaining",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9094,
                                            "src": "5891:13:64",
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
                                                "id": 9106,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 9104,
                                                    "name": "_maturityTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9091,
                                                    "src": "5907:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "id": 9105,
                                                    "name": "latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9097,
                                                    "src": "5923:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5907:32:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "hexValue": "30",
                                                "id": 9110,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6001:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "id": 9111,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "5907:95:64",
                                            "trueExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 9109,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 9107,
                                                    "name": "_maturityTime",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9091,
                                                    "src": "5954:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 9108,
                                                    "name": "latestCheckpoint",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9097,
                                                    "src": "5970:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5954:32:64",
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
                                        "src": "5891:111:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9113,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5891:111:64"
                                },
                                {
                                    "expression": {
                                        "id": 9121,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9114,
                                            "name": "timeRemaining",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9094,
                                            "src": "6078:13:64",
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
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 9119,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 9117,
                                                        "name": "_positionDuration",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13663,
                                                        "src": "6116:17:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "*",
                                                    "rightExpression": {
                                                        "id": 9118,
                                                        "name": "ONE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14151,
                                                        "src": "6136:3:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "6116:23:64",
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
                                                    "id": 9115,
                                                    "name": "timeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9094,
                                                    "src": "6094:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9116,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6108:7:64",
                                                "memberName": "divDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14215,
                                                "src": "6094:21:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9120,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6094:46:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6078:62:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9122,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6078:62:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9089,
                            "nodeType": "StructuredDocumentation",
                            "src": "5503:189:64",
                            "text": "@dev Calculates the normalized time remaining of a position when the\n      maturity time is scaled up 18 decimals.\n @param _maturityTime The maturity time of the position."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateTimeRemainingScaled",
                        "nameLocation": "5706:29:64",
                        "parameters": {
                            "id": 9092,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9091,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "5753:13:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9124,
                                    "src": "5745:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9090,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5745:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5735:37:64"
                        },
                        "returnParameters": {
                            "id": 9095,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9094,
                                    "mutability": "mutable",
                                    "name": "timeRemaining",
                                    "nameLocation": "5804:13:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9124,
                                    "src": "5796:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9093,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5796:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5795:23:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9142,
                        "nodeType": "FunctionDefinition",
                        "src": "6260:223:64",
                        "nodes": [],
                        "body": {
                            "id": 9141,
                            "nodeType": "Block",
                            "src": "6366:117:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 9139,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9130,
                                            "name": "latestCheckpoint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9128,
                                            "src": "6376:16:64",
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
                                            "id": 9138,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 9131,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "6407:5:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 9132,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6413:9:64",
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "src": "6407:15:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 9136,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "expression": {
                                                                "id": 9133,
                                                                "name": "block",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -4,
                                                                "src": "6438:5:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_block",
                                                                    "typeString": "block"
                                                                }
                                                            },
                                                            "id": 9134,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6444:9:64",
                                                            "memberName": "timestamp",
                                                            "nodeType": "MemberAccess",
                                                            "src": "6438:15:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "%",
                                                        "rightExpression": {
                                                            "id": 9135,
                                                            "name": "_checkpointDuration",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13660,
                                                            "src": "6456:19:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "6438:37:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 9137,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "6437:39:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "6407:69:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6376:100:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9140,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6376:100:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9125,
                            "nodeType": "StructuredDocumentation",
                            "src": "6153:102:64",
                            "text": "@dev Gets the most recent checkpoint time.\n @return latestCheckpoint The latest checkpoint."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_latestCheckpoint",
                        "nameLocation": "6269:17:64",
                        "parameters": {
                            "id": 9126,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6286:2:64"
                        },
                        "returnParameters": {
                            "id": 9129,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9128,
                                    "mutability": "mutable",
                                    "name": "latestCheckpoint",
                                    "nameLocation": "6344:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9142,
                                    "src": "6336:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9127,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6336:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6335:26:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9157,
                        "nodeType": "FunctionDefinition",
                        "src": "6664:253:64",
                        "nodes": [],
                        "body": {
                            "id": 9156,
                            "nodeType": "Block",
                            "src": "6731:186:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 9150,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "6824:12:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 9151,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6837:13:64",
                                                "memberName": "shareReserves",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7274,
                                                "src": "6824:26:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 9152,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "6868:12:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 9153,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6881:15:64",
                                                "memberName": "shareAdjustment",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7286,
                                                "src": "6868:28:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
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
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                }
                                            ],
                                            "expression": {
                                                "id": 9148,
                                                "name": "HyperdriveMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15630,
                                                "src": "6760:14:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15630_$",
                                                    "typeString": "type(library HyperdriveMath)"
                                                }
                                            },
                                            "id": 9149,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6775:31:64",
                                            "memberName": "calculateEffectiveShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15110,
                                            "src": "6760:46:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,int256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 9154,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6760:150:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 9147,
                                    "id": 9155,
                                    "nodeType": "Return",
                                    "src": "6741:169:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9143,
                            "nodeType": "StructuredDocumentation",
                            "src": "6489:170:64",
                            "text": "@dev Gets the effective share reserves.\n @return The effective share reserves. This is the share reserves used\n         by the YieldSpace pricing model."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_effectiveShareReserves",
                        "nameLocation": "6673:23:64",
                        "parameters": {
                            "id": 9144,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6696:2:64"
                        },
                        "returnParameters": {
                            "id": 9147,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9146,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9157,
                                    "src": "6722:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9145,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6722:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6721:9:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9190,
                        "nodeType": "FunctionDefinition",
                        "src": "7255:675:64",
                        "nodes": [],
                        "body": {
                            "id": 9189,
                            "nodeType": "Block",
                            "src": "7348:582:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 9187,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "baseExpression": {
                                                        "id": 9165,
                                                        "name": "_totalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13733,
                                                        "src": "7611:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                            "typeString": "mapping(uint256 => uint256)"
                                                        }
                                                    },
                                                    "id": 9173,
                                                    "indexExpression": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "expression": {
                                                                        "id": 9168,
                                                                        "name": "AssetId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14117,
                                                                        "src": "7663:7:64",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                                            "typeString": "type(library AssetId)"
                                                                        }
                                                                    },
                                                                    "id": 9169,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "7671:13:64",
                                                                    "memberName": "AssetIdPrefix",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 13864,
                                                                    "src": "7663:21:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$13864_$",
                                                                        "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                                    }
                                                                },
                                                                "id": 9170,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "7685:4:64",
                                                                "memberName": "Long",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 13861,
                                                                "src": "7663:26:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$13864",
                                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                                }
                                                            },
                                                            {
                                                                "id": 9171,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9160,
                                                                "src": "7691:13:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$13864",
                                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 9166,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14117,
                                                                "src": "7641:7:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 9167,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7649:13:64",
                                                            "memberName": "encodeAssetId",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 13887,
                                                            "src": "7641:21:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$13864_$_t_uint256_$returns$_t_uint256_$",
                                                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 9172,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7641:64:64",
                                                        "tryCall": false,
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
                                                    "src": "7611:108:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9174,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7720:8:64",
                                                "memberName": "toInt256",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17574,
                                                "src": "7611:117:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (int256)"
                                                }
                                            },
                                            "id": 9175,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7611:119:64",
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
                                                    "baseExpression": {
                                                        "id": 9176,
                                                        "name": "_totalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13733,
                                                        "src": "7745:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                            "typeString": "mapping(uint256 => uint256)"
                                                        }
                                                    },
                                                    "id": 9184,
                                                    "indexExpression": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "expression": {
                                                                        "id": 9179,
                                                                        "name": "AssetId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14117,
                                                                        "src": "7818:7:64",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                                            "typeString": "type(library AssetId)"
                                                                        }
                                                                    },
                                                                    "id": 9180,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "7826:13:64",
                                                                    "memberName": "AssetIdPrefix",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 13864,
                                                                    "src": "7818:21:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$13864_$",
                                                                        "typeString": "type(enum AssetId.AssetIdPrefix)"
                                                                    }
                                                                },
                                                                "id": 9181,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "7840:5:64",
                                                                "memberName": "Short",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 13862,
                                                                "src": "7818:27:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$13864",
                                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                                }
                                                            },
                                                            {
                                                                "id": 9182,
                                                                "name": "_maturityTime",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9160,
                                                                "src": "7867:13:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_enum$_AssetIdPrefix_$13864",
                                                                    "typeString": "enum AssetId.AssetIdPrefix"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 9177,
                                                                "name": "AssetId",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 14117,
                                                                "src": "7775:7:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                                    "typeString": "type(library AssetId)"
                                                                }
                                                            },
                                                            "id": 9178,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7783:13:64",
                                                            "memberName": "encodeAssetId",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 13887,
                                                            "src": "7775:21:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$13864_$_t_uint256_$returns$_t_uint256_$",
                                                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 9183,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7775:123:64",
                                                        "tryCall": false,
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
                                                    "src": "7745:167:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9185,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7913:8:64",
                                                "memberName": "toInt256",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17574,
                                                "src": "7745:176:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (int256)"
                                                }
                                            },
                                            "id": 9186,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7745:178:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "7611:312:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "functionReturnParameters": 9164,
                                    "id": 9188,
                                    "nodeType": "Return",
                                    "src": "7592:331:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9158,
                            "nodeType": "StructuredDocumentation",
                            "src": "6923:327:64",
                            "text": "@dev Gets the amount of non-netted longs with a given maturity.\n @param _maturityTime The maturity time of the longs.\n @return The amount of non-netted longs. This is a signed value that\n         can be negative. This is convenient for updating the long\n         exposure when closing positions."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_nonNettedLongs",
                        "nameLocation": "7264:15:64",
                        "parameters": {
                            "id": 9161,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9160,
                                    "mutability": "mutable",
                                    "name": "_maturityTime",
                                    "nameLocation": "7297:13:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9190,
                                    "src": "7289:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9159,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7289:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7279:37:64"
                        },
                        "returnParameters": {
                            "id": 9164,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9163,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9190,
                                    "src": "7340:6:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 9162,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7340:6:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7339:8:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9280,
                        "nodeType": "FunctionDefinition",
                        "src": "8221:1887:64",
                        "nodes": [],
                        "body": {
                            "id": 9279,
                            "nodeType": "Block",
                            "src": "8488:1620:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9209
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9209,
                                            "mutability": "mutable",
                                            "name": "presentValueParams",
                                            "nameLocation": "8698:18:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9279,
                                            "src": "8653:63:64",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                "typeString": "struct LPMath.PresentValueParams"
                                            },
                                            "typeName": {
                                                "id": 9208,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 9207,
                                                    "name": "LPMath.PresentValueParams",
                                                    "nameLocations": [
                                                        "8653:6:64",
                                                        "8660:18:64"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 15790,
                                                    "src": "8653:25:64"
                                                },
                                                "referencedDeclaration": 15790,
                                                "src": "8653:25:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_storage_ptr",
                                                    "typeString": "struct LPMath.PresentValueParams"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9213,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 9211,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9197,
                                                "src": "8759:16:64",
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
                                            "id": 9210,
                                            "name": "_getPresentValueParams",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9319,
                                            "src": "8719:22:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15790_memory_ptr_$",
                                                "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                            }
                                        },
                                        "id": 9212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8719:70:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                            "typeString": "struct LPMath.PresentValueParams memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8653:136:64"
                                },
                                {
                                    "assignments": [
                                        9215
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9215,
                                            "mutability": "mutable",
                                            "name": "startingPresentValue",
                                            "nameLocation": "8807:20:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9279,
                                            "src": "8799:28:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9214,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8799:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9216,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8799:28:64"
                                },
                                {
                                    "expression": {
                                        "id": 9224,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "components": [
                                                {
                                                    "id": 9217,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9215,
                                                    "src": "8838:20:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9218,
                                                    "name": "success",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9203,
                                                    "src": "8860:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 9219,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "TupleExpression",
                                            "src": "8837:31:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,bool)"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 9222,
                                                    "name": "presentValueParams",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9209,
                                                    "src": "8917:18:64",
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
                                                    "id": 9220,
                                                    "name": "LPMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17396,
                                                    "src": "8871:6:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                        "typeString": "type(library LPMath)"
                                                    }
                                                },
                                                "id": 9221,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "8878:25:64",
                                                "memberName": "calculatePresentValueSafe",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 15885,
                                                "src": "8871:32:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$_t_bool_$",
                                                    "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256,bool)"
                                                }
                                            },
                                            "id": 9223,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "8871:74:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                                "typeString": "tuple(uint256,bool)"
                                            }
                                        },
                                        "src": "8837:108:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 9225,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8837:108:64"
                                },
                                {
                                    "condition": {
                                        "id": 9227,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "8959:8:64",
                                        "subExpression": {
                                            "id": 9226,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9203,
                                            "src": "8960:7:64",
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
                                    "id": 9233,
                                    "nodeType": "IfStatement",
                                    "src": "8955:61:64",
                                    "trueBody": {
                                        "id": 9232,
                                        "nodeType": "Block",
                                        "src": "8969:47:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "id": 9228,
                                                            "name": "params",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9201,
                                                            "src": "8991:6:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                                "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                                            }
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 9229,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "8999:5:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 9230,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "8990:15:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_struct$_DistributeExcessIdleParams_$16262_memory_ptr_$_t_bool_$",
                                                        "typeString": "tuple(struct LPMath.DistributeExcessIdleParams memory,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 9204,
                                                "id": 9231,
                                                "nodeType": "Return",
                                                "src": "8983:22:64"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        9235
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9235,
                                            "mutability": "mutable",
                                            "name": "netCurveTrade",
                                            "nameLocation": "9170:13:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9279,
                                            "src": "9163:20:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "typeName": {
                                                "id": 9234,
                                                "name": "int256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9163:6:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9253,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        },
                                        "id": 9252,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 9239,
                                                                "name": "presentValueParams",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9209,
                                                                "src": "9254:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                                }
                                                            },
                                                            "id": 9240,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9273:24:64",
                                                            "memberName": "longAverageTimeRemaining",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 15785,
                                                            "src": "9254:43:64",
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
                                                            "expression": {
                                                                "id": 9236,
                                                                "name": "presentValueParams",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9209,
                                                                "src": "9186:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                                }
                                                            },
                                                            "id": 9237,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9218:16:64",
                                                            "memberName": "longsOutstanding",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 15783,
                                                            "src": "9186:48:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9238,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9248:5:64",
                                                        "memberName": "mulUp",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14247,
                                                        "src": "9186:67:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9241,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9186:112:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9242,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "9312:8:64",
                                                "memberName": "toInt256",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17574,
                                                "src": "9186:134:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (int256)"
                                                }
                                            },
                                            "id": 9243,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "9186:136:64",
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
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 9247,
                                                                "name": "presentValueParams",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9209,
                                                                "src": "9416:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                                }
                                                            },
                                                            "id": 9248,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9435:25:64",
                                                            "memberName": "shortAverageTimeRemaining",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 15789,
                                                            "src": "9416:44:64",
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
                                                            "expression": {
                                                                "id": 9244,
                                                                "name": "presentValueParams",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9209,
                                                                "src": "9337:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                                    "typeString": "struct LPMath.PresentValueParams memory"
                                                                }
                                                            },
                                                            "id": 9245,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9373:17:64",
                                                            "memberName": "shortsOutstanding",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 15787,
                                                            "src": "9337:53:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9246,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9408:7:64",
                                                        "memberName": "mulDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14197,
                                                        "src": "9337:78:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9249,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "9337:124:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9250,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "9479:8:64",
                                                "memberName": "toInt256",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17574,
                                                "src": "9337:150:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (int256)"
                                                }
                                            },
                                            "id": 9251,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "9337:152:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "9186:303:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "9163:326:64"
                                },
                                {
                                    "expression": {
                                        "id": 9273,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9254,
                                            "name": "params",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9201,
                                            "src": "9499:6:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 9257,
                                                    "name": "presentValueParams",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9209,
                                                    "src": "9576:18:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                        "typeString": "struct LPMath.PresentValueParams memory"
                                                    }
                                                },
                                                {
                                                    "id": 9258,
                                                    "name": "startingPresentValue",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9215,
                                                    "src": "9630:20:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "baseExpression": {
                                                        "id": 9259,
                                                        "name": "_totalSupply",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13733,
                                                        "src": "9685:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                            "typeString": "mapping(uint256 => uint256)"
                                                        }
                                                    },
                                                    "id": 9262,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 9260,
                                                            "name": "AssetId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 14117,
                                                            "src": "9698:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                                "typeString": "type(library AssetId)"
                                                            }
                                                        },
                                                        "id": 9261,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "memberLocation": "9706:12:64",
                                                        "memberName": "_LP_ASSET_ID",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 13850,
                                                        "src": "9698:20:64",
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
                                                    "src": "9685:34:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9263,
                                                    "name": "_withdrawalSharesTotalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9195,
                                                    "src": "9762:28:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9264,
                                                    "name": "_idle",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9193,
                                                    "src": "9810:5:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9265,
                                                    "name": "netCurveTrade",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9235,
                                                    "src": "9844:13:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 9266,
                                                        "name": "presentValueParams",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9209,
                                                        "src": "9894:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 9267,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9913:13:64",
                                                    "memberName": "shareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 15767,
                                                    "src": "9894:32:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 9268,
                                                        "name": "presentValueParams",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9209,
                                                        "src": "9965:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 9269,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "9984:15:64",
                                                    "memberName": "shareAdjustment",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 15769,
                                                    "src": "9965:34:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 9270,
                                                        "name": "presentValueParams",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9209,
                                                        "src": "10035:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                            "typeString": "struct LPMath.PresentValueParams memory"
                                                        }
                                                    },
                                                    "id": 9271,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10054:12:64",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 15771,
                                                    "src": "10035:31:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                        "typeString": "struct LPMath.PresentValueParams memory"
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
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
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
                                                "expression": {
                                                    "id": 9255,
                                                    "name": "LPMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17396,
                                                    "src": "9508:6:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                        "typeString": "type(library LPMath)"
                                                    }
                                                },
                                                "id": 9256,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "9515:26:64",
                                                "memberName": "DistributeExcessIdleParams",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 16262,
                                                "src": "9508:33:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_struct$_DistributeExcessIdleParams_$16262_storage_ptr_$",
                                                    "typeString": "type(struct LPMath.DistributeExcessIdleParams storage pointer)"
                                                }
                                            },
                                            "id": 9272,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "structConstructorCall",
                                            "lValueRequested": false,
                                            "nameLocations": [
                                                "9556:18:64",
                                                "9608:20:64",
                                                "9664:19:64",
                                                "9733:27:64",
                                                "9804:4:64",
                                                "9829:13:64",
                                                "9871:21:64",
                                                "9940:23:64",
                                                "10013:20:64"
                                            ],
                                            "names": [
                                                "presentValueParams",
                                                "startingPresentValue",
                                                "activeLpTotalSupply",
                                                "withdrawalSharesTotalSupply",
                                                "idle",
                                                "netCurveTrade",
                                                "originalShareReserves",
                                                "originalShareAdjustment",
                                                "originalBondReserves"
                                            ],
                                            "nodeType": "FunctionCall",
                                            "src": "9508:569:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                                "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                            }
                                        },
                                        "src": "9499:578:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                                        }
                                    },
                                    "id": 9274,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9499:578:64"
                                },
                                {
                                    "expression": {
                                        "id": 9277,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9275,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9203,
                                            "src": "10087:7:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 9276,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "10097:4:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "10087:14:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 9278,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10087:14:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9191,
                            "nodeType": "StructuredDocumentation",
                            "src": "7936:280:64",
                            "text": "@dev Gets the distribute excess idle parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The distribute excess idle parameters.\n @return success A failure flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getDistributeExcessIdleParamsSafe",
                        "nameLocation": "8230:34:64",
                        "parameters": {
                            "id": 9198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9193,
                                    "mutability": "mutable",
                                    "name": "_idle",
                                    "nameLocation": "8282:5:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9280,
                                    "src": "8274:13:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9192,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8274:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9195,
                                    "mutability": "mutable",
                                    "name": "_withdrawalSharesTotalSupply",
                                    "nameLocation": "8305:28:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9280,
                                    "src": "8297:36:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9194,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8297:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9197,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "8351:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9280,
                                    "src": "8343:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9196,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8343:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8264:109:64"
                        },
                        "returnParameters": {
                            "id": 9204,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9201,
                                    "mutability": "mutable",
                                    "name": "params",
                                    "nameLocation": "8462:6:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9280,
                                    "src": "8421:47:64",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_memory_ptr",
                                        "typeString": "struct LPMath.DistributeExcessIdleParams"
                                    },
                                    "typeName": {
                                        "id": 9200,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9199,
                                            "name": "LPMath.DistributeExcessIdleParams",
                                            "nameLocations": [
                                                "8421:6:64",
                                                "8428:26:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 16262,
                                            "src": "8421:33:64"
                                        },
                                        "referencedDeclaration": 16262,
                                        "src": "8421:33:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$16262_storage_ptr",
                                            "typeString": "struct LPMath.DistributeExcessIdleParams"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9203,
                                    "mutability": "mutable",
                                    "name": "success",
                                    "nameLocation": "8475:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9280,
                                    "src": "8470:12:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9202,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8470:4:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8420:63:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9319,
                        "nodeType": "FunctionDefinition",
                        "src": "10301:1035:64",
                        "nodes": [],
                        "body": {
                            "id": 9318,
                            "nodeType": "Block",
                            "src": "10437:899:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 9316,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9289,
                                            "name": "params",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9287,
                                            "src": "10447:6:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                "typeString": "struct LPMath.PresentValueParams memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 9292,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "10511:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 9293,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10524:13:64",
                                                    "memberName": "shareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7274,
                                                    "src": "10511:26:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 9294,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "10568:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 9295,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10581:15:64",
                                                    "memberName": "shareAdjustment",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7286,
                                                    "src": "10568:28:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int128",
                                                        "typeString": "int128"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 9296,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "10624:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 9297,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10637:12:64",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7277,
                                                    "src": "10624:25:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                {
                                                    "id": 9298,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9283,
                                                    "src": "10680:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9299,
                                                    "name": "_initialVaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13681,
                                                    "src": "10734:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9300,
                                                    "name": "_minimumShareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13684,
                                                    "src": "10793:21:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9301,
                                                    "name": "_minimumTransactionAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13687,
                                                    "src": "10854:25:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9302,
                                                    "name": "_timeStretch",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13666,
                                                    "src": "10906:12:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 9303,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "10950:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 9304,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10963:16:64",
                                                    "memberName": "longsOutstanding",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7283,
                                                    "src": "10950:29:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 9306,
                                                                "name": "_marketState",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13691,
                                                                "src": "11066:12:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                }
                                                            },
                                                            "id": 9307,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "11079:23:64",
                                                            "memberName": "longAverageMaturityTime",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7292,
                                                            "src": "11066:36:64",
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
                                                        "id": 9305,
                                                        "name": "_calculateTimeRemainingScaled",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9124,
                                                        "src": "11019:29:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256) view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9308,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11019:97:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 9309,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "11149:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 9310,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "11162:17:64",
                                                    "memberName": "shortsOutstanding",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7289,
                                                    "src": "11149:30:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 9312,
                                                                "name": "_marketState",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13691,
                                                                "src": "11267:12:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                }
                                                            },
                                                            "id": 9313,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "11280:24:64",
                                                            "memberName": "shortAverageMaturityTime",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7295,
                                                            "src": "11267:37:64",
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
                                                        "id": 9311,
                                                        "name": "_calculateTimeRemainingScaled",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9124,
                                                        "src": "11220:29:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                                                            "typeString": "function (uint256) view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9314,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "11220:98:64",
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
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_int128",
                                                        "typeString": "int128"
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
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 9290,
                                                    "name": "LPMath",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 17396,
                                                    "src": "10456:6:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                        "typeString": "type(library LPMath)"
                                                    }
                                                },
                                                "id": 9291,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "10463:18:64",
                                                "memberName": "PresentValueParams",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 15790,
                                                "src": "10456:25:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_struct$_PresentValueParams_$15790_storage_ptr_$",
                                                    "typeString": "type(struct LPMath.PresentValueParams storage pointer)"
                                                }
                                            },
                                            "id": 9315,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "structConstructorCall",
                                            "lValueRequested": false,
                                            "nameLocations": [
                                                "10496:13:64",
                                                "10551:15:64",
                                                "10610:12:64",
                                                "10663:15:64",
                                                "10710:22:64",
                                                "10771:20:64",
                                                "10828:24:64",
                                                "10893:11:64",
                                                "10932:16:64",
                                                "10993:24:64",
                                                "11130:17:64",
                                                "11193:25:64"
                                            ],
                                            "names": [
                                                "shareReserves",
                                                "shareAdjustment",
                                                "bondReserves",
                                                "vaultSharePrice",
                                                "initialVaultSharePrice",
                                                "minimumShareReserves",
                                                "minimumTransactionAmount",
                                                "timeStretch",
                                                "longsOutstanding",
                                                "longAverageTimeRemaining",
                                                "shortsOutstanding",
                                                "shortAverageTimeRemaining"
                                            ],
                                            "nodeType": "FunctionCall",
                                            "src": "10456:873:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                                "typeString": "struct LPMath.PresentValueParams memory"
                                            }
                                        },
                                        "src": "10447:882:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                            "typeString": "struct LPMath.PresentValueParams memory"
                                        }
                                    },
                                    "id": 9317,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10447:882:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9281,
                            "nodeType": "StructuredDocumentation",
                            "src": "10114:182:64",
                            "text": "@dev Gets the present value parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The present value parameters."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_getPresentValueParams",
                        "nameLocation": "10310:22:64",
                        "parameters": {
                            "id": 9284,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9283,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "10350:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9319,
                                    "src": "10342:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9282,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10342:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10332:40:64"
                        },
                        "returnParameters": {
                            "id": 9288,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9287,
                                    "mutability": "mutable",
                                    "name": "params",
                                    "nameLocation": "10429:6:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9319,
                                    "src": "10396:39:64",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$15790_memory_ptr",
                                        "typeString": "struct LPMath.PresentValueParams"
                                    },
                                    "typeName": {
                                        "id": 9286,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9285,
                                            "name": "LPMath.PresentValueParams",
                                            "nameLocations": [
                                                "10396:6:64",
                                                "10403:18:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 15790,
                                            "src": "10396:25:64"
                                        },
                                        "referencedDeclaration": 15790,
                                        "src": "10396:25:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$15790_storage_ptr",
                                            "typeString": "struct LPMath.PresentValueParams"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10395:41:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9352,
                        "nodeType": "FunctionDefinition",
                        "src": "11815:683:64",
                        "nodes": [],
                        "body": {
                            "id": 9351,
                            "nodeType": "Block",
                            "src": "11977:521:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9332
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9332,
                                            "mutability": "mutable",
                                            "name": "endingSpotPrice",
                                            "nameLocation": "12204:15:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9351,
                                            "src": "12196:23:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9331,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "12196:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9346,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 9338,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 9335,
                                                        "name": "_effectiveShareReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9157,
                                                        "src": "12269:23:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9336,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "12269:25:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 9337,
                                                    "name": "_shareCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9322,
                                                    "src": "12297:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "12269:44:64",
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
                                                "id": 9342,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 9339,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "12327:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 9340,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "12340:12:64",
                                                    "memberName": "bondReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7277,
                                                    "src": "12327:25:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 9341,
                                                    "name": "_bondCurveDelta",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9324,
                                                    "src": "12355:15:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "12327:43:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 9343,
                                                "name": "_initialVaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13681,
                                                "src": "12384:23:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 9344,
                                                "name": "_timeStretch",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13666,
                                                "src": "12421:12:64",
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
                                                "id": 9333,
                                                "name": "HyperdriveMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15630,
                                                "src": "12222:14:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15630_$",
                                                    "typeString": "type(library HyperdriveMath)"
                                                }
                                            },
                                            "id": 9334,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "12237:18:64",
                                            "memberName": "calculateSpotPrice",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15035,
                                            "src": "12222:33:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 9345,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "12222:221:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "12196:247:64"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9349,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 9347,
                                            "name": "endingSpotPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9332,
                                            "src": "12460:15:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 9348,
                                            "name": "_maxSpotPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9326,
                                            "src": "12478:13:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "12460:31:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 9330,
                                    "id": 9350,
                                    "nodeType": "Return",
                                    "src": "12453:38:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9320,
                            "nodeType": "StructuredDocumentation",
                            "src": "11342:468:64",
                            "text": "@dev Checks if any of the bonds the trader purchased on the curve\n      were purchased above the price of 1 base per bonds.\n @param _shareCurveDelta The amount of shares the trader pays the curve.\n @param _bondCurveDelta The amount of bonds the trader receives from the\n        curve.\n @param _maxSpotPrice The maximum allowable spot price for the trade.\n @return A flag indicating whether the trade was negative interest."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_isNegativeInterest",
                        "nameLocation": "11824:19:64",
                        "parameters": {
                            "id": 9327,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9322,
                                    "mutability": "mutable",
                                    "name": "_shareCurveDelta",
                                    "nameLocation": "11861:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9352,
                                    "src": "11853:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9321,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11853:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9324,
                                    "mutability": "mutable",
                                    "name": "_bondCurveDelta",
                                    "nameLocation": "11895:15:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9352,
                                    "src": "11887:23:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9323,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11887:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9326,
                                    "mutability": "mutable",
                                    "name": "_maxSpotPrice",
                                    "nameLocation": "11928:13:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9352,
                                    "src": "11920:21:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9325,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11920:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11843:104:64"
                        },
                        "returnParameters": {
                            "id": 9330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9329,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9352,
                                    "src": "11971:4:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9328,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11971:4:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "11970:6:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9378,
                        "nodeType": "FunctionDefinition",
                        "src": "12830:376:64",
                        "nodes": [],
                        "body": {
                            "id": 9377,
                            "nodeType": "Block",
                            "src": "12905:301:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9375,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "arguments": [
                                                {
                                                    "id": 9366,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9355,
                                                    "src": "13077:16:64",
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
                                                            "expression": {
                                                                "id": 9362,
                                                                "name": "_marketState",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13691,
                                                                "src": "13041:12:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                }
                                                            },
                                                            "id": 9363,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "13054:13:64",
                                                            "memberName": "shareReserves",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7274,
                                                            "src": "13041:26:64",
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
                                                        "id": 9361,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "13033:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 9360,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "13033:7:64",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 9364,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "13033:35:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9365,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13069:7:64",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14197,
                                                "src": "13033:43:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9367,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "13033:61:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">=",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 9374,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 9368,
                                                    "name": "_marketState",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13691,
                                                    "src": "13110:12:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                    }
                                                },
                                                "id": 9369,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "13123:12:64",
                                                "memberName": "longExposure",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 7280,
                                                "src": "13110:25:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint128",
                                                    "typeString": "uint128"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 9372,
                                                        "name": "_vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9355,
                                                        "src": "13182:16:64",
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
                                                        "id": 9370,
                                                        "name": "_minimumShareReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13684,
                                                        "src": "13154:21:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 9371,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "13176:5:64",
                                                    "memberName": "mulUp",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 14247,
                                                    "src": "13154:27:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 9373,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "13154:45:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "13110:89:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "13033:166:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 9359,
                                    "id": 9376,
                                    "nodeType": "Return",
                                    "src": "13014:185:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9353,
                            "nodeType": "StructuredDocumentation",
                            "src": "12504:321:64",
                            "text": "@dev Check solvency by verifying that the share reserves are greater\n      than the exposure plus the minimum share reserves.\n @param _vaultSharePrice The current vault share price.\n @return True if the share reserves are greater than the exposure plus\n         the minimum share reserves."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_isSolvent",
                        "nameLocation": "12839:10:64",
                        "parameters": {
                            "id": 9356,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9355,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "12858:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9378,
                                    "src": "12850:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9354,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12850:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12849:26:64"
                        },
                        "returnParameters": {
                            "id": 9359,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9358,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9378,
                                    "src": "12899:4:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9357,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "12899:4:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "12898:6:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9431,
                        "nodeType": "FunctionDefinition",
                        "src": "13377:551:64",
                        "nodes": [],
                        "body": {
                            "id": 9430,
                            "nodeType": "Block",
                            "src": "13446:482:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9387
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9387,
                                            "mutability": "mutable",
                                            "name": "delta",
                                            "nameLocation": "13688:5:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9430,
                                            "src": "13681:12:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            },
                                            "typeName": {
                                                "id": 9386,
                                                "name": "int128",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "13681:6:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9400,
                                    "initialValue": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "components": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        },
                                                        "id": 9396,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "arguments": [
                                                                {
                                                                    "hexValue": "30",
                                                                    "id": 9390,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "13708:1:64",
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
                                                                "expression": {
                                                                    "id": 9388,
                                                                    "name": "_after",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 9383,
                                                                    "src": "13697:6:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "id": 9389,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "13704:3:64",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 14916,
                                                                "src": "13697:10:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                                                    "typeString": "function (int256,int256) pure returns (int256)"
                                                                }
                                                            },
                                                            "id": 9391,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "13697:13:64",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "arguments": [
                                                                {
                                                                    "hexValue": "30",
                                                                    "id": 9394,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "13725:1:64",
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
                                                                "expression": {
                                                                    "id": 9392,
                                                                    "name": "_before",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 9381,
                                                                    "src": "13713:7:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int256",
                                                                        "typeString": "int256"
                                                                    }
                                                                },
                                                                "id": 9393,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "13721:3:64",
                                                                "memberName": "max",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 14916,
                                                                "src": "13713:11:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                                                    "typeString": "function (int256,int256) pure returns (int256)"
                                                                }
                                                            },
                                                            "id": 9395,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "13713:14:64",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_int256",
                                                                "typeString": "int256"
                                                            }
                                                        },
                                                        "src": "13697:30:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int256",
                                                            "typeString": "int256"
                                                        }
                                                    }
                                                ],
                                                "id": 9397,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "13696:32:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 9398,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "13729:8:64",
                                            "memberName": "toInt128",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 17539,
                                            "src": "13696:41:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                                                "typeString": "function (int256) pure returns (int128)"
                                            }
                                        },
                                        "id": 9399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "13696:43:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "13681:58:64"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_int128",
                                            "typeString": "int128"
                                        },
                                        "id": 9403,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 9401,
                                            "name": "delta",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9387,
                                            "src": "13753:5:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 9402,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "13761:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "13753:9:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int128",
                                                "typeString": "int128"
                                            },
                                            "id": 9416,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 9414,
                                                "name": "delta",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9387,
                                                "src": "13842:5:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int128",
                                                    "typeString": "int128"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 9415,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "13850:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "13842:9:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 9428,
                                        "nodeType": "IfStatement",
                                        "src": "13838:84:64",
                                        "trueBody": {
                                            "id": 9427,
                                            "nodeType": "Block",
                                            "src": "13853:69:64",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "id": 9425,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "expression": {
                                                                "id": 9417,
                                                                "name": "_marketState",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 13691,
                                                                "src": "13867:12:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                }
                                                            },
                                                            "id": 9419,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "memberLocation": "13880:12:64",
                                                            "memberName": "longExposure",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 7280,
                                                            "src": "13867:25:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint128",
                                                                "typeString": "uint128"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "-=",
                                                        "rightHandSide": {
                                                            "arguments": [
                                                                {
                                                                    "id": 9423,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "UnaryOperation",
                                                                    "operator": "-",
                                                                    "prefix": true,
                                                                    "src": "13904:6:64",
                                                                    "subExpression": {
                                                                        "id": 9422,
                                                                        "name": "delta",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 9387,
                                                                        "src": "13905:5:64",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_int128",
                                                                            "typeString": "int128"
                                                                        }
                                                                    },
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_int128",
                                                                        "typeString": "int128"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_int128",
                                                                        "typeString": "int128"
                                                                    }
                                                                ],
                                                                "id": 9421,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "13896:7:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint128_$",
                                                                    "typeString": "type(uint128)"
                                                                },
                                                                "typeName": {
                                                                    "id": 9420,
                                                                    "name": "uint128",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "13896:7:64",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 9424,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "13896:15:64",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint128",
                                                                "typeString": "uint128"
                                                            }
                                                        },
                                                        "src": "13867:44:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "id": 9426,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "13867:44:64"
                                                }
                                            ]
                                        }
                                    },
                                    "id": 9429,
                                    "nodeType": "IfStatement",
                                    "src": "13749:173:64",
                                    "trueBody": {
                                        "id": 9413,
                                        "nodeType": "Block",
                                        "src": "13764:68:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9411,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 9404,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "13778:12:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 9406,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "13791:12:64",
                                                        "memberName": "longExposure",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7280,
                                                        "src": "13778:25:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 9409,
                                                                "name": "delta",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9387,
                                                                "src": "13815:5:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_int128",
                                                                    "typeString": "int128"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_int128",
                                                                    "typeString": "int128"
                                                                }
                                                            ],
                                                            "id": 9408,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "13807:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint128_$",
                                                                "typeString": "type(uint128)"
                                                            },
                                                            "typeName": {
                                                                "id": 9407,
                                                                "name": "uint128",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "13807:7:64",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 9410,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "13807:14:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "13778:43:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 9412,
                                                "nodeType": "ExpressionStatement",
                                                "src": "13778:43:64"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9379,
                            "nodeType": "StructuredDocumentation",
                            "src": "13212:160:64",
                            "text": "@dev Updates the global long exposure.\n @param _before The long exposure before the update.\n @param _after The long exposure after the update."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_updateLongExposure",
                        "nameLocation": "13386:19:64",
                        "parameters": {
                            "id": 9384,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9381,
                                    "mutability": "mutable",
                                    "name": "_before",
                                    "nameLocation": "13413:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9431,
                                    "src": "13406:14:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 9380,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13406:6:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9383,
                                    "mutability": "mutable",
                                    "name": "_after",
                                    "nameLocation": "13429:6:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9431,
                                    "src": "13422:13:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 9382,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13422:6:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "13405:31:64"
                        },
                        "returnParameters": {
                            "id": 9385,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "13446:0:64"
                        },
                        "scope": 9917,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9523,
                        "nodeType": "FunctionDefinition",
                        "src": "14350:1652:64",
                        "nodes": [],
                        "body": {
                            "id": 9522,
                            "nodeType": "Block",
                            "src": "14476:1526:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9442,
                                        9444
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9442,
                                            "mutability": "mutable",
                                            "name": "zombieBaseProceeds",
                                            "nameLocation": "14602:18:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9522,
                                            "src": "14594:26:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9441,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14594:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 9444,
                                            "mutability": "mutable",
                                            "name": "zombieBaseReserves",
                                            "nameLocation": "14642:18:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9522,
                                            "src": "14634:26:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9443,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14634:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9448,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 9446,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9436,
                                                "src": "14696:16:64",
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
                                            "id": 9445,
                                            "name": "_collectZombieInterest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9611,
                                            "src": "14673:22:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                                                "typeString": "function (uint256) returns (uint256,uint256)"
                                            }
                                        },
                                        "id": 9447,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "14673:40:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                                            "typeString": "tuple(uint256,uint256)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14580:133:64"
                                },
                                {
                                    "assignments": [
                                        9450
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9450,
                                            "mutability": "mutable",
                                            "name": "baseProceeds",
                                            "nameLocation": "14990:12:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9522,
                                            "src": "14982:20:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9449,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "14982:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9455,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 9453,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9436,
                                                "src": "15028:16:64",
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
                                                "id": 9451,
                                                "name": "_shareProceeds",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9434,
                                                "src": "15005:14:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 9452,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "15020:7:64",
                                            "memberName": "mulDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14197,
                                            "src": "15005:22:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 9454,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "15005:40:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "14982:63:64"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9458,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 9456,
                                            "name": "zombieBaseProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9442,
                                            "src": "15059:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 9457,
                                            "name": "zombieBaseReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9444,
                                            "src": "15080:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "15059:39:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 9468,
                                    "nodeType": "IfStatement",
                                    "src": "15055:198:64",
                                    "trueBody": {
                                        "id": 9467,
                                        "nodeType": "Block",
                                        "src": "15100:153:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9465,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 9459,
                                                        "name": "_shareProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9434,
                                                        "src": "15114:14:64",
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
                                                                "id": 9462,
                                                                "name": "zombieBaseReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9444,
                                                                "src": "15174:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            {
                                                                "id": 9463,
                                                                "name": "zombieBaseProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9442,
                                                                "src": "15210:18:64",
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
                                                                "id": 9460,
                                                                "name": "_shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9434,
                                                                "src": "15131:14:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 9461,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "15146:10:64",
                                                            "memberName": "mulDivDown",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 14179,
                                                            "src": "15131:25:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                            }
                                                        },
                                                        "id": 9464,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "15131:111:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "15114:128:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9466,
                                                "nodeType": "ExpressionStatement",
                                                "src": "15114:128:64"
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
                                        "id": 9471,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 9469,
                                            "name": "baseProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9450,
                                            "src": "15344:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 9470,
                                            "name": "zombieBaseProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9442,
                                            "src": "15359:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "15344:33:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 9482,
                                        "nodeType": "Block",
                                        "src": "15486:47:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9480,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 9478,
                                                        "name": "zombieBaseProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9442,
                                                        "src": "15500:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "30",
                                                        "id": 9479,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "15521:1:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "15500:22:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9481,
                                                "nodeType": "ExpressionStatement",
                                                "src": "15500:22:64"
                                            }
                                        ]
                                    },
                                    "id": 9483,
                                    "nodeType": "IfStatement",
                                    "src": "15340:193:64",
                                    "trueBody": {
                                        "id": 9477,
                                        "nodeType": "Block",
                                        "src": "15379:101:64",
                                        "statements": [
                                            {
                                                "id": 9476,
                                                "nodeType": "UncheckedBlock",
                                                "src": "15393:77:64",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "id": 9474,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "id": 9472,
                                                                "name": "zombieBaseProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9442,
                                                                "src": "15421:18:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "Assignment",
                                                            "operator": "-=",
                                                            "rightHandSide": {
                                                                "id": 9473,
                                                                "name": "baseProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9450,
                                                                "src": "15443:12:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "15421:34:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9475,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "15421:34:64"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 9490,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 9484,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13691,
                                                "src": "15542:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 9486,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "15555:18:64",
                                            "memberName": "zombieBaseProceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7304,
                                            "src": "15542:31:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "id": 9487,
                                                    "name": "zombieBaseProceeds",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9442,
                                                    "src": "15576:18:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9488,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15595:9:64",
                                                "memberName": "toUint112",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17431,
                                                "src": "15576:28:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint112)"
                                                }
                                            },
                                            "id": 9489,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "15576:30:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "src": "15542:64:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint112",
                                            "typeString": "uint112"
                                        }
                                    },
                                    "id": 9491,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15542:64:64"
                                },
                                {
                                    "assignments": [
                                        9493
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9493,
                                            "mutability": "mutable",
                                            "name": "zombieShareReserves",
                                            "nameLocation": "15624:19:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9522,
                                            "src": "15616:27:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9492,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "15616:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9496,
                                    "initialValue": {
                                        "expression": {
                                            "id": 9494,
                                            "name": "_marketState",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13691,
                                            "src": "15646:12:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                            }
                                        },
                                        "id": 9495,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "15659:19:64",
                                        "memberName": "zombieShareReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7307,
                                        "src": "15646:32:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "15616:62:64"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9499,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 9497,
                                            "name": "_shareProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9434,
                                            "src": "15692:14:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 9498,
                                            "name": "zombieShareReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9493,
                                            "src": "15709:19:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "15692:36:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 9510,
                                        "nodeType": "Block",
                                        "src": "15840:48:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9508,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 9506,
                                                        "name": "zombieShareReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9493,
                                                        "src": "15854:19:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "hexValue": "30",
                                                        "id": 9507,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "15876:1:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "15854:23:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9509,
                                                "nodeType": "ExpressionStatement",
                                                "src": "15854:23:64"
                                            }
                                        ]
                                    },
                                    "id": 9511,
                                    "nodeType": "IfStatement",
                                    "src": "15688:200:64",
                                    "trueBody": {
                                        "id": 9505,
                                        "nodeType": "Block",
                                        "src": "15730:104:64",
                                        "statements": [
                                            {
                                                "id": 9504,
                                                "nodeType": "UncheckedBlock",
                                                "src": "15744:80:64",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "id": 9502,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftHandSide": {
                                                                "id": 9500,
                                                                "name": "zombieShareReserves",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9493,
                                                                "src": "15772:19:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "Assignment",
                                                            "operator": "-=",
                                                            "rightHandSide": {
                                                                "id": 9501,
                                                                "name": "_shareProceeds",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9434,
                                                                "src": "15795:14:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "15772:37:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9503,
                                                        "nodeType": "ExpressionStatement",
                                                        "src": "15772:37:64"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 9518,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 9512,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13691,
                                                "src": "15897:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 9514,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "15910:19:64",
                                            "memberName": "zombieShareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7307,
                                            "src": "15897:32:64",
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
                                                    "id": 9515,
                                                    "name": "zombieShareReserves",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9493,
                                                    "src": "15932:19:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9516,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "15952:9:64",
                                                "memberName": "toUint128",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 17461,
                                                "src": "15932:29:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256) pure returns (uint128)"
                                                }
                                            },
                                            "id": 9517,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "15932:31:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "15897:66:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint128",
                                            "typeString": "uint128"
                                        }
                                    },
                                    "id": 9519,
                                    "nodeType": "ExpressionStatement",
                                    "src": "15897:66:64"
                                },
                                {
                                    "expression": {
                                        "id": 9520,
                                        "name": "_shareProceeds",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9434,
                                        "src": "15981:14:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 9440,
                                    "id": 9521,
                                    "nodeType": "Return",
                                    "src": "15974:21:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9432,
                            "nodeType": "StructuredDocumentation",
                            "src": "13934:411:64",
                            "text": "@dev Apply the updates to the market state as a result of closing a\n      position after maturity. This function also adjusts the proceeds\n      to account for any negative interest that has accrued in the\n      zombie reserves.\n @param _shareProceeds The share proceeds.\n @param _vaultSharePrice The current vault share price.\n @return The adjusted share proceeds."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_applyZombieClose",
                        "nameLocation": "14359:17:64",
                        "parameters": {
                            "id": 9437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9434,
                                    "mutability": "mutable",
                                    "name": "_shareProceeds",
                                    "nameLocation": "14394:14:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9523,
                                    "src": "14386:22:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9433,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14386:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9436,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "14426:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9523,
                                    "src": "14418:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9435,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14418:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14376:72:64"
                        },
                        "returnParameters": {
                            "id": 9440,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9439,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9523,
                                    "src": "14467:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9438,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "14467:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "14466:9:64"
                        },
                        "scope": 9917,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9611,
                        "nodeType": "FunctionDefinition",
                        "src": "16421:2511:64",
                        "nodes": [],
                        "body": {
                            "id": 9610,
                            "nodeType": "Block",
                            "src": "16587:2345:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 9539,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9533,
                                            "name": "zombieBaseReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9531,
                                            "src": "16721:18:64",
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
                                                    "expression": {
                                                        "id": 9536,
                                                        "name": "_marketState",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13691,
                                                        "src": "16780:12:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                                        }
                                                    },
                                                    "id": 9537,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "16793:19:64",
                                                    "memberName": "zombieShareReserves",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 7307,
                                                    "src": "16780:32:64",
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
                                                "expression": {
                                                    "id": 9534,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9526,
                                                    "src": "16742:16:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9535,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "16759:7:64",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14197,
                                                "src": "16742:24:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9538,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "16742:80:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "16721:101:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9540,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16721:101:64"
                                },
                                {
                                    "expression": {
                                        "id": 9544,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9541,
                                            "name": "zombieBaseProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9529,
                                            "src": "16832:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 9542,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13691,
                                                "src": "16853:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 9543,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "16866:18:64",
                                            "memberName": "zombieBaseProceeds",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7304,
                                            "src": "16853:31:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint112",
                                                "typeString": "uint112"
                                            }
                                        },
                                        "src": "16832:52:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9545,
                                    "nodeType": "ExpressionStatement",
                                    "src": "16832:52:64"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9548,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 9546,
                                            "name": "zombieBaseReserves",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9531,
                                            "src": "17027:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 9547,
                                            "name": "zombieBaseProceeds",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9529,
                                            "src": "17048:18:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "17027:39:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 9609,
                                    "nodeType": "IfStatement",
                                    "src": "17023:1903:64",
                                    "trueBody": {
                                        "id": 9608,
                                        "nodeType": "Block",
                                        "src": "17068:1858:64",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    9550
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 9550,
                                                        "mutability": "mutable",
                                                        "name": "zombieInterest",
                                                        "nameLocation": "17240:14:64",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 9608,
                                                        "src": "17232:22:64",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 9549,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "17232:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 9554,
                                                "initialValue": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 9553,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 9551,
                                                        "name": "zombieBaseReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9531,
                                                        "src": "17257:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 9552,
                                                        "name": "zombieBaseProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9529,
                                                        "src": "17278:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "17257:39:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "17232:64:64"
                                            },
                                            {
                                                "expression": {
                                                    "id": 9564,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 9555,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "17533:12:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 9557,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "17546:19:64",
                                                        "memberName": "zombieShareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7307,
                                                        "src": "17533:32:64",
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
                                                                "arguments": [
                                                                    {
                                                                        "id": 9560,
                                                                        "name": "_vaultSharePrice",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 9526,
                                                                        "src": "17607:16:64",
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
                                                                        "id": 9558,
                                                                        "name": "zombieInterest",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 9550,
                                                                        "src": "17569:14:64",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "id": 9559,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "17601:5:64",
                                                                    "memberName": "divUp",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 14265,
                                                                    "src": "17569:37:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                    }
                                                                },
                                                                "id": 9561,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "17569:55:64",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 9562,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "17642:9:64",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17461,
                                                            "src": "17569:82:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
                                                            }
                                                        },
                                                        "id": 9563,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "17569:84:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "17533:120:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 9565,
                                                "nodeType": "ExpressionStatement",
                                                "src": "17533:120:64"
                                            },
                                            {
                                                "assignments": [
                                                    9567
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 9567,
                                                        "mutability": "mutable",
                                                        "name": "zombieInterestShares",
                                                        "nameLocation": "17960:20:64",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 9608,
                                                        "src": "17952:28:64",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 9566,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "17952:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 9572,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 9570,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9526,
                                                            "src": "18023:16:64",
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
                                                            "id": 9568,
                                                            "name": "zombieInterest",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9550,
                                                            "src": "17983:14:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9569,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "17998:7:64",
                                                        "memberName": "divDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14215,
                                                        "src": "17983:22:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9571,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "17983:70:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "17952:101:64"
                                            },
                                            {
                                                "assignments": [
                                                    9574
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 9574,
                                                        "mutability": "mutable",
                                                        "name": "governanceZombieFeeCollected",
                                                        "nameLocation": "18075:28:64",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 9608,
                                                        "src": "18067:36:64",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 9573,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "18067:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 9579,
                                                "initialValue": {
                                                    "arguments": [
                                                        {
                                                            "id": 9577,
                                                            "name": "_governanceZombieFee",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13678,
                                                            "src": "18152:20:64",
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
                                                            "id": 9575,
                                                            "name": "zombieInterestShares",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9567,
                                                            "src": "18106:20:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9576,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "18127:7:64",
                                                        "memberName": "mulDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14197,
                                                        "src": "18106:28:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9578,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "18106:80:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "18067:119:64"
                                            },
                                            {
                                                "expression": {
                                                    "id": 9582,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 9580,
                                                        "name": "_governanceFeesAccrued",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13710,
                                                        "src": "18200:22:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "id": 9581,
                                                        "name": "governanceZombieFeeCollected",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9574,
                                                        "src": "18226:28:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "18200:54:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9583,
                                                "nodeType": "ExpressionStatement",
                                                "src": "18200:54:64"
                                            },
                                            {
                                                "expression": {
                                                    "id": 9586,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 9584,
                                                        "name": "zombieInterestShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9567,
                                                        "src": "18531:20:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "-=",
                                                    "rightHandSide": {
                                                        "id": 9585,
                                                        "name": "governanceZombieFeeCollected",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9574,
                                                        "src": "18555:28:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "18531:52:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9587,
                                                "nodeType": "ExpressionStatement",
                                                "src": "18531:52:64"
                                            },
                                            {
                                                "expression": {
                                                    "id": 9594,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 9588,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "18597:12:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 9590,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "18610:13:64",
                                                        "memberName": "shareReserves",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7274,
                                                        "src": "18597:26:64",
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
                                                                "id": 9591,
                                                                "name": "zombieInterestShares",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9567,
                                                                "src": "18627:20:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 9592,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "18648:9:64",
                                                            "memberName": "toUint128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17461,
                                                            "src": "18627:30:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (uint128)"
                                                            }
                                                        },
                                                        "id": 9593,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "18627:32:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint128",
                                                            "typeString": "uint128"
                                                        }
                                                    },
                                                    "src": "18597:62:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint128",
                                                        "typeString": "uint128"
                                                    }
                                                },
                                                "id": 9595,
                                                "nodeType": "ExpressionStatement",
                                                "src": "18597:62:64"
                                            },
                                            {
                                                "expression": {
                                                    "id": 9602,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "expression": {
                                                            "id": 9596,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "18673:12:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 9598,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": true,
                                                        "memberLocation": "18686:15:64",
                                                        "memberName": "shareAdjustment",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7286,
                                                        "src": "18673:28:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int128",
                                                            "typeString": "int128"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "+=",
                                                    "rightHandSide": {
                                                        "arguments": [],
                                                        "expression": {
                                                            "argumentTypes": [],
                                                            "expression": {
                                                                "id": 9599,
                                                                "name": "zombieInterestShares",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9567,
                                                                "src": "18705:20:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 9600,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "18726:8:64",
                                                            "memberName": "toInt128",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 17499,
                                                            "src": "18705:29:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_int128_$attached_to$_t_uint256_$",
                                                                "typeString": "function (uint256) pure returns (int128)"
                                                            }
                                                        },
                                                        "id": 9601,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "18705:31:64",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_int128",
                                                            "typeString": "int128"
                                                        }
                                                    },
                                                    "src": "18673:63:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int128",
                                                        "typeString": "int128"
                                                    }
                                                },
                                                "id": 9603,
                                                "nodeType": "ExpressionStatement",
                                                "src": "18673:63:64"
                                            },
                                            {
                                                "expression": {
                                                    "id": 9606,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 9604,
                                                        "name": "zombieBaseReserves",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9531,
                                                        "src": "18876:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "id": 9605,
                                                        "name": "zombieBaseProceeds",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9529,
                                                        "src": "18897:18:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "18876:39:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9607,
                                                "nodeType": "ExpressionStatement",
                                                "src": "18876:39:64"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9524,
                            "nodeType": "StructuredDocumentation",
                            "src": "16008:408:64",
                            "text": "@dev Collect the interest earned on unredeemed matured positions. This\n      interest is split between the LPs and governance.\n @param _vaultSharePrice The current vault share price.\n @return zombieBaseProceeds The base proceeds reserved for zombie\n         positions.\n @return zombieBaseReserves The updated base reserves reserved for zombie\n         positions."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_collectZombieInterest",
                        "nameLocation": "16430:22:64",
                        "parameters": {
                            "id": 9527,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9526,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "16470:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9611,
                                    "src": "16462:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9525,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16462:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16452:40:64"
                        },
                        "returnParameters": {
                            "id": 9532,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9529,
                                    "mutability": "mutable",
                                    "name": "zombieBaseProceeds",
                                    "nameLocation": "16535:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9611,
                                    "src": "16527:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9528,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16527:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9531,
                                    "mutability": "mutable",
                                    "name": "zombieBaseReserves",
                                    "nameLocation": "16563:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9611,
                                    "src": "16555:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9530,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "16555:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "16526:56:64"
                        },
                        "scope": 9917,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9650,
                        "nodeType": "FunctionDefinition",
                        "src": "19212:558:64",
                        "nodes": [],
                        "body": {
                            "id": 9649,
                            "nodeType": "Block",
                            "src": "19332:438:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9620
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9620,
                                            "mutability": "mutable",
                                            "name": "longExposure",
                                            "nameLocation": "19410:12:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9649,
                                            "src": "19402:20:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9619,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "19402:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9629,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 9627,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9614,
                                                "src": "19479:16:64",
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
                                                        "expression": {
                                                            "id": 9623,
                                                            "name": "_marketState",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13691,
                                                            "src": "19433:12:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                "typeString": "struct IHyperdrive.MarketState storage ref"
                                                            }
                                                        },
                                                        "id": 9624,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "19446:12:64",
                                                        "memberName": "longExposure",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 7280,
                                                        "src": "19433:25:64",
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
                                                    "id": 9622,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "19425:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": {
                                                        "id": 9621,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "19425:7:64",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 9625,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "19425:34:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 9626,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "19460:5:64",
                                            "memberName": "divUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14265,
                                            "src": "19425:40:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 9628,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19425:80:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "19402:103:64"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9635,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 9630,
                                                "name": "_marketState",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13691,
                                                "src": "19519:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                                }
                                            },
                                            "id": 9631,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "19532:13:64",
                                            "memberName": "shareReserves",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7274,
                                            "src": "19519:26:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 9634,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 9632,
                                                "name": "longExposure",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9620,
                                                "src": "19548:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "id": 9633,
                                                "name": "_minimumShareReserves",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13684,
                                                "src": "19563:21:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "19548:36:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "19519:65:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 9646,
                                    "nodeType": "IfStatement",
                                    "src": "19515:222:64",
                                    "trueBody": {
                                        "id": 9645,
                                        "nodeType": "Block",
                                        "src": "19586:151:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9643,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 9636,
                                                        "name": "idleShares",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9617,
                                                        "src": "19600:10:64",
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
                                                        "id": 9642,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 9640,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "expression": {
                                                                    "id": 9637,
                                                                    "name": "_marketState",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 13691,
                                                                    "src": "19629:12:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_MarketState_$7308_storage",
                                                                        "typeString": "struct IHyperdrive.MarketState storage ref"
                                                                    }
                                                                },
                                                                "id": 9638,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "19642:13:64",
                                                                "memberName": "shareReserves",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 7274,
                                                                "src": "19629:26:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint128",
                                                                    "typeString": "uint128"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "-",
                                                            "rightExpression": {
                                                                "id": 9639,
                                                                "name": "longExposure",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9620,
                                                                "src": "19674:12:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "19629:57:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 9641,
                                                            "name": "_minimumShareReserves",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 13684,
                                                            "src": "19705:21:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "19629:97:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "19600:126:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9644,
                                                "nodeType": "ExpressionStatement",
                                                "src": "19600:126:64"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 9647,
                                        "name": "idleShares",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9617,
                                        "src": "19753:10:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 9618,
                                    "id": 9648,
                                    "nodeType": "Return",
                                    "src": "19746:17:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9612,
                            "nodeType": "StructuredDocumentation",
                            "src": "18938:269:64",
                            "text": "@dev Calculates the number of share reserves that are not reserved by\n      open positions.\n @param _vaultSharePrice The current vault share price.\n @return idleShares The amount of shares that are available for LPs to\n         withdraw."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateIdleShareReserves",
                        "nameLocation": "19221:27:64",
                        "parameters": {
                            "id": 9615,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9614,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "19266:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9650,
                                    "src": "19258:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9613,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "19258:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "19248:40:64"
                        },
                        "returnParameters": {
                            "id": 9618,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9617,
                                    "mutability": "mutable",
                                    "name": "idleShares",
                                    "nameLocation": "19320:10:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9650,
                                    "src": "19312:18:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9616,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "19312:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "19311:20:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9727,
                        "nodeType": "FunctionDefinition",
                        "src": "20108:1358:64",
                        "nodes": [],
                        "body": {
                            "id": 9726,
                            "nodeType": "Block",
                            "src": "20222:1244:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        9661,
                                        9663
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9661,
                                            "mutability": "mutable",
                                            "name": "presentValueShares",
                                            "nameLocation": "20367:18:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9726,
                                            "src": "20359:26:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9660,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "20359:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        {
                                            "constant": false,
                                            "id": 9663,
                                            "mutability": "mutable",
                                            "name": "success",
                                            "nameLocation": "20392:7:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9726,
                                            "src": "20387:12:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 9662,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "20387:4:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9670,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 9667,
                                                        "name": "_vaultSharePrice",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9653,
                                                        "src": "20489:16:64",
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
                                                    "id": 9666,
                                                    "name": "_getPresentValueParams",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9319,
                                                    "src": "20466:22:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15790_memory_ptr_$",
                                                        "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                                    }
                                                },
                                                "id": 9668,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "20466:40:64",
                                                "tryCall": false,
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
                                                "id": 9664,
                                                "name": "LPMath",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 17396,
                                                "src": "20403:6:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_LPMath_$17396_$",
                                                    "typeString": "type(library LPMath)"
                                                }
                                            },
                                            "id": 9665,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "20423:25:64",
                                            "memberName": "calculatePresentValueSafe",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15885,
                                            "src": "20403:45:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15790_memory_ptr_$returns$_t_uint256_$_t_bool_$",
                                                "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256,bool)"
                                            }
                                        },
                                        "id": 9669,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "20403:117:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "20358:162:64"
                                },
                                {
                                    "condition": {
                                        "id": 9672,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "!",
                                        "prefix": true,
                                        "src": "20534:8:64",
                                        "subExpression": {
                                            "id": 9671,
                                            "name": "success",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9663,
                                            "src": "20535:7:64",
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
                                    "id": 9678,
                                    "nodeType": "IfStatement",
                                    "src": "20530:56:64",
                                    "trueBody": {
                                        "id": 9677,
                                        "nodeType": "Block",
                                        "src": "20544:42:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 9673,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "20566:1:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 9674,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "20569:5:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 9675,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "20565:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 9659,
                                                "id": 9676,
                                                "nodeType": "Return",
                                                "src": "20558:17:64"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        9680
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9680,
                                            "mutability": "mutable",
                                            "name": "presentValue",
                                            "nameLocation": "20752:12:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9726,
                                            "src": "20744:20:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9679,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "20744:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9690,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 9683,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 9681,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9653,
                                                "src": "20767:16:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 9682,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "20786:1:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "20767:20:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "hexValue": "30",
                                            "id": 9688,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "20861:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "id": 9689,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "20767:95:64",
                                        "trueExpression": {
                                            "arguments": [
                                                {
                                                    "id": 9686,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9653,
                                                    "src": "20829:16:64",
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
                                                    "id": 9684,
                                                    "name": "presentValueShares",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9661,
                                                    "src": "20802:18:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9685,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "20821:7:64",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14197,
                                                "src": "20802:26:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9687,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "20802:44:64",
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
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "20744:118:64"
                                },
                                {
                                    "assignments": [
                                        9692
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9692,
                                            "mutability": "mutable",
                                            "name": "lpTotalSupply",
                                            "nameLocation": "20880:13:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9726,
                                            "src": "20872:21:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9691,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "20872:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9705,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9704,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 9701,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "baseExpression": {
                                                    "id": 9693,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13733,
                                                    "src": "20896:12:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 9696,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 9694,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14117,
                                                        "src": "20909:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 9695,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "20917:12:64",
                                                    "memberName": "_LP_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 13850,
                                                    "src": "20909:20:64",
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
                                                "src": "20896:34:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "baseExpression": {
                                                    "id": 9697,
                                                    "name": "_totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13733,
                                                    "src": "20945:12:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                                        "typeString": "mapping(uint256 => uint256)"
                                                    }
                                                },
                                                "id": 9700,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 9698,
                                                        "name": "AssetId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 14117,
                                                        "src": "20958:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_contract$_AssetId_$14117_$",
                                                            "typeString": "type(library AssetId)"
                                                        }
                                                    },
                                                    "id": 9699,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "20966:26:64",
                                                    "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 13859,
                                                    "src": "20958:34:64",
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
                                                "src": "20945:48:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "20896:97:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 9702,
                                                "name": "_withdrawPool",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 13695,
                                                "src": "21008:13:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_WithdrawPool_$7319_storage",
                                                    "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                                                }
                                            },
                                            "id": 9703,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "21022:15:64",
                                            "memberName": "readyToWithdraw",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 7315,
                                            "src": "21008:29:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint128",
                                                "typeString": "uint128"
                                            }
                                        },
                                        "src": "20896:141:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "20872:165:64"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 9708,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 9706,
                                            "name": "lpTotalSupply",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9692,
                                            "src": "21174:13:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 9707,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "21191:1:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "21174:18:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 9714,
                                    "nodeType": "IfStatement",
                                    "src": "21170:66:64",
                                    "trueBody": {
                                        "id": 9713,
                                        "nodeType": "Block",
                                        "src": "21194:42:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "components": [
                                                        {
                                                            "hexValue": "30",
                                                            "id": 9709,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "21216:1:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        {
                                                            "hexValue": "66616c7365",
                                                            "id": 9710,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "bool",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "21219:5:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            },
                                                            "value": "false"
                                                        }
                                                    ],
                                                    "id": 9711,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "TupleExpression",
                                                    "src": "21215:10:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$_t_rational_0_by_1_$_t_bool_$",
                                                        "typeString": "tuple(int_const 0,bool)"
                                                    }
                                                },
                                                "functionReturnParameters": 9659,
                                                "id": 9712,
                                                "nodeType": "Return",
                                                "src": "21208:17:64"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "assignments": [
                                        9716
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9716,
                                            "mutability": "mutable",
                                            "name": "lpSharePrice",
                                            "nameLocation": "21371:12:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9726,
                                            "src": "21363:20:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9715,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "21363:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9721,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 9719,
                                                "name": "lpTotalSupply",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9692,
                                                "src": "21407:13:64",
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
                                                "id": 9717,
                                                "name": "presentValue",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9680,
                                                "src": "21386:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 9718,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "21399:7:64",
                                            "memberName": "divDown",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14215,
                                            "src": "21386:20:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 9720,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "21386:35:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "21363:58:64"
                                },
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "id": 9722,
                                                "name": "lpSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9716,
                                                "src": "21440:12:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "hexValue": "74727565",
                                                "id": 9723,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "bool",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "21454:4:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "value": "true"
                                            }
                                        ],
                                        "id": 9724,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "21439:20:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_bool_$",
                                            "typeString": "tuple(uint256,bool)"
                                        }
                                    },
                                    "functionReturnParameters": 9659,
                                    "id": 9725,
                                    "nodeType": "Return",
                                    "src": "21432:27:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9651,
                            "nodeType": "StructuredDocumentation",
                            "src": "19776:327:64",
                            "text": "@dev Calculates the LP share price. If the LP share price can't be\n      calculated, this function returns a failure flag.\n @param _vaultSharePrice The current vault share price.\n @return The LP share price in units of (base / lp shares).\n @return A flag indicating if the calculation succeeded."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateLPSharePriceSafe",
                        "nameLocation": "20117:26:64",
                        "parameters": {
                            "id": 9654,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9653,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "20161:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9727,
                                    "src": "20153:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9652,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20153:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "20143:40:64"
                        },
                        "returnParameters": {
                            "id": 9659,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9656,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9727,
                                    "src": "20207:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9655,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20207:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9658,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9727,
                                    "src": "20216:4:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9657,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "20216:4:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "20206:15:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9768,
                        "nodeType": "FunctionDefinition",
                        "src": "21986:1651:64",
                        "nodes": [],
                        "body": {
                            "id": 9767,
                            "nodeType": "Block",
                            "src": "22188:1449:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 9758,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9741,
                                            "name": "curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9737,
                                            "src": "23184:8:64",
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
                                                    "id": 9756,
                                                    "name": "_shareAmount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9730,
                                                    "src": "23311:12:64",
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
                                                            "id": 9753,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9734,
                                                            "src": "23274:16:64",
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
                                                                    "id": 9750,
                                                                    "name": "_curveFee",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 13669,
                                                                    "src": "23244:9:64",
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
                                                                    "components": [
                                                                        {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 9747,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 9744,
                                                                                        "name": "_spotPrice",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 9732,
                                                                                        "src": "23206:10:64",
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
                                                                                        "id": 9742,
                                                                                        "name": "ONE",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 14151,
                                                                                        "src": "23196:3:64",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    },
                                                                                    "id": 9743,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "23200:5:64",
                                                                                    "memberName": "divUp",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "referencedDeclaration": 14265,
                                                                                    "src": "23196:9:64",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                                    }
                                                                                },
                                                                                "id": 9745,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "23196:21:64",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "id": 9746,
                                                                                "name": "ONE",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 14151,
                                                                                "src": "23220:3:64",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "src": "23196:27:64",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "id": 9748,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "TupleExpression",
                                                                    "src": "23195:29:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 9749,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "23238:5:64",
                                                                "memberName": "mulUp",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 14247,
                                                                "src": "23195:48:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 9751,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "23195:59:64",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9752,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "23268:5:64",
                                                        "memberName": "mulUp",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14247,
                                                        "src": "23195:78:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9754,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "23195:96:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9755,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "23305:5:64",
                                                "memberName": "mulUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14247,
                                                "src": "23195:115:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9757,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "23195:129:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "23184:140:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9759,
                                    "nodeType": "ExpressionStatement",
                                    "src": "23184:140:64"
                                },
                                {
                                    "expression": {
                                        "id": 9765,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9760,
                                            "name": "governanceCurveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9739,
                                            "src": "23575:18:64",
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
                                                    "id": 9763,
                                                    "name": "_governanceLPFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13675,
                                                    "src": "23613:16:64",
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
                                                    "id": 9761,
                                                    "name": "curveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9737,
                                                    "src": "23596:8:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9762,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "23605:7:64",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14197,
                                                "src": "23596:16:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9764,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "23596:34:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "23575:55:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9766,
                                    "nodeType": "ExpressionStatement",
                                    "src": "23575:55:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9728,
                            "nodeType": "StructuredDocumentation",
                            "src": "21472:509:64",
                            "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _shareAmount The amount of shares exchanged for bonds.\n @param _spotPrice The price without slippage of bonds in terms of base\n         (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of bonds.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of bonds."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateFeesGivenShares",
                        "nameLocation": "21995:25:64",
                        "parameters": {
                            "id": 9735,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9730,
                                    "mutability": "mutable",
                                    "name": "_shareAmount",
                                    "nameLocation": "22038:12:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9768,
                                    "src": "22030:20:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9729,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22030:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9732,
                                    "mutability": "mutable",
                                    "name": "_spotPrice",
                                    "nameLocation": "22068:10:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9768,
                                    "src": "22060:18:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9731,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22060:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9734,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "22096:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9768,
                                    "src": "22088:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9733,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22088:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "22020:98:64"
                        },
                        "returnParameters": {
                            "id": 9740,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9737,
                                    "mutability": "mutable",
                                    "name": "curveFee",
                                    "nameLocation": "22150:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9768,
                                    "src": "22142:16:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9736,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22142:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9739,
                                    "mutability": "mutable",
                                    "name": "governanceCurveFee",
                                    "nameLocation": "22168:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9768,
                                    "src": "22160:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9738,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "22160:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "22141:46:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9838,
                        "nodeType": "FunctionDefinition",
                        "src": "24454:2727:64",
                        "nodes": [],
                        "body": {
                            "id": 9837,
                            "nodeType": "Block",
                            "src": "24827:2354:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 9802,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9788,
                                            "name": "curveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9780,
                                            "src": "25563:8:64",
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
                                                    "id": 9799,
                                                    "name": "_normalizedTimeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9773,
                                                    "src": "25675:24:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 9800,
                                                    "name": "_vaultSharePrice",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9777,
                                                    "src": "25701:16:64",
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
                                                    "arguments": [
                                                        {
                                                            "id": 9796,
                                                            "name": "_bondAmount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9771,
                                                            "src": "25640:11:64",
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
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "id": 9793,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "leftExpression": {
                                                                        "id": 9791,
                                                                        "name": "ONE",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14151,
                                                                        "src": "25603:3:64",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "nodeType": "BinaryOperation",
                                                                    "operator": "-",
                                                                    "rightExpression": {
                                                                        "id": 9792,
                                                                        "name": "_spotPrice",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 9775,
                                                                        "src": "25609:10:64",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "src": "25603:16:64",
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
                                                                    "id": 9789,
                                                                    "name": "_curveFee",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 13669,
                                                                    "src": "25574:9:64",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 9790,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberLocation": "25597:5:64",
                                                                "memberName": "mulUp",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 14247,
                                                                "src": "25574:28:64",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 9794,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "25574:46:64",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9795,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "25634:5:64",
                                                        "memberName": "mulUp",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14247,
                                                        "src": "25574:65:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9797,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "25574:78:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9798,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "25666:8:64",
                                                "memberName": "mulDivUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14229,
                                                "src": "25574:100:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9801,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "25574:144:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "25563:155:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9803,
                                    "nodeType": "ExpressionStatement",
                                    "src": "25563:155:64"
                                },
                                {
                                    "expression": {
                                        "id": 9809,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9804,
                                            "name": "governanceCurveFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9784,
                                            "src": "25985:18:64",
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
                                                    "id": 9807,
                                                    "name": "_governanceLPFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13675,
                                                    "src": "26023:16:64",
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
                                                    "id": 9805,
                                                    "name": "curveFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9780,
                                                    "src": "26006:8:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9806,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "26015:7:64",
                                                "memberName": "mulDown",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14197,
                                                "src": "26006:16:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9808,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "26006:34:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "25985:55:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9810,
                                    "nodeType": "ExpressionStatement",
                                    "src": "25985:55:64"
                                },
                                {
                                    "assignments": [
                                        9812
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 9812,
                                            "mutability": "mutable",
                                            "name": "flat",
                                            "nameLocation": "26556:4:64",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 9837,
                                            "src": "26548:12:64",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 9811,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "26548:7:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 9820,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 9817,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 9815,
                                                    "name": "ONE",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14151,
                                                    "src": "26597:3:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 9816,
                                                    "name": "_normalizedTimeRemaining",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9773,
                                                    "src": "26603:24:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "26597:30:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 9818,
                                                "name": "_vaultSharePrice",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9777,
                                                "src": "26641:16:64",
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
                                                "id": 9813,
                                                "name": "_bondAmount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9771,
                                                "src": "26563:11:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 9814,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "26575:8:64",
                                            "memberName": "mulDivUp",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 14229,
                                            "src": "26563:20:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 9819,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "26563:104:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "26548:119:64"
                                },
                                {
                                    "expression": {
                                        "id": 9826,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9821,
                                            "name": "flatFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9782,
                                            "src": "26677:7:64",
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
                                                    "id": 9824,
                                                    "name": "_flatFee",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 13672,
                                                    "src": "26698:8:64",
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
                                                    "id": 9822,
                                                    "name": "flat",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9812,
                                                    "src": "26687:4:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 9823,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "26692:5:64",
                                                "memberName": "mulUp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 14247,
                                                "src": "26687:10:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 9825,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "26687:20:64",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "26677:30:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9827,
                                    "nodeType": "ExpressionStatement",
                                    "src": "26677:30:64"
                                },
                                {
                                    "expression": {
                                        "id": 9835,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 9828,
                                            "name": "totalGovernanceFee",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9786,
                                            "src": "27075:18:64",
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
                                            "id": 9834,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 9829,
                                                "name": "governanceCurveFee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9784,
                                                "src": "27108:18:64",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "arguments": [
                                                    {
                                                        "id": 9832,
                                                        "name": "_governanceLPFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 13675,
                                                        "src": "27157:16:64",
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
                                                        "id": 9830,
                                                        "name": "flatFee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9782,
                                                        "src": "27141:7:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 9831,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "27149:7:64",
                                                    "memberName": "mulDown",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 14197,
                                                    "src": "27141:15:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 9833,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "27141:33:64",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "27108:66:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "27075:99:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 9836,
                                    "nodeType": "ExpressionStatement",
                                    "src": "27075:99:64"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9769,
                            "nodeType": "StructuredDocumentation",
                            "src": "23643:806:64",
                            "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _bondAmount The amount of bonds being exchanged for shares.\n @param _normalizedTimeRemaining The normalized amount of time until\n        maturity.\n @param _spotPrice The price without slippage of bonds in terms of base\n        (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of shares.\n @return flatFee The flat fee. The fee is in terms of shares.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of shares.\n @return totalGovernanceFee The total fee that goes to governance. The\n         fee is in terms of shares."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_calculateFeesGivenBonds",
                        "nameLocation": "24463:24:64",
                        "parameters": {
                            "id": 9778,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9771,
                                    "mutability": "mutable",
                                    "name": "_bondAmount",
                                    "nameLocation": "24505:11:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24497:19:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9770,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24497:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9773,
                                    "mutability": "mutable",
                                    "name": "_normalizedTimeRemaining",
                                    "nameLocation": "24534:24:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24526:32:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9772,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24526:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9775,
                                    "mutability": "mutable",
                                    "name": "_spotPrice",
                                    "nameLocation": "24576:10:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24568:18:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9774,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24568:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9777,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "24604:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24596:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9776,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24596:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "24487:139:64"
                        },
                        "returnParameters": {
                            "id": 9787,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9780,
                                    "mutability": "mutable",
                                    "name": "curveFee",
                                    "nameLocation": "24695:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24687:16:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9779,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24687:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9782,
                                    "mutability": "mutable",
                                    "name": "flatFee",
                                    "nameLocation": "24725:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24717:15:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9781,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24717:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9784,
                                    "mutability": "mutable",
                                    "name": "governanceCurveFee",
                                    "nameLocation": "24754:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24746:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9783,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24746:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9786,
                                    "mutability": "mutable",
                                    "name": "totalGovernanceFee",
                                    "nameLocation": "24794:18:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9838,
                                    "src": "24786:26:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9785,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "24786:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "24673:149:64"
                        },
                        "scope": 9917,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9864,
                        "nodeType": "FunctionDefinition",
                        "src": "27506:391:64",
                        "nodes": [],
                        "body": {
                            "id": 9863,
                            "nodeType": "Block",
                            "src": "27684:213:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "expression": {
                                            "id": 9851,
                                            "name": "_options",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9846,
                                            "src": "27698:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options calldata"
                                            }
                                        },
                                        "id": 9852,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "27707:6:64",
                                        "memberName": "asBase",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7459,
                                        "src": "27698:15:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 9861,
                                        "nodeType": "Block",
                                        "src": "27760:131:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 9858,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9843,
                                                            "src": "27863:16:64",
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
                                                            "id": 9856,
                                                            "name": "_amount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9841,
                                                            "src": "27847:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9857,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "27855:7:64",
                                                        "memberName": "mulDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14197,
                                                        "src": "27847:15:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9859,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "27847:33:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 9850,
                                                "id": 9860,
                                                "nodeType": "Return",
                                                "src": "27840:40:64"
                                            }
                                        ]
                                    },
                                    "id": 9862,
                                    "nodeType": "IfStatement",
                                    "src": "27694:197:64",
                                    "trueBody": {
                                        "id": 9855,
                                        "nodeType": "Block",
                                        "src": "27715:39:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9853,
                                                    "name": "_amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9841,
                                                    "src": "27736:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 9850,
                                                "id": 9854,
                                                "nodeType": "Return",
                                                "src": "27729:14:64"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9839,
                            "nodeType": "StructuredDocumentation",
                            "src": "27187:314:64",
                            "text": "@dev Converts input to base if necessary according to what is specified\n      in options.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToBaseFromOption",
                        "nameLocation": "27515:24:64",
                        "parameters": {
                            "id": 9847,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9841,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "27557:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9864,
                                    "src": "27549:15:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9840,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "27549:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9843,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "27582:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9864,
                                    "src": "27574:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9842,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "27574:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9846,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "27637:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9864,
                                    "src": "27608:37:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 9845,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9844,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "27608:11:64",
                                                "27620:7:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "27608:19:64"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "27608:19:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "27539:112:64"
                        },
                        "returnParameters": {
                            "id": 9850,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9849,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9864,
                                    "src": "27675:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9848,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "27675:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "27674:9:64"
                        },
                        "scope": 9917,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9890,
                        "nodeType": "FunctionDefinition",
                        "src": "28230:405:64",
                        "nodes": [],
                        "body": {
                            "id": 9889,
                            "nodeType": "Block",
                            "src": "28415:220:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "expression": {
                                            "id": 9877,
                                            "name": "_options",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9872,
                                            "src": "28429:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options calldata"
                                            }
                                        },
                                        "id": 9878,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "28438:6:64",
                                        "memberName": "asBase",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7459,
                                        "src": "28429:15:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 9887,
                                        "nodeType": "Block",
                                        "src": "28590:39:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9885,
                                                    "name": "_amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9867,
                                                    "src": "28611:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 9876,
                                                "id": 9886,
                                                "nodeType": "Return",
                                                "src": "28604:14:64"
                                            }
                                        ]
                                    },
                                    "id": 9888,
                                    "nodeType": "IfStatement",
                                    "src": "28425:204:64",
                                    "trueBody": {
                                        "id": 9884,
                                        "nodeType": "Block",
                                        "src": "28446:138:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 9881,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9869,
                                                            "src": "28556:16:64",
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
                                                            "id": 9879,
                                                            "name": "_amount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9867,
                                                            "src": "28540:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9880,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "28548:7:64",
                                                        "memberName": "divDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14215,
                                                        "src": "28540:15:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9882,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "28540:33:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 9876,
                                                "id": 9883,
                                                "nodeType": "Return",
                                                "src": "28533:40:64"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9865,
                            "nodeType": "StructuredDocumentation",
                            "src": "27903:322:64",
                            "text": "@dev Converts input to vault shares if necessary according to what is\n      specified in options.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToVaultSharesFromOption",
                        "nameLocation": "28239:31:64",
                        "parameters": {
                            "id": 9873,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9867,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "28288:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9890,
                                    "src": "28280:15:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9866,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "28280:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9869,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "28313:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9890,
                                    "src": "28305:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9868,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "28305:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9872,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "28368:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9890,
                                    "src": "28339:37:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 9871,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9870,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "28339:11:64",
                                                "28351:7:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "28339:19:64"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "28339:19:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "28270:112:64"
                        },
                        "returnParameters": {
                            "id": 9876,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9875,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9890,
                                    "src": "28406:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9874,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "28406:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "28405:9:64"
                        },
                        "scope": 9917,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 9916,
                        "nodeType": "FunctionDefinition",
                        "src": "28930:393:64",
                        "nodes": [],
                        "body": {
                            "id": 9915,
                            "nodeType": "Block",
                            "src": "29108:215:64",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "expression": {
                                            "id": 9903,
                                            "name": "_options",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9898,
                                            "src": "29122:8:64",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                                "typeString": "struct IHyperdrive.Options calldata"
                                            }
                                        },
                                        "id": 9904,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "29131:6:64",
                                        "memberName": "asBase",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7459,
                                        "src": "29122:15:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "id": 9913,
                                        "nodeType": "Block",
                                        "src": "29184:133:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "id": 9910,
                                                            "name": "_vaultSharePrice",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9895,
                                                            "src": "29289:16:64",
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
                                                            "id": 9908,
                                                            "name": "_amount",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 9893,
                                                            "src": "29273:7:64",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "id": 9909,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "29281:7:64",
                                                        "memberName": "divDown",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 14215,
                                                        "src": "29273:15:64",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                        }
                                                    },
                                                    "id": 9911,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "29273:33:64",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 9902,
                                                "id": 9912,
                                                "nodeType": "Return",
                                                "src": "29266:40:64"
                                            }
                                        ]
                                    },
                                    "id": 9914,
                                    "nodeType": "IfStatement",
                                    "src": "29118:199:64",
                                    "trueBody": {
                                        "id": 9907,
                                        "nodeType": "Block",
                                        "src": "29139:39:64",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 9905,
                                                    "name": "_amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9893,
                                                    "src": "29160:7:64",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "functionReturnParameters": 9902,
                                                "id": 9906,
                                                "nodeType": "Return",
                                                "src": "29153:14:64"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "documentation": {
                            "id": 9891,
                            "nodeType": "StructuredDocumentation",
                            "src": "28641:284:64",
                            "text": "@dev Converts input to what is specified in the options from base.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_convertToOptionFromBase",
                        "nameLocation": "28939:24:64",
                        "parameters": {
                            "id": 9899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9893,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "28981:7:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9916,
                                    "src": "28973:15:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9892,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "28973:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9895,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice",
                                    "nameLocation": "29006:16:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9916,
                                    "src": "28998:24:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9894,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "28998:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9898,
                                    "mutability": "mutable",
                                    "name": "_options",
                                    "nameLocation": "29061:8:64",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9916,
                                    "src": "29032:37:64",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Options_$7463_calldata_ptr",
                                        "typeString": "struct IHyperdrive.Options"
                                    },
                                    "typeName": {
                                        "id": 9897,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9896,
                                            "name": "IHyperdrive.Options",
                                            "nameLocations": [
                                                "29032:11:64",
                                                "29044:7:64"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 7463,
                                            "src": "29032:19:64"
                                        },
                                        "referencedDeclaration": 7463,
                                        "src": "29032:19:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Options_$7463_storage_ptr",
                                            "typeString": "struct IHyperdrive.Options"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "28963:112:64"
                        },
                        "returnParameters": {
                            "id": 9902,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9901,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9916,
                                    "src": "29099:7:64",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9900,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "29099:7:64",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "29098:9:64"
                        },
                        "scope": 9917,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 8959,
                            "name": "IHyperdriveEvents",
                            "nameLocations": [
                                "1068:17:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8062,
                            "src": "1068:17:64"
                        },
                        "id": 8960,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1068:17:64"
                    },
                    {
                        "baseName": {
                            "id": 8961,
                            "name": "HyperdriveStorage",
                            "nameLocations": [
                                "1087:17:64"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13842,
                            "src": "1087:17:64"
                        },
                        "id": 8962,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1087:17:64"
                    }
                ],
                "canonicalName": "HyperdriveBase",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 8958,
                    "nodeType": "StructuredDocumentation",
                    "src": "604:428:64",
                    "text": "@author DELV\n @title HyperdriveBase\n @notice The Hyperdrive base contract that provides a set of helper methods\n         and defines the functions that must be overridden by implementations.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    9917,
                    13842,
                    67058,
                    8062,
                    8623
                ],
                "name": "HyperdriveBase",
                "nameLocation": "1050:14:64",
                "scope": 9918,
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
    "id": 64
};
