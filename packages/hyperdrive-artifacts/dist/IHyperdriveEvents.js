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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":\"IHyperdriveEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171\",\"dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]}},\"version\":1}",
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
                "contracts/src/interfaces/IHyperdriveEvents.sol": "IHyperdriveEvents"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IHyperdriveEvents.sol": {
                "keccak256": "0x1841703b12d5b2ca7dedff94c7dd71a4ad0a0b47ca59ba9de98ea14929fb72e5",
                "urls": [
                    "bzz-raw://c192bfc8bee91341d7e7530d71df2fbaec69d7bf0017e7b318dea276b7f3e171",
                    "dweb:/ipfs/QmRWCkdXJ7G2FDo4CpsNuRvDgYWzN9U3LXLzM3YKHs9M4y"
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
        "id": 7925,
        "exportedSymbols": {
            "IHyperdriveEvents": [
                7924
            ],
            "IMultiTokenEvents": [
                8482
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:3170:48",
        "nodes": [
            {
                "id": 7754,
                "nodeType": "PragmaDirective",
                "src": "39:23:48",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 7756,
                "nodeType": "ImportDirective",
                "src": "64:60:48",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiTokenEvents.sol",
                "file": "./IMultiTokenEvents.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7925,
                "sourceUnit": 8483,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7755,
                            "name": "IMultiTokenEvents",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8482,
                            "src": "73:17:48",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7924,
                "nodeType": "ContractDefinition",
                "src": "126:3082:48",
                "nodes": [
                    {
                        "id": 7773,
                        "nodeType": "EventDefinition",
                        "src": "246:187:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7759,
                            "nodeType": "StructuredDocumentation",
                            "src": "181:60:48",
                            "text": "@notice Emitted when the Hyperdrive pool is initialized."
                        },
                        "eventSelector": "dfe2bf9f580df5ec15438120ffa6f0603237c4e6b65d07140a4695317da4f952",
                        "name": "Initialize",
                        "nameLocation": "252:10:48",
                        "parameters": {
                            "id": 7772,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7761,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "288:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7773,
                                    "src": "272:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7760,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "272:7:48",
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
                                    "id": 7763,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "314:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7773,
                                    "src": "306:16:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7762,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "306:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7765,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "340:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7773,
                                    "src": "332:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7764,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "332:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7767,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "368:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7773,
                                    "src": "360:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7766,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "360:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7769,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "399:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7773,
                                    "src": "394:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7768,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "394:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7771,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "apr",
                                    "nameLocation": "423:3:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7773,
                                    "src": "415:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7770,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "415:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "262:170:48"
                        }
                    },
                    {
                        "id": 7788,
                        "nodeType": "EventDefinition",
                        "src": "513:198:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7774,
                            "nodeType": "StructuredDocumentation",
                            "src": "439:69:48",
                            "text": "@notice Emitted when an LP adds liquidity to the Hyperdrive pool."
                        },
                        "eventSelector": "a59daf574c5c8db34377de83bceea2aa1433cc506d656f5e8f46e5f4b5c58a86",
                        "name": "AddLiquidity",
                        "nameLocation": "519:12:48",
                        "parameters": {
                            "id": 7787,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7776,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "557:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7788,
                                    "src": "541:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7775,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "541:7:48",
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
                                    "id": 7778,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "583:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7788,
                                    "src": "575:16:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7777,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "575:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7780,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "609:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7788,
                                    "src": "601:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7779,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "601:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7782,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "637:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7788,
                                    "src": "629:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7781,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "629:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7784,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "668:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7788,
                                    "src": "663:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7783,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "663:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7786,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "692:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7788,
                                    "src": "684:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7785,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "684:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "531:179:48"
                        }
                    },
                    {
                        "id": 7805,
                        "nodeType": "EventDefinition",
                        "src": "796:240:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7789,
                            "nodeType": "StructuredDocumentation",
                            "src": "717:74:48",
                            "text": "@notice Emitted when an LP removes liquidity from the Hyperdrive pool."
                        },
                        "eventSelector": "831a8ce8c82bacaff5219cca17a2b0e4c06cbc095e8fd04474159cf27364bc58",
                        "name": "RemoveLiquidity",
                        "nameLocation": "802:15:48",
                        "parameters": {
                            "id": 7804,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7791,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "843:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7805,
                                    "src": "827:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7790,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "827:7:48",
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
                                    "id": 7793,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpAmount",
                                    "nameLocation": "869:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7805,
                                    "src": "861:16:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7792,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "861:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7795,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "895:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7805,
                                    "src": "887:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7794,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "887:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7797,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "923:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7805,
                                    "src": "915:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7796,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "915:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7799,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "954:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7805,
                                    "src": "949:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7798,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "949:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7801,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "978:21:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7805,
                                    "src": "970:29:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7800,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "970:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7803,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "1017:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7805,
                                    "src": "1009:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7802,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1009:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "817:218:48"
                        }
                    },
                    {
                        "id": 7818,
                        "nodeType": "EventDefinition",
                        "src": "1104:191:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7806,
                            "nodeType": "StructuredDocumentation",
                            "src": "1042:57:48",
                            "text": "@notice Emitted when an LP redeems withdrawal shares."
                        },
                        "eventSelector": "4492130ff6e87856efd8de86ccdc4c634fac84a63dbc7846c38eaf0728a8538a",
                        "name": "RedeemWithdrawalShares",
                        "nameLocation": "1110:22:48",
                        "parameters": {
                            "id": 7817,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7808,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "provider",
                                    "nameLocation": "1158:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7818,
                                    "src": "1142:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7807,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1142:7:48",
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
                                    "id": 7810,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "withdrawalShareAmount",
                                    "nameLocation": "1184:21:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7818,
                                    "src": "1176:29:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7809,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1176:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7812,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1223:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7818,
                                    "src": "1215:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7811,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1215:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7814,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1251:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7818,
                                    "src": "1243:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7813,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1243:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7816,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1282:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7818,
                                    "src": "1277:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7815,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1277:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1132:162:48"
                        }
                    },
                    {
                        "id": 7835,
                        "nodeType": "EventDefinition",
                        "src": "1357:227:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7819,
                            "nodeType": "StructuredDocumentation",
                            "src": "1301:51:48",
                            "text": "@notice Emitted when a long position is opened."
                        },
                        "eventSelector": "88087800d03445c97e2009f3f90906bf6ede79bbd194e275c66224e977a5b84c",
                        "name": "OpenLong",
                        "nameLocation": "1363:8:48",
                        "parameters": {
                            "id": 7834,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7821,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1397:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7835,
                                    "src": "1381:22:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7820,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1381:7:48",
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
                                    "id": 7823,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1429:7:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7835,
                                    "src": "1413:23:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7822,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1413:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7825,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1454:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7835,
                                    "src": "1446:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7824,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1446:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7827,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1484:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7835,
                                    "src": "1476:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7826,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1476:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7829,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1512:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7835,
                                    "src": "1504:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7828,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1504:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7831,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1543:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7835,
                                    "src": "1538:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7830,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1538:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7833,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1567:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7835,
                                    "src": "1559:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7832,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1559:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1371:212:48"
                        }
                    },
                    {
                        "id": 7854,
                        "nodeType": "EventDefinition",
                        "src": "1647:258:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7836,
                            "nodeType": "StructuredDocumentation",
                            "src": "1590:52:48",
                            "text": "@notice Emitted when a short position is opened."
                        },
                        "eventSelector": "b354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b",
                        "name": "OpenShort",
                        "nameLocation": "1653:9:48",
                        "parameters": {
                            "id": 7853,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7838,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "1688:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1672:22:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7837,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1672:7:48",
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
                                    "id": 7840,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "1720:7:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1704:23:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7839,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1704:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7842,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "1745:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1737:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7841,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1737:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7844,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "1775:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1767:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7843,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1767:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7846,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "1803:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1795:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7845,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1795:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7848,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "1834:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1829:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7847,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1829:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7850,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseProceeds",
                                    "nameLocation": "1858:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1850:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7849,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1850:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7852,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "1888:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7854,
                                    "src": "1880:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7851,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1880:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1662:242:48"
                        }
                    },
                    {
                        "id": 7871,
                        "nodeType": "EventDefinition",
                        "src": "1967:228:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7855,
                            "nodeType": "StructuredDocumentation",
                            "src": "1911:51:48",
                            "text": "@notice Emitted when a long position is closed."
                        },
                        "eventSelector": "f844a6824453238f86cfdbf07d2611557a22b16721fc69b3c60bc50604cc1fcd",
                        "name": "CloseLong",
                        "nameLocation": "1973:9:48",
                        "parameters": {
                            "id": 7870,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7857,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2008:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7871,
                                    "src": "1992:22:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7856,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1992:7:48",
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
                                    "id": 7859,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2040:7:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7871,
                                    "src": "2024:23:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7858,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2024:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7861,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2065:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7871,
                                    "src": "2057:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7860,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2057:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7863,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2095:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7871,
                                    "src": "2087:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7862,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2087:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7865,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2123:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7871,
                                    "src": "2115:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7864,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2115:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7867,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2154:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7871,
                                    "src": "2149:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7866,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2149:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7869,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2178:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7871,
                                    "src": "2170:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7868,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2170:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1982:212:48"
                        }
                    },
                    {
                        "id": 7888,
                        "nodeType": "EventDefinition",
                        "src": "2258:229:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7872,
                            "nodeType": "StructuredDocumentation",
                            "src": "2201:52:48",
                            "text": "@notice Emitted when a short position is closed."
                        },
                        "eventSelector": "d53914ed5c07311c3bfaa855c473b35261ab85b633dd6f6ea57e2ae9537ce376",
                        "name": "CloseShort",
                        "nameLocation": "2264:10:48",
                        "parameters": {
                            "id": 7887,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7874,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "trader",
                                    "nameLocation": "2300:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7888,
                                    "src": "2284:22:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7873,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2284:7:48",
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
                                    "id": 7876,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "assetId",
                                    "nameLocation": "2332:7:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7888,
                                    "src": "2316:23:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7875,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2316:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7878,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturityTime",
                                    "nameLocation": "2357:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7888,
                                    "src": "2349:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7877,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2349:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7880,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "baseAmount",
                                    "nameLocation": "2387:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7888,
                                    "src": "2379:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7879,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2379:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7882,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultShareAmount",
                                    "nameLocation": "2415:16:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7888,
                                    "src": "2407:24:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7881,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2407:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7884,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "asBase",
                                    "nameLocation": "2446:6:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7888,
                                    "src": "2441:11:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7883,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2441:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7886,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "bondAmount",
                                    "nameLocation": "2470:10:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7888,
                                    "src": "2462:18:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7885,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2462:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2274:212:48"
                        }
                    },
                    {
                        "id": 7901,
                        "nodeType": "EventDefinition",
                        "src": "2547:193:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7889,
                            "nodeType": "StructuredDocumentation",
                            "src": "2493:49:48",
                            "text": "@notice Emitted when a checkpoint is created."
                        },
                        "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
                        "name": "CreateCheckpoint",
                        "nameLocation": "2553:16:48",
                        "parameters": {
                            "id": 7900,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7891,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "checkpointTime",
                                    "nameLocation": "2595:14:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7901,
                                    "src": "2579:30:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7890,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2579:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7893,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "vaultSharePrice",
                                    "nameLocation": "2627:15:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7901,
                                    "src": "2619:23:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7892,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2619:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7895,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedShorts",
                                    "nameLocation": "2660:13:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7901,
                                    "src": "2652:21:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7894,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2652:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7897,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "maturedLongs",
                                    "nameLocation": "2691:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7901,
                                    "src": "2683:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7896,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2683:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 7899,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "lpSharePrice",
                                    "nameLocation": "2721:12:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7901,
                                    "src": "2713:20:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7898,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2713:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2569:170:48"
                        }
                    },
                    {
                        "id": 7908,
                        "nodeType": "EventDefinition",
                        "src": "2806:68:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7902,
                            "nodeType": "StructuredDocumentation",
                            "src": "2746:55:48",
                            "text": "@notice Emitted when governance fees are collected."
                        },
                        "eventSelector": "a4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47",
                        "name": "CollectGovernanceFee",
                        "nameLocation": "2812:20:48",
                        "parameters": {
                            "id": 7907,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7904,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "collector",
                                    "nameLocation": "2849:9:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7908,
                                    "src": "2833:25:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7903,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2833:7:48",
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
                                    "id": 7906,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "fees",
                                    "nameLocation": "2868:4:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7908,
                                    "src": "2860:12:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7905,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2860:7:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2832:41:48"
                        }
                    },
                    {
                        "id": 7913,
                        "nodeType": "EventDefinition",
                        "src": "2944:55:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7909,
                            "nodeType": "StructuredDocumentation",
                            "src": "2880:59:48",
                            "text": "@notice Emitted when the governance address is updated."
                        },
                        "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
                        "name": "GovernanceUpdated",
                        "nameLocation": "2950:17:48",
                        "parameters": {
                            "id": 7912,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7911,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newGovernance",
                                    "nameLocation": "2984:13:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7913,
                                    "src": "2968:29:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7910,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2968:7:48",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2967:31:48"
                        }
                    },
                    {
                        "id": 7918,
                        "nodeType": "EventDefinition",
                        "src": "3055:47:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7914,
                            "nodeType": "StructuredDocumentation",
                            "src": "3005:45:48",
                            "text": "@notice Emitted when a pauser is updated."
                        },
                        "eventSelector": "a4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab",
                        "name": "PauserUpdated",
                        "nameLocation": "3061:13:48",
                        "parameters": {
                            "id": 7917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7916,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newPauser",
                                    "nameLocation": "3091:9:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7918,
                                    "src": "3075:25:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7915,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3075:7:48",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3074:27:48"
                        }
                    },
                    {
                        "id": 7923,
                        "nodeType": "EventDefinition",
                        "src": "3166:40:48",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 7919,
                            "nodeType": "StructuredDocumentation",
                            "src": "3108:53:48",
                            "text": "@notice Emitted when the pause status is updated."
                        },
                        "eventSelector": "7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5",
                        "name": "PauseStatusUpdated",
                        "nameLocation": "3172:18:48",
                        "parameters": {
                            "id": 7922,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7921,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "isPaused",
                                    "nameLocation": "3196:8:48",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7923,
                                    "src": "3191:13:48",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 7920,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3191:4:48",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3190:15:48"
                        }
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 7757,
                            "name": "IMultiTokenEvents",
                            "nameLocations": [
                                "157:17:48"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 8482,
                            "src": "157:17:48"
                        },
                        "id": 7758,
                        "nodeType": "InheritanceSpecifier",
                        "src": "157:17:48"
                    }
                ],
                "canonicalName": "IHyperdriveEvents",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    7924,
                    8482
                ],
                "name": "IHyperdriveEvents",
                "nameLocation": "136:17:48",
                "scope": 7925,
                "usedErrors": [],
                "usedEvents": [
                    7773,
                    7788,
                    7805,
                    7818,
                    7835,
                    7854,
                    7871,
                    7888,
                    7901,
                    7908,
                    7913,
                    7918,
                    7923,
                    8463,
                    8472,
                    8481
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 48
};
